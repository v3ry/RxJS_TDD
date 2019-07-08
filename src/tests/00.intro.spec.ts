import * as intro from '../00.intro';

test('helloWorldObservable emits "Hello World"', done => {
    intro.helloWorldObservable.subscribe(str => {
        expect(str).toBe('Hello World');
        done();
    });
});

test('zeroToTenObservable emits 0,1,2,3,4,5,6,7,8,9,10', done => {
    let count = 0;
    intro.zeroToTenObservable.subscribe(n => {
        expect(n).toBe(count);
        count++;
    }, error => {
        throw error;
    }, () => {
        expect(count).toBe(11);
        done();
    })
})

test('firstLetterObservable must filters first letters of WildCodeSchool', done => {
    let count = 0;
    let expectedWords = ['W', 'C', 'S'];
    intro.firstLetterObservable.subscribe(str => {
            expect(str).toBe(expectedWords[count]);
            count++;
        }, error => {
            throw error;
        },
        () => {
            expect(count).toBe(3);
            done();
        })
})

test('positiveNumbersObservable must allow only positive numbers', done => {
    intro.positiveNumbersObservable.subscribe(n => {
            expect(n).toBeGreaterThanOrEqual(0)
        }, error => {
            throw error
        },
        () => {
            done();
        })
})

test('fibonacciObservable must emits 15th first fibonacci values', done => {
    let values = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    let count = 0;
    intro.fibonacciObservable.subscribe(n => {
            expect(n).toBe(values[count]);
            count++;
        }, error => {
            throw error
        },
        () => {
            expect(count).toBe(15);
            done();
        })
})

