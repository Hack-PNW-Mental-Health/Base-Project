const express = require('express');
const app = express();

app.listen(5000);

// request vs response
app.get('/', (req, res) => {
    res.send('FirstName LastName');
    console.log("Connection Facilitated")
    res.get();
});

