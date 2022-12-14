import { useEffect, useState } from "react";
import ButtonUtente from "./ButtonUtente";

function App() {
const [data, setData] = useState([]);
const str=["users","posts", "photos"];

const [content, setContent]= useState(str[0]);


useEffect (() => {fetch('https://jsonplaceholder.typicode.com/' + content)
.then((response) => response.json())
.then((json) => setData(json));}, [content])


function show (stringhe) {
  setContent(stringhe);
  console.log("aggiornato");
}

console.log("componente caricata");

  return (
  <div>
    <ButtonUtente azione={() =>show(str[0])} nome="Utenti"/>
    <ButtonUtente azione={() =>show(str[1])} nome="Tweet" />
    <ButtonUtente azione={() =>show(str[2])} nome="Commenti"/>
    <div>Stiamo vedendo {content}</div>


    {data.map( (elemento) => <pre>{JSON.stringify(elemento)}</pre> )}
    </div>
  );
}

export default App;

