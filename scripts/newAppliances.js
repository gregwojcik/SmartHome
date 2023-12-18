import { data } from "./data.js"
import { Room } from "./models.js"


function createApplianceCheckboxes() {
    const appliancesWrapper = document.querySelector('.appliances-wrapper');
    data.appliances.forEach((appliance) => {
        const checkbox = document.createElement('label');
        checkbox.innerHTML = `
            <input type="checkbox" name="appliance" value="${appliance.name}">
            ${appliance.name}
        `;
        appliancesWrapper.appendChild(checkbox);
    });
}

createApplianceCheckboxes();

document
  .getElementById("appliance-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const roomName = document.getElementById("room-name").value;
    const selectedAppliances = [];
    const checkboxes = document.querySelectorAll(
      'input[name="appliance"]:checked'
    );

    checkboxes.forEach(function (checkbox) {
      selectedAppliances.push(checkbox.value);
    });

    const newRoom = new Room(roomName);
    newRoom.addAppliances(selectedAppliances);

    console.log(newRoom);

    document.getElementById("appliance-form").reset();
    window.location.href = "../index.html"
  });

  document.querySelector('.header button').addEventListener('click', () => {
    window.location.href = '../index.html';
});
