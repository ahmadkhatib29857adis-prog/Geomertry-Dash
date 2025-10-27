import express from 'express';
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
