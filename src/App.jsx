import { useState } from "react";
import Card from "./Card";

function App() {
  const [isShow, setIsShow] = useState(false)
  const [send, setSend] = useState(false)
  const [inputsValues, setInputsValues] = useState({
    name: '',
    lastname: '',
  });

  const [inputsValid, setInputValid] = useState({
    name: false,
    lastname: false,
  })

  const handleInputsChange = ({target}) => {
    setInputsValues({...inputsValues, [target.name]: target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, lastname} = inputsValues
    const aux = name[0] === ' ' || name.length < 3 || (lastname.replaceAll(' ', '').length < 6);
    setInputValid({
      name: !(name[0] === ' ') || !(name.length < 3), 
      lastname: lastname.replaceAll(' ', '').length >= 6
    })
    setIsShow(aux)
    setSend(!aux)
  }
  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputsChange} type='text' name="name" />
        <input onChange={handleInputsChange} type='text' name="lastname" />
        <button type="submit">Enviar</button>
      </form>

      {isShow && <h3>Por favor chequea que la información sea correcta</h3>}
      {send && <Card {...inputsValues}/>}
    </div>
  );
}

export default App;
