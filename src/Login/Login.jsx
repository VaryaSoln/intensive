import { useState } from "react";
import "./Login.css";





function Login() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const loginReqest = () => {
        fetch("https://localhost/tbd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login: login, password: password })
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="contaner">
                <form className="form">

                    <label className="form__label" htmlFor="login">Логин</label>
                    <input type="text" id="login" placeholder="email..." value={login} onChange={(e) => { setLogin(e.target.value) }}></input>

                    <label className="form__label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" placeholder="password..." value={password} onChange={(e) => { setPassword(e.target.value) }}></input>


                    <div className="form__button-contaner">
                        <button className="form__button" type="button" onClick={() => { loginReqest(); }}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;   
