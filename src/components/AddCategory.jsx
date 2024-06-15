import { useState } from "react";

// 3. Creo el componente hijo del formulario de busqueda

export const AddCategory = ({ onNewCategory }) => {
    // 1.Valor inicial del input
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        // 2.Capturo el valor del input
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        // 3.Evito que se recargue la página
        event.preventDefault();

        // 5.Evito que se agreguen categorias vacias
        if (inputValue.trim().length <= 1) return;

        // 4.Envio el valor del input al componente padre (GifExpertApp) para que lo agregue al estado a traves de la funcion onAddCategory que recibe como prop el componente hijo (AddCategory) como onNewCategory
        onNewCategory(inputValue.trim());

        // 6.Limpio el input
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
