class FizzBuzz {
    run(n) {
        return n % 5 === 0 && n % 3 === 0 ?
                    'FizzBuzz'
                :
                    n % 5 === 0 ?
                        'Buzz'
                    :
                        n % 3 === 0 ?
                            'Fizz'
                        :
                            n;
    }
}
