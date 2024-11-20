import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import { putAxios } from '../Functions';

function Editar() {
    const [nro, setNro] = useState('');

    const handlePut = async (form) => {
        try {
            putAxios(nro, form);
            console.log("Datos enviados correctamente")
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