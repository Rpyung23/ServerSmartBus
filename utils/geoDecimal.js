function ConvertGeoNMEADecimales(punto)
{
    console.log("PUNTO : "+punto)
    var puntoPartes = []
    var puntoParteUno = ""
    var isNegativo = parseFloat(punto) < 0 ? -1 : 1
    var dd = ""
    var mm = ""
    var mmmm = ""


    puntoPartes = punto.split('.')
    puntoParteUno = parseInt(puntoPartes[0]) >  0 ? puntoPartes[0] : (-1*puntoPartes[0]).toString()
    mmmm = "."+puntoPartes[1]

    for (var i = puntoParteUno.length;i>=0;i--)
    {
        if(puntoParteUno[i] != undefined)
        {
            if(mm.length<2){
                mm = puntoParteUno[i]+mm
            }else {
                dd = puntoParteUno[i]+dd
            }
        }
    }

    console.log("DD : "+dd)
    console.log("MM : "+mm)
    console.log("MMMM : "+mmmm)

    console.log("MM.MMMM /60 : " + parseFloat(mm+mmmm)/60)

    var coordenada = isNegativo * (parseInt(dd) + (parseFloat(mm+mmmm)/60))
    console.log("COORDENADA : "+parseFloat(coordenada).toFixed(6))
    return (parseFloat(coordenada).toFixed(6))
}


module.exports = ConvertGeoNMEADecimales