import { useState,useEffect } from 'react';
//import {getGifs} from '../helpers/getGifs'
import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifDrif = ({category}) => {
  const {imagenes,isLoading}=useFetchGifs(category)
  console.log({isLoading})
  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h1>Cargando.....</h1>)
        
        }
        <div className='card-grid'>
          {
          imagenes.map((image)=>        
            <GiftItem 
            key={image.id}
            {...image}
            />
          )}
        </div>
    </>
  )
}
