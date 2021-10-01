import React from 'react';

class App extends React.Component {

  state = {
    nome: ''
  }

  modificaNome = (event)=>{
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = ()=> {
    const opcoes = ['William', 'Ana', 'Juliana', 'Ravi']
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render(){
    const MeuComboBox = () => this.criaComboBox()
    return(
      <React.Fragment>
      <br />
      <label>Nome:</label>
      <input placeholder='Insira sua mensagem' type='text' value= {this.state.nome} onChange = {this.modificaNome} />

      <h1>Hello {this.state.nome} </h1>

      {MeuComboBox()}

      </React.Fragment>
    )
  }
}

/* function App() {
  return (
    <div>
      <h1>Hello Word</h1>
    </div>
  );
}
*/
export default App;
