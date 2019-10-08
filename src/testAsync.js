function executeAsync(cb) {
    setTimeout(() => {
        cb('Hello World');
    }, 400);
}

function testAsync(
    callBack,
    callBackParam = 'Hallo Welt',
    timeout = 400) {
    setTimeout(() => {
        callBack(callBackParam);
    }, timeout);
}
