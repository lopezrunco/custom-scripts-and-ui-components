import { useState } from "react"
import './ScrollArrow.css'

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('scroll', checkScrollTop)

    return (
        <i
            className="fas fa-chevron-up scrollTop"
            onClick={scrollTop}
            style={{  display: showScroll ? 'flex' : 'none' }}
        ></i>
    )
}

export default ScrollArrow