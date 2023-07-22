
/**
 * Chuong trinh tim uoc chung lon nhat (USCLN)
 * va boi so chung nho nhat (BSCNN) cua 2 so a và b
 * 
 * @author https://github.com/vinhngo1907
 */

function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const a = 4, b = 6;
console.log(`USCLN ${a} & ${b}: ${gcd(a, b)}`)
console.log(`BSCLN ${a} & ${b}: ${lcm(a, b)}`)