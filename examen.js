const personas = [{ nombre: "Emanuel", edad: 20, peso: 105, estatura: 1.86, deporte: false },
{ nombre: "luciana", edad: 13, peso: 55, estatura: 1.60, deporte: true },
{ nombre: "lady", edad: 45, peso: 75, estatura: 1.67, deporte: false },
{ nombre: "santiago", edad: 18, peso: 85, estatura: 1.70, deporte: true },
{ nombre: "diego", edad: 24, peso: 65, estatura: 1.70, deporte: true },
{ nombre: "armando", edad: 76, peso: 80, estatura: 1.69, deporte: false },
{ nombre: "isabel", edad: 19, peso: 55, estatura: 1.65, deporte: true },
{ nombre: "valeria", edad: 20, peso: 50, estatura: 1.60, deporte: true },
];
const filtro = (personas) => {
    let array = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad > 16 & personas[i].edad < 34) {
            if (personas[i].estatura < 1.82) {
                if (personas[i].peso <= 80) {
                    if (personas[i].deporte) {
                        array.push(i)
                    }
                }
            }
        }
    }
    return array;
}
const main = (personas) => {
    let array = filtro(personas);
    console.log("Las personas que cumplen las condiciones son:")
    for (let i = 0; i < array.length; i++) {
        console.log(personas[array[i]].nombre)
    }
}
main(personas);