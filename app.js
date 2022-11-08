const myShip = {
  name: "USS Medusa",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,

  attack: () => {
    if (Math.random() < myShip.accuracy) {
      //damage accrued
      alienShips.hull = alienShips.hull - myShip.firepower;
      console.log(`Enemy ship has received ${myShip.firepower} damage.`);
       if (alienShips.hull <= 0) {
      console.log("Ship destroyed");
    }
    } else {
      console.log("Attack missed");
    }
    console.log(Math.random(), myShip.accuracy, alienShips.hull);
  },
};

class AlienShip {
  constructor(hull, firepower, accuracy, hullLeft) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;

    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }

  attack() {
    if (Math.random() < this.accuracy) {
      //damage accrued
      myShip.hull = myShip.hull - alienShips.firepower;
      console.log(`USS Medusa has received ${this.firepower} damage.`);
      if (myShip.hull <= 0) {
      console.log("Ship destroyed");
    }
    }  else {
      console.log("Enemy attack missed");
    }
    console.log(Math.random(), this.accuracy, myShip.hull);
  }
}

let alienShips = new AlienShip();

console.log(alienShips);
console.log(myShip);
console.log(alienShips.attack(myShip));
console.log(myShip.attack(alienShips));

// const game = {
//     start: document.querySelector('button'),

//     button.addEventListener('click', (event)=>{
// }
