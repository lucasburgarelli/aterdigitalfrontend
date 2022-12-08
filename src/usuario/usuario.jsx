import React, { useState, useEffect, useRef, Text } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Api } from "../services/api";

export const Usuario = () => {
    const [values, setValues] = useState();
    const [checked, setChecked] = React.useState(false);
    const [responseLabel, setResponse] = useState();

    const handleChanges = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
  
    const handleCheckChanges = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.checked,
        }));
    }

    const handleClickButton = () => {
        console.log(values)
        Api.post("/agricultor", values).then(response => {
            setResponse(response.status);
            console.log(response);
        });
    }
  
  return (
      <div>
          <h1>Cadastro de Usuario e Agricultor</h1>
          <h5>atributos com * são obrigatórios<br></br>
          atributos com ** são obrigatórios para ser beneficiário de algum programa</h5>
          <form>
            <label>
                Nome Completo*:
                <input type="text" required="required" name="NomeCompleto"  onChange={handleChanges} />
            </label><br></br>
            <label>
                Apelido:
                <input type="text" name="Apelido" onChange={handleChanges} />
            </label><br></br>
            <label>
                Data de Nascimento:
                <input type="date" name="DataDeNascimento" onChange={handleChanges} />
            </label><br></br>
            <label>
                Endereço**:
                <input type="text" name="Endereco" onChange={handleChanges} />
            </label><br></br>
            <label>
                Município**:
                <input type="text" name="Municipio" onChange={handleChanges} />
            </label><br></br>
            <label>
                Ativo:
                <select name="Ativo" onChange={handleChanges}>
                    <option value="null"></option>
                    <option value="true">Não</option>
                    <option value="false">Sim</option>
                </select>
            </label><br></br>
            <label>
                Usuário*:
                <input type="text" required="required" name="UsuarioTexto" onChange={handleChanges} />
            </label><br></br>
            <label>
                CPF*:
                <input type="text" required="required" name="Cpf" onChange={handleChanges} />
            </label><br></br>
            <label>
                Senha*:
                <input type="password" required="required" name="Senha" onChange={handleChanges} />
            </label><br></br>
            <label>
                Email**:
                <input type="text" name="Email" onChange={handleChanges} />
            </label><br></br>
            <label>
                Numero de Telefone**:
                <input type="text" name="NumeroDoTelefone" onChange={handleChanges} />
            </label><br></br>
            <label>
                Numero de Telefone 2:
                <input type="text" name="NumeroDoTelefone2" onChange={handleChanges} />
            </label><br></br>
            <label>
                Sexo:
                <select name="Sexo" onChange={handleChanges}>
                    <option value="null"></option>
                    <option value="0">Masculino</option>
                    <option value="1">Feminino</option>
                </select>
            </label><br></br>
            <label>
                Agricultor:
                <input type="text" name="AgricultorTexto" onChange={handleChanges} />
            </label><br></br>
            <label>
                Titular:
                <select name="Titular" onChange={handleChanges}>
                    <option value="null"></option>
                    <option value="true">Não</option>
                    <option value="false">Sim</option>
                    </select>
            </label><br></br>
            <label>
                Categorias:
                <select name="Categoria" onChange={handleChanges}>
                    <option value="null"></option>
                    <option value="0">Agricultor familiar</option>
                    <option value="1">Agricultor outro</option>
                    <option value="2">Pescador</option>
                    <option value="3">Quilombola</option>
                    <option value="4">Indígena</option>
                    </select>
            </label><br></br>
            <label>
                Escolaridade:
                <select name="Escolaridade" onChange={handleChanges}>
                    <option value="null"></option>
                    <option value="0">Fundamental</option>
                    <option value="1">1º grau</option>
                    <option value="2">2º grau</option>
                    <option value="3">3º grau</option>
                    </select>
            </label><br></br>
            <label>
                CadPro:
                <input type="text" name="CadPro" onChange={handleChanges} />
            </label><br></br>
            <button onClick={() => handleClickButton()}> Cadastrar </button><br></br>
            <label>{responseLabel}</label>
          </form>
    </div>
  );
}