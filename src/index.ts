import App from './App';

const app = new App().application;

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});