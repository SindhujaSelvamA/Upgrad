/*a function would return return only one parameter, but what if 
you need to return multiple parameters?, you need to return multiple parameters */

words = fixNames("the", "DALLAS", "CowBoys")
 for(j=0; j<words.length;++j)
 document.write(words[j]+"<br>")

 function fixNames()
 {
     var s = new Array()
     for(j=0;j<fixNames.arguments.length;++j)
     s[j]=fixNames.arguments[j].charAt(0).toUpperCase()
           + fixNames.arguments[j].substr(1).toLowerCase()
           

     return s

 }