let url_base = 'https://api.openweathermap.org/data/2.5/weather?q'
let api_key = '81880d50cc0b6e6e0b94d3b883e4387d';
let difKelvin = 273.15




document.getElementById('botonBusqueda').addEventListener('click',() =>{
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad){
    fetch(`${url_base}=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const datosClima = document.getElementById('datosClima');
    datosClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].descripcion
    
    const ciudadTitulo = document.createElement('H2');
    ciudadTitulo.textContent = ciudadNombre;
    const temperaturaInfo = document.createElement('P');
    temperaturaInfo.textContent = `la temperatura es ${Math.floor(temperatura - difKelvin)}°c`;
    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = descripcion;

    datosClima.appendChild(ciudadTitulo)
    datosClima.appendChild(temperaturaInfo)
    datosClima.appendChild(descripcionInfo)
}