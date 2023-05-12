

let id= 0

setTimeout(()=>{
    swal({
        title: "Atención",
        text: "Al clikkear en el botón 'OK' usted está aceptando comprar entradas en donde algunas peliculas tienen restricción etaria. Al momento de ingresar al lugar deberá mostrar DNI",
        icon: "warning",
    });
},1500)

//creo la clase peliculas y sus ids
class pelicula {
    constructor (nombre, genero, anio, productora, poster , cantidad, resumen){
        this.id = id++;
        this.nombre = nombre;
        this.genero = genero;
        this.anio = anio;
        this.productora = productora;
        this.poster = poster;
        this.cantidad = cantidad;
        this.resumen = resumen;
    }
}

const PelisNuevos = [] //array vacio
    let Avengers= new pelicula (
        "Avengers: End Game",
        "Accion",
        "2019",
        "Walt Disney Studios Motion Pictures",
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        1,
        )
    
    let Joker= new pelicula (
        "Joker",
        "Thriller",
        "2019",
        "Warner Bros",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-joker-2-1567010576.jpg",
        1,
    )

   let Parasite=  new pelicula(
        "Parasite",
        "Thriller",
        "2019",
        "WJ Entertainmet",
        "https://m.media-amazon.com/images/I/91IlGyji+KL.jpg",
        1,
    )
    let ToyStory= new pelicula (
        "Toy Story 4",
        "Animacion",
        "2019",
        "Walt Disney Studios Motion Pictures",   
        "https://http2.mlstatic.com/D_NQ_NP_687377-MLA32686608458_102019-O.jpg",
        1,
    )
    let MidSommar= new pelicula (
        "MidSommar",
        "Terror",
        "2019",
        "Nordisk Film",   
        "https://pics.filmaffinity.com/Midsommar-578791309-large.jpg",
        1,
    )
    let lallegada =new pelicula (
        "La llegada",
        "Scifi",
        "2016",
        "Paramount Pictures",
        "https://pics.filmaffinity.com/La_llegada-150207636-large.jpg",
        1,

    )
    let contratiemp= new pelicula (
        "Contratiempo",
        "Thriller",
        "2017",
        " Warner Bros.",
        "https://pics.filmaffinity.com/Contratiempo-621094614-large.jpg",
        1,
    )
    let scarface = new pelicula (
        "Scarface",
        "Acción",
        "1983",
        "Universal Pictures",
        "https://pics.filmaffinity.com/El_precio_del_poder-798722679-large.jpg",
        1,
    )
    let devilwears = new pelicula(
        "The Devil wears Prada",
        "Comedia",
        "2006",
        "20th Century Studios",
        "https://pics.filmaffinity.com/the_devil_wears_prada-912143633-large.jpg",
        1

    )
    
    let barbieparis = new pelicula(
        "Barbie: moda mágica en Paris",
        "Animacion",
        "2010",
        "Universal Pictures Home Entertainment",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnO-hEcPNJWJneB1izMQ_EsVjfc5DbjtqbJ2FqoRTHJuYnxxB_",
        1,

    )
    let tenthings = new pelicula(
        "10 razones para odiarte",
        "Comedia",
        "1999",
        "Walt Disney Studios Motion Pictures",
        "https://pics.filmaffinity.com/10_razones_para_odiarte-582281377-large.jpg",
        1,
    )
    let abracadabra = new pelicula(
        "Abracadabra",
        "Comedia",
        "1993",
        "Walt Disney Pictures",
        "https://pics.filmaffinity.com/Abracadabra-665291328-large.jpg",
        1,
    )
    let sharkb = new pelicula(
        "Las aventuras de Sharkboy y LavaGirl",
        "Fantasia",
        "2005",
        "Columbia Pictures",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlSfJrHWSUVwC9Sb2jNvWsppFHvepbuDl6qxMLgADL_0YTsHW",
        1,

    )
    let ladybird = new pelicula (
        "Lady Bird",
        "Indie",
        "2017",
        "",
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0Yf7_FepQU9VEbNsZ7824_2nvdFKOlogCo-yvJhSjuRA22aYg",
        1,
    )
    let howto = new pelicula (
        "Cómo entrenar a tu dragón 3",
        "Acción",
        "2019",
        "Universal Pictures",
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzxaIK2qzAnjBsSP2wixHgOGU6dujLmwE0rqKb5MljPqZVrEWy",
        1,
    )
    let chihiro= new pelicula (
        "El viaje de Chihiro",
        "Animacion",
        "2001",
        "Walt Disney Pictures",
        "https://i.pinimg.com/originals/0b/94/a4/0b94a491c6942b289675d8c64120435e.png",
        1
    )

   PelisNuevos.push(Avengers , Joker , Parasite , ToyStory, MidSommar, lallegada, contratiemp, scarface, devilwears, barbieparis, tenthings, abracadabra, sharkb, ladybird, howto, chihiro)
   const { nombre , genero , anio, productora, poster, cantidad } = Joker


   const peliculasid = document.getElementById("peliculas")
   const MContainer = document.getElementById("Mcontainer")
   const cantidadCarrito = document.getElementById ("cantidadCarrito")
    const precio = 450
    const Comentarios = document.getElementById("comentarios")
   let carrito = JSON.parse(localStorage.getItem("carrito")) || []
   function vaciarCarrito() {
    carrito = []
    console.log(carrito.length)
  MContainer.innerHTML = 'Tu carrito esta vacio'}


