var elements = document.getElementsByTagName('*');

function translates(word) {
  var b = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T022846Z.091eb269bff8d087.67f13b7f81138a13ea50f9020cda2e5029942df8&text=hello&lang=en-es&format=html";
  var a = new XMLHttpRequest();
  a.open('GET', b, false);
  //callback(a.responseText);
  a.send(null);
  console.log(a.response.toString());
  var result = a.response.toString();
  //result.
  console.log(result +  "ASDF ADS FKSJDF AEFJASLEJFLAWEJ");
  return result;

}

function x(a, b , c){
  console.log("Hello atasea");
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace('JSON', translates("hello"));

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}



/*
if(week(time)>w && week(time)<threshold){
w = week(time);
  increaseWords(30);
}
else{

  translateAll();
}

*/

// assume words is a list of words
