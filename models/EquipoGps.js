class EquipoGps {
    constructor(serieEquipo, socket, trama) {
        this._serieEquipo = serieEquipo;
        this._socketEquipo = socket;
        this._tramaEquipo = trama;
        this._isF0 = false
        this._isB2 = false
    }


    get isF0() {
        return this._isF0;
    }

    set isF0(value) {
        this._isF0 = value;
    }

    get isB2() {
        return this._isB2;
    }

    set isB2(value) {
        this._isB2 = value;
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