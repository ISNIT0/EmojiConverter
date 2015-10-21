var app = require('express')();
var emojis = require('./emojis.json'); //https://github.com/Ranks/emojione/blob/master/emoji.json

app.get('/:name', function(req, res){
  var emoji = emojis[req.params.name.replace(/:/g, '')];
  if(!emoji)
    return res.status(500).send('Not a valid emoji, bro.');
  res.send(emoji.unicode);
});

app.listen(1337);