//Pelis al dom

PelisNuevos.forEach((pelicula) => {
    let content= document.createElement("div");
    content.innerHTML = `

    <img src="${pelicula.poster}" alt="${pelicula.nombre}" >
    <h2>${pelicula.nombre}</h2>
    <h3>Género: ${pelicula.genero}</h3>
    <h4> ${pelicula.anio} <br> distribuida por ${pelicula.productora}</h4>
    <p> Cantidad : ${pelicula.cantidad} </p>`
    ;
    peliculasid.append(content);

    let comprar = document.createElement ("button");
    comprar.innerText= `Comprar entradas`;
    
    content.append(comprar);
   

    comprar.addEventListener ("click", ()=> {
        
        Toastify({
            text: `Entrada para la película ${pelicula.nombre} agregada al carrito`,
            duration: 1500,
        }).showToast()
    
    const repetido = carrito.some((Pelirepetida) => Pelirepetida.nombre === pelicula.nombre );
        ;

        if (repetido){
            carrito.map ((pelicula) =>{
                if (pelicula.nombre === pelicula.nombre) {
                    pelicula.cantidad++;
                }
            })
        } else {

        carrito.push({
            nombre:pelicula.nombre,
            img: pelicula.poster,
            cantidad: pelicula.cantidad,
        })
        }

        carritoContador();
        guardarlocal();
    });

    console.log (carrito)

});



 // carrito 



function CrearCarrito() {
    MContainer.innerHTML = "";
    MContainer.style.display = "block";
    const MHeader = document.createElement("div");
    MHeader.className = "MHeader";
    MHeader.innerHTML = `
    <h1 class="MHeadertitulo"> Carrito</h1>`
    MContainer.append(MHeader);

    const Mbutton = document.createElement("h4");
    Mbutton.innerText = "❌";
    Mbutton.className = "cart-item-details";
    Mbutton.addEventListener("click", () => {
        MContainer.style.display = "none";


    });

    MHeader.append(Mbutton);

    carrito.forEach((pelicula) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "cart-item-details";
        carritoContenido.innerHTML = `
        <h3>${pelicula.nombre}</h3>
        <span class="restar"> - </span> 
        <p id="cantidadentradas"> ${pelicula.cantidad} </p>
         <span class="sumar"> + </span>
         <span class="eliminarproducto"> Eliminar Producto</span>
        <p> Total ${pelicula.cantidad * precio} </p>
        `;

        MContainer.append(carritoContenido);
 
  

    //sumar y restar entradas        
     let restar = carritoContenido.querySelector(".restar")

        restar.addEventListener("click", () => {
            if (pelicula.cantidad != 1){
            pelicula.cantidad--
            console.log("restar")
            }
         CrearCarrito(); 
         guardarlocal(); 
        })


    let sumar = carritoContenido.querySelector(".sumar")

        sumar.addEventListener("click", () => {
            pelicula.cantidad++
            console.log("sumar")
         CrearCarrito();
         guardarlocal();
        })

    
    console.log(carrito.length);

    let eliminar = carritoContenido.querySelector(".eliminarproducto");

    eliminar.addEventListener("click", ()=>{
        eliminarproducto(pelicula.nombre);
        Toastify({
            text: "Entrada eliminada del carrito",
            duration: 1500,
            style: {
                background: "linear-gradient(to right, #ca5050, #ca5050)",
              },
        }).showToast()

        });
        
    
    })

    
    const total =carrito.reduce ((acc, el)=> acc + el.cantidad * precio, 0)

    const totalcompra= document.createElement ("div")
    totalcompra.className = ("totalcompra")
    totalcompra.innerHTML = `Total a pagar ${total}  
    <button id="comprar" class="comprar"> comprar entradas</button>`
    MContainer.append (totalcompra);

    let comprar = document.getElementById("comprar")
    comprar.addEventListener ('click', ()=>{
        if (carrito.length !=0){
        carrito.length = 0
        MContainer.innerHTML= 'tu carrito está vacío'
        swal({
            title: "Compra realizada",
            text: "Tu compra fue realizada con exito",
            icon: "success",
        })
        vaciarCarrito();
        guardarlocal();
        CrearCarrito();}
         else {
        swal({
            title: "Carrito vacio",
            text: "Para poder realizar la compra debes seleccionar al menos una entrada",
            icon: "error",
        })
        guardarlocal();
        CrearCarrito() }
     })
}








