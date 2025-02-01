var nae = "shakthi saranya*shakthi indhu*shakthi viji";
gs.print(typeof nae); //string
var sm = nae.split('*');
gs.print(typeof sm); //object
gs.print(sm); //shakthi saranya,shakthi indhu,shakthi viji

var nae1 = "shakthi saranya|shakthi indhu|shakthi viji";
var sm1 = nae1.split('|');

gs.print(sm1); //shakthi saranya,shakthi indhu,shakthi viji