const { Buffer } = require('node:buffer')
const cSocketCliente = require("./pdo/cSocketCliente")
const express = require("express")
const cors = require('cors');
/**CONFIGURACION DE CORS**/
var cors_config = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
const app = express()


const net = require('net');
const server = net.createServer()
let mListaSocketClientes = []

let banderaSendEnvio = true;


app.use(cors(cors_config));
app.use(express.json({limit: '80mb'}));
app.use(express.urlencoded({ extended: false,limit:'80mb' }));

server.on('connection', (socket)=>
{
    console.log('CLIENTE CONECTADO')

    var oS = new cSocketCliente(socket,null)
    mListaSocketClientes.push(socket)

    socket.on('data', (data)=>
    {
        console.log(data)
        /*var buffer = Buffer.alloc(31,'gps,-11.102030,-78.255626,12345');
        console.log(buffer)
        socket.write(buffer,(err)=>{
            console.log(err)
        })*/

        oS.insertarTrama(data)
        oS.imprimirTramaDecodificada()

        /*if(banderaSendEnvio){
            console.log("WRITING..............")
            socket.write(".msj..10.probando/equipo*");
            console.log("WRITE COMPLETE")
            banderaSendEnvio = false
        }*/


    })

    socket.on('close', ()=>{
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

app.post("/sendComando",function (req,res)
{
    console.log("COMANDO RECIVO : "+req.body.comando)
    try {
        if(mListaSocketClientes.length > 0)
        {
            console.log("TAMANIO LISTA SOCKETS : "+mListaSocketClientes.length)
            try{
                if (mListaSocketClientes[mListaSocketClientes.length-1].isConnected)
                {
                    console.log("CLIENTID : "+mListaSocketClientes[mListaSocketClientes.length-1].clientId)
                    console.log("ADDRESS : "+mListaSocketClientes[mListaSocketClientes.length-1].address)
                    mListaSocketClientes[mListaSocketClientes.length-1].write(req.body.comando)
                    res.status(200).json({
                        msm:"comando enviado"
                    })
                }else{
                    res.status(200).json({
                        msm:"comando no enviado CLIENTE NO CONNECTADO"
                    })
                }

            }catch (e) {
                console.log("TRY CATCH SOCKET.WRITE")
                console.log(e)
            }
        }else{
            res.status(200).json({
                msm:"SOCKETS VACIOS"
            })
        }
    }catch (e) {

        res.status(200).json({
            msm: e.toString()
        })
    }
})

server.listen(7890, ()=>
{
    console.log('servidor esta escuchando en la puerta', server.address().port)
})

app.listen(3001,()=>{
    console.log("REST ONLINE.....")
    console.log('Escuchando por el puerto : '+3001)
})