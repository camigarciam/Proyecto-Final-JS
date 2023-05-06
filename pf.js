//creo la clase peliculas y sus ids

let id= 0

class pelicula {
    constructor (nombre, genero, anio, productora, poster , cantidad){
        this.id = id++;
        this.nombre = nombre;
        this.genero = genero;
        this.anio = anio;
        this.productora = productora;
        this.poster = poster;
        this.cantidad = cantidad;
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
    

    
   PelisNuevos.push(Avengers , Joker , Parasite , ToyStory, MidSommar)
   const { nombre , genero , anio, productora, poster, cantidad } = Joker


   const peliculasid = document.getElementById("peliculas")
   const MContainer = document.getElementById("Mcontainer")
   const cantidadCarrito = document.getElementById ("cantidadCarrito")
    const precio = 450
   let carrito = JSON.parse(localStorage.getItem("carrito")) || []

//Pelis al dom
PelisNuevos.forEach((pelicula) => {
    let content= document.createElement("div");
    content.innerHTML = `

    <img src="${pelicula.poster}" alt="${pelicula.nombre}" >
    <h2>${pelicula.nombre}</h2>
    <h3>Género: ${pelicula.genero}</h3>
    <p> Cantidad : ${pelicula.cantidad} </p>
    
`
    ;
    peliculasid.append(content);
    

    let comprar = document.createElement ("button");
    comprar.innerText= `Comprar entradas para ${pelicula.nombre}`;
    peliculasid.append(comprar);
   

    comprar.addEventListener ("click", ()=> {
    
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
        <p> Cantidad de entradas: ${pelicula.cantidad} </p>
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

        });
        
    
    })

    const total = carrito.reduce ((acc, el)=> acc + el.cantidad * precio, 0)

    const totalcompra= document.createElement ("div")
    totalcompra.className = ("totalcompra")
    totalcompra.innerHTML = `total a pagar ${total}`
    MContainer.append (totalcompra);
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



    /*
    const totalcompra = document.createElement("div");
    totalcompra.className = "totalcarrito"
    totalcompra.InnerHTml = `total a pagar: ${total}`;
    MHeader.append(totalcompra);
    */
    

//fin carrito


    //guardo en el local storage
    const guardarlocal = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    JSON.parse(localStorage.getItem("carrito"));




    //puedo agregar un sweet alert avisando que hay pelis +16


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
        }
       
    

        //crear un nuevo elemento de HTML para peli filtrado y agregado por el DOM
        peliFiltrada.forEach(info =>{
        let p = document.createElement("p")
      mostrarPorGenero.innerHTML = `El celular filtrado es el modelo ${info.nombre} de la marca ${info.genero}`
      mostrarPorGenero.append(p)
    })
 }

    


    

  
  /* <form>
        <label for="${pelicula.nombre}-fecha">Elegí tu fecha:</label>
        <input type="date" id="${pelicula.nombre}-fecha" name="fecha">
        <br><br>
        <label for="${pelicula.nombre}-idioma">Elegí tu idioma:</label>
        <select id="${pelicula.nombre}-idioma" name="idioma">
            <option value="english">Ingles</option>
            <option value="spanish">Español</option>
            <option value="french">Frances</option>
            <option value="chinese">Chino</option>
        </select>
        <br>
        <br>
</form>*/ 