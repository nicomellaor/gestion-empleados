import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';

function Formulario() {
    return(
        <>
            <h4>Nombre</h4>
                <Form.Control id="name" type="text" placeholder="Name"/>
            <h4>Fecha de nacimiento</h4>
                <Form.Control id="birthdate" type="date"/>
            <h4>Sexo</h4>
                <Form.Control id="sex" type="text" placeholder="Sex"/>
            <h4>Ciudad</h4>
                <Form.Control id="city" type="text" placeholder="City"/>
            <h4>Trabajo</h4>
                <Form.Control id="job" type="text" placeholder="Job"/>
            <h4>Salario (USD)</h4>
                <Form.Control id="salary" type="number" placeholder="Salary"/>
            <h4>Teléfono</h4>
                <Form.Control id="number" type="text" placeholder="Phone-number"/>
            <h4>Foto</h4>
                <Form.Control id="photo" type="url" placeholder="Photo URL"/>
        </>
    )
}

export default Formulario