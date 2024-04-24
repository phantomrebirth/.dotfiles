// document.getElementById("count").innerText = 5

// console.log(count)

// count = count + 1520
// console.log(count)
// count = count - 1500
// console.log(count)
// count = count * 10
// console.log(count)

// function countdown() {
//   console.log(3)
//   console.log(2)
//   console.log(1)
// }
// countdown()

//the Counter

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
  count += 1
  countEl.innerText = count
}

// textcontent is better than innertext because it shows the hidden stuff
function save() {
  let countstr = count + " - "
  saveEl.textContent += countstr
  countEl.textContent = 0
  count = 0
}

let name0 = "phantom. "
let wb = "welcome back "
let welcomeEl = document.getElementById("welcome-el").innerText = wb + name0 + "👋🏻"

let errorP = document.getElementById("error")
function errorb() {
  errorP.textContent = "Something went wrong, please don't do that."
}



// the BlackJack Game


let thecards = []
let sum = 0
let hasBlackjack = false // booleans
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Object
let player = {
  name: "phantom", // key-value
  chips: 666
}

playerEl.textContent = player.name + ": $" + player.chips

// let randomnumber = Math.random() // between 0 and 1 but doesn't touch the 1 or the zero
// let floorednumber = Math.floor(3.47666) // it removes the decimals

function getRandomcard() {
  let randomnumber = Math.floor(Math.random() * 13) + 1
  if (randomnumber > 10) {
    return 10
  }
  else if (randomnumber === 1) {
    return 11
  }
  return randomnumber
}



function startGame() {
  isAlive = true
  let first_card = getRandomcard()
  let second_card = getRandomcard()
  thecards = [first_card, second_card]
  sum = first_card + second_card
  renderGame()
}


function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let l = 0; l < thecards.length; l++) {
    cardsEl.textContent += thecards[l] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackjack = true
  } else {
    message = "get the fuck out nigga!!!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let third_card = getRandomcard()
    thecards.push(third_card)
    sum += third_card
    renderGame()
    newCard()
  }
}

// create a dice

// function rolldice() {
//   let randomnumber6 = Math.floor ( Math.random() * 6) + 1
//   return randomnumber6
// }


// AND

let ass = true
let my_dick = true
// && (and)
// || (or)
if (ass === true && my_dick === true) {
  my_dick_in_your_ass()
}
function my_dick_in_your_ass() {
  console.log("my dick in your ass")
}


// array

// let array = [0,1,2]
// console.log(array.length) // for how many items
// array.push(3)  // to add a new index
// array.pop()  // to remove the last index in the array
// array.shift() // to remove the first index in the array ( shift it to the right)
// array.unshift() // to add a new first index (shift it back to the left)

// for loop
// count to ten
// for (let i = 1; i < 11; i += 1) {
//   console.log(i)
// }

// for loop array
let arrayy = ["ydfbcyuadsb", "ydvc uy DataVie", "ydbcdu", "wgw7ygb", "aha"]
for (let a = 0; a < arrayy.length; a++) {
  console.log(arrayy[a])
}

let fCap = document.getElementById("fcap")
for (let c = 0; c < arrayy.length; c++) {
  fCap.textContent += arrayy[c] + " "
}



// the chrome extension

// the librewolf extinsion


let myLeads = [];
const ulEl = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const Leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

if (Leadsfromlocalstorage) {
  myLeads = Leadsfromlocalstorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function() {
  browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(Leads) {
  let listitems = "";
  for (let i = 0; i < Leads.length; i++) {
    listitems += `
      <li>
          <a target='_Blank' href='${Leads[i]}' style="color: blueviolet;">
              ${Leads[i]}
          </a>
      </li>
    `;
  }
  ulEl.innerHTML = listitems;
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
// myLeads = JSON.parse(myLeads)     // turn the myLeads string inta an array
// myLeads = JSON.stringify(myLeads)  // turn the myLeads array back to string
// console.log(typeof myLeads)      // to verify what type is that value

// localStorage.setItem("myName", "void")
// let xxx = localStorage.getItem("myName")
// localStorage.clear


// break the email string into multiple lines  -->
const xx = "void"
const xxname = "phantomrebirth"
const email = `
  hey ${xx}!
  how is it going?
  cheers ${xxname}
`
console.log(email)

const container = document.getElementById("container")
container.innerHTML = "<button onclick='enter()' >Enter</button>"
function enter() {
  container.innerHTML += "<p>thank you, now fuck off</p>"
}

const welcomeElz = document.getElementById("welcome-elz")

//.               parameters
function greetUser(greeting, namez) {
  welcomeElz.textContent = `${greeting}, ${namez} fuck`
}

//.              arguments (outside)
greetUser("zeby", "james")

function addz(numz1, numz2) {
  return numz1 + numz2
}
addz(3, 4)


// truthy
// falsy

// false
// 0
// ""
// null   --> how developers signalize emptiness
// undefined  --> how js signalize emptiness
// NaN
