import { students } from "../model/modelStudents.js";
import { studentsViewList, inserTitleList } from "../view/viewStudents.js";


const buttonCall = document.getElementById("btnListar");

//Obtenido del módelo

const getListStudents = (students) =>{
    let datos = [];
    for (let s of students){
        let datosTemplate = `${s.name} ${s.lastName} ${s.age}`;
        datos.push(datosTemplate);
    }
    return datos;
}

buttonCall.addEventListener("click", ()=>{
    const response = getListStudents(students);
    //Console.log("Respone"); esto verifica que el dato esta llegando, lo verificamos en la consola
    studentsViewList(response);
    inserTitleList();

})