
const express = require('express');
const app = express();
const port = 8005;

app.get('/',(req,res) => {
    res.send('<h1>hello server started</h1>');
})

app.listen(port,() => {
    console.log(`server successfully started at port ${port}`);
})