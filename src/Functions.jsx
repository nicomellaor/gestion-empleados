import axios from "axios";

export const getAllAxios = async () => {
    var ruta = "http://localhost:8000/api/employees";
    try {
        const response = await axios.get(ruta);
        return response.data.employee;
    }
    catch (error) {
        console.log(error.response);    
    }
};

export const getAxios = async (nro) => {
    var ruta = "http://localhost:8000/api/employees";
    try {
        const response = await axios.get(`${ruta}?id=${nro}`);
        return response.data.employee;
    }
    catch (error) {
        console.log(error.response);    
    }
};

export const postAxios = (employee) => {
    var ruta = "http://localhost:8000/api/employees";
    axios.post(ruta, employee).then(response => {
        console.log(response);
    })
};

export const putAxios = (nro, employee) => {
    var ruta = "http://localhost:8000/api/employees";
    axios.put(`${ruta}?id=${nro}`, employee).then(response => {
        console.log(response);
    })
};

export const deleteAxios = (nro) => {
    var ruta = "http://localhost:8000/api/employees";
    axios.delete(`${ruta}?id=${nro}`).then( response => {
        console.log(response);
    })
};