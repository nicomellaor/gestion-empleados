import EmployeeSearch from '../components/EmployeeSearch';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteAxios } from '../Functions';
import { useNavigate } from 'react-router-dom';
import { ModalBody } from 'react-bootstrap';

function Delete() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState(null);

    const handleClose = () => setShow(false);

    const handleDelete = (employee) => {
        setEmployeeToDelete(employee);
        setShow(true);
    }

    const deleteEmployee = async () => {
        try {
            deleteAxios(employeeToDelete.id);  
            setShow(false);
            navigate('/');
        } catch (error){
            console.log(error.response);
        }
    }

    useEffect(() => {
        if (!employeeToDelete || !employeeToDelete.id) {
            setShow(false);
        }
    })

    return (
        <>
            <div className='d-flex justify-content-center align-items-center text-center flex-column my-5' data-bs-theme="dark">
                <h1>Borrar empleado</h1>
                <EmployeeSearch setData={handleDelete}/>
                <Link to="/"><Button variant="outline-secondary" className="mb-3"><i className="bi bi-arrow-return-left"></i> Volver</Button></Link>
            </div>
            <Modal show={show} onHide={handleClose} data-bs-theme="dark">
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <ModalBody>¿Estás seguro(a) de que deseas borrar este empleado?</ModalBody>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}><i className="bi bi-x-lg"></i> Cancelar</Button>
                    <Button variant="outline-danger" onClick={deleteEmployee}><i className="bi bi-trash"></i> Borrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete