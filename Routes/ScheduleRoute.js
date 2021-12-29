const ScheduleController = require('../Controllers/ScheduleController');
module.exports = (app) => {
   app.post('/Schedule', ScheduleController.post);
   app.put('/Schedule/:id', ScheduleController.put);
   app.delete('/Schedule/:id', ScheduleController.delete);
   app.get('/Schedule', ScheduleController.get);
   app.get('/Schedule/:id', ScheduleController.getById);
}