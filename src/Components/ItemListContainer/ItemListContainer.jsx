import "./style.css";

export function ItemListContainer(greeting){
    return(
            <div className="contenedorTexto">
                <h1 className="titulo">{greeting.titulo}</h1>
                <h3 className="subtitulo">{greeting.subtitulo}</h3>
            </div>
    )
}