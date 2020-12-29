// Creating a Promise
const isMomHappy = true;

const willIGetNewPhone = new Promise(
  (resolve, reject) => {
    if( isMomHappy) {
      const phone = { brand: 'apple', color: 'gold'};
      resolve(phone);
    } else {
      const reasonWhyNot = new Error('mom is not happy');
      reject(reasonWhyNot);
    };
  }
);