import React from "react";
import '../../index.css';

import ProdutoService from "../../app/produtoService";

 const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: '',
    fornecedor: ''
 }

 class CadastroProduto extends React.Component{

    state = {estadoInicial}

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (event)=>{
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor}) 
    }
    onSubmit = (event)=>{
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
            sucesso: false
        }
        
        this.service.salvar(produto)
        this.limpaCampos()
        this.setState({sucesso : true})
    }

    limpaCampos = ()=> {
        this.setState(estadoInicial)
    }

    render(){
        return(
            <div className=' card'>
                <div className='card-header'>
                    Cadastro de produtos
                </div>
                
                <div className='card-body'>

                    {
                        this.state.sucesso &&
                        <div class="alert alert-dismissible alert-success">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Cadastro </strong>realizado com sucesso!
                        </div>                      
                    }
                    
                    <div className='row'>                   
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Nome: *</label>
                                <input type='text' 
                                       name='nome'
                                       onChange= {this.onChange}
                                       value={this.state.nome} 
                                       className='form-control' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>SKU: *</label>
                                <input type='text'  
                                       onChange= {this.onChange} 
                                       name='sku' 
                                       value={this.state.sku} 
                                       className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <label>Descrição:</label>
                            <input type='text'  
                               onChange= {this.onChange} 
                               name='descricao' 
                               value={this.state.descricao} 
                               className='form-control' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label>Preço:</label>
                            <input type='number'  
                                   onChange= {this.onChange} 
                                   name='preco' 
                                   value={this.state.preco} 
                                   className='form-control' />
                        </div>                 
                        <div className='col-md-6'>
                            <label>Fornecedor:</label>
                            <input type='text'  
                                   onChange= {this.onChange} 
                                   name='fornecedor' 
                                   value={this.state.fornecedor} 
                                   className='form-control' />
                        </div>
                    </div>
                       <div className='row'>
                                <div className='botoes'>
                                    <div className='col-md-1'>
                                        <button  onClick ={this.onSubmit} className='btn btn-success'>Salvar</button>
                                    </div>
                                
                             
                                    <div className='col-md-1'>
                                        <button onClick ={this.limpaCampos} className='btn btn-primary'>Limpar</button>
                                    </div>
                                 </div>             
                        </div>
                </div>
            </div>
        )
    }
}

export default CadastroProduto;