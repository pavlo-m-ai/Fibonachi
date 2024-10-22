function fibUntil(target) {
    let a = 0, b = 1;
    console.log(a);
    if (target > 0) {
        console.log(b);
    }
    while (true) {
        let nextFib = a + b;
        if (nextFib > target) break;
        console.log(nextFib);
        a = b;
        b = nextFib;
    }
}

fibUntil(35287);
