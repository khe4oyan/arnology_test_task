// FIFO principe

class Floor {
  #building_ref;
  #floorNumber;

  constructor(building, floorNumber) {
    this.#building_ref = building;
    this.#floorNumber = floorNumber;
  }

  renderDOM(floorsDOM) {
    // <div class="floors__floor">
    //   <div class="person"></div>
    //   <div class="person"></div>
    // </div>

    const floor = document.createElement("div");
    floor.classList.add("floors__floor");
    
    const person = document.createElement("div");
    person.classList.add("person");

    floor.appendChild(person);

    floor.addEventListener("click", () => {
      this.#building_ref.callFrom(this.#floorNumber);
    });

    floorsDOM.prepend(floor);
  }
}

export default Floor;