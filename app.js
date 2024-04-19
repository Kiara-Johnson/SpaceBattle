const myShip = {
  name: "USS Medusa",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,

  attack: (alienShips) => {
    if (Math.random() < myShip.accuracy) {
      //damage accrued
      // console.log(alienShips[0].hull)
   alienShips[0]['hull'] -= myShip.firepower;
  //  console.log(alienShips[0]['hull']);
      console.log(`Enemy ship has received ${myShip.firepower} damage.`);
      if (alienShips[0].hull <= 0) {
        console.log("Ship destroyed");
        // ask user to continue playing or retreat
        // attack first ship
        // myShip.attack(alienShips[0]);
      }
    } else {
      console.log("Attack missed");
    }
    console.log(Math.random(), myShip.accuracy, alienShips[0].hull);
  },
};

class AlienShip {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;

    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }

  attack(myShip) {
    if (Math.random() < this.accuracy) {
      //damage accrued
      myShip.hull = myShip.hull - alienShips[0].firepower;
      console.log(`USS Medusa has received ${this.firepower} damage.`);
      if (myShip.hull <= 0) {
        console.log("Ship destroyed");
      }
    } else {
      console.log("Enemy attack missed");
    }
    console.log(Math.random(), this.accuracy, myShip.hull);
  }
}
let alienShips = [];
for (let i = 0; i < 6; i++){  
let alienArray = new AlienShip()
  alienShips.push(alienArray)
};


// console.log(alienShips);
// console.log(myShip);

// const userImput = () => {
//   confirm('Attack next ship?');
// }
const arrayShift = () => {
  alienShips.shift();
  // console.log(alienShips[0])
}

const start = () => {
  alert("Prepare for battle!");  
  //have my ship attack the alien ship
  // console.log(alienShips);
  // console.log(myShip);
  console.log(myShip.attack(alienShips));
  //alien ship actions
  if (alienShips[0].hull > 0) {
    console.log(alienShips[0].attack(myShip));
    if (alienShips[0].hull <= 0){
  //       // alienShips.shift();
        arrayShift();
  //       // userImput();
    }
  }
  //attack next ship?

};
// console.log(alienShips[0].hull);
const button = document.querySelector("button");
button.addEventListener("click", start);

