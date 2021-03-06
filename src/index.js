import './style/style.css';

const header = document.querySelector('header');
const section = document.querySelector('section');

// Obtaining the JSON
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new XMLHttpRequest();

// open request with GET
request.open('GET', requestURL);

// set the XHR request to convert the JSON response directly into a JavaScript object
request.responseType = 'json';

// Then we send the request with the send() method
request.send();

// involves waiting for the response to return from the server, then dealing with it.
request.onload = () => {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

// Populating the header
function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj.squadName;

  const myParagraph = document.createElement('p');
  myParagraph.textContent = `Hometown of the squad: ${obj.homeTown} | Formed in : ${obj.formed} | Secret Base location: ${obj.secretBase}`;
  header.append(myH1, myParagraph);
}

// poulate the section with hero information cards
function showHeroes(obj) {
  const heroes = obj.members;

  for (let i = 0; i < heroes.length; i =+1) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
    myPara2.textContent = `Age: ${heroes[i].age}`;
    myPara3.textContent = 'Superpowers:';

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j =+1) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}



// const happyFanForm = document.createElement('form');
// happyFanForm.setAttribute('id', 'happy_fan_form');
// const yesRadio = document.createElement('input');
// yesRadio.setAttribute('type', 'radio');
// yesRadio.setAttribute('name', 'happy?');
// yesRadio.setAttribute('value', 'happy Fan');
// const yesRadioLab = document.createElement('label');
// yesRadioLab.textContent = 'Yes! happy fan';

// const noRadio = document.createElement('input');
// noRadio.setAttribute('type', 'radio');
// noRadio.setAttribute('name', 'happy?');
// noRadio.setAttribute('value', 'unhappy fan');
// const noRadioLab = document.createElement('label');
// noRadioLab.textContent = 'No! unhappy fan';

// const submitBtn = document.createElement('button');
// submitBtn.setAttribute('id', 'happy_btn');
// submitBtn.textContent = 'Did the super hero squad get the fan vote?';

// const breakLn = document.createElement('br');

// happyFanForm.append(yesRadioLab, yesRadio, breakLn, noRadioLab, noRadio, submitBtn);

// section.appendChild(happyFanForm);
// let isHappyFan = false;

// const showFunVote = () => {
//   const radios = document.querySelectorAll('input[name="happy?"]');
//   for (let i = 0; i < radios.length; i += 1) {
//     if (radios[i].checked) {
//       // alert(radio.value);
//       // break;
//       // isHappyFan = (radio.value === 'happy Fan');
//       isHappyFan = radios[i].value;
//       console.log(isHappyFan);

//       break;
//     }
//   }
// };

// submitBtn.addEventListener('click', () => showFunVote());
// // console.log(isHappyFan);
