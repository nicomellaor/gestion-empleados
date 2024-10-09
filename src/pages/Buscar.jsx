import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAxios } from '../Functions.jsx';
import TarjetaEmpleado from '../components/TarjetaEmpleado.jsx';
import React, { useState } from 'react';
import axios from "axios";

function Buscar() {
    const [data, setData] = useState(null); // data=null por defecto

    const getAxios = () => {
        var ruta = "https://66fd5caa699369308954e548.mockapi.io/users";
        var nro = document.getElementById("nro").value;
        axios.get(ruta+"/"+nro).then( response => {
            var employee = response.data;
            console.log(employee);
            setData(employee);
        })
    };

    return(
        <>
            <h1>Buscar empleado</h1>
            <section>
                <h4>ID</h4>
                <Form.Control id ="nro" type="text"/>
            </section>
            <section>
                <Button variant="secondary" onClick={getAxios}>Buscar</Button>
            </section>
            {/* renderizado condicional: si existe data */}
            {data && <TarjetaEmpleado employee={data}/>} 
        </>
    )
}

export default Buscar