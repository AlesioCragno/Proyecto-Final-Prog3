export interface InterfaceColeccion {
    userId: number
    videojuegoId: number
    estado: "completado" | "jugando" | "pendiente"
    calificacion: number | null
    tiempoJuego: number
}