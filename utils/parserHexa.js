function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
   /*var dato =  Buffer.from(hex, 'hex').readInt32LE()
   return ("-0"+Math.abs(dato/10000))*/
    /*let decimal = parseInt(hex, 16);
    if (decimal > 2147483647) {
        decimal -= 4294967296;
    }
    return decimal.toString();*/

    var dato = parseInt(hex, 16) | 0;
    return dato.toString()
}
module.exports = {decimaltoHexa,HexToSignedInt}