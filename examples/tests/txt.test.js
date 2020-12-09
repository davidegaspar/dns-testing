const { publicResolver } = require("../dnsResolver.config.js");

const legacyTXT = [["legacy ball of mud", "test.nebagum.io", "TXT"]];

describe("test.nebagum.io TXT big ball of mud", () => {
  it.concurrent("contains legacy records", async () => {
    // when
    let hostname = "test.nebagum.io";
    let type = "TXT";
    const addresses = await publicResolver.resolve(hostname, type);

    // then
    let expectedAddresses = [
      ["someLegacyHash"],
      ["v=spf1 ip4:192.168.0.1/16 -all"],
    ];
    expectedAddresses.forEach((address) => {
      expect(addresses).toContainEqual(address);
    });
  });
});
