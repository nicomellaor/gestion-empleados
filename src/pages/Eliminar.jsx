import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { deleteAxios } from '../Functions';
import { useNavigate } from 'react-router-dom';

function Eliminar() {
    const [nro, setNro] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        deleteAxios(nro);
        navigate('/');
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