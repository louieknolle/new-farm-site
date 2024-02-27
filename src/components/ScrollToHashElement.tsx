import { useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"

const ScrollToHashElement = () => {
  const location = useLocation()

  const hashElement = useMemo(() => {
    const {hash} = location
    const removeHashCharacter = (id: string) : string =>{
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      const result = id.slice(1)
      return result
    }

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash))
      return element
    }
  }, [location])

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        inline: "nearest",
      })
    }
  }, [hashElement])

  
}

export default ScrollToHashElement