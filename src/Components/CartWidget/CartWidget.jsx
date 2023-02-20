import './style.css';

export function CartWidget (){
    const icono = 'https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png' ;

    return (
        <>
            <div className='contenedorCarrito'>
                <img className='carrito' src={icono} alt="Carrito" />
                <span className="numCarrito">3</span>
            </div>
        </>
    );
}