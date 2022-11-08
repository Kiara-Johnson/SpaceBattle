// class MyShip {
//   constructor(name, hull, firepower, accuracy) {
//   name = "USS Medusa";
//   hull = 20;
//   firepower = 5;
//   accuracy = 0.7;
//   }
// attack(){
//     if (Math.random() < this.accuracy) {
//       console.log("Enemy ship has received 5 damage.");
//     } else {
//         console.log('Attack missed');
//     }
//     console.log(Math.random(), this.accuracy)
//   }
// };
const myShip = {
    name: "USS Medusa",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
  
    attack: () => {
      if (Math.random() < myShip.accuracy) {
        console.log("Enemy ship has received 5 damage.");
      } else {
          console.log('Attack missed');
      }
      console.log(Math.random(), myShip.accuracy)
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

 attack(){
    if (Math.random() < this.accuracy) {
      console.log(`USS Medusa has received ${this.firepower} damage.`);
    } else {
        console.log('Enemy attack missed');
    }
    console.log(Math.random(), this.accuracy);
  }
};

let alienShips = new AlienShip();
// const myShip = new MyShip();

console.log(myShip);
console.log(alienShips.attack(myShip));
console.log(myShip.attack(alienShips));
console.log(alienShips.attack(myShip));
console.log(myShip.attack(alienShips));
console.log(alienShips.attack(myShip));
console.log(myShip.attack(alienShips));
console.log(alienShips);
// const game = {
    
// }