var mongoose = require('mongoose');

const mlabURI = 'mongodb+srv://chinhvnn:123VanChinh@demomongodb.fi7u1r9.mongodb.net/evizi-entry-training'

const connection = mongoose.connect(mlabURI, (error) => {
	if(error){
		console.log("Error database server:" + error);
	}else{
		console.log("Connected successfully to server MONGODB")
	}
});

module.exports = connection;