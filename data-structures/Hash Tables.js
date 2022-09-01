// Hash (Strings Only)
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(o) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}