import { data } from "./data.js"

function createControl(control) {
    switch (control.type) {
        case "slider":
            return `<label>${control.label}: </label><input type="range" class="input-range" min="${control.min}" max="${control.max}" step="${control.step}" value="${control.min}">`;

        case "select":
            return `<label>${control.label}: </label><select class="select">${control.options.map(option => `<option value="${option}">${option}</option>`).join("")}</select>`;

        case "toggle":
            return `<label>${control.label}: </label><label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>`;

        default:
            return "";
    }
}

function createDevice(deviceName) {
    const device = data.appliances.find(device => device.name === deviceName)
    const controlsHTML = device.controls.map(control => `<div class="control">${createControl(control)}</div>`).join("");
    let isToggle = false;
    for (const control of device.controls) {
        if (control.type === "toggle") {
            isToggle = true;
        }
    }
    if (isToggle) {
        return `<div class="device">
        <h3>${device.name}</h3>
        ${controlsHTML}
        </div>`;
    }
    return `<div class="device">
                <h3>${device.name}</h3>
                <div>Status: 
                <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
                </label>
                </div>
                ${controlsHTML}
            </div>`;
}

function renderDevices(deviceList) {
    const devicesContainer = document.getElementById("devicesContainer");

    deviceList.forEach(device => {
        console.log(device)
        const deviceHTML = createDevice(device);
        
        devicesContainer.innerHTML += deviceHTML;
    });
}

document.querySelector('.header button').addEventListener('click', () => {
    window.location.href = '../home.html';
});
const searchParams = new URLSearchParams(window.location.search);
const room = searchParams.get('room');
let db = JSON.parse(localStorage.getItem("rooms")) || {};
document.querySelector('.curr-room').innerText = room;
renderDevices(db[room]);