import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
  const [imagenes, setimagenes] = useState([])
  const [isLoading,setIsLoading]=useState([true])
  const getImagenes=async()=>{
    const newImages=await getGifs(category);
    setimagenes(newImages)
    setIsLoading(false)
  }
  useEffect(()=>{
    getImagenes()
  },[ ])

return{
    imagenes,
    isLoading,
}  
}
