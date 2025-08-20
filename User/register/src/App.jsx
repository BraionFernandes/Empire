import { useState } from 'react'
import './App.css'
import './assets/css/responsive.css'

import logo from './assets/images/empire-logo.png';

function App() {

  return (
    <>
      <div className="register">
        <div className="container">
          <div className="info">
            <img className="info-logo" src={logo} alt=""  />
            <span className="info-tittle">Já tem uma conta?</span>
            <span className="info-msg">Faça login e continue de onde parou!</span>
            <button className="info-button">Login</button>
          </div>
          <div className="create">
            <span className="create-tittle">Crie sua conta na Empire.</span>
            <span className="create-msg">Ajudaremos você a alcançar seus maiores sonhos!</span>
            <form className="create-form">
              <div className="create-form-div">
                <label className="create-form-div-label" htmlFor="name" ><i className="material-symbols-outlined">person</i></label>
                <input className="create-form-div-input" type="text"  name='name' id='name' placeholder="Nome"/>
              </div>
              <div className="create-form-div">
                <label className="create-form-div-label" htmlFor="email" ><i className="material-symbols-outlined">mail</i></label>
                <input className="create-form-div-input" type="email"  name='email' id='email' placeholder="Email"/>
              </div>
              <div className="create-form-div">
                <label className="create-form-div-label" htmlFor="password" ><i className="material-symbols-outlined">lock</i></label>
                <input className="create-form-div-input" type="password"  name='password' id='password' placeholder="Senha"/>
              </div>
              <div className="create-form-button">
                <button className="create-form-div-button">Criar conta</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
