import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabla from '../components/Tabla';

function Menu() {
    return(
        <>
        <h1>Gestión de Empleados</h1>
        <Container fluid>
            <Row>
                <Col xs={6} className="rounded shadow">
                    <h2>Menú</h2>
                    <section>
                        <h3>Insertar Empleado</h3>
                        <Link to="/insertar">
                            <Button variant="primary">Crear</Button>
                        </Link>
                    </section>
                    <section>
                        <h3>Buscar Empleado</h3>
                        <Link to="/buscar">
                            <Button variant="success">Buscar</Button>
                        </Link>
                    </section>
                    <section>
                        <h3>Editar Empleado</h3>
                        <Link to="/editar">
                            <Button variant="warning">Editar</Button>
                        </Link>
                    </section>
                    <section>
                        <h3>Eliminar Empleado</h3>
                        <Link to="/eliminar">
                            <Button variant="danger">Eliminar</Button>
                        </Link>
                    </section>
                </Col>
                <Col xs={6}>
                    <h2>Tabla</h2>
                    <Tabla></Tabla>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Menu