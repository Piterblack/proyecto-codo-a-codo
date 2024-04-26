const Url = 'https://fakestoreapi.com/products';

    fetch(Url)
    .then(response => response.json())
    .then((data)=>{
         // Mostrar productos en el DOM
        
        const cantidadProductos = 4
        const indiceAleatorios = funcionramdom(data.length,cantidadProductos)
        const productosAleatorios = indiceAleatorios.map(indice => data[indice]);

        console.log(productosAleatorios);
        mostrarproduct(productosAleatorios)
        


    })
    // Función para mostrar productos en el DOM
    const mostrarproduct = (array)=>{
            const contenedorProductos = document.getElementById("contenedor-productos")
        
           const elementodiv= document.createElement('div')
           elementodiv.classList.add('mi-div')
           contenedorProductos.appendChild(elementodiv)

            // Mapear cada producto a un elemento HTML
            
            const elementoProducto= array.map(producto =>{

                // Crear elementos HTML para mostrar la información del producto

                const productElement= document.createElement('a')
                productElement.setAttribute('href', '#');
                productElement.classList.add('producto'); 
               
                const nombreProduct=document.createElement('h3')
                const imageProduct =document.createElement('img')
                const priceProduct =document.createElement('span')
                const envioProduct =document.createElement('p')

                // Asignar contenido y atributos a los elementos HTML
                
                imageProduct.src =producto.image
                imageProduct.width= 300
                imageProduct.height=300
                nombreProduct.textContent= producto.title
                priceProduct.textContent= ` $ ${producto.price}`
                envioProduct.textContent= ` ENVIO GRATIS `

               
                productElement.appendChild(imageProduct)
                productElement.appendChild(nombreProduct);
                productElement.appendChild(priceProduct)
                productElement.appendChild(envioProduct)



                return productElement

            })
            // Agregar los elementos de productos al contenedor de productos en el DOM
            elementoProducto.map(elemento => {
                elementodiv.appendChild(elemento);
                

            });
         
        contenedorProductos.appendChild(elementodiv)

    }

      

    // /Texto recomendado para vos
    const contenedorProductos = document.getElementById("contenedor-productos")
    const texth3= document.createElement('h3')
    texth3.textContent= 'Recomendado para vos'
    texth3.classList.add('text-recomendado')
    contenedorProductos.appendChild(texth3)

    const funcionramdom = ( array ,cantidad)=>{
        const indices = []
        while(indices.length < cantidad){

            const indice = Math.floor(Math.random() * array)
            if(!indices.includes(indice)){
                indices.push(indice)
            }


        }
        return indices
    }




