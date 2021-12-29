const NewsletterController = require('../Controllers/NewsletterController');
module.exports = (app) => {
   app.post('/newsletter', NewsletterController.post);
   app.put('/newsletter/:id', NewsletterController.put);
   app.delete('/newsletter/:id', NewsletterController.delete);
   app.get('/newsletter', NewsletterController.get);
   app.get('/newsletter/:id', NewsletterController.getById);
}