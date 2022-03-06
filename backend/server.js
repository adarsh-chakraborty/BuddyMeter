if (!process.env.HEROKU) {
  require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) {
    console.log('Error connecting to mongodb!, ', err);
    return;
  }
  app.listen(PORT, () => console.log('🚀 Server is running on port', PORT));
});
