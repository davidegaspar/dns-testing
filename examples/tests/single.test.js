const { publicResolver } = require("../dnsResolver.config.js");

describe("App3", () => {
  it.concurrent("resolves vanity url", async () => {
    // when
    let hostname = "app3.test.nebagum.io";
    let type = "CNAME";
    const addresses = await publicResolver.resolve(hostname, type);

    // then
    let expectedAddresses = ["some.internal.record.app3.test.nebagum.io"];
    expect(addresses).toEqual(expectedAddresses);
  });

  it.concurrent(
    "contains verification hash for external dependency A",
    async () => {
      // when
      let hostname = "test.nebagum.io";
      let type = "TXT";
      const addresses = await publicResolver.resolve(hostname, type);

      // then
      let expectedAddresses = ["AAAAAAAAAA"];
      expect(addresses).toContainEqual(expectedAddresses);
    }
  );

  it.concurrent(
    "contains verification hash for external email dependency B",
    async () => {
      // when
      let hostname = "bbbbb.test.nebagum.io";
      let type = "MX";
      const addresses = await publicResolver.resolve(hostname, type);

      // then
      let expectedAddresses = [
        { exchange: "mail.bbbbb.com", priority: 1 },
        { exchange: "mail.bbbbb.com", priority: 10 },
        { exchange: "mail.bbbbb.com", priority: 5 },
      ];
      expect(addresses).toEqual(expectedAddresses);
    }
  );
});
