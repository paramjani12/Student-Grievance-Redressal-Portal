const express = require("express")
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path:'./config/config.env'})

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const auth = require('./routes/auth.routes')
app.use('/api/auth', auth);
const PORT = 8080;

app.listen(PORT,()=>{
    console.log('server started on 8080')
})