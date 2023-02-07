function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
    let decimal = parseInt(hex, 16);
    if (decimal > 2147483647) {
        decimal -= 4294967296;
    }
    return (decimal/10000).toString();
}
module.exports = {decimaltoHexa,HexToSignedInt}