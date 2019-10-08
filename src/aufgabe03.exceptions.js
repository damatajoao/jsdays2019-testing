function numberChecker(n) {
    if(typeof n !== 'number') {
        throw new Error ('Nope!');
    }
    return n;
}

