let test = require('tape')
let text = require('..')

test('hello', t => {
    t.deepEquals(text, 'hello')
    t.end()
})
