const express = require('express');
const port = process.env.PORT || 4260;
const app = express();
const path = require('path');

const destinationDir = path.join(__dirname, '../dist');

// It is use to host directory from dist folder.
app.use(express.static(destinationDir));
console.log(`express hosting from ${destinationDir}`);

// serve the index.html
app.get('*', (req, res)=>{
    res.sendfile(path.join(destinationDir, 'index.html'));
});
console.log(`serving index.html`);

// intialize app and listen to port
app.listen(port, ()=> console.log(`server is running from port ${port}`));