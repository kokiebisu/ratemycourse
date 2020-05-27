import App from './app';

const app = new App();
const PORT = parseInt(process.env.PORT) || 5000;

app.listen(PORT);
