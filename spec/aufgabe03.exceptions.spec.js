describe('Number Checker', () => {

    it('should return a number if a number is provided', () => {
        const result = numberChecker(1);
        expect(result).toBe(1);
    });
    it('should throw an error if a string is provided', () => {
        expect(() => numberChecker('a')).toThrow();
        expect(() => numberChecker('a')).toThrow(new Error('Nope!'));
        expect(() => numberChecker('a')).toThrowError('Nope!');
    });
});
