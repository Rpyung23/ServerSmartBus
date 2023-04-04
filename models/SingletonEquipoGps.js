
const EquipoGps = require("./EquipoGps")
class SingletonEquipoGps {
    constructor() {
        if (SingletonEquipoGps.instance) {
            return SingletonEquipoGps.instance;
        }
        SingletonEquipoGps.instance = this;
        this.equipos = [];
    }

    agregarEquipo(serieEquipo, socketEquipo, tramaEquipo) {
        let equipoExistente = this.obtenerEquipoPorSerie(serieEquipo);
        if (equipoExistente) {
            // Actualizar los datos del equipo existente.
            equipoExistente.socketEquipo = socketEquipo;
            equipoExistente.tramaEquipo = tramaEquipo;
        } else {
            // Agregar un nuevo equipo a la lista.
            const nuevoEquipo = new EquipoGps(serieEquipo, socketEquipo, tramaEquipo);
            this.equipos.push(nuevoEquipo);
        }
    }

    obtenerEquipoPorSerie(serieEquipo) {
        return this.equipos.find(equipo => equipo.serieEquipo === serieEquipo);
    }

    obtenerTodosLosEquipos() {
        return this.equipos;
    }

    eliminarEquipoPorSerie(serieEquipo) {
        this.equipos = this.equipos.filter(equipo => equipo.serieEquipo !== serieEquipo);
    }

    eliminarTodosLosEquipos() {
        this.equipos = [];
    }

    actualizarEquipoPorSerie(serie, nuevoSocket, nuevaTrama) {
        // Buscar el objeto que tenga la misma serieEquipo.
        const equipo = this._equipos.find((equipo) => equipo.serieEquipo === serie);
        if (!equipo) {
            console.log(`El equipo con serie ${serie} no existe.`);
            return;
        }
        equipo.socketEquipo = nuevoSocket;
        equipo.tramaEquipo = nuevaTrama;
    }
}

module.exports = SingletonEquipoGps