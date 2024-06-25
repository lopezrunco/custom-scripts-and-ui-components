import { SITE_URL, ApiEndpoint } from './config.js'

const URL = `${SITE_URL}${ApiEndpoint}`
const categoryId = 2
const categoryUrl = `${URL}?categories=${categoryId}`

const d = document
const rootElement = d.getElementById('root')

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

        const singlePostWrapper = d.createElement('div')
        singlePostWrapper.classList.add('single-post-wrapper')

        singlePostWrapper.innerHTML =
            `<a href="${link}">
                <div class="image-wrapper">
                    <img src="${imageUrl}" alt="Imagen destacada de ${title}" />
                    <div class="metadata-wrapper">
                        <span>09</span>
                        <span>Feb</span>
                        <span>2024</span>
                    </div>
                </div>
                <div class="info-wrapper">
                    <h3>${title}</h3>
                    <p>${excerpt}</p>
                    <span class="button primary-button">Ver más</span>
                </div>
            </a>`

        postsWrapper.appendChild(singlePostWrapper)
    }
    rootElement.appendChild(postsWrapper)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})