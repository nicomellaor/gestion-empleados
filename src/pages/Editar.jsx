import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import { putAxios } from '../Functions';

function Editar() {
    const [form, setForm] = useState(null); // form=null por defecto

    const EditarForm = () => {
        setForm(true);
    }

    return(
        <>
            <h1>Editar empleado</h1>
            <section>
                <h4>ID</h4>
                <Form.Control id ="nro" type="text"/>
            </section>
            <section>
                <Button variant="info" onClick={EditarForm}>Buscar</Button>
            </section>
            {/* renderizado condicional: si form=true */}
            {form && <><section><Formulario/></section>
            <Button variant="warning" onClick={putAxios}>Editar</Button></>}
        </>
    )
}

export default Editar