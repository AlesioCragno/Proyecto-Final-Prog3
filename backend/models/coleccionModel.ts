import { sequelize } from "./indexModel";
import { DataTypes, Model, Optional } from "sequelize";

import { InterfaceColeccion } from "../interfaces/coleccionInterface"

interface ColeccionCreationAtributes extends Optional<InterfaceColeccion, "estado" | "calificacion" | "tiempoJuego"> {}

export class Coleccion extends Model<InterfaceColeccion, ColeccionCreationAtributes> implements InterfaceColeccion {
    
    declare userId: number;
    declare videojuegoId: number;
    declare estado: "completado" | "jugando" | "pendiente";
    declare calificacion: number | null;
    declare tiempoJuego: number;
    declare readonly createdAt: Date
    declare readonly updatedAt: Date

    // Buscar un juego dentro de la coleccion de un usuario
    static async findByUsuarioIdYJuegoId(userId: number, videojuegoId: number): Promise<Coleccion | null> {
        return await Coleccion.findOne({
            where: { userId, videojuegoId }
        })
    }

    // Buscar todos los juegos que tiene un usuario
    static async findAllByUsuario(userId: number): Promise<Coleccion[]> {
        return await Coleccion.findAll({
            where: { userId }
        })
    }
}

Coleccion.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        videojuegoId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        estado: {
            type: DataTypes.ENUM("completado", "jugando", "pendiente"),
            defaultValue: "pendiente"
        },
        calificacion: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tiempoJuego: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        sequelize,
        tableName: "colecciones",
        timestamps: true
    }
)