function getRandomNumber(min, max) {
    var result = Math.floor(Math.random() * (max - min)) + min;
    //console.log('result', result);
    return result;
}
//getRandomNumber(23,65);

var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookSale: 6.3,
    getCookiesArray: function (min,max,avg) {
        var cookiesArray = new Array(16);
        //var cookiesArray = [];
        for (var j = 0; j < 16; j++) {
            if (j > 11) {
                cookiesArray[j] = j - 11 + 'pm: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));

            } else {
                cookiesArray[j] = j + 1 + 'am: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));
            }
        }
        console.table('cookiesArray', cookiesArray);
        return cookiesArray;
    }
};
var seattleCookiesArray = seattle.getCookiesArray();
//console.table('publicCookiesArray: ',publicCookiesArray);


var tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookSale: 1.2,
    //randomCustomerAvg: getRandomNumber(23, 65),
    getCookiesArray: function () {
        var cookiesArray = new Array(16);
        //var cookiesArray = [];
        for (var j = 0; j < 16; j++) {
            if (j > 11) {
                cookiesArray[j] = j - 11 + 'pm: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));

            } else {
                cookiesArray[j] = j + 1 + 'am: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust))); 
            }
        }
        console.table('cookiesArray', cookiesArray);
        return cookiesArray;
    }
};
var tokyoCookiesArray = tokyo.getCookiesArray();
//console.table('publicCookiesArray: ',publicCookiesArray);

var dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookSale: 3.7,
    getCookiesArray: function () {
        var cookiesArray = new Array(16);
        //var cookiesArray = [];
        for (var j = 0; j < 16; j++) {
            if (j > 11) {
                cookiesArray[j] = j - 11 + 'pm: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));

            } else {
                cookiesArray[j] = j + 1 + 'am: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));
            }
        }
        console.table('cookiesArray', cookiesArray);
        return cookiesArray;
    }
};
var dubaiCookiesArray = dubai.getCookiesArray();
//console.table('publicCookiesArray: ',publicCookiesArray);

var paris = {
    minCust: 20,
    maxCust: 38,
    avgCookSale: 2.3,
    getCookiesArray: function () {
        var cookiesArray = new Array(16);
        //var cookiesArray = [];
        for (var j = 0; j < 16; j++) {
            if (j > 11) {
                cookiesArray[j] = j - 11 + 'pm: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));

            } else {
                cookiesArray[j] = j + 1 + 'am: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));
            }
        }
        console.table('cookiesArray', cookiesArray);
        return cookiesArray;
    }
};
var parisCookiesArray = paris.getCookiesArray();
//console.table('publicCookiesArray: ',publicCookiesArray);


var lima = {
    minCust: 2,
    maxCust: 16,
    avgCookSale: 4.6,
    getCookiesArray: function () {
        var cookiesArray = new Array(16);
        //var cookiesArray = [];
        for (var j = 0; j < 16; j++) {
            if (j > 11) {
                cookiesArray[j] = j - 11 + 'pm: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));

            } else {
                cookiesArray[j] = j + 1 + 'am: ' + Math.floor((this.avgCookSale * getRandomNumber(this.minCust, this.maxCust)));
            }
        }
        console.table('cookiesArray', cookiesArray);
        return cookiesArray;
    }
};
var limaCookiesArray = lima.getCookiesArray();

var publicCookiesArray = new Array(5);
publicCookiesArray[0] = seattleCookiesArray;
publicCookiesArray[1] = tokyoCookiesArray;
publicCookiesArray[2] = dubaiCookiesArray;
publicCookiesArray[3] = parisCookiesArray;
publicCookiesArray[4] = limaCookiesArray;
console.table('publicCookiesArray: ', publicCookiesArray);


// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6




var main = document.createElement("main");               // Create a <p> element
document.body.appendChild(main);

var branchNames = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];

for (var j = 0; j < publicCookiesArray.length; j++) {
    var branchTitle = document.createElement('h2');
    branchTitle.textContent = branchNames[j];
    var branchUl = document.createElement('ul');
    main.appendChild(branchTitle);
    main.appendChild(branchUl);

    for (var x = 0; x < 16; x++) {
        var cookiesList = document.createElement('li');
        cookiesList.textContent = publicCookiesArray[j][x];
        branchUl.appendChild(cookiesList);
    }
}