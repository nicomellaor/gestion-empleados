import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { getAxios } from '../Functions';
import EmployeeCard from '../components/EmployeeCard';
import { Link } from 'react-router-dom';

function Search(){
    const [data, setData] = useState(null);
    const [id, setId] = useState('');

    const getData = async () => {
        const employee = await getAxios(id);
        setData(employee);
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center text-center flex-column my-5'>
                <h1>Buscar Tarjeta de Empleado</h1>
                <InputGroup className="w-75 my-3">
                    <Form.Control
                    placeholder="Buscar por Id"
                    type="number"
                    min={1}
                    size='sm'
                    value={id}
                    onChange = {(e) => setId(e.target.value)}
                    />
                    <Button variant="secondary" onClick={getData}>
                    <i className="bi bi-search"></i>
                    </Button>
                </InputGroup>
                <Link to="/"><Button variant="outline-secondary" className="mb-3"><i className="bi bi-arrow-return-left"></i> Volver</Button></Link>
                <EmployeeCard employee={data}/>
            </div>
        </>
    )
}

export default Search