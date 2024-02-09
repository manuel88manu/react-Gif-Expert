import {useState} from 'react'
import { AddCategory,GifDrif } from './components';
export const GifExpertApp = () => {
  const [categories, setcategories] = useState([''])
  const onAddCategory=(newCategory)=>{
    if(categories.includes(newCategory))return;
    setcategories([newCategory,...categories])
    //setcategories(cat=>[textoIngresado,...cat,])

  }
  return (
    <>
        {/*titulo */}
        <h1>GifExperApp</h1>
        {/*Input */}
        {/*Listado de Gif */}
        <AddCategory 
        onNewCategory={(value)=>onAddCategory(value)}
        />
         {categories.map(category=>(
             <GifDrif key={category} category={category}/>
            )
         )}
    </>
  )
}
