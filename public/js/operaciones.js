
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0B9QB9o5UX6zT09IEnBGU87Rk3gcO0qQ",
    authDomain: "proyecto-p-86072.firebaseapp.com",
    databaseURL: "https://proyecto-p-86072.firebaseio.com",
    projectId: "proyecto-p-86072",
    storageBucket: "proyecto-p-86072.appspot.com",
    messagingSenderId: "1076385683855",
    appId: "1:1076385683855:web:2236b3c6a62aae720853fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

/*var storage = firebase.storage();*/

var nombre = document.getElementById('name');
var apellido = document.getElementById('apellido');
var edad = document.getElementById('number');
var profesion = document.getElementById('profesion');
var telefono = document.getElementById('number2');
var correo = document.getElementById('email');
var descripcion = document.getElementById('descripcion');
var Listado = document.getElementById('Listado');

function agregarDatos() {
  db.collection('persona')
    .add({
      apellido: apellido.value,
      correo: correo.value,
      descripcion: descripcion.value,
      edad: edad.value,
      nombre: nombre.value,
      profesion: profesion.value,
      telefono: telefono.value
     })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      alert('datos agregados exitosamente', docRef.id);
      limpiarDatos();
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });

  //console.log(`el nombre es : ${txtname.value} y el apellido es, ${apellidos.value}`);
}

leerDatos();

function leerDatos() {
  db.collection('personas')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        Listado.innerHTML += `
          <tr>
            <td>  ${doc.data().nombre} </td>
            <td> ${doc.data().apellido} </td>
            <td>  ${doc.data().edad} </td>
            <td> ${doc.data().profesion} </td>
            <td>  ${doc.data().telefono} </td>
            <td> ${doc.data().correo} </td>
            <td> ${doc.data().descripcion} </td>
            <td><button onclick="eliminar('${
              doc.id
            }')" class="btn btn-danger"> <i class="fa fa-trash-o" aria-hidden="true"></i></button><td>
          <tr>

        `;
        console.log(doc.id, ' => ', doc.data());
      });
    })
    .catch(function (error) {
      console.log('Error: ', error);
    });
}
function limpiarDatos() {
  nombre.value = '';
  Apellido.value = '';
  edad.value = '';
  profesion.value = '';
  telefono.value = '';
  correo.value = '';
  descripcion.value = '';
}

function eliminar(id) {
  db.collection('persona')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Usuario eliminado!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
} 

   /*id="name"
   id="Apellido" 
   id="number" 
   id="Profesion" 
   id="number2" 
   id="email" 
   id="Descripcion*/
      
      
