document.getElementById("agregarAlCarrito").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegación)

    // Guarda el estado del carrito en el almacenamiento local
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push("Producto Nuevo");
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Redirige al usuario a la página del carrito
    window.location.href = "carrito.html";
});
