
textInput("Adj1", "1st Adjective");
setPosition("Adj1", 10, 110, 110, 20);
onEvent("Adj1", "change", function(event){
  hideElement("Adj1");
});
  textInput("Adj2", "2nd Adjective");
setPosition("Adj2", 10, 150, 110, 20);
onEvent("Adj2", "change", function(event) {
  hideElement("Adj2");
});
textInput("Noun1", "1st Noun");
setPosition("Noun1", 180, 110, 110, 20);
onEvent("Noun1", "change", function(event) {
  hideElement("Noun1");
});
textInput("Noun2", "2nd Noun");
setPosition("Noun2", 180, 150, 110, 20);
onEvent("Noun2", "change", function(event) {
  hideElement("Noun2");
});

onEvent("buttonGo", "click", function(event) {
	setText("textarea","I think that your " + getText("Noun1") + " tastes " + getText("Adj1") + " and your " + getText("Noun2") + " smells " + getText("Adj2"));
});

