import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TarjetaEmpleado from '../components/TarjetaEmpleado.jsx';
import React, { useState } from 'react';
import { getAxios } from '../Functions.jsx';

function Buscar() {
    const [data, setData] = useState(null); // data=null por defecto
    const [nro, setNro] = useState('');

    const ObtenerDatos = async () => {
        const employee = await getAxios(nro);
        setData(employee);
    }

    return(
        <>
            <h1>Buscar empleado</h1>
            <section>
                <h4>ID</h4>
                <Form.Control className="w-50 mx-auto" type="text" placeholder="ID" value={nro} onChange={(e) => setNro(e.target.value)}/>
            </section>
            <section>
                <Button variant="secondary" onClick={ObtenerDatos}><i className="bi bi-search"></i> Buscar</Button>
            </section>
            <TarjetaEmpleado employee={data}/>
        </>
    )
}

export default Buscar