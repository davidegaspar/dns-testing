const { publicResolver } = require("../dnsResolver.config.js");

describe("nebagum.io", () => {
  it.concurrent("delegates test subdomain to another zone", async () => {
    // when
    let hostname = "test.nebagum.io";
    let type = "NS";
    const addresses = await publicResolver.resolve(hostname, type);

    // then
    let expectedAddresses = [
      "ns-1218.awsdns-24.org",
      "ns-1958.awsdns-52.co.uk",
      "ns-213.awsdns-26.com",
      "ns-572.awsdns-07.net",
    ];
    expect(addresses).toEqual(expectedAddresses);
  });
});
