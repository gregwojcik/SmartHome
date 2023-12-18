export class Room {
    constructor(roomName) {
      this.db = JSON.parse(localStorage.getItem("rooms")) || {};
      this.roomName = roomName;
      this.appliances = [];
    //   this.createHTML();
  
      this.db[roomName] = this.appliances;
  
      this.saveToLocalStorage();
    }
    createHTML() {
      const element = document.createElement("div");
      element.classList.add("room");
      element.setAttribute("id", this.roomName);
  
      const name = document.createElement("span");
      name.innerText = this.roomName;
  
      element.appendChild(name);
  
      document.querySelector(".added-rooms").appendChild(element);
    }
    addAppliances(appliances) {
      this.appliances = this.appliances.concat(appliances);
      this.db[this.roomName] = this.appliances;
      this.saveToLocalStorage();
    }
  
    saveToLocalStorage() {
      localStorage.setItem("rooms", JSON.stringify(this.db));
    }
  }