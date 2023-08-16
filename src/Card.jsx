//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({name, lastname}) {
  return (
    <ul>
      
      <li>{name}</li>
      <li>{lastname}</li>
    </ul>
  );
}

export default Card;
