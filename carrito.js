// Obtener el parámetro de consulta de la URL
const urlParams = new URLSearchParams(window.location.search);
const producto = urlParams.get('producto');

// Mostrar el producto en el carrito
if (producto) {
    const carritoContenedor = document.getElementById("carritoContenedor");
    carritoContenedor.innerHTML = `<p>Producto agregado al carrito: ${producto}</p>`;
} else {
    const carritoContenedor = document.getElementById("carritoContenedor");
    carritoContenedor.innerHTML = "<p>No hay productos en el carrito</p>";
}
