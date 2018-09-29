#! /usr/bin/env node
let usage =
`
USAGE

  orgsumtime ../my-org-file.org

Returns a human-friendly duration

OPTIONS

  orgsumtime [file] --minutes

Print duration as minutes (the smallest unit of account in org-mode logbooks).

  orgsumtime [file] --iso

Print as ISO_8601 formatted duration. https://en.wikipedia.org/wiki/ISO_8601#Durations
`
let argv = require('minimist')(process.argv.slice(2));
let path = argv._[0]
let sumOrg = require('.')
sumOrg(path, duration => {

    if (argv.help) {
        console.log(usage)
        process.exit(0)
    }

    // humanized by default
    var printableResult = duration.humanize()

    if (argv.iso)
        // Returns duration in string as specified
        // https://en.wikipedia.org/wiki/ISO_8601#Durations
        printableResult = duration.toISOString()

    if (argv.minutes)
        // Returns duration in string as milliseconds
        printableResult = duration.as('minutes')

    console.log(printableResult)
})
