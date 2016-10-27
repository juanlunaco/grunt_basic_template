$(document).ready(function(){
  var testInterval = function() {
    counter ++;
    console.log(counter);

    if (counter == 10){
        clearInterval(test);
    }
  };
  var test = setInterval(testInterval, 2000), counter = 0;
  test();
});
