import { User } from "./userModel";
import { Videojuego } from "./videojuegoModel";
import { Coleccion } from "./coleccionModel";

export const establecerCardinalidad = (): void => {
    User.belongsToMany(Videojuego, { through: Coleccion, foreignKey: "userId" });
    Videojuego.belongsToMany(User, { through: Coleccion, foreignKey: "videojuegoId"})

    Coleccion.belongsTo(Videojuego, { foreignKey: "videojuegoId" });
    Coleccion.belongsTo(User, { foreignKey: "userId" });
}