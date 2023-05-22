import PropTypes from 'prop-types';

// const newMessage = 'Javier'; // todo lo que este fuera de este componente no se va a renderizar en el html
// const masMessage = [1,2,3,4,5,6,7,8,9];

// const otroMessage = {
//   title: 'Hola mundo desde objeto',
//   message: 'soy un mensaje'
// }
// Si esta funcion suma fuera asincrona (const suma = async () => {}) (lo que hace es que no se ejecutaria el codigo hasta que llegue la respuesta)tendriamos un problema de que no se ejecutaria el codigo hasta que llegue la respuesta
// Por este motivo no es conveniente hacerlo
// const suma = (a,b) => { 
//   return a + b;
// }

// NO PODEMOS MANDAR UN OBJETO PERO SI LO NECESITAMOS PODEMOS MANDAR UN OBJETO SERIALIZADO CON json.stringify(OBJETO)



export const FirstApp = ( { title, subTitle, name } ) => {
  // evitar poner funciones dentro de las llaves de un componente si es posible ya que cada vez que cambie asignara un espacio en la memoria
  // y si esta fuera no, porque solo se redibuja lo que esta dentro de la funcion
  // const suma = (a,b) => { 
  //   return a + b;
  // }

  if( !title){
    throw new Error('El titulo es obligatorio');
  }
  
  
  return ( // forma abreviada de <Fragments></Fragments> que son como divs <></> pero sin hacer un elemento html
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <h2>{ subTitle }</h2>
      <h2>{ subTitle }</h2>
      <h2>{ subTitle }</h2>
      <h2>{ subTitle }</h2>
      <h3>{ name }</h3>
      {/* <h3>{ masMessage }</h3> 
      <h4>{ otroMessage.title  } </h4> */}
      {/* <h4>{ otroMessage.message }</h4> */}
      {/* <code>Pero de esta forma es mejor: { JSON.stringify(otroMessage) }</code>
      <br />
      <h3>La suma  es: { suma(5,2) }</h3>
      <br />
      <cite>Mis apellidos son:  { apellidos }</cite> */}
      
    </>
    
  )
}
// Los default props entran antes que el resto de props
// FirstApp.defaultProps = {
//   title: 'No hay titulo',
//   subTitle: 'No hay subtitulo',
//   name: 'No hay nombre'
// }

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string, 
  name: PropTypes.string
}

