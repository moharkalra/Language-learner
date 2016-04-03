var elements = document.getElementsByTagName('*');
var english = {}

var replace = function (english, other) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(english , other );

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }

}

week(time)

// assume words is a list of words
for (var word in words) {
  google.translate(word, function(translated) {
    words[word] = translated;
  }
}
