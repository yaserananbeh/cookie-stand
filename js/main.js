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
  locations.push(this);
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

/* Start fetch data from the form and add them to instance */

let mainForm = document.getElementById('mainForm');
mainForm.addEventListener('submit', addStore);
function addStore(event) {
  event.preventDefault();
  let nameFromUser = event.target.name.value;
  let minNoOfCustomerFromUser = event.target.minNoOfCustomer.value;
  let maxNoOfCustomerFromUser = event.target.maxNoOfCustomer.value;
  let avgNumberCookiesFromUser = event.target.avgNumberCookies.value;

  let numOfRows = mainTable.rows.length;
  mainTable.deleteRow(numOfRows - 1); //delete the last row that contains the totals

  // console.log(nameFromUser,minNoOfCustomerFromUser,maxNoOfCustomerFromUser,avgNumberCookiesFromUser); //this to check if we fetch the user inputes
  const store = new Locations(nameFromUser, minNoOfCustomerFromUser, maxNoOfCustomerFromUser, avgNumberCookiesFromUser); // make new instance 
  store.render();
  mainForm.reset(); // this to empty the input fields after submit
  lastRow(); // call the last row again after add the new row to hold the new totals
}



/* End fetch data from the form and add them to instance */


/* start the last row function */
function lastRow() {
  const tableRow = document.createElement('tr');
  mainTable.appendChild(tableRow);
  const rowTh = document.createElement('th');
  tableRow.appendChild(rowTh);
  rowTh.textContent = 'Totals';
  for (let i = 0; i < workHours.length + 1; i++) {
    const rowTh = document.createElement('th');
    tableRow.appendChild(rowTh);
    let tempN = 0;
    for (let j = 0; j < locations.length; j++) {
      tempN = tempN + (locations[j].cookiesPerHour[i]);
    }
    rowTh.textContent = tempN;
    if (i === (workHours.length)) {
      rowTh.textContent = theTotalpruchasedInAllLocation;
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

