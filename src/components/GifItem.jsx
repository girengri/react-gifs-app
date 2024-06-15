// 6. Creo el componente GifItem que va a ser el encargado de mostrar un gif en particular
export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};
