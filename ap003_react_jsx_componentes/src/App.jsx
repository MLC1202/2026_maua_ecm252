const App = () => {
  return <div style={{margin: 'auto', width: 768, backgroundColor: '#eee', padding: 12, borderRadius: 8}}> 

<label htmlFor="CampoNome" style={{display: 'block', marginBottom: 8}}>
      Nome:
    </label>
    <input type="text" id="campoNome" style={{paddingTop: 8, paddingBotton: 8, width: '100%', borderStyle: 'hidden', outline: 'none', borderRadius: 8}} />

    <button style={{marginTop: 12, paddintTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', width: '100%', borderRadius: 8, color: 'white' }}>Enviar</button>  

   

  </div>
}

export default App