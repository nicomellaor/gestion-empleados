import axios from "axios";

export const getAllAxios = async () => {
    var ruta = "https://66fd5caa699369308954e548.mockapi.io/users";
    try {
        const response = await axios.get(ruta);
        return response.data;
    }
    catch (error) {
        console.log(error.response);    
    }
};

export const getAxios = async () => {
    var ruta = "https://66fd5caa699369308954e548.mockapi.io/users";
    var nro = document.getElementById("nro").value;
    try {
        const response = await axios.get(ruta+"/"+nro);
        return response.data;
    }
    catch (error) {
        console.log(error.response);    
    }
};

export const postAxios = () => {
    var ruta = "https://66fd5caa699369308954e548.mockapi.io/users";
    var employee = {
        "name": document.getElementById("name").value,
        "birthdate": document.getElementById("birthdate").value,
        "sex": document.getElementById("sex").value,
        "city": document.getElementById("city").value,
        "job": document.getElementById("job").value,
        "salary": document.getElementById("salary").valueAsNumber,
        "number": document.getElementById("number").value,
        "photo": document.getElementById("photo").value
    };
    axios.post(ruta, employee).then(response => {
        console.log(response);
    })
};

export const putAxios = () => {
    var ruta = "https://66fd5caa699369308954e548.mockapi.io/users";
    var nro = document.getElementById("nro").value;
    var employee = {
        "name": document.getElementById("name").value,
        "birthdate": document.getElementById("birthdate").value,
        "sex": document.getElementById("sex").value,
        "city": document.getElementById("city").value,
        "job": document.getElementById("job").value,
        "salary": document.getElementById("salary").valueAsNumber,
        "number": document.getElementById("number").value,
        "photo": document.getElementById("photo").value
    };
    axios.put(ruta+"/"+nro, employee).then(response => {
        console.log(response);
    })
};

export const deleteAxios = () => {
    var ruta = "https://66fd5caa699369308954e548.mockapi.io/users";
    var nro = document.getElementById("nro").value;
    axios.delete(ruta+"/"+nro).then( response => {
        console.log(response);
    })
};