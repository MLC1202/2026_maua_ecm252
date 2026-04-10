import './styles.css'

const App = () => {
  const estilosBotao = {
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'blueviolet',
    width: '100%',
    borderRadius: 8,
    color: 'white'
  }

  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('Botão clicado!')

  return (
    <div style={{ margin: 'auto', width: 768, backgroundColor: '#eee', padding: 12, borderRadius: 8 }}>
      <label className="rotulo" htmlFor="campoNome" style={{ display: 'block', marginBottom: 8 }}>
        {textoDoRotulo}
      </label>

      <input
        type="text"
        id="campoNome"
        style={{ paddingTop: 8, paddingBottom: 8, width: '100%', borderStyle: 'hidden', outline: 'none', borderRadius: 8 }}
      />

      <button onClick={aoClicar} style={estilosBotao}>
        {obterTextoDoBotao()}
      </button>
    </div>
  )
}

export default App