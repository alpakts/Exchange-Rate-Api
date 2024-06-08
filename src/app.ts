import express from 'express';
import apiRoutes from './routes/api';

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);
app.get('/', (req, res) => res.send('Welcome to the Currency Exchange API!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
