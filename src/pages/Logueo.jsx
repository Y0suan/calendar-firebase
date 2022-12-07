import { useState } from "react"
import React from 'react';

import firebaseApp from "../../Credenciales";
import {  } from "firebase/auth"


const Logueo = () => {

    const [estaRegistrandose,setEstaRegistrandose] = useState(false);

  return (
    <div>
        <div>
            <h1>{estaRegistrandose ? "Registrate" : "Inicia Sesion"}</h1>
            <form action="">
                <div>
                <label>Email</label>
                <input type="text" name="" id="" />
                </div>
                <div>
                <label>Contraseña</label>
                <input type="text" name="" id="" />
                </div>
                <button type="submit">
                    {estaRegistrandose ? "Registrate" : "Inicia Sesion"}
                </button>
            </form>
            <a onClick={() => setEstaRegistrandose(!estaRegistrandose)} >
            {estaRegistrandose ? "Ya tienes una cuenta? Inicia sesion" : "No tienes cuenta? Registrate"}
            </a>
        </div>
    </div>
  )
}

export default Logueo