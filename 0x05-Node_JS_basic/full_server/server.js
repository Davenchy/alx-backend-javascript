import express from 'express';
import router from './routes';

const app = express();

app.use((req, res, next) => {
  req.databaseName = process.argv.length >= 3 ? process.argv[2] : '';
  next();
});

app.use(router);

app.listen(1245);

export default app;
