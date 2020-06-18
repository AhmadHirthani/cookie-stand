var sumsArray = new Array(16).fill(0);
var sumsStaffArray = new Array(16).fill(0);
var main = document.createElement("main");


document.body.appendChild(main);
var table = document.createElement("table");
table.setAttribute('id', 'slaesTable');

var footerTr;
var branches = [];

//Branch Constructor
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
            this.totalCookiesPerDay += this.cookiesList[j];
            this.stafCountArray[j] = Math.ceil(this.cookiesList[j] / 20);
        }
    };
    this.getCookiesArray();
    branches.push(this);
}

//Branch prototype
Branch.prototype.renderFn = function () {
    var tr = document.createElement('tr');
    var objectTable = document.getElementById('slaesTable');
    objectTable.appendChild(tr);
    var tdd = document.createElement('td');
    tdd.style.border = 'solid';
    tdd.textContent = this.branchName;
    tr.appendChild(tdd);
    for (var x = 0; x < this.cookiesList.length; x++) {
        var td = document.createElement('td');
        td.style.border = 'solid';
        td.textContent = this.cookiesList[x];
        tr.appendChild(td);
        sumsArray[x] += this.cookiesList[x];
    }
    var totalTd = document.createElement('td');
    totalTd.style.border = 'solid';
    totalTd.textContent = this.totalCookiesPerDay;
    tr.appendChild(totalTd);
};

var seattle = new Branch('Seattle', 23, 65, 6.3);
var tokyo = new Branch('Tokyo', 3, 24, 1.2);
var dubai = new Branch('Dubai', 11, 38, 3.7);
var paris = new Branch('Paris', 20, 38, 2.3);
var lima = new Branch('Lima', 2, 16, 4.6);



var salesHeader = document.createElement('h2');
salesHeader.textContent = 'Sales table';
salesHeader.style.marginTop = '90px';
salesHeader.style.position = 'relative';



main.append(salesHeader);

main.appendChild(table);

createTableHeader();

seattle.renderFn();
tokyo.renderFn();
dubai.renderFn();
paris.renderFn();
lima.renderFn();

var newBranch;
var branchName;
var minCust;
var maxCust;
var avgCookSale;

document.getElementById("saveForm").addEventListener("click", function (event) {
    event.preventDefault();
    branchName = document.getElementById("branchName").value;
    var mincust = document.getElementById("minCust").value;
    minCust = parseInt(mincust);
    var maxcust = document.getElementById("maxCust").value;
    maxCust = parseInt(maxcust);
    var avgcooksale = document.getElementById("avgCookSale").value;
    avgCookSale = parseInt(avgcooksale);

    newBranch = new Branch(branchName, minCust, maxCust, avgCookSale);
    newBranch.renderFn();
    //deleteTableFooter();
    table.removeChild(footerTr);
    createTableFooter();
});

createTableFooter();

//Functions:
function createTableFooter() {
    //create the footer of the table
    footerTr = document.createElement('tr');
    footerTr.style.fontWeight = 'bold';
    footerTr.style.backgroundColor = '#1c6ae8';


    table.appendChild(footerTr);
    var totalTd = document.createElement('td');
    totalTd.style.border = 'double';

    totalTd.textContent = 'Totals';
    footerTr.appendChild(totalTd);
    var totalSum = 0;
    for (var i = 0; i < sumsArray.length; i++) {
        var headerTd = document.createElement('td');
        headerTd.style.border = 'double';

        headerTd.textContent = sumsArray[i];
        totalSum += sumsArray[i];
        footerTr.appendChild(headerTd);
    }

    var totalSumTd = document.createElement('td');
    totalSumTd.style.border = 'double';

    totalSumTd.textContent = totalSum;
    footerTr.appendChild(totalSumTd);
    var table1 = document.createElement("table");
    var headerTr1 = document.createElement('tr');
    table1.appendChild(headerTr1);
    var cornerTd1 = document.createElement('td');
    headerTr1.appendChild(cornerTd1);
}

//create table's header automatically
function createTableHeader() {
    //var table=document.getElementById('slaesTable');
    var headerTr = document.createElement('tr');
    headerTr.setAttribute('id', 'headerTr');
    headerTr.style.fontWeight = 'bold';
    headerTr.style.backgroundColor = '#1d417a';

    table.appendChild(headerTr);

    var cornerTd = document.createElement('td');
    headerTr.appendChild(cornerTd);
    cornerTd.style.border = 'double';
    for (var i = 6; i < 22; i++) {
        var headerTd = document.createElement('td');
        headerTd.style.border = 'double';

        if (i > 12) {
            headerTd.textContent = i - 12 + 'pm ';
        } else {
            headerTd.textContent = i + 'am ';
        }
        headerTr.appendChild(headerTd);
    }
    var cornerTotalTd = document.createElement('td');
    cornerTotalTd.style.border = 'double';
    cornerTotalTd.textContent = 'Daily Location Total';
    headerTr.appendChild(cornerTotalTd);
}

function getRandomNumber(min, max) {
    var result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}

