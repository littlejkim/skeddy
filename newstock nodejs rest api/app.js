const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const iconv = require('iconv-lite');
const tabletojson = require('tabletojson');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var corsOptions = {
    origin: 'https://news.naver.com/*'
}
app.get('/', cors(corsOptions), (req, res) => {
    var code = req.query.code
    var page = req.query.page
    var result
    res.set({ 'content-type': 'application/json; charset=utf-8' });

    var url = 'https://finance.naver.com/item/sise_day.nhn?code='+code+'&page='+page;
    tabletojson.convertUrl(url,function(tableAsJson){
    
    
    var a = tableAsJson[0]
    result = a;
    console.log(result);
    
    
    res.send(result);
});
    

  });



app.listen(3000);

// function finrequest(code, page){
//     request('https://finance.naver.com/item/sise_day.nhn?code='+ code + '&page='+ page, { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body);
//     return body;
//     })}
