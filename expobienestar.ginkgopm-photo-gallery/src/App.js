import { useState } from 'react'
import './App.css'
import data from './data'
import ScrollArrow from './components/ScrollArrow'
import HomeLink from './components/HomeLink'

function App() {
  const isMobile = window.innerWidth < 992
  const itemsPerPage = 28
  const [imgOnViewer, setImgOnViewer] = useState(null)
  const [openViewer, setOpenViewer] = useState(false)
  const [imgsLoaded, setImgsLoaded] = useState(itemsPerPage)
  const [actualPage, setActualPage] = useState(2)

  const loadImages = () => {
    setActualPage(actualPage + 1)
    setImgsLoaded(actualPage * itemsPerPage)
  }
  const handleImgClick = (e) => {
    setImgOnViewer(e.target.src)
    setOpenViewer(true)
  }
  const handleViewerClick = () => {
    setImgOnViewer(null)
    setOpenViewer(false)
  }

  return (
    <div className="App">
      <div className='content-wrap'>
        <HomeLink />
        <ScrollArrow />
        <div className='images-grid'>
          {data.map((el, idx) => {
            if (idx < imgsLoaded) {
              return (
                <img src={`assets/${el}`} key={idx} alt='Congreso' onClick={handleImgClick} />
              )
            }
          })}
        </div>
        {openViewer && !isMobile && (
          <div className='img-viewer' onClick={handleViewerClick}>
            <img src={imgOnViewer} alt='Congreso' />
            <i className="fa fa-times close-icon"></i>
          </div>
        )}
        {!(imgsLoaded >= data.length) && <button onClick={loadImages} className='load-more-btn'>Cargar más</button>}
      </div>
    </div>
  )
}

export default App
