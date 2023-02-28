function GeoDecimalesLatitud(punto)
{
    var stringPunto = punto


    var mListPuntoFinal = stringPunto.split('.')
    var stringPuntoFinal = mListPuntoFinal[1]
    var d = parseFloat(punto) <  0 ? -1 : 1
    var dd = stringPunto[1]+stringPunto[2]

    var mm = stringPunto[3]+stringPunto[4]
    var mmmm = "."+stringPuntoFinal
    //console.log(mm+mmmm)


    var parte1 = parseFloat(mm+mmmm)/60
    //console.log("PARSE FLOAT : "+parte1)
    var parte2 = parseFloat(dd) + parte1
    //console.log("PARTE 2 : "+parte2)
    var parte3 = parseFloat(d) * parte2

    //(𝑑) ∗ [𝑑𝑑 + (𝑚𝑚. 𝑚𝑚𝑚𝑚/60)]
    return parte3.toFixed(6)

}


function GeoDecimalesLongitud(punto)
{
    var stringPunto = punto


    var mListPuntoFinal = stringPunto.split('.')
    var stringPuntoFinal = mListPuntoFinal[1]
    var d = -1
    var dd = stringPunto[1]+stringPunto[2]+stringPunto[3]

    var mm = stringPunto[4]+stringPunto[5]
    var mmmm = "."+stringPuntoFinal
    //console.log(mm+mmmm)


    var parte1 = parseFloat(mm+mmmm)/60
    //console.log("PARSE FLOAT : "+parte1)
    var parte2 = parseFloat(dd) + parte1
    //console.log("PARTE 2 : "+parte2)
    var parte3 = parseFloat(d) * parte2


    return parte3.toFixed(7)
}

module.exports = {GeoDecimalesLatitud,GeoDecimalesLongitud}