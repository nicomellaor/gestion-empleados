import 'bootstrap/dist/css/bootstrap.min.css'; 
import { postAxios } from '../Functions';
import Formulario from '../components/Formulario';
import { useNavigate } from 'react-router-dom';

function Insertar() {
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
    return(
        <>
            <h1>Insertar nuevo empleado</h1>
            <Formulario onSubmit={handlePost}/>
        </>
    )
}

export default Insertar