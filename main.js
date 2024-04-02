async function obtenerDatosPais(nombrePais) {
    const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`);
    const datos = await respuesta.json();
    const pais = datos[0];
    return {
        nombre: pais.name.common,
        moneda: Object.values(pais.currencies)[0].name,
        coordenadas: pais.latlng
    };
}
obtenerDatosPais('Mexico').then(console.log);
