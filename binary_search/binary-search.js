(function() {

  var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  var performSearch = function(array, targetVal) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    var counter = 0;

    console.log(primes.indexOf(targetVal));

    while(max >= min) {

      counter += 1;
      guess = Math.floor((max + min) / 2);

      if(array[guess] === targetVal) {
        console.log(counter);
        return guess;
      } else if(array[guess] < targetVal) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }

    }
    return -1 + ' this is not in the array';
  };

  var performSearchTwo = function(array, targetVal) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    var counter = 0;

    console.log(primes.indexOf(targetVal));

    while(array[guess] !== targetVal) {

      counter += 1;
      guess = Math.floor((max + min) / 2);

      if(min > max) {
        return -1 + ' this is not in the array';
      } else if(array[guess] < targetVal) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }

    }
    console.log(counter);
    return guess;
  };

  var result = performSearch(primes, 73);
  var resultTwo = performSearchTwo(primes, 2);

  var resultSection = document.getElementById('search-results');

  var paragraphOne = document.createElement('p');
  var paragraphTwo = document.createElement('p');

  paragraphOne.innerHTML = 'Found prime at index ' + result + ' with method 1';
  paragraphTwo.innerHTML = 'Found prime at index ' + resultTwo + ' with method 2';

  resultSection.appendChild(paragraphOne);
  resultSection.appendChild(paragraphTwo);

}());
