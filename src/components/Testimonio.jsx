import '../styles/testimonio.css'

function Testimonio(props) {
    return ( 
      <div className = 'container-testimonio'>
        <img className = 'imagen-testimonio' src ={require(`../assets/testimonio-${props.imagen}.png`)} alt = {`imagen de ${props.imagen}`} />
        <seccion className = 'container-texto-testimonio'>
          <p className = 'nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className = 'cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className = 'texto-testimonio'>"{props.testimonio}." </p>
        </seccion>
      </div>
  );
}

export default Testimonio ;