import * as tddmap from '../02.map';

test('allFibonacciObs should emits [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]', done => {

    const expectedResult = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]
    let count = 0;
    tddmap.allFibonacciObs.subscribe(res => {
        expect(res).toBe(expectedResult.shift());
        count++;
    }, error => {
        throw error;
    }, () => {
        expect(count).toBe(20);
        setTimeout(() =>  {
            done();
        }, 500)
    })
}, 30000);

test('fastestFibonacciObs should emits [3, 8, 21, 55, 144, 377, 987, 2584, 6765, 17711 ]', done => {
    const expectedResult = [3, 8, 21, 55, 144, 377, 987, 2584, 6765, 17711 ]
    let count = 0;
    tddmap.fastestFibonacciObs.subscribe(res => {
        expect(res).toBe(expectedResult.shift());
        count++;
    }, error => {
        throw error;
    }, () => {
        expect(count).toBe(10);
        setTimeout(() =>  {
            done();
        }, 500)
    })
}, 30000)
