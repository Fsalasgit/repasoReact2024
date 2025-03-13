function Nota({content, important}) {

    return(
        
        <li style={{ color: !important ? "red":"" }}>
            {content}
        </li>

    )

}

export default Nota

