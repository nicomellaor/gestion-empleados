import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function TarjetaEmpleado({employee}){
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={employee.photo}/>
            <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><b>ID:</b> {employee.id}</ListGroup.Item>
                <ListGroup.Item><b>Fecha de nacimiento:</b> {employee.birthdate}</ListGroup.Item>
                <ListGroup.Item><b>Sexo:</b> {employee.sex}</ListGroup.Item>
                <ListGroup.Item><b>Puesto:</b> {employee.job}</ListGroup.Item>
                <ListGroup.Item><b>Salario:</b> ${employee.salary}</ListGroup.Item>
                <ListGroup.Item><b>Teléfono:</b> {employee.number}</ListGroup.Item>
            </ListGroup>
        </Card>
        </>
    )
}

export default TarjetaEmpleado