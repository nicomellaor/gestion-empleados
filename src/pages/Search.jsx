import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import { Link } from 'react-router-dom';
import EmployeeSearch from '../components/EmployeeSearch';

function Search(){
    const [data, setData] = useState(null);

    const obtainData = async (employee) => {
        setData(employee);
    }

    return (
        <div className='d-flex justify-content-center align-items-center text-center flex-column my-5' data-bs-theme="dark">
            <h1>Buscar Tarjeta de Empleado</h1>
            <EmployeeSearch setData={obtainData}/>
            <Link to="/"><Button variant="outline-secondary" className="mb-3"><i className="bi bi-arrow-return-left"></i> Volver</Button></Link>
            <EmployeeCard employee={data}/>
        </div>
    )
}

export default Search