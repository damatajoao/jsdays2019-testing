describe('Math.random stuff', () => {
    beforeEach((done) => {
        setTimeout(() => {done();}, 4000);
    });
    it('should control Math.random', () => {
        const randomValue = 0.26471826387416923;
        const originalMathRandom = Math.random;

        Math.random = jasmine.createSpy('Math.random');
        Math.random.and.returnValue(randomValue);

        const result = getRandomNumber();
        expect(result).toBe(randomValue);

        Math.random = originalMathRandom;
    });
});
