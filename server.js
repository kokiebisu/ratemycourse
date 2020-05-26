const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Course');

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to database...'))
  .catch((error) => console.log(error));

const app = require('./app');

require('./routes/courseRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on ${PORT}...`));
