import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import { postAxios } from '../Functions';
import Formulario from '../components/Formulario';

function Insertar() {
    return(
        <>
            <h1>Insertar nuevo empleado</h1>
            <section>
                <Formulario/>
            </section>
            <section>
                <Button variant="info" onClick={postAxios}>Enviar</Button>
            </section>
        </>
    )
}

export default Insertar