import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import { putAxios } from '../Functions';

function Editar() {
    return(
        <>
            <h1>Editar empleado</h1>
            <section>
                <h4>ID</h4>
                <Form.Control id ="nro" type="text" placeholder="ID"/>
                <Formulario/>
            </section>
            <Button variant="warning" onClick={putAxios}>Editar</Button>
        </>
    )
}

export default Editar