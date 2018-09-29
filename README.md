# orgsumtime

Sum the duration of all logged time in a given org-mode file.

## install

`npm install -g orgsumtime`

## usage

```sh
orgsumtime ~/Notes/deft/serving\ method.org
> 13 hours
```

Use `--help` flag to see other options.

## programmatic api

```js
require('orgsumtime')('../Notes/my-great-org-file.org', duration => {
  // this is a moment.js duration
  console.log(duration)
})
```

## license

BSD
