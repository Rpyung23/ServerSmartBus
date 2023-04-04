const {convertBufferToHex} = require("../utils/parserHexa")
const ModelTramaSocket = require("../models/model.tramaSocket")
class ControllerTramaSocket
{
    static async registerControllerTramaSocket(serie,trama)
    {
        var tramaString = ""
        for (var i = 0;i<trama.length;i++)
        {
            tramaString = tramaString+" "+convertBufferToHex(trama[i])
        }
        await ModelTramaSocket.registerModelTramaSocket(serie,tramaString.trim())
    }
}

module.exports = ControllerTramaSocket