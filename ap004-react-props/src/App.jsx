import pedido from "./pedido"

export default () => {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          {/* .fa-solid-hippo */}
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <pedido
            Data= "22/06/2026"
            />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header text-muted">14/06/2025</div>
            <div className="card-body d-flex">
              <i className="fa-solid fa-pencil fa-2x"></i>
              {/* .>(h4.text-center+p. text-center) */}
              <div className="border flex-grow-1 rounded">
                <h4 className="text-center">Lapis</h4>
                <p className="text-center"> Um bom lapis</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header text-muted">14/06/2025</div>
            <div className="card-body d-flex">
              <i className="fa-solid fa-bicycle fa-2x"></i>
              {/* .>(h4.text-center+p. text-center) */}
              <div className="border flex-grow-1 rounded">
                <h4 className="text-center">Bicicleta</h4>
                <p className="text-center"> Uma boa bicicleta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header text-muted">14/06/2025</div>
            <div className="card-body d-flex">
              <i className="fa-solid fa-eraser fa-2x"></i>
              {/* .>(h4.text-center+p. text-center) */}
              <div className="border flex-grow-1 rounded">
                <h4 className="text-center">Borracha</h4>
                <p className="text-center"> Uma boa borracha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}