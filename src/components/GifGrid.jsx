import { useEffect, useState } from "react";

import { GifItem } from "./GifItem"

import { useFetchGifs } from "./hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando datos...</h2> )
                // ? ( <h2>Cargando datos...</h2> )
                // : null
            }
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
