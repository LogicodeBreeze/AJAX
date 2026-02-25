//let empleados = [];

const desplegable = document.getElementById("empleados");
const nombre= document.getElementById("nombre");
const edad = document.getElementById("edad");

const personas = [
  {
    id: 1,
    nombre: "Ana",
    edad: 28
  },
  {
    id: 2,
    nombre: "Luis",
    edad: 35
  }
];

personas.forEach(person => {
    const opcion = document.createElement("option");
    opcion.value= person.id;
    opcion.textContent=person.nombre;
    desplegable.appendChild(opcion)
})


























/*const nombre= document.getElementById("nombre");
const edad = document.getElementById("edad");
const puesto= document.getElementById("puesto");

const cargarEmpleados=(employees)=>{
    employees.forEach(emp => {

        const opcion = document.createElement("option");
        opcion.value = emp.empleado_id;
        opcion.textContent= emp.nombre;

        desplegable.appendChild(opcion);
 

    });
}

desplegable.addEventListener("change",(e)=>{
    let id = e.target.value;
    empleados.forEach(emp => {
        if (Number(id) === emp.empleado_id) {
            nombre.textContent = emp.nombre;
            nombre.textContent = emp.nombre;
            nombre.textContent = emp.nombre;
                    }
    })
})


let peticion = new XMLHttpRequest();

peticion.open("GET","empleados.json",true);


peticion.onreadystatechange = ()=>{
    if(peticion.readyState===4 && peticion.status===200){
        empleados = JSON.parse(peticion.responseText);
        console.log(empleados)
        cargarEmpleados(empleados)

    }


}

peticion.send()*/




