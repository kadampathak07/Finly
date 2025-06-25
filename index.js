import './loadEnv.js';
import express from 'express';
import morgan from 'morgan';
import './libs/dbConnect.js';
import userRouter from './routes/user.route.js';

const app = express();
app.use(morgan('dev')); 
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: 'Landing Page' });
});
app.get('/home', (req, res) => {
  res.render('index', { message: 'Home Page' });
});
app.get('/about', (req, res) => {
  res.render('index', { message: 'About Page' });
});
app.use('/users', userRouter);
app.use((req, res) => {
  res.status(404).render('index', { message: '404 Not Found' });
});

const PORT= 3000;
app.listen(PORT, ()=>{
  console.log(`Server is running at http://localhost:${PORT}/`);
});