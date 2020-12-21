# DNS Testing

Test your live DNS with Jest.

## Features
- Express the DNS functionality without the DNS protocol limitations.
- Always pings the public/private server, it does not use the local cache.
- [Examples](./examples) that cover most use cases.

## Install

```sh
npm install --save @davidegaspar/dns-testing
```

## Options

### DNS Servers

```sh
export PUBLIC_DNS_SERVER_IP=*.*.*.* # optional
export PRIVATE_DNS_SERVER_IP=*.*.*.* # your private DNS
npm run test
```

### Concurrency via Jest

Live DNS servers do not deal well with the speed of Jest/NodeJS, a concurrency of 2 to 5 is recomended.

```js
module.exports = {
  verbose: true,
  maxConcurrency: 2,
};
```

## Future
- retry mechanism