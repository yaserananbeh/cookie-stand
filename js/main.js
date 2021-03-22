// console.log('test the javascript file')

// locations =['seattle','tokyo','dubai','paris','lima'];
const workHours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
/*Start seattle location */
const seattle ={
  name:'Seattle',
  minNoOfCustomer: 23,
  maxNoOfCustomer: 65,
  avgNumberCookies : 6.3,
  randomNoCustomers: function (min, max) {
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

  /** below this line the code will add elements and do some DOM manipulation */
  render: function()
  {
    let containerElement =document.getElementById('container');
    let h1Element=document.createElement('h1');
    containerElement.appendChild(h1Element);
    h1Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    containerElement.appendChild(ulElement);

    let sumInThisLocation=0;
    for(let i=0;i<workHours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${workHours[i]} Purchesed ${this.numOfPurchesedCookies()} Cookies `;
      sumInThisLocation+=this.numOfPurchesedCookies();
    }
    let resultParagraph=document.createElement('p');
    containerElement.appendChild(resultParagraph);
    resultParagraph.textContent=`Total Purchased Cookies In ${this.name} Is : ${sumInThisLocation}`;
  }
};

/**End seattle location */


/*Start tokyo location */
const tokyo ={
  name:'Tokyo',
  minNoOfCustomer: 3	,
  maxNoOfCustomer: 24,
  avgNumberCookies : 1.2,
  randomNoCustomers: function (min, max) {
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
  /** below this line the code will add elements and do some DOM manipulation */
  render: function()
  {
    let containerElement =document.getElementById('container');
    let h1Element=document.createElement('h1');
    containerElement.appendChild(h1Element);
    h1Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    containerElement.appendChild(ulElement);

    let sumInThisLocation=0;
    for(let i=0;i<workHours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${workHours[i]} Purchesed ${this.numOfPurchesedCookies()} Cookies `;
      sumInThisLocation+=this.numOfPurchesedCookies();
    }
    let resultParagraph=document.createElement('p');
    containerElement.appendChild(resultParagraph);
    resultParagraph.textContent=`Total Purchased Cookies In ${this.name} Is : ${sumInThisLocation}`;
  }
};

/**End tokyo location */



/** Start dubai location */
const dubai={
  name:'Dubai',
  minNoOfCustomer:11,
  maxNoOfCustomer:38,
  avgNumberCookies:3.7,
  randomNoCustomers: function (min,max){
    min=Math.floor(this.minNoOfCustomer);
    max=Math.ceil(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  },
  /** below this line the code will add elements and do some DOM manipulation */
  render: function()
  {
    let containerElement =document.getElementById('container');
    let h1Element=document.createElement('h1');
    containerElement.appendChild(h1Element);
    h1Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    containerElement.appendChild(ulElement);

    let sumInThisLocation=0;
    for(let i=0;i<workHours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${workHours[i]} Purchesed ${this.numOfPurchesedCookies()} Cookies `;
      sumInThisLocation+=this.numOfPurchesedCookies();
    }
    let resultParagraph=document.createElement('p');
    containerElement.appendChild(resultParagraph);
    resultParagraph.textContent=`Total Purchased Cookies In ${this.name} Is : ${sumInThisLocation}`;
  }

};
/** End dubai location*/


/** Start paris location */
const paris={
  name:'Paris',
  minNoOfCustomer:20,
  maxNoOfCustomer:38,
  avgNumberCookies:2.3,
  randomNoCustomers: function (min,max){
    min=Math.floor(this.minNoOfCustomer);
    max=Math.ceil(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  },
  /** below this line the code will add elements and do some DOM manipulation */
  render: function()
  {
    let containerElement =document.getElementById('container');
    let h1Element=document.createElement('h1');
    containerElement.appendChild(h1Element);
    h1Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    containerElement.appendChild(ulElement);

    let sumInThisLocation=0;
    for(let i=0;i<workHours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${workHours[i]} Purchesed ${this.numOfPurchesedCookies()} Cookies `;
      sumInThisLocation+=this.numOfPurchesedCookies();
    }
    let resultParagraph=document.createElement('p');
    containerElement.appendChild(resultParagraph);
    resultParagraph.textContent=`Total Purchased Cookies In ${this.name} Is : ${sumInThisLocation}`;
  }
};

/** End paris location*/


/** Start lima location */
const lima={
  name:'Lima',
  minNoOfCustomer:2,
  maxNoOfCustomer:16,
  avgNumberCookies:4.6,
  randomNoCustomers: function (min,max){
    min=Math.floor(this.minNoOfCustomer);
    max=Math.ceil(this.maxNoOfCustomer);
    return Math.floor(Math.random() * (max - min) + min);
  },
  numOfPurchesedCookies: function getPurchesedCookieNumber(avg,num)
  {
    avg=Math.floor(this.avgNumberCookies);
    num=this.randomNoCustomers();
    return avg*num;
  },
  /** below this line the code will add elements and do some DOM manipulation */
  render: function()
  {
    let containerElement =document.getElementById('container');
    let h1Element=document.createElement('h1');
    containerElement.appendChild(h1Element);
    h1Element.textContent=this.name;
    let ulElement=document.createElement('ul');
    containerElement.appendChild(ulElement);

    let sumInThisLocation=0;
    for(let i=0;i<workHours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${workHours[i]} Purchesed ${this.numOfPurchesedCookies()} Cookies `;
      sumInThisLocation+=this.numOfPurchesedCookies();
    }
    let resultParagraph=document.createElement('p');
    containerElement.appendChild(resultParagraph);
    resultParagraph.textContent=`Total Purchased Cookies In ${this.name} Is : ${sumInThisLocation}`;
  }

};

/** End lima location*/

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


