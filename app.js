
var sumsArray=new Array(16);
for(var xx=0;xx<sumsArray.length;xx++){
    sumsArray[xx]=0;
}



//var sum1,sum2,sum3,sum4,sum5,sum6,sum7,sum8,sum9,sum10,sum11,sum12,sum13,sum14,sum15,sum16=0;

function getRandomNumber(min, max) {
    var result = Math.floor(Math.random() * (max - min)) + min;
    //console.log('result', result);
    return result;
}
//getRandomNumber(23,65);
var branches=[];
function Branch(branchName,minCust, maxCust, avgCookSale) {
    this.branchName=branchName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookSale = avgCookSale;
    //this.getOneHourC
    this.getTotal = function () {
        var sum=0;
        for (var x = 0; x < 16; x++) {
            sum=sum+(Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust))));
        }
        console.table('sum', sum);
        return sum;
    };

    this.getCookiesArray = function () {
        var cookiesArray = new Array(16);
        //var cookiesArray = [];
        for (var j = 0; j < 16; j++) {
            cookiesArray[j] = Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));
        }
        console.log('cookiesArray', cookiesArray);
        return cookiesArray;
    };
    branches.push(this);
}


var seattle = new Branch('Seattle',23, 65, 6.3);
var tokyo = new Branch('Tokyo',3, 24, 1.2);
var dubai = new Branch('Dubai',11, 38, 3.7);
var paris = new Branch('Paris',20, 38, 2.3);
var lima = new Branch('Lima',2, 16, 4.6);

var main = document.createElement("main");               // Create a <p> element
document.body.appendChild(main);

var table = document.createElement("table");               // Create a <p> element
table.style.border='3px solid blue';
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

//loop on branhes's array
branches.forEach(myFunction);



function myFunction(item, index) {
    //console.log('index: '+index+ ' item: '+ item.getTotal());
    //document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
    var tr = document.createElement('tr');
    tr.textContent = item.branchName;
    table.appendChild(tr);
    var localCookiesArray=item.getCookiesArray();   

        for (var x = 0; x < localCookiesArray.length; x++) {
        var td = document.createElement('td');
        td.textContent = localCookiesArray[x];
        tr.appendChild(td);
        sumsArray[x]+=localCookiesArray[x];
    }
  }
  console.log('sumsArray outside: '+sumsArray);


  var footerTr = document.createElement('tr');
table.appendChild(footerTr);
var totalTd = document.createElement('td');
totalTd.textContent = 'Totals';
footerTr.appendChild(totalTd);
for (var i = 0; i < sumsArray.length; i++) {
    var headerTd = document.createElement('td');
    headerTd.textContent = sumsArray[i];
    footerTr.appendChild(headerTd);
}



