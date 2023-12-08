console.log('Running video player')
let d = document

const links = [
    { title: 'Digital Spine Surgery - Closing the Loop', videoID: 'kf50Una4tHw' },
    { title: 'IMPOL Fabroni Modular Endoprosthesis EMF oncology and complex primary and revision cases', videoID: '5FBKq1v_0xc' },
    { title: 'IMPOL - Prótese de cotovelo | Elbow Prosthesis', videoID: 'COEd3qX6a_0' },
    { title: 'PALACOS R+G pro: All-in-One Fixation System of bone cement and vacuum mixing: Handling Video English', videoID: 'mcQdDK_mHXs' }
]

const appendVideoList = () => {
    const $videoList = d.getElementById('video-list')
    const $videoPlayer = d.getElementById('video-player')

    $videoPlayer.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/kf50Una4tHw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>`

    links.forEach(linkElement => {
        const $link = d.createElement('p')
        $link.innerText = linkElement.title
        $link.setAttribute('videoID', linkElement.videoID)
        $link.classList.add('link')
        $link.addEventListener('click', function handleClick(e) {
            $links = d.querySelectorAll('.link')
            $links.forEach(el => el.classList.remove('active'))
            $videoPlayer.innerHTML = `
                <iframe
                src="https://www.youtube.com/embed/${this.getAttribute('videoID')}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                ></iframe>`
            $link.classList.add('active')
        })
        $videoList.appendChild($link)
    })
}

appendVideoList()