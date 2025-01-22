import { useState } from "react"

export const useIPO = () => {
    const [currentItem, setCurrentItem] = useState<null>(null);
    const [isDetailShowed,setIsDetailShowed] = useState<boolean>(false);

    return { currentItem, setCurrentItem, isDetailShowed, setIsDetailShowed }
}