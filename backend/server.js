const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const { sequelize } = require("./models/indexModel");
const routes = require("./routes");

const { establecerCardinalidad } = require("./models/cardinalidadesModel");

const { ejecutarSeederUsuario } = require("./seeders/seederUser");
const { ejecutarSeederVideojuego } = require("./seeders/seederVideojuego");
const { ejecutarSeederColeccion } = require("./seeders/seederColeccion");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();
    this.routes();
  }

  // Middleware de seguridad
  middleware() {
    this.app.use(helmet());

    this.app.use(
      cors({
        origin: [
          process.env.CORS_ORIGIN,
          "http://localhost:3000",
          "https://proyecto-final-prog3.netlify.app",
        ],
        credentials: true,
      }),
    );

    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true }));

    if (process.env.NODE_ENV !== "test") {
      this.app.use(morgan("combined"));
    }
  }

  routes() {
    this.app.use("/api", routes);

    this.app.use((err, req, res, next) => {
      console.error("Error no controlado detectado:", err.stack);
      res.status(err.status || 500).json({ error: err.message || "Internal Server Error"});
    });

    this.app.use("*", (req, res) => {
      res.status(404).json({
        error: "Route not found",
      });
    });
  }

  // Inicializar servidor
  async startServer() {
    try {
      // Establecer cardinalidades
      console.log("Configurando relaciones y cardinalidades.")
      establecerCardinalidad();

      // Probar conexión a la base de datos
      await sequelize.authenticate();
      console.log("✅ Database connection established successfully.");

      // En desarrollo, sincronizar modelos
      if (process.env.NODE_ENV === "development") {
        await sequelize.sync({ alter: false });
        console.log("✅ Database synchronized");
      }

      await ejecutarSeederUsuario();
      await ejecutarSeederVideojuego();
      await ejecutarSeederColeccion();

      this.app.listen(this.port, () => {
        console.log(`🚀 Server is running on port ${this.port}`);
        console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
        console.log(`🔗 API available at: http://localhost:${this.port}/api`);
      });
    } catch (error) {
      console.error("❌ Unable to start server:", error);
      // Continuar sin base de datos para desarrollo
      this.app.listen(this.port, () => {
        console.log(`⚠️  Server started without database on port ${this.port}`);
      });
    }
  }
}

const server = new Server();
server.startServer();

// Manejo de cierre graceful
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  try {
    await sequelize.close();
  } catch (error) {
    console.error("Error closing database:", error);
  }
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, shutting down gracefully");
  try {
    await sequelize.close();
  } catch (error) {
    console.error("Error closing database:", error);
  }
  process.exit(0);
});
