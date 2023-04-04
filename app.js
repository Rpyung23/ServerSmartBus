// 1*60*60*1000
//const TIMEOUT_1HORA = (1*60*60*1000)
const net = require('net');
const ControllerTramaSocket = require("./controller/controller.tramaSocket")
const {decimaltoHexa} = require("./utils/parserHexa")
// Importa la clase SingletonEquipoGps desde el archivo donde la hayas definido.
const SingletonEquipoGps  = require('./models/SingletonEquipoGps');
const server = net.createServer()
// Obtén la instancia de la clase.
const oSingletonEquipoGps  = new SingletonEquipoGps();

server.on('connection', (socketClient)=>
{
    console.log('NUEVO CLIENTE CONECTADO '+socketClient.remoteAddress)

    socketClient.on('data', (data)=>
    {
        if(data.toString().includes('\ufffd'))
        {
            /**DATOS RECIBOS DESDE EQUIPO GPS**/
            //console.log(data)
            try{
                var serie = decimaltoHexa(data[2])+decimaltoHexa(data[3])+decimaltoHexa(data[4])
                oSingletonEquipoGps.agregarEquipo(serie,socketClient,data)
                ControllerTramaSocket.registerControllerTramaSocket(serie,data.toString())
            }catch (e) {
                console.log(e)
            }

        }else{
            /**DATOS RECIBOS NETWORK**/
            console.log(data.toString())
        }
    })

    socketClient.on('close', ()=>{
        console.log('EL SOCKET CLIENTE HA FINALIZADO LA COMUNICACION '+socketClient.remoteAddress)
    })

    socketClient.on('error', (err)=>{
        console.log(err.message)
    })

    socketClient.on('timeout',()=>{
        console.log("SOCKET TIMEOUT "+socketClient.remoteAddress)
        socketClient.end()
    })

})

server.on('listening',()=>{
    console.log("SOCKET SERVER LISTENING....")
})


server.on('error',(error)=>{
    console.log("**********************************************************************")
    console.log("SOCKET SERVER ERROR : ....")
    console.log(error)
    console.log(error.message)
    console.log("**********************************************************************")
})


server.listen(7890, ()=>
{
    console.log('SOCKET SERVER LISTEN', server.address().port)
})

