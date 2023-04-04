class EquipoGps {
    constructor(serieEquipo, socket, trama) {
        this._serieEquipo = serieEquipo;
        this._socketEquipo = socket;
        this._tramaEquipo = trama;
    }

    get serieEquipo() {
        return this._serieEquipo;
    }

    set serieEquipo(serie) {
        this._serieEquipo = serie;
    }

    get socketEquipo() {
        return this._socketEquipo;
    }

    set socketEquipo(socket) {
        this._socketEquipo = socket;
    }

    get tramaEquipo() {
        return this._tramaEquipo;
    }

    set tramaEquipo(buffer) {
        this._tramaEquipo = buffer;
    }
}

module.exports = EquipoGps