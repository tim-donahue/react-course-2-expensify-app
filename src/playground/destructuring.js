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

const book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self Published'} = book.publisher;

console.log(publisherName);