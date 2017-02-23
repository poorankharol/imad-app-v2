var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
  title:'Article ome',
  heading:'article one',
  date:'sept 5',
  content:`<p> This is ContentThis is ContentThis is ContentThis is ContentThis is Content</p>
             <p>This is ContentThis is ContentThis is ContentThis is ContentThis is Content</p>`
  
};
function html1(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var html=`
    <html>
    <head>
        <title> ${title}</title>
        <meta name="viewport" content="width-device-width ,initial-scale=1"/> 
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <h3> ${heading} </h3>
        <h3> ${date} </h3>
        ${content}
    </body>
    </html>
`;
return html;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function (req,res){
    res.send(html1(articleone));
});
app.get('/article-two',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
