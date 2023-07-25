var num = 100;
console.log(num);
var display = function(){
    console.log(`I am Angular Developer !`);
}
display();
console.log(typeof display);


var wordCount = function(word){
    var words = word.split(" ");
    var wordCount  = word.length;
    console.log(`In Given String - ${word}`);
    return wordCount;
 }
 var result = wordCount("I am UI Developer");
 console.log(`Total word count is: ${result}`);