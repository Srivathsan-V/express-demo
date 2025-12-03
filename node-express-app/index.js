const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
    const message = process.env.HELLO_MESSAGE || 'Hello, World!';
    res.json({ message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
