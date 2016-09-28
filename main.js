function wordCount(string) {
    //1. Split string into its components
    var stringtoSplit = string;
    var splitString = string.split(" ");
    var words = {};
    //2. omit any single character words

    //a. count characters in each word and log index for splicing
    var count = 0;
    while (count < splitString.length) {

        //b. if word has 1 character, splice out
        if (splitString[count].length === 1) {
            splitString.splice(splitString.indexOf(splitString[count]), splitString[count].length);
        }
        count++;
    }
    // 3. Determine frequency of words in array and update them in object
    var count = 0;
    while (count < splitString.length) {
        var currentWord = splitString[count];
          if (currentWord in words){
            words[currentWord] ++;
          } else {
            words[currentWord] = 1;
          }
        count++;
    }

    console.log(words);


}

wordCount("Music to hear, why hear'st thou music sadly? Sweets with sweets war not, joy delights in joy: Why lov'st thou that which thou receiv'st not gladly, Or else receiv'st with pleasure thine annoy? If the true concord of well-tuned sounds, By unions married do offend thine ear, They do but sweetly chide thee, who confounds In singleness the parts that thou shouldst bear: Mark how one string sweet husband to another, Strikes each in each by mutual ordering; Resembling sire, and child, and happy mother, Who all in one, one pleasing note do sing: Whose speechless song being many, seeming one, Sings this to thee, 'Thou single wilt prove none'.");
