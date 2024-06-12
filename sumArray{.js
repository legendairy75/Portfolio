function sumArray(x) {
    let a = 0;
    let b = 0;
    while (a <= x.length) {

        b += x[a];
        a++;
    }
    return (b);
}