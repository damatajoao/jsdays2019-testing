describe('Some Function', () => {

    fit('should return some function', () => {
        const myFunc = someFunc();
        expect(myFunc).toEqual(jasmine.any(Function));
    });
});
