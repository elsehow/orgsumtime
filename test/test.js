let test = require('tape')
let orgsumtime = require('..')
let readFileSync = require('fs').readFileSync

let logbook =
    readFileSync('./test/logbook-drawer.txt', 'utf-8')

// test('sumLogbook sums the times in an org log book', t=> {
//     let times = investments.sumLogbook(logbook)
//     t.deepEquals(
//         times.minutes(),
//         30,
//     )
//     t.end()
// })

let orgPath = './test/org-file.org'

test('sumOrg all the times in an org file', t => {
    orgsumtime(orgPath, function (duration) {
        t.deepEquals(duration.minutes(), 10)
        t.end()
    })
})
