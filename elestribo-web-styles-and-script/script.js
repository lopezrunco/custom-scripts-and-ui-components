document.addEventListener('DOMContentLoaded', (e) => {
    appendWappButtonOnProducts()
    console.log('Running custom JS')
})

const appendWappButtonOnProducts = () => {
    const productPriceDivElement = document.querySelectorAll('.product-price')
    for (let i = 0; i < productPriceDivElement.length; i++) {
        productPriceDivElement[i].innerHTML = '<a style="font-size: 16px;" href="https://wa.me/59898684543" rel="noopener noreferrer" target="_blank"><i class="fa fa-whatsapp"></i> Consultar precio</a>'
    }
}