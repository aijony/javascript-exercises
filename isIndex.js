

function isIndex(item, array) {
    if (array.length == 1)
        return item == array[0];
    var splitEnd = Math.floor((array.length - 1)/2);
    //Javascript wasn't meant for this much recursion
    //However, this is the ultimate "divide and conquer"
    //Even though divide and conquering is useless on a singlethreaded javscript instance..
    // .
    return isIndex(item, array.splice(0, splitEnd + 1)) || isIndex(item, array.splice(splitEnd));
}
