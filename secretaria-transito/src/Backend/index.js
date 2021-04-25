const server = require('./server');
const {PORT} = require('./config');

server.listen(PORT, () => {
    console.log('Transito app backend running on port ' + PORT)
})