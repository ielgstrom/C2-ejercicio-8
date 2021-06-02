/* eslint-disable max-classes-per-file */
class Personaje {
    nombre;

    familia;

    estado;

    edad;

    serie = "Juego de Tronos";

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
class Rey extends Personaje {
    anyosReinado;

    constructor(nombre, familia, edad, anyosReinado, estado = "vivo") {
        super(nombre, familia, edad, estado);
        this.anyosReinado = anyosReinado;
    }

    comunicar() {
        return super.comunicar("Vais a morir todos.");
    }
}
class Luchador extends Personaje {
    arma;

    destreza;

    constructor(nombre, familia, edad, arma, destreza, estado = "vivo") {
        super(nombre, familia, edad, estado);
        this.arma = arma;
        this.destreza = this.getDestreza(destreza);
    }

    comunicar() {
        return super.comunicar("Primero pego y luego pregunto.");
    }

    getDestreza(valor) {
        if (valor < 0) {
            return 0;
        } else if (valor > 10) {
            return 10;
        } else {
            return valor;
        }
    }
}
class Asesor extends Personaje {
    personajeAsesorado;

    constructor(nombre, familia, edad, personajeAsesorado, estado = "vivo") {
        super(nombre, familia, edad, estado);
        if (this.comprobarPersonajeAsesorado(personajeAsesorado)) {
            this.personajeAsesorado = personajeAsesorado;
        } else {
            throw `El asesor (${this.nombre}) no puede asesorar al personaje (${personajeAsesorado.nombre}). Solo puede asesorar reyes, luchadores, asesores o escuderos`;
        }
    }

    comunicar() {
        return super.comunicar("No sé por qué, pero creo que voy a morir pronto.");
    }

    comprobarPersonajeAsesorado(personaje) {
        return (
            personaje instanceof Rey ||
            personaje instanceof Luchador ||
            personaje instanceof Asesor ||
            personaje instanceof Escudero
        );
    }
}
class Escudero extends Personaje {
    personajeAlQueSirve;

    gradoPelotismo;

    constructor(
        nombre,
        familia,
        edad,
        personajeAlQueSirve,
        gradoPelotismo,
        estado = "vivo"
    ) {
        super(nombre, familia, edad, estado);
        if (this.comprobarPersonajeAlQueSirve(personajeAlQueSirve)) {
            this.personajeAlQueSirve = personajeAlQueSirve;
        } else {
            throw `El escudero (${this.nombre}) no puede servir al personaje (${personajeAlQueSirve.nombre}) porque no es un luchador.`;
        }
        this.gradoPelotismo = this.getGradoPelotismo(gradoPelotismo);
    }

    comunicar() {
        return super.comunicar("Soy un loser.");
    }

    comprobarPersonajeAlQueSirve(personaje) {
        return personaje instanceof Luchador;
    }

    getGradoPelotismo(valor) {
        if (valor < 0) {
            return 0;
        } else if (valor > 10) {
            return 10;
        } else {
            return valor;
        }
    }
}
const joffreyBaratheon = new Rey("Joffrey Baratheon", "Baratheon", 40, 20);
const jaimeLannister = new Luchador(
    "Jaime Lannister",
    "Lannister",
    40,
    "Espada",
    10
);
const daenerysTargaryen = new Luchador(
    "Daenerys Targaryen",
    "Targaryen",
    20,
    "Puños",
    8
);
const tyrionLannister = new Asesor(
    "Tyrion Lannister",
    "Lannister",
    23,
    daenerysTargaryen
);
const bronn = new Escudero("Bronn", "Bronn", 28, jaimeLannister);
