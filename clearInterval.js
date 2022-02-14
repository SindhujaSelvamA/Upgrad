/*function printt()
{
    console.log('hi');
}
setInterval(printt,1000);
 clearInterval(1)*/

/*function canVote(age) {
    if (age >= 18)
        return true;
    else
        return false;
};
canVote(10)*/

function canVote(age)
{
    return age >=18;

}
function canDrive(age) {
    return age >= 16;

}

function canMarry(age) {
    return age >= 21;

}



console.log(canDrive(11));
console.log(canMarry(25));
console.log(canVote(19));


