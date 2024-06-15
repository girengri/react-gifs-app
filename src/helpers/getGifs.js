// 1. Creamos funcion para obtener los gifs
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=p9q0Lxz4hBb39FlnyBXB7i77Hw3eMdGi&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data = [] } = await response.json();

    // 2. Desestructuramos la data para obtener solo los datos necesarios
    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images?.downsized_medium.url,
    }));
    
    return gifs;
};