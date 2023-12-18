import { Room } from "./models.js"

const addNewRoomBtn = document.querySelector(".add-new");

let db = JSON.parse(localStorage.getItem("rooms")) || {};

Object.keys(db).forEach((roomName) => {
    const newRoom = new Room(roomName);
    newRoom.createHTML();
    newRoom.addAppliances(db[roomName]);
});

const rooms = document.querySelectorAll(".room");
rooms.forEach(room => {
    room.addEventListener('click', () => {
        const url = "http://localhost:5500/views/appliances.html?";
        const query = new URLSearchParams({ "room": room.getAttribute("id") })
        console.log(url+query)
        window.location.href = url + query;
    });
});

addNewRoomBtn.addEventListener("click", () => {
    window.location.href = "../views/add-appliances.html"
  });