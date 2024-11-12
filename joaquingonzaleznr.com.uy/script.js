const d = document,
    root = d.getElementById('root')

import { data } from "./data.js"

const container = d.createElement('div')
container.classList.add('container-fluid')
root.appendChild(container)

const row = d.createElement('div')
row.classList.add('row')
container.appendChild(row)

data.forEach((service, index) => {
    const serviceContainer = d.createElement('div')
    serviceContainer.classList.add('col-lg-3', 'service-item')
    serviceContainer.setAttribute('data-bs-toggle', 'modal')
    serviceContainer.setAttribute('data-bs-target', `#serviceModal${index}`)

    const iconContainer = d.createElement('div')
    iconContainer.classList.add('icon-container')
    serviceContainer.appendChild(iconContainer)

    const icon = d.createElement('i')
    icon.className = service.icon
    iconContainer.appendChild(icon)

    const title = d.createElement('h4')
    title.textContent = service.title
    serviceContainer.appendChild(title)

    row.appendChild(serviceContainer)

    // Modal HTML (added dynamically)
    const modal = d.createElement('div')
    modal.classList.add('modal', 'fade')
    modal.setAttribute('id', `serviceModal${index}`)
    modal.setAttribute('data-bs-backdrop', 'static')
    modal.setAttribute('data-bs-keyboard', 'false')
    modal.setAttribute('tabindex', '-1')
    modal.setAttribute('aria-labelledby', `serviceModalLabel${index}`)
    modal.setAttribute('aria-hidden', 'true')

    const modalDialog = d.createElement('div')
    modalDialog.classList.add('modal-dialog')
    modal.appendChild(modalDialog)

    const modalContent = d.createElement('div')
    modalContent.classList.add('modal-content')
    modalDialog.appendChild(modalContent)

    const modalHeader = d.createElement('div')
    modalHeader.classList.add('modal-header')
    modalContent.appendChild(modalHeader)

    const modalTitle = d.createElement('h5')
    modalTitle.classList.add('modal-title')
    modalTitle.setAttribute('id', `serviceModalLabel${index}`)
    modalTitle.textContent = service.title
    modalHeader.appendChild(modalTitle)

    // Close button.
    const closeButton = d.createElement('button')
    closeButton.classList.add('btn-close')
    closeButton.setAttribute('data-bs-dismiss', 'modal')
    closeButton.setAttribute('aria-label', 'Close')
    modalHeader.appendChild(closeButton)

    const modalBody = d.createElement('div')
    modalBody.classList.add('modal-body')
    modalBody.textContent = service.description
    modalContent.appendChild(modalBody)

    root.appendChild(modal)
})

console.log('Services module loaded.')