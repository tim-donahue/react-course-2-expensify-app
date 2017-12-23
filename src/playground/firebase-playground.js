import * as firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

const database = firebase.database();
//
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//
//     console.log(expenses);
//   });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });



// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Fancy Sandwich',
//     note: '',
//     amount: 1295,
//     createdAt: 39628943265329
//   })
// }, 4000);
// My solution for converting returned object to an array for redux
//
// database.ref('expenses').once('value')
//   .then((snapshot) => {
//     const objdata = snapshot.val();
//     const arraydata = Object.keys(objdata).map((key) => {
//       return (
//         {
//           id: key,
//           ...objdata[key]
//         }
//       )
//     });
//
//     console.log(arraydata);
//   });


// database.ref('notes').push({
//       title: 'Second Note!',
//       body: 'This is my note'
//     });


// database.ref('notes/-L0zrtnhHPUmrz9Hsrcn').update({
//
//   }
// )

// database.ref('notes/-L0zrtnhHPUmrz9Hsrcn').remove();

// setup expenses with 3 items

// import expenses from '../tests/fixtures/expenses';

// expenses.map(
//   ( {id, description, amount, note, createdAt} ) => {
//     database.ref('expenses').push({
//       description,
//       amount,
//       note,
//       createdAt
//     });
//   }
// );


//
// database.ref().set({
//   name: "Tim Donahue",
//   age: 35,
//   stressLevel: 6,
//   job: {
//     title: 'Product Manager',
//     company: 'Google'
//   },
//   location: {
//     city: "Meriden",
//     country: "United States"
//   }
// }).then(() =>{
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed.', error)
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('isSingle has been removed');
//   })
//   .catch((err) => {
//     console.log('Caught error removing data', err);
//   });

// database.ref('isSingle').set(null)
//   .then(() => {
//     console.log('isSingle has been removed');
//   })
//   .catch((err) => {
//     console.log('Caught error removing data', err);
//   });
//
// database.ref()
//   .update({
//     name: "Andrew",
//     age: 26,
//     job: 'Web developer',
//     isSingle: null
//   })
//   .then(() => {
//     console.log("data has been updated");
//   })
//   .catch((e) => {
//     console.log("error updating data", e);
//   });
//
// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': "Amazon",
//     'location/city': "Seatle"
//   })
//   .then(() => {
//     console.log("data has been updated");
//   })
//   .catch((e) => {
//     console.log("error updating data", e);
//   });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data', e);
//   });

//
//

// const onValueChange = database.ref()
//   .on("value",
//     (snapshot) => {
//       console.log(snapshot.val());
//     },
//     (e) => {
//       console.log("Error fetching data:", e);
//     }
//   );
// console.log('value', onValueChange);
//
// database.ref()
//   .off(onValueChange);
//


// setTimeout(() => {
//   database.ref()
//   .update({
//     age: 5
//   })
// }, 3500);
//
// setTimeout(() => {
//   database.ref()
//     .off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref()
//     .update({
//       age: 7
//     })
// }, 10500);

//
// database.ref()
//   .on('value',
//     (snapshot) => {
//       const data = snapshot.val();
//       console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//     },
//     (err) => {
//       console.log("Error retrieving data", err);
//     }
//   );
//
// setTimeout(() => {
//   database.ref()
//     .update({
//       name: "Bob",
//       "job/company": "Lifesize"
//     });
// }, 2500);
//



