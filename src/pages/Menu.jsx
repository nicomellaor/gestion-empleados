import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';

function Menu() {
    return(
        <>
        <h1>Gestión de Empleados</h1>
        <section>
            <h2>Insertar nuevo Empleado</h2>
            <Link to="/insertar">
                <Button variant="primary">Crear</Button>
            </Link>
        </section>
        <section>
            <h2>Buscar Empleado</h2>
            <Link to="/buscar">
                <Button variant="success">Buscar</Button>
            </Link>
        </section>
        <section>
            <h2>Editar Empleado</h2>
            <Link to="/editar">
                <Button variant="warning">Editar</Button>
            </Link>
        </section>
        <section>
            <h2>Eliminar Empleado</h2>
            <Link to="/eliminar">
                <Button variant="danger">Eliminar</Button>
            </Link>
        </section>
        </>
    )
}

export default Menu