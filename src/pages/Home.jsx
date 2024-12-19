import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import EmployeeTable from '../components/EmployeeTable';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
        <div className='d-flex justify-content-center align-items-center text-center flex-column mt-5 mb-5'>
            <h1>Software de Gestión de Empleados</h1>
            <img src="profile.png" width="50px"></img>
            <DropdownButton id="dropdown-button-drop-down-centered" title="Gestionar" className='mt-2' variant="light"> 
                    <Dropdown.Item as={Link} to="/add">Añadir</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/search">Buscar</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/edit">Editar</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/delete">Borrar</Dropdown.Item>
            </DropdownButton>
        </div>

        <EmployeeTable/>
      </>
    )
  }
  
  export default Home