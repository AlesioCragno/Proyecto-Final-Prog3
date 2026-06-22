const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_por_defecto';

// Genercion de token firmado con datos esenciales del usuario
function generarToken(user) {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
  return token;
}

// Interceptor de peticiones. Extrae y valida el token del header de una peticion
function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Formato de token invalido" })
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no encontrado en el header' });
  }

  try {
    const tokendeco = jwt.verify(token, JWT_SECRET); // Verificación con jwt.verify
    req.user = tokendeco; // Guardado de datos en req.user
    next(); // LLamar a next
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

module.exports = { generarToken, verificarToken };
