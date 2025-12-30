import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import edificiosRoutes from './routes/edificios.routes';
import departamentosRoutes from './routes/departamentos.routes';
import clientesRoutes from './routes/clientes.routes';
import reservasRoutes from './routes/reservas.routes';
import usuariosRoutes from './routes/usuarios.routes';
import limpiezaRoutes from './routes/limpieza.routes';
import dashboardRoutes from './routes/dashboard.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    mensaje: '🏢 API de Gestión de Departamentos',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth (registro, login, perfil)',
      usuarios: '/api/usuarios',
      edificios: '/api/edificios',
      departamentos: '/api/departamentos',
      clientes: '/api/clientes',
      reservas: '/api/reservas',
      limpieza: '/api/limpieza',
      dashboard: '/api/dashboard'
    }
  });
});

// RUTAS
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/edificios', edificiosRoutes);
app.use('/api/departamentos', departamentosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/limpieza', limpiezaRoutes);
app.use('/api/dashboard', dashboardRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('═══════════════════════════════════════');
  console.log('  ✅ SERVIDOR FUNCIONANDO');
  console.log(`  🌐 URL: http://localhost:${PORT}`);
  console.log('  🗄️  Base de datos conectada');
  console.log('  🔐 Sistema de autenticación activo');
  console.log('  📋 Gestión completa de reservas');
  console.log('  🧹 Sistema de limpieza activo');
  console.log('  👥 Gestión de usuarios activa');
  console.log('═══════════════════════════════════════');
});