import { useState } from "react";
import http from "../../Http";
import '../Cadastro/style.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const user = {
            email: email,
            pass: pass
        }

        http.post("auth/login", user)
            .then(response => {
                console.log(response.data.access_token);
                localStorage.setItem('token', response.data.access_token);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passHandler = (event) => {
        setPass(event.target.value);
    }

    return <div className="main-div">
        <h1>Faça o login</h1>
        <form onSubmit={onSubmit}>
            <div className="form-line">
                <label>E-mail: </label>
                <input required value={email} onChange={emailHandler} placeholder="Digite seu e-mail" type="email" />
            </div>
            <div className="form-line">
                <label>Senha: </label>
                <input required value={pass} onChange={passHandler} placeholder="Digite sua senha" type="password" />
            </div>
            <button>Enviar</button>
        </form>
    </div>
}

export default Login;