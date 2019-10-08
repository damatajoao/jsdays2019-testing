describe('FizzBuzz', () => {
    let fizzBuzz;
    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });
    describe('#run()', () => {
        it('should return 1 if 1 is provided', () => {
            //Act
            const result = fizzBuzz.run(1);
            //Assert
            expect(result).toBe(1);
        });
        it('should return 2 if 2 is provided', () => {
            //Act
            const result = fizzBuzz.run(2);
            //Assert
            expect(result).toBe(2);
        });
        it('should return Fizz if 3 is provided', () => {
            //Act
            const result = fizzBuzz.run(3);
            //Assert
            expect(result).toBe('Fizz');
        });
        it('should return Buzz if 5 is provided', () => {
            //Act
            const result = fizzBuzz.run(5);
            //Assert
            expect(result).toBe('Buzz');
        });
        it('should return FizzBuzz if 15 is provided', () => {
            //Act
            const result = fizzBuzz.run(15);
            //Assert
            expect(result).toBe('FizzBuzz');
        });
    });
});

// toBe ===
// toEqual ==
