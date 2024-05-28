const appendButton = () => {
    const parentElements = document.querySelectorAll('.fusion-price-rating')
    for (let i = 0; i < parentElements.length; i++) {
        parentElements[i].innerHTML = '<a href="https://wa.me/59891352555" rel="noopener noreferrer" target="_blank"><i class="fab fa-whatsapp"></i> Consultar</a>'
    }
}
appendButton()