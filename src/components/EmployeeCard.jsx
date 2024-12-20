function EmployeeCard({ employee }){
    if(!employee || !employee.id){
        return null;
    }
    return (
        <div className="employee-card">
            <div className="my-3">
                <img
                    src={employee.photo}
                />
            </div>
            <div className="mb-3">
                <h5 className="mb-2">{employee.name}</h5>
                <p className="mb-2"><i>{employee.job}</i></p>
                <p className="mb-1"><b>Id:</b> {employee.id}</p>
                <p className="mb-1"><b>Salario:</b> ${employee.salary}</p>
                <p className="mb-1"><b>Ciudad:</b> {employee.city}</p>
                <p className="mb-1"><b>DOB:</b> {employee.birthdate}</p>
                <p className="mb-1"><b>Teléfono:</b> {employee.number}</p>
                <p className="mb-1"><b>Email:</b> {employee.email}</p>
            </div>
        </div>
    )
}

export default EmployeeCard