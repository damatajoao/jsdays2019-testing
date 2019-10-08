
describe('Calculator', () => {
   let calc;
   beforeEach(() => {
       calc = new Calculator();
   });
   describe('#add()', () => {
       it('should add 1 and 1 and return 2', () => {
           // Act
           const result = calc.add(1, 1);
           // Assert
           expect(result).toBe(2);
       });
       it('should add 2 and 3 and return 5', () => {
           // Act
           const result = calc.add(2, 3);
           // Assert
           expect(result).toBe(5);
       });
   });
});
