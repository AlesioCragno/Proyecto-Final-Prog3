import { sequelize } from "./indexModel"
import { DataTypes, Model, Optional } from "sequelize"

import { InterfaceVideojuego } from "../interfaces/videojuegoInterface"

export class Videojuego extends Model<InterfaceVideojuego> implements InterfaceVideojuego {

    declare id: number
    declare nombre: string
    declare descripcion: string
    declare genero: string
    declare plataforma: string
    declare readonly createdAt: Date
    declare readonly updatedAt: Date
    
    static async findAllVideogames(): Promise<Videojuego[]> {
        return await Videojuego.findAll()
    }

    static async findById(id: number): Promise<Videojuego | null> {
        return await Videojuego.findByPk(id)
    }

    static async createVideojuego(nombre: string, descripcion: string, genero: string, plataforma: string): Promise<Videojuego> {
        return await Videojuego.create(nombre, descripcion, genero, plataforma)
    }

    static async findLastOne(): Promise<Videojuego | null> {
        return await Videojuego.findOne({
            order: [["id", "DESC"]]
        })
    }
}