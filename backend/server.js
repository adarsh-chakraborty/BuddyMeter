if (!process.env.HEROKU) {
  require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use('/api', apiRoutes);


app.get('/getPort', (req, res) => {
  res.json({ port: PORT });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), '/frontend/build')));
  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve('frontend', 'build', 'index.html'));
  });
}

console.log(`Server is running in ${process.env.NODE_ENV} mode`)
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) {
    console.log('Error connecting to mongodb!, ', err);
    return;
  }
  console.log(`🍃 Connected to MongoDB.`);
  app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT}`));
});
