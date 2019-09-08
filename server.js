const mongoose = require('mongoose');
// const keys = require('./config/keys');
require('./models/Course');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useMongoClient: true
  })
  .then(() => console.log('Successfully connected to Database'));

const app = require('./app');

require('./routes/courseRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on ${PORT}...`));
