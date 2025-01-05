const http = require('http');
const fs = require('fs');
const path = require('path'); // Use path to resolve file paths correctly

const hostname = '127.0.0.1';
const port = 3000;

// Use path.join to correctly reference files
const home = fs.readFileSync(path.join(__dirname, 'index.html'));
const about = fs.readFileSync(path.join(__dirname, 'about.html'));
const contact = fs.readFileSync(path.join(__dirname, 'contact.html'));
const services = fs.readFileSync(path.join(__dirname, 'services.html'));

const server = http.createServer((req, res) => {
    console.log('Requested URL:', req.url); // Debugging the requested URL
    const url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url == '/') {
        res.end(home);
    } else if (url == '/about.html') {
        res.end(about);
    } else if (url == '/contact.html') {
        res.end(contact);
    } else if (url == '/services.html') {
        res.end(services);
    } else {
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
