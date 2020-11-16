import express from 'express';

// Inicializamos express desde una constante llamada app, que será la que tenga toda la funcionalidad que me aporta express como framework de NODE
const app = express();

// Configurando el servidor, mediante los métodos que me da express.
app.set('port', 3000);

// levantar el servidor en el puerto configurado
app.listen(app.get('port'), () => {
    console.log(`El servidor se ha levantado correctamente en el puerto ${app.get('port')}`);
    console.log('Esto es uun cambio nuevo');
    
});