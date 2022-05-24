import { useState } from 'react'

const useModal = () => {
    const [isOpening, setIsOpening] = useState(false)
    function toggle() {
        setIsOpening(!isOpening)
    }
    return {
        isOpening, toggle
    }
}

export default useModal