

function divis (x, y) {
    if (x <= 0) return 0;
    return (1+divis(x-y,y));
};

