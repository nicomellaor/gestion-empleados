import axios from "axios";
var ruta = "https://serious-perri-uautonoma-1d5297c7.koyeb.app/api/employees";

export const getAllAxios = async () => {
    try {
        const response = await axios.get(ruta);
        return response.data.employee;
    }
    catch (error) {
        console.log(error.response ? error.response : error.message);    
    }
};

export const getAxios = async (nro) => {
    try {
        const response = await axios.get(`${ruta}?id=${nro}`);
        return response.data.employee;
    }
    catch (error) {
        console.log(error.response ? error.response : error.message);    
    }
};

export const postAxios = async (employee) => {
    try {
        const response = await axios.post(ruta, employee);
        console.log(response);
    } catch (error) {
        console.log(error.response ? error.response : error.message);
    }
};

export const putAxios = async (nro, employee) => {
    try {
        const response = await axios.put(`${ruta}?id=${nro}`, employee);
        console.log(response);
    } catch (error) {
        console.log(error.response ? error.response : error.message);
    }
};

export const deleteAxios = async (nro) => {
    try {
        const response = await axios.delete(`${ruta}?id=${nro}`);
        console.log(response);
    } catch (error) {
        console.log(error.response ? error.response : error.message);
    }
};