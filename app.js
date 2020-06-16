var sumsArray = new Array(16).fill(0);
var sumsStaffArray = new Array(16).fill(0);

function getRandomNumber(min, max) {
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}

var branches = [];

function Branch(branchName, minCust, maxCust, avgCookSale) {
    this.branchName = branchName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookSale = avgCookSale;
    this.totalCookies = 0;
    this.totalCookiesPerDay = 0;

    this.stafCountArray = [];
    this.cookiesList = [];
    this.getCookiesArray = function () {
        for (var j = 0; j < 16; j++) {
            this.cookiesList[j] = Math.floor(this.avgCookSale * getRandomNumber(this.minCust, this.maxCust));
            this.totalCookies = this.totalCookies + this.cookiesList[j];
            this.totalCookiesPerDay+=this.cookiesList[j];
            this.stafCountArray[j] = Math.ceil(this.cookiesList[j] / 20);
        }
    };
    this.getCookiesArray();
    branches.push(this);
}

// console.log('cookiesList: '+seattle.cookiesList);
// console.log('totalCookies: '+seattle.totalCookies);
// console.log('stafCountArray: '+seattle.stafCountArray);

var seattle = new Branch('Seattle', 23, 65, 6.3);
var tokyo = new Branch('Tokyo', 3, 24, 1.2);
var dubai = new Branch('Dubai', 11, 38, 3.7);
var paris = new Branch('Paris', 20, 38, 2.3);
var lima = new Branch('Lima', 2, 16, 4.6);
console.log('seattle: '+seattle);
console.log('Total per day for seattle: '+seattle.totalCookiesPerDay);


var main = document.createElement("main");
document.body.appendChild(main);

var salesHeader=document.createElement('h2');
salesHeader.textContent = 'Sales';
main.append(salesHeader);

var table = document.createElement("table");
main.appendChild(table);

var headerTr = document.createElement('tr');
table.appendChild(headerTr);

var cornerTd = document.createElement('td');
headerTr.appendChild(cornerTd);

//create table's header automatically
for (var i = 1; i < 17; i++) {
    var headerTd = document.createElement('td');
    if (i > 12) {
        headerTd.textContent = i - 12 + 'pm ';
    } else {
        headerTd.textContent = i + 'am ';
    }
    headerTr.appendChild(headerTd);
}

var cornerTotalTd = document.createElement('td');
cornerTotalTd.textContent='Totals';
headerTr.appendChild(cornerTotalTd);



console.log(seattle);


//loop on branhes's array to create the body of the table
branches.forEach(myFunction);
function myFunction(item, index) {
    var totalCookiesPerDay=0;
    for(var i=0;i<item.cookiesList.length;i++){
        totalCookiesPerDay+=item.cookiesList[i];
    }
    //console.log('index: '+index+ ' item: '+ item.stafCountArray);
    //document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var tdd = document.createElement('td');
    tdd.textContent = item.branchName;
    tr.appendChild(tdd);


    for (var x = 0; x < item.cookiesList.length; x++) {
        var td = document.createElement('td');
        td.textContent = item.cookiesList[x];
        tr.appendChild(td);
        sumsArray[x] += item.cookiesList[x];
    }

    var totalTd = document.createElement('td');
    totalTd.textContent = totalCookiesPerDay;
        tr.appendChild(totalTd);
    totalCookiesPerDay
}

//create the footer of the table
var footerTr = document.createElement('tr');
table.appendChild(footerTr);
var totalTd = document.createElement('td');
totalTd.textContent = 'Totals';
footerTr.appendChild(totalTd);
var totalSum=0;
for (var i = 0; i < sumsArray.length; i++) {
    var headerTd = document.createElement('td');
    headerTd.textContent = sumsArray[i];
    totalSum+=sumsArray[i];
    footerTr.appendChild(headerTd);
}

var totalSumTd = document.createElement('td');
totalSumTd.textContent = totalSum;
footerTr.appendChild(totalSumTd);


var para=document.getElementById('para');
para.textContent="fffff";

var table1 = document.createElement("table");
para.appendChild(table1);

var headerTr1 = document.createElement('tr');
table1.appendChild(headerTr1);

var cornerTd1 = document.createElement('td');
headerTr1.appendChild(cornerTd1);

//create table's header automatically
// for (var i = 1; i < 17; i++) {
//    var headerTd1 = document.createElement('td');
//    if (i > 12) {
//        headerTd1.textContent = i - 12 + 'pm ';
//    } else {
//        headerTd1.textContent = i + 'am ';
//    }
//    headerTr1.appendChild(headerTd1);
// }

// console.log(seattle);


// //loop on branhes's array to create the body of the table
// branches.forEach(myFunction);
// function myFunction(item, index) {
//    //console.log('index: '+index+ ' item: '+ item.stafCountArray);
//    //document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
//    var tr1 = document.createElement('tr');
//    table1.appendChild(tr1);
//    var td1 = document.createElement('td');
//    td1.textContent = item.branchName;
//    tr1.append(td1);


//    for (var x = 0; x < item.cookiesList.length; x++) {
//        var td1 = document.createElement('td');
//        td1.textContent = item.stafCountArray[x];
//        tr1.appendChild(td1);
//        sumsStaffArray[x] += item.stafCountArray[x];
//    }
// }

// //create the footer of the table
// var footerTr1 = document.createElement('tr');
// table1.appendChild(footerTr1);
// var totalTd1 = document.createElement('td');
// totalTd1.textContent = 'Totals';
// footerTr1.appendChild(totalTd1);
// for (var i = 0; i < sumsStaffArray.length; i++) {
//    var headerTd1 = document.createElement('td');
//    headerTd1.textContent = sumsStaffArray[i];
//    footerTr1.appendChild(headerTd1);
// }






