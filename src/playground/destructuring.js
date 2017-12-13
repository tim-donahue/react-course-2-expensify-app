//
// Object Destructuring
//

//
// const person = {
//     name: 'Tim',
//     age: 65,
//     location: {
//         city: 'Seymour',
//         temp: 28
//     }
// };
//
// const {name: firstName = 'Anon Y Mous', age} = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}`);
//
// const {temp: temperature, city} = person.location;
//
// if ( city && temperature ) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self Published'} = book.publisher;
//
// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1299 S Juniper St', 'Philadelphia', 'Pensylvania', '19147'];
//
// const [, city, state] = address;
//
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [ itemName, , priceMedium ] = item;

console.log(`A medium ${itemName} costs ${priceMedium}`);