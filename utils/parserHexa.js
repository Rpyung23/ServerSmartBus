function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
   /*var dato =  Buffer.from(hex, 'hex').readInt32LE()
   return ("-0"+Math.abs(dato/10000))*/

    var entero = parseInt(hex, 16);

    if (entero > 0x7FFFFFFF) {
        entero = -(0xFFFFFFFF - entero + 1);
    }

    return (entero/10000).toString()


}

module.exports = {decimaltoHexa,HexToSignedInt}