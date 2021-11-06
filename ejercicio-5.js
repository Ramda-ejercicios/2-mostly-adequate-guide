//Ejercicio sobre composiciones
const R = require('ramda');

const cars = [{
        name: 'Aston Martin One-77',
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: true,
    },
    {
        name: 'Ferrari caballito',
        horsepower: 553,
        dollar_value: 1950000,
        in_stock: false,
    },
    {
        name: 'Lamborgini aventador',
        horsepower: 950,
        dollar_value: 1250000,
        in_stock: true,
    },
];

/* const isLastInStock = (cars) => {
    const lastCar = R.last(cars);
    return R.prop('in_stock', lastCar);
}; */
// composisición de isLastInStock
const isLastInStock = R.compose(
    R.prop('in_stock'),
    R.last,
);

/* const averageDollarValue = (cars) => {
    const dollarValues = map(c => c.dollar_value, cars);
    return average(dollarValues);
}; */

const averageDollarValue = R.compose(
    //converge usado para generar un promedio
    R.converge(R.divide, [R.sum, R.length]),
    R.map(R.prop('dollar_value')),
)

console.log(isLastInStock(cars))
console.log(averageDollarValue(cars))