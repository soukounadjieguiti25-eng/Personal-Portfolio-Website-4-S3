const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'public')));

// Display the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});