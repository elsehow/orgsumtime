let { compose } = require('tinyfunk')
let { duration } = require('moment')
let org = require('org-mode-parser')

// List[String] => moment.duration
function sumLogbook (logbook) {
    let truthy = x => !!x
    let listify = _ =>
        _.split('\n').filter(truthy)
    let splitDuration = _ =>
        _.split('=>  ')[1]
    let splitDurations = _ =>
        _.map(splitDuration).map(duration)
    let sumDurations = _ => _.reduce((a, b) => a.add(b))
    return compose(
        sumDurations,
        splitDurations,
        listify
    )(logbook)
}

// String -> moment.duration
function sumOrg (pathToOrgFile, cb) {
    org.makelist(pathToOrgFile, nodes => {
        let ofd = new org.OrgQuery(nodes)
        let logbook = _ => _.drawer['LOGBOOK']
        let combinedLogbook = ofd.toArray().map(logbook).join('')
        cb(sumLogbook(combinedLogbook))
    })
}

// module.exports = {
//     sumLogbook:sumLogbook,
//     sumOrg:sumOrg,
// }

module.exports = sumOrg
