import { useNavigate } from "react-router-dom"
import { postAxios } from "../Functions";
import EmployeeForm from "../components/EmployeeForm"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Add(){
    const navigate = useNavigate();
    const handlePost = async (form) => {
        try {
            postAxios(form);
            console.log("Datos enviados correctamente")
            navigate('/');
        } catch (error){
            console.log(error.response);
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center text-center flex-column my-5'>
            <h1>Añadir nuevo empleado</h1>
            <EmployeeForm onSubmit={handlePost}/>
            <Link to="/"><Button variant="outline-secondary" className="mt-3"><i className="bi bi-arrow-return-left"></i> Volver</Button></Link>
        </div>
    )
}

export default Add