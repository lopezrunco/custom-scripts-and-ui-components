console.log('Running custom JS')
let d = document

d.addEventListener('DOMContentLoaded', (e) => {
    appendContactInfo()
    appendSliderOverlay()
})

// Insert contact info on header
const appendContactInfo = () => {
    const $contactInfoWrapper = d.createElement('div')
    const headerElement = d.getElementById('astroid-header')

    $contactInfoWrapper.classList.add('contact-info-wrapper')
    $contactInfoWrapper.innerHTML = `
        <div class='container'>
            <div class='row'>
                <div class='content-wrapper'>
                    <a href='https://wa.me/59896591693' target='_blank'><i class="fab fa-whatsapp"></i>096 591 693</a>
                    <a href='tel:26011774' target='_blank'><i class="fas fa-phone"></i>2601 1774</a>
                    <a href='mailto:info@valuar.com.uy' target='_blank'><i class="far fa-envelope"></i>info@valuar.com.uy</a>
                </div>
            </div>
        </div>
    `
    headerElement.appendChild($contactInfoWrapper)
}