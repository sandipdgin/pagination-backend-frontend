express = require('express');
const app = express();
const search = require('./routes/api/search')
const PORT = process.env.PORT || 5000;

app.use(express.json())

// app.use(/(.*)/, handler()); 

//set headers
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// items API Routes
app.use('/api/policy', search);

// app.all('*', (req, res) => {
//     res.status(404).send('Resource not found');
// })

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// http://localhost:5000/api/policy/search