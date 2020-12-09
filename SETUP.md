# Setup

## npm

```sh
echo 'node_modules/' >> .gitignore
npm init
```

## jest

```sh
npm install --save jest
```

```sh
# package.json
"scripts": {
  "test": "jest"
},
```

```js
// jest.config.js
module.exports = {
  verbose: true,
  maxConcurrency: 2,
};
```

## dnsReslver

```js
// dnsResolver.setup.js
// copy the code???
```