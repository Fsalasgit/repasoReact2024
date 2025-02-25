const Mensaje = (props) =>{
    const saludo = 'Hola ' + props.message
    return <strong style={{color: props.color}}>
        {saludo.toUpperCase()}
        <br></br>
    </strong>
}


export default Mensaje
  