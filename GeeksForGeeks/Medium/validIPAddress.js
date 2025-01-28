function validIPv4(s) {
  /**The (?!.*\b0\d) part ensures that no octet starts with a 0 followed by another digit (e.g., 01, 02, 09), and thus rejects invalid octets.
The rest of the regex allows for valid numbers between 0 and 255, but disallows leading zeros unless the number is 0 itself. */
  let regex =
    /^(?!.*\b0\d)([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  if (regex.test(s)) {
    return true;
  }
  return false;
}

console.log(
  validIPv4("===========================Validate IPv4==================")
);
console.log(validIPv4("172.16.254.1"));
console.log(validIPv4("222.111.111.111"));
console.log(validIPv4("5555..555"));
console.log(validIPv4("0.0.0.255"));
console.log(validIPv4("01.01.01.01"));
console.log(validIPv4("192.168.1.00"));

console.log("====================Validate IPv6===========================")

function validIPv6(str) {
    // let regex =
    //     /^([0-9a-fA-F]{1,4})\:([0-9a-fA-F]{1,4})\:([0-9a-fA-F]{1,4})\:([0-9a-fA-F]{1,4})\:([0-9a-fA-F]{1,4})\:([0-9a-fA-F]{1,4})\:([0-9a-fA-F]{1,4})\:([0-9a-fA-F]{1,4})$/;
    let regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    if (regex.test(str)) return true;
    return false;
}

console.log(validIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
console.log(validIPv6("2001:db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPv6("2001:0db8:85a3::8A2E:037j:7334"));
console.log(validIPv6("02001:0db8:85a3:0000:0000:8a2e:0370:7334"));