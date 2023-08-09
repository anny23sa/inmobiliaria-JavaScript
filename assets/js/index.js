const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión ",
      src:
      "https://media.gettyimages.com/id/1281180946/es/foto/hermosa-casa-de-lujo.jpg?s=612x612&w=gi&k=20&c=QuOGh94hJSXvJRnCIDI0tyWG_zI7b3JsuOMXyDV2eUo=",
      rooms: 5,
      m: 500
    }
  ];
 
function verPropiedades(array=propiedadesJSON){  
let template ="" 
const tbody = document.querySelector(".propiedades")
for (let propiedad of array) {
    template += `
    <div class="propiedad">
    <div class="img" style="background-image: url(${propiedad.src})"></div>

    <section>
        <h5>${propiedad.name}</h5> 
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
    </div>
`;
console.log("valor de template: ", template)
}
tbody.innerHTML = template;
totalPropiedades = document.querySelector(".py-3 span")
totalPropiedades.innerHTML = array.length
}

//llamada a la funcion para carga inicial
verPropiedades()


//eventoclicck en boton buscar
const btn = document.querySelector(".btn")
btn.addEventListener("click",()=>{
 // alert("haz hecho click en boton buscar")
 //variable de cuarto, desde, hasta
 const cuarto = Number(document.querySelector("#cuarto").value)
 const desde = Number(document.querySelector("#desde").value)
 const hasta = Number(document.querySelector("#hasta").value)
 //cear un arreglo auxiliar
 
if (cuarto == "" || cuarto<= "0"){
  alert("Faltan campos por llenar (cuarto)");
  return;
}
else if(desde == "" || desde<= "0"){
  alert("Faltan campos por llenar (desde)");
  return;
}
else if(hasta == "" || hasta <= "0"){
    alert("Faltan campos por llenar (hasta)");
    return;
}
 let arregloTemporal = []
 //let contador = 0
//console.log("cuarto, desde, hasta: :",cuarto, desde, hasta)
 for (let propiedad of propiedadesJSON) {
     if (propiedad.rooms >= cuarto && propiedad.m >= desde && propiedad.m <= hasta){
 //     alert("esta propiedad cumple con el buscador: " + propiedad.name)
  //    contador +=1
      arregloTemporal.push(propiedad)

    }
}
verPropiedades(arregloTemporal)
/*alert("Propiedades de acuerdo a su solicitud: ")*/
//verPropiedades()

})

const btn1 = document.querySelector("#btn1") 
btn1.addEventListener("click",()=>verPropiedades()
)





 