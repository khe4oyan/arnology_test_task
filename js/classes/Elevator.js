class Elevator {
  static states = {
    MOVING: "MOVING",
    STOPPED: "STOPPED", 
  };

  #currentFloor;
  #state;
  #elevatorDOM;

  constructor(currentFloor = 1) {
    this.#currentFloor = currentFloor;
    this.#state = Elevator.states.STOPPED;
    this.#elevatorDOM = null;
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

    this.#elevatorDOM = elevator;
    this.#elevatorDOM.style.setProperty('--currentFloor', 1);

    elevatorMine.appendChild(elevator);
    elevatorsDOM.appendChild(elevatorMine);
  }
  
  rangToFloor(floorNum) {
    return Math.abs(this.#currentFloor - floorNum);
  }

  // SETTERS & GETTERS
  set moveTo(floorNum) {
    if (this.#state === Elevator.states.MOVING) {
      return;
    }

    this.#state = Elevator.states.MOVING;
    const movingSeconds = this.rangToFloor(floorNum);

    this.#elevatorDOM.style.setProperty("--movingSeconds", `${movingSeconds + 1}s`);
    this.#elevatorDOM.style.setProperty('--currentFloor', floorNum + 1);
    
    setTimeout(() => {
      this.#currentFloor = floorNum;
      this.#state = Elevator.states.STOPPED;
    }, movingSeconds * 1000);
    
  }

  get isMoving() {
    return this.#state === Elevator.states.MOVING;
  }

  get isStopped() {
    return this.#state === Elevator.states.STOPPED;
  }
}

export default Elevator;