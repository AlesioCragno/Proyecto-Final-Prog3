import { sequelize } from "./indexModel";
import { DataTypes, Model, Optional } from "sequelize";
// @ts-ignore
import bcrypt from "bcryptjs";

import { InterfaceUser } from "../interfaces/userInterface";

interface UserCreationAttributes extends Optional<InterfaceUser, "id"> {}

export class User extends Model<InterfaceUser, UserCreationAttributes> implements InterfaceUser {

    declare id: number
    declare nombre: string
    declare email: string
    declare password: string
    declare readonly createdAt: Date
    declare readonly updatedAt: Date

    // Validar contraseña
    async validarContrasenia(password: string): Promise<boolean> {
        try {
            const coincide = await bcrypt.compare(password, this.password)
            return coincide
        } catch (error){
            console.error("Error. La contraseña no coincide con el hash", error)
            return false
        }
    }

    // Override de toJSON
    toJSON(): any {
        const { password, ...publicUser } = this.get()

        return publicUser
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 100]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 255]
            }
        }
    },
    {
        sequelize,
        tableName: "usuarios",
        timestamps: true,
        hooks: {
            beforeCreate: async (user: User) => {
                try {
                    const saltRounds = 10
                    const contraseniaHasheada = await bcrypt.hash(user.password, saltRounds)
                    user.password = contraseniaHasheada
                } catch (error) {
                    console.error("Error. No se puede hashear la contraña", error)
                }
            }
        }
    }
)