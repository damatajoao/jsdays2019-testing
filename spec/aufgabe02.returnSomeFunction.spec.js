describe('Some Function', () => {

    it('should return some function', () => {
        const myFunc = someFunc();
        expect(myFunc).toEqual(jasmine.any(Function));
    });
});
