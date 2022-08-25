function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
  var dato = parseInt(hex,16)
  return (dato/1000)
}
module.exports = {decimaltoHexa,HexToSignedInt}