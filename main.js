/*
CRUD ALUMNOS TKD

1. Crear "Molde"(objeto) alumno
    Tiene que tener los atributos minimos de un alumno, como su nombre, apellido, edad, clase
2. Al iniciar el programa se debe de tener un array vacío donde guardaremos los alumnos que creemos
3. Crear un menu donde el usuario pueda poner un input
4. Con el uso de Switch, podremos acceder a cada una de las acciones que quiera realizar
    Se pide:
        > Ver alumnos
        > Ver detalles alumno
        > Agregar Alumno
        > Modificar Alumno
        > Eliminar alumno
        > Salir

5. A futuro hacer que este CRUD no posea memoria volatil
6. Diseño web

*/

// Array de objetos (global)
const listaAlumnos = [];

function verAlumnos() {
    let info = "";
    listaAlumnos.map((alumno) => info += `${listaAlumnos.indexOf(alumno) + 1}. ${alumno.nombre} ${alumno.apellido}\n`)

    return info;
}

function verDetalleAlumno(alumno) {
    let infoAlumno = `Nombre: ${alumno.nombre}\nApellido: ${alumno.apellido}\nEdad: ${alumno.edad}\nClase: ${alumno.clase}`;
    return infoAlumno;
}

function crearAlumno() {
    const alumno = {
        nombre: "",
        apellido: "",
        edad: "",
        clase: ""
    }

    let setNombre = prompt("Escriba el nombre del alumno");
    let setApellido = prompt("Escriba el apellido del alumno");
    let setEdad = prompt("Escriba la edad del alumno");
    let setClase;
    if (setEdad > 3) {
        if (setEdad <= 6) {
            setClase = "Tigers";
        } else if (setEdad > 6 && setEdad < 13) {
            setClase = "Kids";
        } else if (setEdad >= 13) {
            setClase = "Jovenes y Adultos";
        }
    } else {
        setClase = "Es muy pequeño para entrar a clases";
    }

    alumno.nombre = setNombre;
    alumno.apellido = setApellido;
    alumno.edad = setEdad;
    alumno.clase = setClase;

    return alumno;

}

function modificarAlumno(alumno) {
    let atributoAModificar = Number(
        prompt(`Elija atributo a modificar:\n1. Nombre: ${alumno.nombre}\n2. Apellido: ${alumno.apellido}\n3. Edad: ${alumno.edad}\n4. Clase: ${alumno.clase}\n0. Salir`)
    );

    switch (atributoAModificar) {
        case 1:
            let nuevoNombre = prompt("Ingrese nuevo nombre");
            alumno.nombre = nuevoNombre;
            alert("Alumno modificado correctamente\n"+verDetalleAlumno(alumno))
            break;
        case 2:
            let nuevoApellido = prompt("Ingrese nuevo Apellido");
            alumno.apellido = nuevoApellido;
            alert("Alumno modificado correctamente\n"+verDetalleAlumno(alumno))
            break;
        case 3:
            let nuevaEdad = prompt("Ingrese nueva Edad");
            alumno.edad = nuevaEdad;
            alert("Alumno modificado correctamente\n"+verDetalleAlumno(alumno))
            break;
        case 4:
            let nuevaClase = prompt("Ingrese la nueva clase del Alummno");
            alumno.clase = nuevaClase;
            alert("Alumno modificado correctamente\n"+verDetalleAlumno(alumno))
            break;
        default:
            alert("Porfavor elija una opción mencionada");
    }

}

function eliminarAlumno(alumno) {
    listaAlumnos.splice(listaAlumnos.indexOf(alumno),1)
    alert("Nueva lista de alumnos\n"+verAlumnos());
 }




function menu() {
    let menu =
        "1. Ver Alumnos\n2. Ver detalle del alumno\n3. Crear Alumno\n4. Modificar datos del alumno\n5. Eliminar alumno\n6. Salir";
    while (true) {
        let eleccion = Number(prompt(menu));
        switch (eleccion) {
            case 1:
                if (listaAlumnos.length != 0) {
                    alert(verAlumnos());
                    break;
                } else {
                    alert("No hay alumnos registrados");
                }
                break;

            case 2:
                if (listaAlumnos.length != 0) {
                    let detalleAlumno = prompt(verAlumnos());
                    if (!isNaN(detalleAlumno)) {
                        detalleAlumno = Number(detalleAlumno);
                        alert(verDetalleAlumno(listaAlumnos[detalleAlumno - 1]));
                    }
                    break;

                } else {
                    alert("No hay alumnos registrados");
                }
                break;

            case 3:

                let nuevoAlumno = crearAlumno();
                listaAlumnos.push(nuevoAlumno);
                alert("Alumno creado exitosamente")
                break


            case 4:
                let alumnoAModificar = Number(prompt(verAlumnos())) - 1;
                
                modificarAlumno(listaAlumnos[alumnoAModificar]);
                break;
            case 5:
                let alumnoAEliminar = Number(prompt(verAlumnos())) - 1;
                eliminarAlumno(listaAlumnos[alumnoAEliminar]);
                break;
            case 6:
                return false;
            default:
                alert("Ingrese una opcion que esté dentro de las mencionadas");
        }
    }

}


menu();