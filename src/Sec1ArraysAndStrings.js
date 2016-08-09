exports.q1 = function(inputString, reply){
  var hasUniqueChars;

  if (inputString.length > 128) {
    hasUniqueChars = false;
  } else {
    var charArr = inputString.split('');
    var newArr = [];

    charArr.forEach(function(char){
      if (newArr[char]) {
        hasUniqueChars = false;
        return;
      }
      newArr[char] = true;
      hasUniqueChars = true;
    });
  }

  reply(
    {
      'questionHeading': 'Is unique',
      'question': 'Implement an algorithm to determine if a string has all unique characters. what If you can not use additional data structures',
      'reply' : hasUniqueChars,
      'javaScript' : 'javscript code',
      'objectiveC' : 'objective c code'
    }
  );
};

exports.q2 = function(reply){
  reply(
    {
      'questionHeading': 'Check Permutation',
      'question': 'Given 2 strings, write a method to decide if one is a permutation of the other.',
      'reply' : true,
      'javaScript' : 'javscript code',
      'objectiveC' : 'objective c code'
    }
  );
};

exports.q3 = function(reply){
  reply(
    {
      'questionHeading': 'URLify',
      'question': 'Write a method to replace all spaces in a string with %20.',
      'reply' : true,
      'javaScript' : 'javscript code',
      'objectiveC' : 'objective c code'
    }
  );
};
