import app from './app';
const db = require('./app/db/models');

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});

db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err: { message: string }) => {
    console.log('Failed to sync db: ' + err.message);
  });
