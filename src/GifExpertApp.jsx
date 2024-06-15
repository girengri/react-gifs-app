import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// 2. Creo el componente principal

export const GifExpertApp = () => {
    // 1. Valor inicial de las categorias
    const [categories, setCategories] = useState(["One Punch"]);

    // 3. Recibo la nueva categoria del componente hijo y la agrego al estado
    const onAddCategory = (newCategory) => {
        // 4. Valido que la categoria no exista en el estado
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* 2. Del componente hijo vamos a recibir el valor a insertar que se encuentra en el event y llamamos a la funcion onAddCategory*/}
            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                // 6. Envio la categoria al componente GifGrid
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
