const connDB = require("../config/conn");
class ModelVehiculo
{
    static async registroVehiculo(serie)
    {
        try{
            var conn = await connDB(codigo).promise()
            var sql = "call ProcedureInsertVehiculo('"+serie+"');"
            console.log("SQL INSERT VEHICULO  :"+sql)
            await conn.query(sql)

        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = ModelVehiculo