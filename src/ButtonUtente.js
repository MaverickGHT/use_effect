function ButtonUtente (props) {
return (
    <button onClick={props.azione}>{props.nome}</button>
);
}

export default ButtonUtente;