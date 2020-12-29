// Creating a Promise
const isMomHappy = true;

const willIGetNewPhone = new Promise(
  (resolve, reject) => {
    if( isMomHappy) {
      const phone = { brand: 'apple', color: 'golden'};
      resolve(phone);
    } else {
      const reasonWhyNot = new Error('mom is not happy');
      reject(reasonWhyNot);
    };
  }
);


// Chaned promises

const showOff = (phone) => {

  const message = 'Hey, Mom got me a new ' + phone.color + ' ' + phone.brand;
  return Promise.resolve(message);
};

// Consuming Promises

const askMom = () => {
  willIGetNewPhone
  .then(
    showOff)
  .then(
    (fulfilled) => { console.log(fulfilled);}) // resolve part of promise : yes we got the phone)
  .catch(
    (rejected) => {console.log(rejected.message);} );// rejected part of the promises
};

askMom();

