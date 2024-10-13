import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import { getAllAxios } from '../Functions';

function Tabla(){
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const ObtenerDatos = async () => {
            const employees = await getAllAxios();
            setDatos(employees);
        };

        ObtenerDatos();
    }, []);

    return(
        <>
            <Table bordered hover responsive>
                <thead className='table-primary'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Puesto</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((employee) => (
                       <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.job}</td>
                       </tr> 
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabla