const VoluntariadoController = require('../Controllers/VoluntariadoController');
module.exports = (app) => {
   app.post('/voluntariado', VoluntariadoController.post);
   app.put('/voluntariado/:id', VoluntariadoController.put);
   app.delete('/voluntariado/:id', VoluntariadoController.delete);
   app.get('/voluntariado', VoluntariadoController.get);
   app.get('/voluntariado/:id', VoluntariadoController.getById);
}