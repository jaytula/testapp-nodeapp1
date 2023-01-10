import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!!!! ExpressJS.');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})