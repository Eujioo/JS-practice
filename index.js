const productos = [
  { categoria:"Almacenamiento", nombre: "Solido", precio: 500 },
  { categoria:"Almacenamiento", nombre: "Rigido", precio: 1000 },
  { categoria:"Procesadores", nombre: "Intel", precio: 3500 },
  { categoria:"Procesadores", nombre: "AMD", precio: 3000 },
  { categoria:"Mother", nombre: "Intel", precio: 1200 },
  { categoria:"Mother", nombre: "AMD", precio: 1200 },
  { categoria:"RAM", nombre: "DDR4", precio: 1500 },
  { categoria:"RAM", nombre: "DDR5", precio: 1800 },
  { categoria:"Video", nombre: "MSI", precio: 5000 },
  { categoria:"Video", nombre: "Gigabyte", precio: 5500 },
]

function mostrarProductos (productos) { //muestra listo prod
  productos.forEach((producto) => {
    console.log("Producto: " + producto.nombre);
    console.log("Categoria: " + producto.categoria);
    console.log("Precio: " + producto.precio);
    })
}
function filtrarProductosCat (productos , cat){ //filtra por categoria
  const producto = productos.filter((productos) => productos.categoria.includes (cat)) ;
  return producto;
}

//mostrarProductos(productos) //muestra la lista sin filtrar

const almacenamiento = filtrarProductosCat(productos , "Almacenamiento") //filtrado almacenamiento
almacenamiento.forEach((alm) => {
  console.log("Producto: " + alm.nombre);
  console.log("Categoria: " + alm.categoria);
  console.log("Precio: " + alm.precio);
  })

const procesadores = filtrarProductosCat(productos , "Procesadores") //filtrado procesadores
procesadores.forEach((pro) => {
  console.log("Producto: " + pro.nombre);
  console.log("Categoria: " + pro.categoria);
  console.log("Precio: " + pro.precio);
  })

  const mother = filtrarProductosCat(productos , "Mother") // filtrado mother
mother.forEach((mot) => {
  console.log("Producto: " + mot.nombre);
  console.log("Categoria: " + mot.categoria);
  console.log("Precio: " + mot.precio);
  })

  const ram = filtrarProductosCat(productos , "RAM") //filtrado RAM
  ram.forEach((r) => {
    console.log("Producto: " + r.nombre);
    console.log("Categoria: " + r.categoria);
    console.log("Precio: " + r.precio);
    })
  
    const video = filtrarProductosCat(productos , "Video") // filtrado Video
    video.forEach((vid) => {
      console.log("Producto: " + vid.nombre);
      console.log("Categoria: " + vid.categoria);
      console.log("Precio: " + vid.precio);
      })

      const totalProductos = productos.reduce((ac , producto) => ac + producto.precio, 0)  //calculo precio
      console.log("El precio de los productos es: " + totalProductos);

