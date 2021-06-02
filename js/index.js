class Personaje {
    nombre;

    familia;

    estado;

    edad;

    constructor(nombre, familia, edad, estado = "vivo") {
        this.nombre = nombre;
        this.familia = familia;
        this.estado = estado;
        this.edad = edad;
    }

    comunicar(mensaje) {
        return `${this.nombre} dice: ${mensaje}`;
    }

    morir() {
        this.estado = "muerto";
    }
}