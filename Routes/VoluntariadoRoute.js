const VoluntariadoController = require('../Controllers/VoluntariadoController');
module.exports = (app) => {
   app.post('/Voluntariado', VoluntariadoController.post);
   app.put('/Voluntariado/:id', VoluntariadoController.put);
   app.delete('/Voluntariado/:id', VoluntariadoController.delete);
   app.get('/Voluntariado', VoluntariadoController.get);
   app.get('/Voluntariado/:id', VoluntariadoController.getById);
}