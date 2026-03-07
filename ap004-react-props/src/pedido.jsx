//rafce

const pedido = (props) => {
    return (
        
            <div className="card">
                <div className="card-header text-muted">{props.data}</div>
                <div className="card-body d-flex">
                    <i className={`a-solid fa-${props.icone} fa-2x`}></i>
                    {/* .>(h4.text-center+p. text-center) */}
                    <div className="border flex-grow-1 rounded">
                        <h4 className="text-center">{props.titulo}</h4>
                        <p className="text-center"> {props.descricao} </p>
                    </div>
                </div>
            </div>
    )
}

export default pedido