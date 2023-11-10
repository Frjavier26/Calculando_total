const cantidadInput = document.querySelector('#cantidad-input');
const colorInput = document.querySelector('#color-input');
const precioLaptop = document.querySelector('#resultado')
const calcular = document.querySelector('#boton-calcular')
const sumaTotal = document.querySelector('#suma-total')
const precioLaptopAct = 400000;
const cantidadTotal = document.querySelector('#cantidadLaptop')
const bolaColor = document.querySelector('.bola-color')

precioLaptop.innerHTML = 400000





function calculaTotal() {
    const cantidad = cantidadInput.value
    const precio = precioLaptopAct
    sumaTotal.innerHTML = (Number(cantidad) * Number(precio)).toLocaleString();
    cantidadTotal.innerHTML = cantidadInput.value
    color = colorInput.value
    bolaColor.style.backgroundColor = color
}