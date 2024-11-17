async function getData(){
    const result = await fetch('https://randomuser.me/api?results=6')
    const character = await result.json();
    console.log(character)
    character.results.forEach(element => {
        const project_row = document.querySelector('.projects-row');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img')
        const div = document.createElement('div');
        div.className = "box flex"
        img1.src=`${element.picture.large}`;
        img2.src=`${element.picture.large}`;
        project_row.appendChild(div)
        div.appendChild(img1)
        //div.appendChild(img2)
        //project_row.appendChild(img1);

    });
}

async function getData2(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    console.log(character);
    const jsonArr = character.results.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    const jsonArrSliced = jsonArr.slice(0,4);
    character.results.forEach(element => {
        const randData = (min, max) => Math.floor(Math.random()*(max - min + 1) + min);
        const randIndex = randData(1, jsonArr.length);
        for(i = 0; i < jsonArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
                    <div class="boxx-1">
                        <img src="${jsonArr[randIndex][8][1]}" alt="">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perferendis eum excepturi ea itaque illum architecto placeat dolore enim doloremque?</p>
                    </div>
                    
                    `)
                    const services_row = document.querySelector('.services-row');
                    services_row.append(box)
            }
        }
    })
}

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
e.preventDefault()
console.log("hola")
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');
const mensaje = document.getElementById('mensaje');
const arr = [nombre, email, fecha, hora, mensaje];
const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
for(i = 0; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato adecuado`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nombre.value = "";
     email.value = "";
     fecha.value = "";
     hora.value = "";
     mensaje.value = "";
     return true;
}

const emailValido = (email) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

getData()
getData2()