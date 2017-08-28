var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
var articleOne: {
    title: 'Article-one' ,
    heading: 'Article one',
    date: 'Aug 28, 2017' ,
    content: `<p>
                Article one is displayed here.
                Article one is displayed here.
                Article one is displayed here.
                Article one is displayed here.
            </p>`
},
var articleTwo =  {
    title: 'Article-two' ,
    heading: 'Article two' ,
    date: 'Aug 29, 2017' ,
    content: `<p>
                Article two is displayed here.
                .
            </p>`
    
    
},
var articleThree =  {
    title: 'Article-one' ,
    heading: 'Article one' ,
    date: 'Aug 30, 2017' ,
    content: `<p>
                Article three is displayed here.
                
            </p>`
    
}
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = `<html>
    <head>
        <title>${title}</title>
         <link href="/ui/style.css" rel="stylesheet" />
        <style>
        </style>
    </head>
    <body>
        <div class="container">
        <div>
            
        <h1>
            <a href="Home">Home</a>
        </h1>
        <hr/>
        </div>
        <div>
            <h2>
            ${heading}
            </h2>
        </div>
        <div>
            ${date}
        </div>
        <div>
            <h4>${heading}</h4>
            <p>
                ${content}
            </p>
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
   res.send(createTemplate(articleOne)); 
    
});

app.get('/article-two', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});

app.get('/article-three', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
