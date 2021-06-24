import { useState } from "react";
import http from "../../Http";
import { Link } from "react-router-dom";

import './style.css'

const Cadastro = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const onSubmit = (event) => {
        
        const user = {
            name: name,
            email: email,
            pass: pass
        }

        http.post("auth/register", user)
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passHandler = (event) => {
        setPass(event.target.value);
    }

    return <div className="main-div">
        <h1>Cadastre-se</h1>
        <form onSubmit={onSubmit}>
            <div className="form-line">
                <label>Nome: </label>
                <input required value={name} onChange={nameHandler} placeholder="Digite seu nome" />
            </div>
            <div className="form-line">
                <label>E-mail: </label>
                <input required value={email} onChange={emailHandler} placeholder="Digite seu e-mail" type="email" />
            </div>
            <div className="form-line">
                <label>Senha: </label>
                <input required value={pass} onChange={passHandler} placeholder="Digite sua senha" type="password" />
            </div>
            <button>Cadastrar</button>
            <Link to="/login" className="link-login"><span>Já tem conta? </span><span className="link">Faça login.</span></Link>
        </form>
    </div>
}

export default Cadastro;