// console.log('test the javascript file')

// locations =['seattle','tokyo','dubai','paris','lima'];


/*Start seattle location */
const seattle ={
  name:'Seattle',
  minNoOfCustomer: 23,
  maxNoOfCustomer: 65,
  avgNumberCookies : 6.3,
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNoCustomers: function getRandomInt(min, max) {
    min = Math.ceil(this.minNoOfCustomer);
    max = Math.floor(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  },
};
  /** below this line the code will add elements and do some DOM manipulation */
let containerElement =document.getElementById('container');
let h1Element=document.createElement('h1');
containerElement.appendChild(h1Element);
h1Element.textContent=seattle.name;
let ulElement=document.createElement('ul');
containerElement.appendChild(ulElement);

let sumInThisLocation=0;
for(let i=0;i<seattle.workHours.length;i++){
  let liElement= document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.textContent=`${seattle.workHours[i]} Purchesed ${seattle.numOfPurchesedCookies()} Cookies `;
  sumInThisLocation+=seattle.numOfPurchesedCookies();
}
let resultParagraph=document.createElement('p');
containerElement.appendChild(resultParagraph);
resultParagraph.textContent=`Total Purchased Cookies In ${seattle.name} Is : ${sumInThisLocation}`;

/**End seattle location */


/*Start tokyo location */
const tokyo ={
  name:'Tokyo',
  minNoOfCustomer: 3	,
  maxNoOfCustomer: 24,
  avgNumberCookies : 1.2,
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNoCustomers: function getRandomInt(min, max) {
    min = Math.ceil(this.minNoOfCustomer);
    max = Math.floor(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  },
};
/** below this line the code will add elements and do some DOM manipulation */
// let containerElement =document.getElementById('container');
let h1Element1=document.createElement('h1');
containerElement.appendChild(h1Element1);
h1Element1.textContent=tokyo.name;
let ulElement1=document.createElement('ul');
containerElement.appendChild(ulElement1);

let sumInThisLocation1=0;
for(let i=0;i<tokyo.workHours.length;i++){
  let liElement= document.createElement('li');
  ulElement1.appendChild(liElement);
  liElement.textContent=`${tokyo.workHours[i]} Purchesed ${tokyo.numOfPurchesedCookies()} Cookies `;
  sumInThisLocation1+=tokyo.numOfPurchesedCookies();
}
let resultParagraph1=document.createElement('p');
containerElement.appendChild(resultParagraph1);
resultParagraph1.textContent=`Total Purchased Cookies In ${tokyo.name} Is : ${sumInThisLocation1}`;

/**End tokyo location */



/** Start dubai location */
const dubai={
  name:'Dubai',
  minNoOfCustomer:11,
  maxNoOfCustomer:38,
  avgNumberCookies:3.7,
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNoCustomers: function getRandomInt(min,max){
    min=Math.floor(this.minNoOfCustomer);
    max=Math.ceil(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  }

};
/** below this line the code will add elements and do some DOM manipulation */
let h1Element2=document.createElement('h1');
containerElement.appendChild(h1Element2);
h1Element2.textContent=dubai.name;
let ulElement2=document.createElement('ul');
containerElement.appendChild(ulElement2);

let sumInThisLocation2=0;
for(let i=0;i<dubai.workHours.length;i++){
  let liElement= document.createElement('li');
  ulElement2.appendChild(liElement);
  liElement.textContent=`${dubai.workHours[i]} Purchesed ${dubai.numOfPurchesedCookies()} Cookies `;
  sumInThisLocation2+=dubai.numOfPurchesedCookies();
}
let resultParagraph2=document.createElement('p');
containerElement.appendChild(resultParagraph2);
resultParagraph2.textContent=`Total Purchased Cookies In ${dubai.name} Is : ${sumInThisLocation2}`;

/** End dubai location*/


/** Start paris location */
const paris={
  name:'Paris',
  minNoOfCustomer:20,
  maxNoOfCustomer:38,
  avgNumberCookies:2.3,
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNoCustomers: function getRandomInt(min,max){
    min=Math.floor(this.minNoOfCustomer);
    max=Math.ceil(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  }

};
/** below this line the code will add elements and do some DOM manipulation */
let h1Element3=document.createElement('h1');
containerElement.appendChild(h1Element3);
h1Element3.textContent=paris.name;
let ulElement3=document.createElement('ul');
containerElement.appendChild(ulElement3);

let sumInThisLocation3=0;
for(let i=0;i<paris.workHours.length;i++){
  let liElement= document.createElement('li');
  ulElement3.appendChild(liElement);
  liElement.textContent=`${paris.workHours[i]} Purchesed ${paris.numOfPurchesedCookies()} Cookies `;
  sumInThisLocation3+=paris.numOfPurchesedCookies();
}
let resultParagraph3=document.createElement('p');
containerElement.appendChild(resultParagraph3);
resultParagraph3.textContent=`Total Purchased Cookies In ${paris.name} Is : ${sumInThisLocation3}`;

/** End paris location*/


/** Start lima location */
const lima={
  name:'Lima',
  minNoOfCustomer:2,
  maxNoOfCustomer:16,
  avgNumberCookies:4.6,
  workHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomNoCustomers: function getRandomInt(min,max){
    min=Math.floor(this.minNoOfCustomer);
    max=Math.ceil(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  }

};
/** below this line the code will add elements and do some DOM manipulation */
let h1Element4=document.createElement('h1');
containerElement.appendChild(h1Element4);
h1Element4.textContent=lima.name;
let ulElement4=document.createElement('ul');
containerElement.appendChild(ulElement4);

let sumInThisLocation4=0;
for(let i=0;i<lima.workHours.length;i++){
  let liElement= document.createElement('li');
  ulElement4.appendChild(liElement);
  liElement.textContent=`${lima.workHours[i]} Purchesed ${lima.numOfPurchesedCookies()} Cookies `;
  sumInThisLocation4+=lima.numOfPurchesedCookies();
}
let resultParagraph4=document.createElement('p');
containerElement.appendChild(resultParagraph4);
resultParagraph4.textContent=`Total Purchased Cookies In ${lima.name} Is : ${sumInThisLocation4}`;

/** End lima location*/



