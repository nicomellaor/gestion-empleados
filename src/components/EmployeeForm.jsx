import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function EmployeeForm( {onSubmit} ) {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        name: '',
        birthdate: '',
        sex: '',
        city: '',
        job: '',
        salary: '',
        number: '',
        email: '',
        photo: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formElement = event.currentTarget;

        if (formElement.checkValidity() === false) {
            event.stopPropagation();
        } else {
            onSubmit(form);
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">
            <Row className='mb-3'>
                <Form.Group controlId="validationName">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Nombre Apellido'
                        value = {form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un nombre y apellido válidos.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group controlId="validationBirthdate">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control
                        required
                        type='date'
                        value = {form.birthdate}
                        onChange={(e) => setForm({...form, birthdate: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese una fecha válida.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group controlId="validationSex">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select 
                        required
                        value={form.sex}
                        onChange={(e) => setForm({...form, sex: e.target.value})}
                    >
                        <option value=''>Seleccione...</option>
                        <option value='male'>Masculino</option>
                        <option value='female'>Femenino</option>
                        <option value='other'>Otro</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Por favor, seleccione una opción.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group controlId="validationCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Ciudad'
                        value={form.city}
                        onChange={(e) => setForm({...form, city: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese una ciudad.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group controlId="validationJob">
                    <Form.Label>Trabajo</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Trabajo'
                        value={form.job}
                        onChange={(e) => setForm({...form, job: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un trabajo.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group controlId="validationSalary">
                    <Form.Label>Salario (USD)</Form.Label>
                    <Form.Control
                        required
                        type='number'
                        placeholder='Salario'
                        min={1}
                        value={form.salary}
                        onChange={(e) => setForm({...form, salary: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un salario válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group controlId="validationPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        pattern="^\+?[0-9]{10,15}$"
                        placeholder="Ejemplo: +12345678901"
                        value={form.number}
                        onChange={(e) => setForm({...form, number: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un teléfono válido (10-15 dígitos).
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group controlId="validationEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='E-mail'
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un correo válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-5'>
                <Form.Group controlId="validationPhoto">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control
                        required
                        type='url'
                        placeholder='Photo URL'
                        value={form.photo}
                        onChange={(e) => setForm({...form, photo: e.target.value})}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, ingrese una URL válida.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit" variant="outline-primary"><i className="bi bi-floppy"></i> Guardar</Button>
        </Form>
    )
}

export default EmployeeForm