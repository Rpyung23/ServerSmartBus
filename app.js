// 1*60*60*1000
//const TIMEOUT_1HORA = (1*60*60*1000)
require("./env/port")
const {convertBufferToHex} = require("./utils/parserHexa")
const net = require('net');
const server = net.createServer()
server.on('connection', (socketClient)=>
{
    console.log('NUEVO CLIENTE CONECTADO '+socketClient.remoteAddress)

    socketClient.on('data', (data)=>
    {
        console.log(data)
        /**DATOS RECIBOS DESDE EQUIPO GPS**/
        try{
            var serie = convertBufferToHex(data[2])+convertBufferToHex(data[3])+convertBufferToHex(data[4])
            console.log(`SERIE ${serie}`)
            socketClient.write('.trackOK.')
        }catch (e) {
            console.log(e)
        }

        /*if(data.toString().includes('\ufffd'))
        {


        }else{
            console.log(data.toString())
            var asciiDatos = data.toString().split(',')
            let equipo = oSingletonEquipoGps.obtenerEquipoPorSerie(asciiDatos[0].toString())
            asciiDatos.splice(0,1)
            console.log("ENVIANDO : "+asciiDatos.toString())
            if(equipo != undefined){
                equipo.socketEquipo.write(asciiDatos.toString())
            }else{
                console.log("EQUIPO NO ENCONTRADO")
            }
        }*/
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


server.listen(process.env.PORT, ()=>
{
    console.log(`SOCKET SERVER LISTEN ${process.env.PORT}`)
})

