
var d, weekval, init;
chrome.storage.sync.get("InitialTime", function(data) {
  d = data;
  if (!data.InitialTime) {
    chrome.storage.sync.set({"InitialTime": Date.now()}, function () {});
  }
  init = data.InitialTime;
  var Omonth = 120;
  var time = Date.now() / 1000 - data.InitialTime / 1000 ;
  var day;
});

function translates(word) {
  var b = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160403T022846Z.091eb269bff8d087.67f13b7f81138a13ea50f9020cda2e5029942df8&text="+word+"&lang=en-fr&format=html";
  var a = new XMLHttpRequest();
  a.open('GET', b, false);
  //callback(a.responseText);
  a.send(null);

  var result = a.response.toString();
  //result.
  result = result.substring(result.indexOf("[") + 2, result.indexOf("]") - 1);
  //console.log(result);
  return result;

}

var week = function() {
      day = (Date.now() / 1000 - init / 1000);
      /*return Math.floor(day);*/
      return 2000;
}


chrome.storage.sync.set({"Week":0}, function() {});
  var words = ['hello', ' and ', ' but ', ' in ', ' if ', ' you ', ' a ' , ' the ', ' hand ',  ' part ',  ' child ',  ' eye ',  ' woman ',  ' place ',  ' work ',  ' week ',  ' case ',  ' point ',  ' government ',  ' company ',  ' number ',  ' group ',  ' problem ',  ' fact '];
/*  chrome.storage.sync.set({"words": w['words']+[ ' be ',  ' have ',  ' do ',  ' say ',  ' get ',  ' make ',  ' go ',  ' know ',  ' take ',  ' see ',  ' come ',  ' think ',  ' look ',  ' want ',  ' give ',  ' use ']}, function () {});
  chrome.storage.sync.set({"words": w['words']+[' tell ',  ' ask ',  ' work ',  ' seem ',  ' feel ',  ' try ',  ' leave ',  ' call ', ' good ',  ' new ',  ' first ',  ' last ',  ' long ',  ' great ',  ' little ',  ' own ']}, function () {});
  chrome.storage.sync.set({"words": w['words']+[' old ',  ' right ',  ' big ',  ' high ',  ' different ',  ' small ',  ' large ',  ' next ',  ' early ',  ' young ',  ' important ',  ' few ',  ' public ',  ' bad ',  ' same ',  ' able ']}, function () {});
*/
var elements = document.getElementsByTagName('*');
var replace = function() {

  for(y in words){

      var x = translates(words[y]);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
          var k = 0;
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                text = text.toLowerCase();
                var replacedText = text.replace(words[y], ' ' + x + ' ');
                console.log(words[y] + " --> " + x);
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }

                chrome.storage.sync.get("Week", function(w) {

                  //console.log(w);

                  weekval = w["Week"];
                  //  console.log(w["Week"]);

                  //  console.log(week());

                    if(week() > weekval  && k<30){

                      words.push(text.toString());
                      k++;
                    //  console.log("SDF ASDF ASDF ASDF");
                      if(k==30){
                        chrome.storage.s    ync.set({"Week":week()}, function() {});
                      }
                    }
                });





            }


        }
    }
}
}

replace();
