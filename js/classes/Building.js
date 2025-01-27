import Floor from '../classes/Floor.js';
import Elevator from './Elevator.js';

class Building {
  #elevators;
  #floors;

  constructor(floorsCount, elevatorCount = 3) {
    // init state
    this.#elevators = [];
    this.#floors = [];

    // Получить значение переменной --floorHeight
    const root = document.documentElement;
    root.style.setProperty("--floorsCount", floorsCount);
    root.style.setProperty("--elevatorCount", elevatorCount);

    // create elevators(const 3)
    for (let i = 0; i < elevatorCount; ++i) {
      this.#elevators.push(new Elevator());
    }

    // create floors
    for (let i = 0; i < floorsCount; ++i) {
      this.#floors.push(new Floor(this, i));
    }
  }

  callFrom(floorNum) {
    let usableElevatorInd = 0;
    let minRange = Infinity;

    // calculating elevator min range to floor
    for (let i = 0; i < this.#elevators.length; ++i) {
      const elevator = this.#elevators[i];
      if (elevator.isStopped) {
        const rangToFloor = elevator.rangToFloor(floorNum);
        if (rangToFloor < minRange) {
          minRange = rangToFloor;
          usableElevatorInd = i;
        }
      }
    }

    this.#elevators[usableElevatorInd].moveTo = floorNum;
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