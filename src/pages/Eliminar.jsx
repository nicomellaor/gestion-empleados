import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { deleteAxios } from '../Functions';

function Eliminar() {
    const [nro, setNro] = useState('');

    const handleDelete = async () => {
        deleteAxios(nro);
    }
    return(
        <>
            <h1>Eliminar empleado</h1>
            <section>
                <h4>ID</h4>
                <Form.Control type="text" value={nro} onChange={(e) => setNro(e.target.value)}/>
            </section>
            <section>
                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
            </section>
        </>
    )
}

export default Eliminar