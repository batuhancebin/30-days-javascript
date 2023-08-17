var text =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(text.match(/love/gi).length);

var text =
  "You cannot end a sentence with because because because is a conjunction";
console.log(text.match(/because/gi).length);

var sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
sentence = sentence.replace(/[^a-zA-Z ]/g, "");
sentence = sentence.replace(/\s{2,}/g, " ");
sentence = sentence.trim();
var words = sentence.split(" ");
var wordCount = {};
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  if (word in wordCount) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
}
console.log(wordCount);
var maxCount = 0;
var maxWord = "";
for (var word in wordCount) {
  if (wordCount[word] > maxCount) {
    maxCount = wordCount[word];
    maxWord = word;
  }
}
console.log(maxWord);

var text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
var numbers = text.match(/\d+/g);
var annualIncome = 0;
annualIncome =
  Number(numbers[0]) * 12 + Number(numbers[1]) + Number(numbers[2]) * 12;
console.log(text);
console.log(annualIncome + " Euro per year");
