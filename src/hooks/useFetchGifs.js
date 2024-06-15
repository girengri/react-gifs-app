import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// 7. Creamos hook personalizado para obtener los gifs y mostrar un loading mientras se obtienen
export const useFetchGifs = (category) => {
    // 1. Creamos el estado inicial de los gifs
    const [images, setImages] = useState([]);
    // 5. Creamos un estado para mostrar un loading
    const [isLoading, setIsLoading] = useState(true);

    // 2. Creamos una funcion para obtener los gifs
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        // 6. Cambiamos el estado de loading
        setIsLoading(false);
    };

    // 3. Creamos el efecto secundario para obtener los gifs solo cuando el componente se renderice por primera vez
    useEffect(() => {
        // 4. Llamamos a la funcion para obtener los gifs
        getImages();
    }, []);

    return {
        images,
        isLoading,
    };
};
