import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Marvel Universe | ${title}`;
    },[title])
}

export default useTitle;