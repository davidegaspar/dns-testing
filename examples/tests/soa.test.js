const { publicResolver } = require("../dnsResolver.config.js");

describe("test.nebagum.io", () => {
  it.concurrent("has SOA in AWS", async () => {
    // when
    let hostname = "test.nebagum.io";
    let type = "SOA";
    const addresses = await publicResolver.resolve(hostname, type);

    // then
    let expectedHostmaster = "awsdns-hostmaster.amazon.com";
    expect(addresses.hostmaster).toEqual(expectedHostmaster);
  });
});
