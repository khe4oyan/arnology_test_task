class Elevator {
  static states = {
    MOVING_DOWN: "MOVING_DOWN",
    MOVING_UP: "MOVING_UP",
    STOPPED: "STOPPED", 
  };

  #building_ref;
  #currentFloor;
  #state;
  #movingFloorTo;

  constructor(building, currentFloor = 1) {
    this.#building_ref = building;
    this.#currentFloor = currentFloor;
    this.#state = Elevator.states.STOPPED;
    this.#movingFloorTo = -1;
  }

  renderDOM(elevatorsDOM, elevatorNum) {
    // <div class="elevators__elevatorMine">
    //   <div class="elevators__elevator">3</div>
    // </div>

    const elevatorMine = document.createElement("div");
    elevatorMine.classList.add("elevators__elevatorMine");

    const elevator = document.createElement("div");
    elevator.classList.add("elevators__elevator");
    elevator.innerText = elevatorNum + 1;

    elevatorMine.appendChild(elevator);
    elevatorsDOM.appendChild(elevatorMine);
  }
}

export default Elevator;