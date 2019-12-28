import { useEffect, useState} from 'react'

export function useWindowWidth() {
    const [width, setwidth] = useState(window.innerWidth);
    const handleWindowWidth = () => setwidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth)

        return () => {
            window.removeEventListener('resize',handleWindowWidth)
        }
    })

    return width
}