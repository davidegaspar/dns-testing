const { Resolver } = require("dns").promises;

const PUBLIC_DNS_SERVER_IP = process.env.PUBLIC_DNS_SERVER_IP || "1.1.1.1"
const PRIVATE_DNS_SERVER_IP = process.env.PRIVATE_DNS_SERVER_IP || "10.0.0.2"

// public
const publicResolver = new Resolver();
publicResolver.setServers([PUBLIC_DNS_SERVER_IP]);

// private
const privateResolver = new Resolver();
privateResolver.setServers([PRIVATE_DNS_SERVER_IP]);

module.exports = { publicResolver, privateResolver };
