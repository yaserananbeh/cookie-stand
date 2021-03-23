'use strict';

let theTotalpruchasedInAllLocation = 0; // this variable to find the total of the perchased cookies in all location
let mainTable = document.getElementById('mainTable'); //this to select the table from index.html page
let locations = [];// this array to hold the name of location everytime we make instance from our constructor
const workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

/** This function to make the Head Row in my table */
function firstRowFunction() {
  let mainTable = document.getElementById('mainTable');
  let firstRow = document.createElement('tr');
  mainTable.appendChild(firstRow);

  for (let i = 0; i < workHours.length + 2; i++) {
    let tdFirstRow = document.createElement('th');
    firstRow.appendChild(tdFirstRow);
    tdFirstRow.textContent = workHours[i - 1];
    if (i === 0) {
      tdFirstRow.textContent = 'Locations'.toUpperCase();
    }
    else if (i === (workHours.length + 1)) {
      tdFirstRow.textContent = 'Daily Totals'.toUpperCase();
    }

  }
}
/**Start doing the constructor function */
const Locations = function (name, minNoOfCustomer, maxNoOfCustomer, avgNumberCookies) {
  this.name = name;
  this.minNoOfCustomer = minNoOfCustomer;
  this.maxNoOfCustomer = maxNoOfCustomer;
  this.avgNumberCookies = avgNumberCookies;
  this.cookiesPerHour = [];
  locations.push(this.name);
};
Locations.prototype.randomNoCustomers = function (min, max) {
  min = Math.ceil(this.minNoOfCustomer);
  max = Math.floor(this.maxNoOfCustomer);
  return Math.floor(Math.random() * (max - min) + min);
};
Locations.prototype.numOfPurchesedCookies = function (avg, num) {
  avg = Math.floor(this.avgNumberCookies);
  num = this.randomNoCustomers();
  this.cookiesPerHour.push(avg * num);
  return avg * num;

};
/*------------------------------------*/
/* start render function  */
/*------------------------------------*/

Locations.prototype.render = function () {

  let mainTable = document.getElementById('mainTable');
  let rowEl = document.createElement('tr');
  mainTable.appendChild(rowEl);
  let locationName = document.createElement('th');
  rowEl.appendChild(locationName);
  locationName.textContent = (this.name).toUpperCase();

  let sumInThisLocation = 0;
  for (let i = 0; i < workHours.length; i++) {
    let varNumOfPurchesdCookies = this.numOfPurchesedCookies();
    sumInThisLocation += varNumOfPurchesdCookies;
    let dataEl = document.createElement('td');
    rowEl.appendChild(dataEl);
    dataEl.textContent = `${this.cookiesPerHour[i]}`;
  }

  let oneLocationTotal = document.createElement('th');
  rowEl.appendChild(oneLocationTotal);
  oneLocationTotal.textContent = sumInThisLocation;
  theTotalpruchasedInAllLocation += sumInThisLocation;

};

/**End doing constructor function */

/**Start make an instances from the constructor */
firstRowFunction();
const seattle = new Locations('seattle', 23, 65, 6.3);
seattle.render();
const tokyo = new Locations('tokyo', 3, 24, 1.2);
tokyo.render();
const dubai = new Locations('dubai', 11, 38, 3.7);
dubai.render();
const paris = new Locations('paris', 20, 38, 2.3);
paris.render();
const lima = new Locations('lima', 2, 16, 4.6);
lima.render();

/** End making instances */

/* start the last row function */
function lastRow() {
  const tableHt = document.createElement('th');
  mainTable.appendChild(tableHt);
  tableHt.textContent = 'Totals';
  for (let i = 0; i < workHours.length + 1; i++) {
    const tableHt = document.createElement('th');
    mainTable.appendChild(tableHt);
    let tempN = (seattle.cookiesPerHour[i]) + (tokyo.cookiesPerHour[i]) +
      (dubai.cookiesPerHour[i]) + (paris.cookiesPerHour[i]) + (lima.cookiesPerHour[i]);
    tableHt.textContent = tempN;
    if (i === (workHours.length)) {
      tableHt.textContent = theTotalpruchasedInAllLocation;
    }
  }
}
lastRow();
/*End the last row function */

/** start send data to the homepage  */

/**First list to send the locations  */
let listOFLocations = document.getElementById('listOFLocations');
let ulEl = document.createElement('ul');
listOFLocations.appendChild(ulEl);
for (let i = 0; i < locations.length; i++) {
  let liEl = document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent = locations[i].toUpperCase();
}
/** End send data to the homepage  */

