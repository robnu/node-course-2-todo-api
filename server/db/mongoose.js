var mongoose = require('mongoose');

/* Mongoose supports callbacks by default. The line below tells mongoose which promise library
we wanna use. Here we tell mongoose we wanna use the built in promise library */
mongoose.Promise = global.Promise;

// Very similar to MongoClient.connect()
mongoose.connect('mongodb://localhost:27017/TodoApp', {
	useMongoClient: true
});

module.exports = { mongoose };
