// Opdracht 1: Destructure price en refreshRate uit onderstaand object, en log ze daarna in de terminal

const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

const { price, refreshRate } = product;

console.log(price);
console.log(refreshRate);

// Opdracht 2: Destructure type en brand uit onderstaand object, en log ze daarna in de terminal

const productInformation = {
  general: {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
  },
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
}

const { general: { type, brand } } = productInformation;

console.log(type);
console.log(brand);

// Opdracht 3: destructure wifi en bluetooth uit onderstaand object, en log ze daarna in de terminal

const tvOptions = {
  options: {
    colors: [
      'black',
      'silver',
      'gold',
      'sand',
    ],
    connectivity: {
      popular: {
        wifi: true,
        bluetooth: false,
      },
      infrared: false,
    }
  },
};

const { options: { connectivity: { popular: { wifi, bluetooth }}}} = tvOptions;

console.log(wifi);
console.log(bluetooth);

// Opdracht 4: Destructure beide waardes uit onderstaande array, en log ze daarna in de terminal

const connectivity = ['wifi', 'bluetooth'];

const [connectOne, connectTwo] = connectivity;

console.log(connectOne);
console.log(connectTwo);

// Opdracht 5: Destructure de >eerste< en >derde< waarde uit onderstaande array, en log ze daarna in de terminal

const tvSizes = [41, 43, 46, 56, 65];

const [first, , third, , ] = tvSizes;

console.log(first);
console.log(third);

// opdracht 6: Destructure name en address uit de return value van deze functie en log ze daarna in de terminal

function getCompanyDetails() {
  return {
    name: 'Novi Hogeschool',
    address: 'Zonnebaan 9, Utrecht',
  }
}

const { name, address } = getCompanyDetails();

console.log(name);
console.log(address);

// opdracht 7: Destructure beide zinnetjes uit de return value van de getDetails functie en log ze in de terminal. Let op: de functie verwacht argumenten bij het aanroepen!

function getDetails(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}

const [ nameIs, ageIs ] = getDetails('Jack', 7);

console.log(nameIs);
console.log(ageIs);