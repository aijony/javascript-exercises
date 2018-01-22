
function gcd (x, y){
    var largeNum, smallNum;
    if (x > y){
        largeNum = x;
        smallNum = y;
    } else {
        largeNum = y;
        smallNum = x;
    }
    var multiple = Math.floor(largeNum/smallNum);
    var remainder = largeNum % smallNum;
    if (largeNum != smallNum * multiple + remainder){
        return 0;
    }
    else if (remainder == 0)  {
        return smallNum;
    }
    return gcd(smallNum, remainder);
}
