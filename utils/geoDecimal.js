/**
 * Private Function ConvertirGeograficaDecimal(strValor As String) As Single
 *         Dim ValorRetorno As Single = 0
 *         Dim Coordenada As String = strValor.Trim
 *         Dim ValorNumerico As Single = CSng(Coordenada)
 *         Dim Signo As Integer = 0
 *         Dim PosicionPunto As Integer = 0
 *         Dim Minutos As Single = 0
 *         Dim Parte As String = ""
 *         Dim Grados As Single = 0
 *         Dim Decimales As Single = 0
 *         Dim CoordenadaGeografica As Double = 0
 *         PosicionPunto = InStr(Coordenada, ".")
 *         Parte = Mid(Coordenada, PosicionPunto - 2, 2)
 *         Minutos = CSng(Parte)
 *         Parte = Mid(Coordenada, PosicionPunto + 1, 4)
 *         Decimales = CSng(Parte) / 10000
 *         If ValorNumerico < 0 Then
 *             Signo = -1
 *             Parte = Mid(Coordenada, 2, PosicionPunto - 4)
 *             Grados = CSng(Parte)
 *         Else
 *             Signo = 1
 *             Parte = Mid(Coordenada, 1, PosicionPunto - 3)
 *             Grados = CSng(Parte)
 *         End If
 *         CoordenadaGeografica = Signo * (Grados + ((Minutos + Decimales) / 60))
 *         ValorRetorno = CoordenadaGeografica
 *         Return ValorRetorno
 *     End Function
 *
 *
 * **/


function convertNMEAtoDECIMAL(strValor)
{
    console.log(strValor)
    console.log("-----------------------------------")
    let ValorRetorno = 0;
    let Coordenada = strValor.trim();
    let ValorNumerico = parseFloat(Coordenada);
    let Signo = 0;
    let PosicionPunto = 0;
    let Minutos = 0;
    let Parte = "";
    let Grados = 0;
    let Decimales = 0;
    let CoordenadaGeografica = 0;
    PosicionPunto = Coordenada.indexOf(".");
    Parte = Coordenada.substring(PosicionPunto - 2, 2);
    Minutos = parseFloat(Parte);
    Parte = Coordenada.substring(PosicionPunto + 1, 4);
    Decimales = parseFloat(Parte) / 10000;
    if (ValorNumerico < 0) {
        Signo = -1;
        Parte = Coordenada.substring(2, PosicionPunto - 4);
        Grados = parseFloat(Parte);
    } else {
        Signo = 1;
        Parte = Coordenada.substring(1, PosicionPunto - 3);
        Grados = parseFloat(Parte);
    }
    CoordenadaGeografica = Signo * (Grados + (Minutos + Decimales) / 60);
    ValorRetorno = CoordenadaGeografica;
    return ValorRetorno;
}



module.exports = convertNMEAtoDECIMAL