//rcc

import React, { Component } from 'react'
import { Button } from 'primereact/button'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'

export default class Busca extends Component {
    //const [termoBusca, setTermoBusca] = useState('') esse é um hook
    state = {
        termodeBusca: ''
    }

    onTermoAlternado = (event) => {
        console.log(event.target.value)
        this.setState({termodeBusca: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.termodeBusca)
    }

  render() {
    return (
    <form onSubmit = {this.onFormSubmit}>
      <div className = 'flex flex-column'>
        <IconField iconPosition='left'>
        <InputIcon className = 'pi pi-search'></InputIcon>
        <InputText 
        placeholder= {this.props.dica}
        className= 'w-full'
        onChange = {this.onTermoAlternado}
        valu = {this.state.termodeBusca} />
        </IconField>
        <Button 
        label= 'OK'
        className = 'mt-2 p-button-outlined'/> 
      </div>
    </form>
    )
  }
}

Busca.defaultProps ={
    dica: "Buscar ..."
}
