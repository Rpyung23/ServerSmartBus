const ModelVehiculo = require('../models/model.vehiculo')
class ControllerVehiculo
{
    static async registroControllerVehiculo(serie)
    {
        await ModelVehiculo.registroVehiculo(serie)
    }
}


module.exports = ControllerVehiculo