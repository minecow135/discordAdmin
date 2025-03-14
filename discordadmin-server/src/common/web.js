const express = require('express');
const app = express();
const port = 5000;

let content = {
    awd:"aad",
    awd2:"aad5",
    awd3:"aad6",
    awd4:"aad7",
}; 

app.get('/', (req, res) => {
    res.send(content)
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});