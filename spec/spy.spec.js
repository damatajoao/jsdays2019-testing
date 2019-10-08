describe('Spy', () => {
    it('should spy a function', (done) => {
        const callback = (a) => {
            expect(a).toEqual(a);
            done();
        };
        doSomethingWithACallBack(callback);
    });
    it('should work with a spy', () => {
        const spy = jasmine.createSpy('iSpy');

        doSomethingWithACallBack(spy);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Hallo Welt');
        expect(spy).toHaveBeenCalledTimes(1);
    })
});
