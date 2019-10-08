describe('Spies', () => {
    beforeEach(() => {
        jasmine.clock().install();
    });
    afterEach(() => {
        jasmine.clock().uninstall();
    });
    /* TODO fix this shit
    it('should return a callback function with the given value', (done) => {
        const spy = jasmine.createSpy('mySpy');
        asyncClock(spy, 'Hello World', 600);
        jasmine.clock().tick(600);
        expect(spy).toHaveBeenCalled();
        jasmine.clock().tick(200);
        expect(spy).toHaveBeenCalled();
    });*/
    /*it('should return a callback function with the given value', (done) => {
        const spy = jasmine.createSpy('mySpy');
        async((v = 'Medie Idee') => {
            expect(v).toBe('Medie Idee');
            done();
        });
        jasmine.clock().tick(400);
    });
    it('should return a callback function with Hallo Welt', (done) => {
        const spy = jasmine.createSpy('mySpy');
        async((v) => {
            expect(v).toBe('Hallo Welt');
            done();
        });
        jasmine.clock().tick(400);
    });*/
});
