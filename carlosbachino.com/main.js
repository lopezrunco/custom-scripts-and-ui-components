import { SITE_URL, ApiEndpoint } from './config.js'

const d = document
const rootElement = d.getElementById('root')
const postsToFetch = rootElement.getAttribute('data-posts') || 3

const URL = `${SITE_URL}${ApiEndpoint}`
const categoryId = 4
const categoryUrl = `${URL}?categories=${categoryId}&per_page=${postsToFetch}`

const months = {
    1: 'Ene',
    2: 'Feb',
    3: 'Mar',
    4: 'Abr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Ago',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dic'
};

const createModal = () => {
    const modal = d.createElement('div')
    modal.id = 'modal'
    modal.classList.add('modal')
    modal.style.display = 'none' // Modal hidden inittialy.

    const modalContent = d.createElement('div')
    modalContent.classList.add('modal-content')

    const closeBtn = d.createElement('span')
    closeBtn.classList.add('close')
    closeBtn.innerHTML = '&times' // Close button.

    const fullContentDiv = d.createElement('div')
    fullContentDiv.id = 'modal-full-content'

    modalContent.appendChild(closeBtn)
    modalContent.appendChild(fullContentDiv)
    modal.appendChild(modalContent)
    d.body.appendChild(modal)

    // Add event listeners to close the modal.
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'
        }
    })
}

const addModalListeners = () => {
    const modal = d.getElementById('modal')
    const fullContentDiv = d.getElementById('modal-full-content')

    d.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', async (event) => {
            event.preventDefault()
            try {
                // Fetch full content of the post.
                const postId = button.getAttribute('data-post-id')
                const fullContentUrl = `${URL}/${postId}`

                const response = await fetch(fullContentUrl)
                if (response.ok) {
                    const postData = await response.json()
                    const title = postData.title.rendered
                    const location = postData.ubicacion
                    const modality = postData.modalidad
                    const breeder = postData.cabana
                    const fullContent = postData.content.rendered

                    const date = new Date(postData.inicio_del_remate)
                    const year = date.getFullYear()
                    const month = months[date.getMonth() + 1]
                    const day = date.getDate()

                    fullContentDiv.innerHTML = `
                        <div class="meta">
                            <h2>${title}</h2>
                            <p><b>Fecha:</b> ${day} ${month} ${year}</p>
                            <p><b>Lugar: </b> ${location} | <b>Cabaña: </b> ${breeder} | <b>Modalidad: </b> ${modality}</p>
                        </div>
                        <div class="full-content">
                            ${fullContent}
                        </div>
                    `
                    modal.style.display = 'flex'
                } else {
                    throw new Error(`Error fetching the url ${fullContentUrl}`)
                }
            } catch (error) {
                console.error('Error fetching full content: ', error)
            }
        })
    })
}

const fetchData = () => {
    fetch(categoryUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`Error fetching the url ${categoryUrl} `)
            }
        })
        .then(data => renderData(data))
        .catch(error => console.error('Error fetching the data: ', error))
}

const getImageUrl = async (post) => {
    try {
        // Check if the post has a featured media link.
        if (post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'].length > 0) {
            const mediaLink = post._links['wp:featuredmedia'][0].href

            // Fetch media deatils.
            const response = await fetch(mediaLink)
            if (response.ok) {
                const mediaData = await response.json()
                // Check if the media contains a full sized img.
                if (mediaData.media_details && mediaData.media_details.sizes && mediaData.media_details.sizes.full) {
                    return mediaData.media_details.sizes.full.source_url;
                }
            }
            throw new Error('Could not found media details.')
        } else {
            return ''
        }
    } catch (error) {
        console.error('Error fetching media details: ', error);
        return '';
    }
}

const renderData = async (posts) => {
    let postsWrapper = d.createElement('div')
    postsWrapper.classList.add('posts-wrapper')

    for (const post of posts) {
        const title = post.title.rendered
        const excerpt = post.excerpt.rendered
        const imageUrl = await getImageUrl(post)
        const broadcastLink = post.enlace_transmision
        const location = post.ubicacion
        const modality = post.modalidad
        const breeder = post.cabana

        const date = new Date(post.inicio_del_remate)
        const year = date.getFullYear()
        const month = months[date.getMonth() + 1]
        const day = date.getDate()

        const singlePostWrapper = d.createElement('div')
        singlePostWrapper.classList.add('single-post-wrapper')

        const broadcastButton = broadcastLink
            ? `<a href="${broadcastLink}" target="_blank" class="button primary-button">Transmisión</a>`
            : ''

        singlePostWrapper.innerHTML =
            `<div class="item-wrapper">
                <div class="image-wrapper">
                    <img src="${imageUrl}" alt="Imagen destacada de ${title}" />
                    <div class="metadata-wrapper">
                        <span>${day}</span>
                        <span>${month}</span>
                        <span>${year}</span>
                    </div>
                </div>
                <div class="info-wrapper">
                    <h3>${title}</h3>
                    <p>
                        <b>Lugar: </b> ${location} | <b>Cabaña: </b> ${breeder} | <b>Modalidad: </b> ${modality}
                    </p>
                    <a 
                        href="#" 
                        class="button primary-button details-button" 
                        data-post-id="${post.id}"
                    >Ver detalles</a>
                    ${broadcastButton}
                </div>
            </div>`

        postsWrapper.appendChild(singlePostWrapper)
    }
    rootElement.appendChild(postsWrapper)
    addModalListeners()
}

document.addEventListener('DOMContentLoaded', () => {
    createModal()
    fetchData()
})