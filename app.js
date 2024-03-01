const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 80;

// Use the cors middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
