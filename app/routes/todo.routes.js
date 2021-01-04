module.exports = (app) => {
    const todo = require('../controllers/todo.controller.js');

    // Create a new Todo
    app.post('/todo', todo.create);

    // Retrieve all Notes
    app.get('/todo', todo.findAll);

    // Retrieve a single Todo with id
    app.get('/todo/:id', todo.findOne);

    // Update a Todo with id
    app.put('/todo/:id', todo.update);

    // Delete a Todo with id
    app.delete('/todo/:id', todo.delete);
}