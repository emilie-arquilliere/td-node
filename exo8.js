const http = require('http');
const bl = require('bl');
const [_node,_path,url] = process.argv;

http.get(url,(response)=>{
    response.pipe(bl((err,data)=>{
        if(err) return console.error;
        console.log(data.length);
        console.log(data.toString());
    }));
});
