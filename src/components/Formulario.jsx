import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Formulario({ onSubmit }) {
    const [form, setForm] = useState({
        name: '',
        birthdate: '',
        sex: '',
        city: '',
        job: '',
        salary: '',
        number: '',
        email: '',
        photo: ''
    })
    return(
        <>
            <h4>Nombre</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
            <h4>Fecha de nacimiento</h4>
                <Form.Control className="w-50 mx-auto mb-4" id="birthdate" type="date" value={form.birthdate} onChange={(e) => setForm({...form, birthdate: e.target.value})}/>
            <h4>Sexo</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="text" placeholder="male/female/other" value={form.sex} onChange={(e) => setForm({...form, sex: e.target.value})}/>
            <h4>Ciudad</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="text" placeholder="City" value={form.city} onChange={(e) => setForm({...form, city: e.target.value})}/>
            <h4>Trabajo</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="text" placeholder="Job" value={form.job} onChange={(e) => setForm({...form, job: e.target.value})}/>
            <h4>Salario (USD)</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="number" placeholder="Salary" value={form.salary} onChange={(e) => setForm({...form, salary: e.target.value})}/>
            <h4>Teléfono</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="text" placeholder="10-15 digits +[0-9]" value={form.number} onChange={(e) => setForm({...form, number: e.target.value})}/>
            <h4>Correo</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
            <h4>Foto</h4>
                <Form.Control className="w-50 mx-auto mb-4" type="url" placeholder="Photo URL" value={form.photo} onChange={(e) => setForm({...form, photo: e.target.value})}/>
            <section>
                <Button variant="info" onClick={() => onSubmit(form)}><i className="bi bi-floppy"></i> Guardar</Button>
            </section>
        </>
    )
}

export default Formulario