function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

module.exports = decimaltoHexa