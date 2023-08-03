import {formatDate} from '../store/BookContext'

describe('Context functions', () => {
    describe('Date locale formatting', () => {
        test('Should return a string providing a date', () => {
            const result = formatDate(new Date('10-10-1988'))
            expect(typeof result).toBe('string')
        })
    })
})