function parserFechas(epoch)
{
    var new_fecha = new Date(epoch * 1000)

    var dia = new_fecha.getUTCDate();

    var mes = new_fecha.getUTCMonth();

    mes += 1

    var min = new_fecha.getUTCMinutes()
    var hour = new_fecha.getUTCHours()
    var seg = new_fecha.getUTCSeconds()

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