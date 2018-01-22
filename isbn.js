
function test (level) {

    var level = +level;

    function getISBN () {
        var isbn = "0-13-3252817";
        return isbnToIntList(isbn).reverse();
    }

    //Optional Challenge/input as a string.
    function isbnToIntList (isbn) {
        return stringToIntList(removeDashes(isbn));
    }

    function listToString (list) {
        return list.join().replace(/,/g, "\n");
    }

    function removeDashes (isbn) {
        return isbn.replace(/-/g, "");
    }

    function stringToIntList (string) {
        return stringListToIntList(string.split(''));
    }

    function stringListToIntList (stringList) {
        return stringList.map(string => parseInt(string,10));
    }

    //Level 1 and 2
    function checksumVerbose (list) {
        return list.map((k, index) => {
            var count = index + 1;
            return ("Element " + k + " is in location " + count + ". Element * index = " + (k * count) + ". ");
        });
    }


    //Level 3
    function checksumTerse (list) {
        return checksumSum(checksumProduct(list));
    }

    function checksumSum (list) {
        return list.reduce((x, y) => x + y);
    }

    function checksumProduct (list) {
        return list.map((k,index) => k * (index+1));
    }

    //Level 4
    function checksumValid (sum) {
        return (sum % 11 == 0);
    }


    switch (level) {
    case 1:
    case 2:
        return checksumVerbose(getISBN());
        break;
    case 3:
        return checksumTerse(getISBN());
        break;
    case 4:
        return checksumValid(checksumTerse(getISBN()));
        break;
    }

    return 0;
}

