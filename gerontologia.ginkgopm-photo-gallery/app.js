import { ASSETS_SRC } from './assets-url.js'

const d = document
const root = d.getElementById('root')
const loadMoreBtn = d.getElementById('load-more')

let imagesSrc = []
let imagesRendered = 0
const imagesPerPage = 15
const totalImages = 140

async function fetchImagesFromUrl(assetsUrl) {
    try {
        const response = await fetch(assetsUrl)
        if (!response.ok) {
            throw new Error(`Failed to fetch the images from ${assetsUrl}`)
        }

        // Parse the response
        const extractedHTML = await response.text();
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(extractedHTML, 'text/html');

        // Find all the links (a tags) in the parsed HTML
        const links = Array.from(parsedDocument.querySelectorAll('a'))

        // Obtain the links that point to JPG or JPEG files
        const newImageUrls = links
            .map(link => link.href)
            .filter(url => url.toLowerCase().endsWith('.jpg') || url.toLowerCase().endsWith('.jpeg'))

        return newImageUrls
    } catch (error) {
        console.error(`Failed to fetch the images from ${assetsUrl}`)
    }
}

async function renderImages() {
    try {
        const newImages = await fetchImagesFromUrl(ASSETS_SRC)

        // Load first batch of images
        imagesSrc = newImages.slice(0, imagesPerPage)
        imagesRendered = imagesPerPage
        renderImagesInRange(0, imagesPerPage)
    } catch (error) {
        console.error('Failed to render images: ', error)
    }
}

async function fetchAndRenderMoreImages() {
    try {
        const newImages = await fetchImagesFromUrl(ASSETS_SRC)

        // Append the next batch of images to imagesSrc
        const newImagesToAdd = newImages.slice(imagesRendered, imagesRendered + imagesPerPage)
        imagesSrc = [...imagesSrc, ...newImagesToAdd]
        imagesRendered += newImagesToAdd.length

        // Render the new fetched images
        renderImagesInRange(imagesRendered - newImagesToAdd.length, imagesRendered)

        toggleLoadMoreButton()
    } catch (error) {
        console.error('Failed to render more images:', error);
    }
}

function renderImagesInRange(startIndex, endIndex) {
    const imagesContainer = root.querySelector('.images-container')
    const imgCardTemplate = d.getElementById('img-card-template')

    for (let i = startIndex; i < endIndex; i++) {
        if (i >= imagesSrc.length) { 
            break; // Ensure not to render more than available images
        }

        const imageSrc = imagesSrc[i]

        const imageCardClone = imgCardTemplate.content.cloneNode(true)
        const imageCardCloneWrapperElement = imageCardClone.querySelector('.img-card-wrapper')
        const imageCardCloneImageElement = imageCardClone.querySelector('.image')

        imageCardCloneImageElement.src = imageSrc
        imageCardCloneImageElement.alt = 'Congreso Ginkgo'

        imageCardCloneWrapperElement.appendChild(imageCardCloneImageElement)
        imageCardClone.appendChild(imageCardCloneWrapperElement)
        imagesContainer.appendChild(imageCardClone)

        imageCardCloneImageElement.addEventListener('click', () => {
            openModal(imageSrc)
        })
    }
}

function openModal(imageSrc) {
    const modalContainer = d.createElement('div')
    modalContainer.classList.add('modal-container')

    const modalClose = d.createElement('span')
    modalClose.classList.add('close')
    modalClose.innerHTML = '<i class="fa-solid fa-xmark"></i>'

    const modalImage = d.createElement('img')
    modalImage.classList.add('modal-image')
    modalImage.src = imageSrc
    modalImage.alt = 'Foto de congreso Ginkgo'

    modalClose.addEventListener('click', () => {
        modalContainer.parentNode.removeChild(modalContainer)
    })

    modalContainer.appendChild(modalClose)
    modalContainer.appendChild(modalImage)

    d.body.appendChild(modalContainer)
}

function toggleLoadMoreButton() {
    if (imagesRendered > totalImages - 1) {
        loadMoreBtn.style.display = 'none'
    } else {
        loadMoreBtn.style.display = 'block'
    }
}

renderImages()

loadMoreBtn.addEventListener('click', async () => {
    await fetchAndRenderMoreImages()
})
