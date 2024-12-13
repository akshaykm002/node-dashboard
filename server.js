const express = require('express');
const cors = require('cors'); 
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const insightRoutes = require('./routes/insiteRoutes.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173' })); 

app.use('/api/insights', insightRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
