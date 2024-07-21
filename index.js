/** Load app module **/
const app = require('./app');

// Define the PORT No. that the server should listen
const PORT = process.env.PORT || 5000;

/** Bind Server with PORT No. **/
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});


