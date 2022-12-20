let CF0F1F2 = require('../pdo/cF0F1F2')
let ControllerVehiculo = require('../controller/controller.vehiculo')
class CSocketCliente
{

    constructor(socket)
    {
        this.oSocket = socket
        this.oF0F1F2 = null
    }

    insertarTrama(trama)
    {
        switch (trama[0].toString(16)){
            case 'f0':
            case 'f1':
            case 'f2':
                this.oF0F1F2 = new CF0F1F2(trama)
                this.getF0F1F2.initDivicionTrama()
                ControllerVehiculo.registroControllerVehiculo(this.getF0F1F2.getSerieEquipo())
                break;
        }
    }


    imprimirTramaDecodificada()
    {
        if(this.oF0F1F2 != null)
        {
            console.log(this.getF0F1F2.getTramaCompletaHexadecimal)
            console.log("TIPO : "+this.getF0F1F2.getTipoTrama)
            console.log("TAMANIO : "+this.getF0F1F2.getTamanioTrama)
            console.log("SERIE : "+this.getF0F1F2.getSerieEquipo)
            console.log("VELOCIDAD : "+this.getF0F1F2.getVelocidad)
            console.log("ORIENTACION : "+this.getF0F1F2.getOrientacion)
            console.log("SATELITES : "+this.getF0F1F2.getSatelites)
            console.log("FECHA : "+this.getF0F1F2.getFecha)
            console.log("LATITUD : "+this.getF0F1F2.getLatitud)
            console.log("LONGITUD : "+this.getF0F1F2.getLongitud)
            console.log("BANDERAS : "+this.getF0F1F2.getBandera)
            console.log("************************************************************")
        }
    }



    get getSocket(){
        return this.oSocket
    }

    get getF0F1F2(){
        return this.oF0F1F2
    }


    set setSocket(valor){
        this.oSocket = valor
    }



    set setF0F1F2(valor){
        this.oF0F1F2 = valor
    }
}

module.exports = CSocketCliente