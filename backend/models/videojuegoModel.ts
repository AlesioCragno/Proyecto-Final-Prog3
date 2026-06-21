import { sequelize } from "./indexModel"
import { DataTypes, Model, Optional } from "sequelize"

import { InterfaceVideojuego } from "../interfaces/videojuegoInterface"

type InputVideojuego = Omit<InterfaceVideojuego, "id">
interface VideojuegoCreationAttributes extends Optional<InterfaceVideojuego, "id"> {}

export class Videojuego extends Model<InterfaceVideojuego, VideojuegoCreationAttributes> implements InterfaceVideojuego {

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
        return await Videojuego.create({nombre, descripcion, genero, plataforma})
    }

    static async findLastOne(): Promise<Videojuego | null> {
        return await Videojuego.findOne({
            order: [["id", "DESC"]]
        })
    }
}

Videojuego.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        plataforma: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "videojuegos",
        timestamps: true
    }
)