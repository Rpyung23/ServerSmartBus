const connDB = require("../config/conn");
class ModelTramaSocket
{
    static async registerModelTramaSocket(serie,trama)
    {
        try{
            var conn = await connDB().promise()
            var sql = "insert into tramaSocket(serieEquipo, trama) values ('"+serie+"','"+trama+"');"

            await conn.query(sql)
            await conn.end()

        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = ModelTramaSocket