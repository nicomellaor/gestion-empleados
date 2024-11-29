import axios from "axios";

export const getAllAxios = async () => {
    var ruta = "https://serious-perri-uautonoma-1d5297c7.koyeb.app/api/employees";
    try {
        const response = await axios.get(ruta);
        return response.data.employee;
    }
    catch (error) {
        console.log(error.response);    
    }
};

export const getAxios = async (nro) => {
    var ruta = "https://serious-perri-uautonoma-1d5297c7.koyeb.app/api/employees";
    try {
        const response = await axios.get(`${ruta}?id=${nro}`);
        return response.data.employee;
    }
    catch (error) {
        console.log(error.response);    
    }
};

export const postAxios = (employee) => {
    var ruta = "https://serious-perri-uautonoma-1d5297c7.koyeb.app/api/employees";
    axios.post(ruta, employee).then(response => {
        console.log(response);
    })
};

export const putAxios = (nro, employee) => {
    var ruta = "https://serious-perri-uautonoma-1d5297c7.koyeb.app/api/employees";
    axios.put(`${ruta}?id=${nro}`, employee).then(response => {
        console.log(response);
    })
};

export const deleteAxios = (nro) => {
    var ruta = "https://serious-perri-uautonoma-1d5297c7.koyeb.app/api/employees";
    axios.delete(`${ruta}?id=${nro}`).then( response => {
        console.log(response);
    })
};