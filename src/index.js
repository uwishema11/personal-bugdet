

const app =require('./app');
const sequelize= require('../config/database.js');
const swaggerDocs = require('../public/api-docs/swagger.js');



const PORT = process.env.PORT;

swaggerDocs(app);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


