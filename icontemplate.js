const fs = require('fs');
const db = require('./_data/db.json');

var template = '';
for (var key of Object.keys(db)) {
  template = '---\n' +
    'layout: icons\n' +
    'iconname: ' + key + '\n' +
    'unicode: ' + db[key].unicode + '\n' +
    'permalink: /icon/' + key + '/\n' +
    '---\n' +
    '\n``` html\n<i class="mi mi-' + key + '"></i>\n```\n';
  fs.writeFile(`./_icon/${key}.md`, template, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
