const { publicResolver } = require("dns-testing");

const legacyRecords = [
  ["legacy app1", "app1.test.nebagum.io", "A", ["192.0.2.1"]],
  ["legacy app2", "app2.test.nebagum.io", "CNAME", ["hostname.example.com"]],
  [
    "legacy mail",
    "legacy.test.nebagum.io",
    "MX",
    [
      { exchange: "mail.example.com", priority: 1 },
      { exchange: "mail.example.com", priority: 10 },
      { exchange: "mail.example.com", priority: 5 },
    ],
  ],
];

describe("test.nebagum.io legacy apps and mail", () => {
  test.concurrent.each(legacyRecords)(
    "%s",
    async (_, hostname, type, expectedAddresses) => {
      // when
      const addresses = await publicResolver.resolve(hostname, type);

      // then
      expect(addresses).toEqual(expectedAddresses);
    }
  );
});