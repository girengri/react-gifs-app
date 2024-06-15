import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// 5. Creo el componente GifGrid que va a ser el encargado de ser el contenedor de los gifs y organizar su contenido
export const GifGrid = ({ category }) => {
    // 4. Llamamos al custom hook para obtener los gifs y mostrar un loading
    const { images, isLoading } = useFetchGifs(category);

    // 1. Creamos el estado inicial de los gifs
    // const [images, setImages] = useState([]);

    // 2. Creamos una funcion para obtener los gifs
    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // };

    // 3. Creamos el efecto secundario para obtener los gifs solo cuando el componente se renderice por primera vez
    // useEffect(() => {
    // 4. Llamamos a la funcion para obtener los gifs
    //     getImages();
    // }, []);

    return (
        <>
            <h3>{category}</h3>

            {
                // 6. Mostramos un loading mientras se obtienen los gifs
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
