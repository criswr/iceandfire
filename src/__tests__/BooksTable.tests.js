import { renderDetailsButton } from '../pages/books/components/BooksTable'

describe('BooksTable functions', () => {
    describe('Check if provided string is an URL', () => {

        test('Should return a boolean', () => {
            const result = renderDetailsButton('test')
            expect(typeof result).toBe('boolean')
        })

        test('Should return true if string is an URL', () => {
            const result = renderDetailsButton('http://google.cl')
            expect(typeof result).toBeTruthy
        })

        test('Should return false if string is not an URL', () => {
            const result = renderDetailsButton('01-08-2023')
            expect(typeof result).toBeFalsy
        })

    })
})