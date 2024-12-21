import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import { getAxios } from '../Functions';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function EmployeeSearch( {setData} ) {
    const [id, setId] = useState('');
    const [error, setError] = useState('');

    const getData = async () => {
        setError('');
        try {
            const employee = await getAxios(id);
            if (employee) {
                setData(employee);
            } else {
                setError('No se encontró el empleado');
                setData(null);
            }
        } catch (error) {     
            setError('No se encontró el empleado');
        }
    }

    return (
        <>
            <Row className='my-3'>
                <InputGroup>
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
            </Row>
            
            {error && <Alert variant='danger'>{error}</Alert>}
        </>
    )
}

export default EmployeeSearch