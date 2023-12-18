import { createLineChart } from "./createCharts.js";

const acChart = document.querySelector('.ac-chart canvas').getContext('2d');
const heatingChart = document.querySelector('.heating-chart canvas').getContext('2d');
const lightsChart = document.querySelector('.lights-chart canvas').getContext('2d');

function generateRandomData(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
}
  
  const days = ['22.01.2023', '23.01.2023', '24.01.2023', '25.01.2023', '26.01.2023', '27.01.2023', '28.01.2023'];
  const lightsData = generateRandomData(days.length);
  const acData = generateRandomData(days.length);
  const heatingData = generateRandomData(days.length);
  
  createLineChart(acChart, 'AC', days, acData);
  createLineChart(heatingChart, 'Heating', days, heatingData);
  createLineChart(lightsChart, 'Lights', days, lightsData);