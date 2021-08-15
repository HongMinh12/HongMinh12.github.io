function numberOneTriangle(){
    var lvl3 = document.getElementById("lvl3").nodeValue;
    var blank = "";
    for (j=1; j <= lvl3; j++){
      for(k = 1; k<= j; k++){
        blank += 1;
      }
      blank += '</br>'
    }
    document.getElementById("answer").innerHTML = blank;
}