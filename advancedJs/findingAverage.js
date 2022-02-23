arr = [1, 2, 3, 4, 5];

function array() {var sum=0;
    for (var i = 0; i < arr.length; i++) {
       
        sum += arr[i];
    }

  

    return sum / arr.length;
}array()