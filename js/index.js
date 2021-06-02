class Personaje {
  nombre;
  familia;
  estado;
  edad;
  constructor(nombre, familia, estado = "vivo", edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.estado = estado;
    this.edad = edad;
  }
  hablar(mensaje) {
    return `${mensaje}`;
  }
}
