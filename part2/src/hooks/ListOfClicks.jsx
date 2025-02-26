function ListOfClicks({clicks}) {

    return (
        <>
        
            <p>{clicks.join(' , ')}</p>
            <p>Click totales: {clicks.length}</p>
        
        </>
    )
}

export default ListOfClicks