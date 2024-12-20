import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeSearch from '../components/EmployeeSearch';
import EmployeeForm from '../components/EmployeeForm';
import { useNavigate } from 'react-router-dom';
import { putAxios } from '../Functions';

function Edit() {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [id, setId] = useState('');

    const handlePut = async (form) => {
        try {
            putAxios(id, form);
            console.log("Datos enviados correctamente")
            navigate('/');
        } catch (error){
            console.log(error.response);
        }
    }

    const obtainData = async (employee) => {
        if (!employee||!employee.id) {
            setData(null);
        } else {
        setId(employee.id);
        setData(employee);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center text-center flex-column my-5' data-bs-theme="dark">
            <h1>Editar empleado</h1>
            <EmployeeSearch setData={obtainData}/>
            {data && <EmployeeForm onSubmit={handlePut} initialData={data}/>}
            <Link to="/"><Button variant="outline-secondary" className="my-3"><i className="bi bi-arrow-return-left"></i> Volver</Button></Link>
        </div>
    )
}

export default Edit