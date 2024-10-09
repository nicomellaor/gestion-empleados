import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button'; 

function Menu() {
    return(
        <>
        <h1>Gestión de Empleados</h1>
        <section>
            <h2>Insertar nuevo Empleado</h2>
            <a href="/insertar">
                <Button variant="primary">Crear</Button>
            </a>
        </section>
        <section>
            <h2>Buscar Empleado</h2>
            <a href="/buscar">
                <Button variant="success">Buscar</Button>
            </a>
        </section>
        <section>
            <h2>Editar Empleado</h2>
            <a href="/editar">
                <Button variant="warning">Editar</Button>
            </a>
        </section>
        <section>
            <h2>Eliminar Empleado</h2>
            <a href="/eliminar">
                <Button variant="danger">Eliminar</Button>
            </a>
        </section>
        </>
    )
}

export default Menu