import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import { putAxios } from '../Functions';
import { useNavigate } from 'react-router-dom';

function Editar() {
    const [nro, setNro] = useState('');
    const navigate = useNavigate();

    const handlePut = async (form) => {
        try {
            putAxios(nro, form);
            console.log("Datos enviados correctamente")
            navigate('/');
        } catch (error){
            console.log(error.response);
        }
    }
    return(
        <>
            <h1>Editar empleado</h1>
            <h4>ID</h4>
            <Form.Control type="text" placeholder="ID" value={nro} onChange={(e) => setNro(e.target.value)}/>
            <Formulario onSubmit={handlePut}/>
        </>
    )
}

export default Editar