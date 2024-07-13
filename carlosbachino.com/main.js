import { SITE_URL, ApiEndpoint } from './config.js'

const URL = `${SITE_URL}${ApiEndpoint}`
const categoryId = 4
const categoryUrl = `${URL}?categories=${categoryId}`

const d = document
const rootElement = d.getElementById('root')

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
        const link = post.link
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
                    <a href="${link}" class="button primary-button">Detalles</a>
                    ${broadcastButton}
                </div>
            </div>`

        postsWrapper.appendChild(singlePostWrapper)
    }
    rootElement.appendChild(postsWrapper)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})