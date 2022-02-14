document.write(fixNames("the","DALLAS","cowboys"))
function fixNames()
{
    var s=" "
     for(j=0;j<fixNames.arguments.length; ++j)

     s+=fixNames.arguments[j].charAt(0).toUpperCase()+
        fixNames.arguments[j].substr(1).toLowerCase()+ " "
        return s.substring(0, s.length-1)
}