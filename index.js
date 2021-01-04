const { createServer } = require('http');
const { readFile } = require('fs').promises;

const PORT = process.env.PORT || 3001;

const server = createServer( async (req, res) => {

    if(req.url === '/'){

        try{
            const file =  await readFile('index.html', 'utf-8');
            res.writeHead(200, {'Content-Type' : 'text/html' });
            res.write(file);
        }catch(err){
            res.writeHead(404);
            res.write('Server Error: Failed to read file :(');
        }

        return res.end();

    }else{ res.writeHead(301, {Location: '/'}); }

    return res.end();
});

server.listen(PORT, function(error){
	if(error) console.log('Error starting the server: ', error);
	else console.log('Server listening at port ', PORT);
});