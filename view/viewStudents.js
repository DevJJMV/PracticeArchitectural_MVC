//Crear la vista del getListStudents
const studentsViewList  =(resp) =>{
    const listado = document.getElementById("listStudents");
    const fragment = new DocumentFragment();
    const tem = document.getElementById("templateList");
    //Consola.log(Tem);
    resp.forEach(element => {
        const listItem = tem.content.querySelector("li");
        listItem.textContent = element;
        const miElemento = listItem.cloneNode(true);
        fragment.appendChild(miElemento);
    });
    listado.appendChild(fragment);
}

const inserTitleList = () =>{
    const listado = document.getElementById("listDataStudent");
    const title = document.getElementById("h2");
    title.innerHTML = "<strong>Listado de Estudiantes</strong>";
    listado.insertAdjacentElement("afterbegin",title);
}

export { studentsViewList, inserTitleList};