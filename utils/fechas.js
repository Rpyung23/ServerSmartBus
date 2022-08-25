function parserFechas(epoch)
{
    var fecha = epoch * 1000
    fecha = fecha - 18000000
    var new_fecha = new Date(fecha)

    var dia = new_fecha.getDate();

    var mes = new_fecha.getMonth();

    mes += 1

    var min = new_fecha.getMinutes()
    var hour = new_fecha.getHours()
    var seg = new_fecha.getSeconds()

    if(dia<10)
    {
        dia = "0"+dia;
    }
    if(mes<10)
    {
        mes = "0"+mes;
    }

    if(hour<10)
    {
        hour = "0"+hour;
    }

    if(min<10)
    {
        min = "0"+min;
    }

    if(seg<10)
    {
        seg = "0"+seg;
    }



    return (new_fecha.getFullYear()+"-"+mes+"-"+dia+" "+hour+":"+min+":"+seg)

}


module.exports = parserFechas