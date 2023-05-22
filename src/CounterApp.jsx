import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    // En useState ponemos el valor inicial
    // El primer valor desestructurado del array es la variable que vamos a operar y 
    // que la llamaremos como queramos (contador) y el segundo parametro es una funcion que se ejecuta cuando cambia el valor
    // y que llamaremos set y el nombre en camelcase de la  variable  
    const [ counter, setCounter ] = useState(value);
    const handleAdd = () => { setCounter( counter + 1) } 
       // setContador( (c) => c + 1 )  // Otra forma de hacerlo según necesitemos    
    const handleSubstract = () => { setCounter( counter - 1) }
        // setContador( (c) => c - 1 )  // Otra forma de hacerlo según necesitemos    
    const handleReset = () => { setCounter( value ) }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
