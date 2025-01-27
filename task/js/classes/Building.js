import Floor from '../classes/Floor.js';
import Elevator from './Elevator.js';

class Building {
  #elevators;
  #floors;

  constructor(floorsCount) {
    // init state
    this.#elevators = [];
    this.#floors = [];

    // create elevators(const 3)
    for (let i = 0; i < 3; ++i) {
      this.#elevators.push(new Elevator(this));
    }

    // create floors
    for (let i = 0; i < floorsCount; ++i) {
      this.#floors.push(new Floor(this, i));
    }
  }

  callFrom(floorNum) {
    console.log(`Call Elevator from: ${floorNum}`);

    // floorNum start from 0 to 5
    // TODO
  }

  renderDOM() {
    // <div class="building">
    //   <div class="elevators"></div>
    //   <div class="floors"></div>
    // </div>
    
    const building = document.createElement("div");
    building.classList.add("building");

    const elevators = document.createElement('div');
    elevators.classList.add("elevators");

    const floors = document.createElement('div');
    floors.classList.add("floors");

    // create elevator DOMs
    for (let i = 0; i < this.#elevators.length; ++i) {
      this.#elevators[i].renderDOM(elevators, i);
    } 
    
    // create floors DOMs
    for (let i = 0; i < this.#floors.length; ++i) {
      this.#floors[i].renderDOM(floors);
    } 

    building.appendChild(elevators);
    building.appendChild(floors);
    document.body.appendChild(building);
  }
}

export default Building;