import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { deleteAxios } from '../Functions';

function Eliminar() {
    return(
        <>
            <h1>Eliminar empleado</h1>
            <section>
                <h4>ID</h4>
                <Form.Control id ="nro" type="text"/>
            </section>
            <section>
                <Button variant="danger" onClick={deleteAxios}>Eliminar</Button>
            </section>
        </>
    )
}

export default Eliminar