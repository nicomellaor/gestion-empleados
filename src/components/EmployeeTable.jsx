import { useEffect, useState } from "react"
import { getAllAxios } from "../Functions";
import Table from 'react-bootstrap/Table';

function EmployeeTable() {
    const [data, setData] = useState([]);

    useEffect (() => {
        const getData = async () => {
            const employees = await getAllAxios();
            setData(employees);
        };
        getData();
    }, [data]);
    
    return (
        <Table striped bordered hover responsive variant="dark" className="rounded-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Puesto</th>
                    <th>Salario (USD)</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>
                {data.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.job}</td>
                        <td>${employee.salary}</td>
                        <td>{employee.city}</td>
                    </tr> 
                ))}
            </tbody>
        </Table>
    )
  }
  
  export default EmployeeTable