const values = [
    { nombre: 'Gerardo', edad: 50 },
    { nombre: 'Marta', edad: 52 },
    { nombre: 'Juan', edad: 25 }
];

const personaMayorEdad = values.reduce((personaMayor, personaActual) => {
    return personaActual.edad > personaMayor.edad ? personaActual : personaMayor;
}, values[0]);

console.log(personaMayorEdad);