verCarrito.addEventListener( "click", CrearCarrito);

    const eliminarproducto = (nombre) => {
        const encontrarId = carrito.find ((element) => element.nombre === nombre)

        carrito = carrito.filter ((carritoId) =>{
            return carritoId !== encontrarId;
            });
        carritoContador();
        guardarlocal();
        CrearCarrito();
        }

    const carritoContador = () => {
        cantidadCarrito.style.display = "block";

        const carritolength = carrito.length
        localStorage.setItem("carritolength", JSON.stringify(carritolength))

        cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritolength"))

    
    }


//fin carrito


    //guardo en el local storage
    const guardarlocal = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    JSON.parse(localStorage.getItem("carrito"));


//filtro    
    let filtrarPorGeneroChange = document.getElementById("filtrarPorGeneroChange")

    //evento change
    
  filtrarPorGeneroChange.addEventListener("change", filtrarPorGenPeli)
    
   // funcion para filtrar 

    
    
    function filtrarPorGenPeli(e){
        //obtenemos el valor seleccionado del select
        let filtro = e.target.value;
        //elemento de HTML > resultado
        let mostrarPorGenero = document.getElementById("mostrarPorGenero")
        mostrarPorGenero.innerHTML = "" //limpia el contenido antes de mostrar
        //criterio de filtrado 
        let peliFiltrada;
        if (filtro === "Accion") {
            peliFiltrada= PelisNuevos.filter((pelicula) => pelicula.genero === "Accion")
        } else if (filtro === "Thriller") {
            peliFiltrada= PelisNuevos.filter((pelicula) => pelicula.genero === "Thriller")
        } else if (filtro === "Animacion") {
            peliFiltrada = PelisNuevos.filter((pelicula) => pelicula.genero === "Animacion")
        }else if (filtro === "Terror") {
            peliFiltrada = PelisNuevos.filter((pelicula) => pelicula.genero === "Terror")
        }else if (filtro === "Scifi") {
            peliFiltrada = PelisNuevos.filter((pelicula) => pelicula.genero === "Scifi")
        }else if (filtro === "Comedia") {
            peliFiltrada = PelisNuevos.filter((pelicula) => pelicula.genero === "Comedia")
        } else if (filtro === "Fantasia") {
            peliFiltrada = PelisNuevos.filter((pelicula) => pelicula.genero === "Fantasia")
        } else if (filtro === "Indie") {
            peliFiltrada = PelisNuevos.filter((pelicula) => pelicula.genero === "Indie")
        }            
       
    console.log (peliFiltrada)

        //crear un nuevo elemento de HTML para peli filtrado y agregado por el DOM
       
for (const pelis of peliFiltrada) {
    let ul = document.createElement ("ul")
    ul.innerHTML = `<h3>"${pelis.nombre}"</h3>`
    ul.className = "h3filtro"
    mostrarPorGenero.append(ul)
    let comprar = document.createElement ("button");
    comprar.innerText= `Comprar entradas para ${pelis.nombre}`;
    ul.append(comprar);
   

    comprar.addEventListener ("click", ()=> {
        
        Toastify({
            text: `Entrada para la película ${pelis.nombre} agregada al carrito`,
            duration: 1500,
        }).showToast()
    
    const repetido = carrito.some((Pelirepetida) => Pelirepetida.nombre === pelis.nombre );
        ;

        if (repetido){
            carrito.map ((pelis) =>{
                if (pelis.nombre === pelis.nombre) {
                    pelis.cantidad++;
                }
            })
        } else {

        carrito.push({
            nombre:pelis.nombre,
            img: pelis.poster,
            cantidad: pelis.cantidad,
        })
        }

        carritoContador();
        guardarlocal();
    });
} }
   
  
//anuncio de quien compró entrads

    fetch ('https://jsonplaceholder.typicode.com/users')
        .then ((resp)=>resp.json())
        .then ((dato) => {

            dato.forEach ((info, index)=>{
               
                setTimeout(() => 
    
                    Toastify({
                    text: ` ${info.name} ya compró sus entradas!`,
                    duration: 1500,
                    position: "center",
                    style: {
                        background: "linear-gradient(to right, #77ff33,  #ffff33",
                      },
                    })
                .showToast()
                 
            
        , index * 60000);
       
        })

    })
        



    

  
