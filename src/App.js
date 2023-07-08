import React, {useState} from "react";
import "./style.css";



function App() {

//  let textLabel = "Haz click Aqui";

let [textLabel, setTextLabel] = useState("Haga click Aqui")

// [variableEstado, modificardorDeVariableEstado]

function handleChangeButton() {
  alert("change");
  // NUNCA modificar el texto
  // textLabel= "Gracias por clickear"
  setTextLabel("Gracias por clickear")
  console.log(textLabel);
}

  return (
    <div>
<Button color="red" onClick={handleChangeButton}>{textLabel}</Button>
    </div>
  );
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.children}
      </button>
  );
}

export default App;