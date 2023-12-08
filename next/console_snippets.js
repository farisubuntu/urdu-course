// to get 'tokens' texts:

var i = 0;
var keys = [];
var values = [];
quizzes.forEach(function fun(obj) {

    for (const [key, value] of Object.entries(obj)) {
        if (key == 'tokens') {
            keys.push(key);
            values.push(value);
            console.log(`${key}: ${value} ==> Serial=${i}`);
        }
        i++;
    }
});

values.forEach(function f(v) {
    for (var i = 0; i < v.length; i++) {
        console.log(v[i].text);
    }
});
// -------------------------------- all.json - snippets --------------------------------
// all contains 'data' array which contains category objects
//get a category each time:
for (const category in data) {
    console.log(`${category}: ${data[category]}`);
    // *** notes:
    //* if you use 'var' instead of 'const/let', the variable scope will be the same as 'for...in' loop scope.
    //  You can use const to declare the variable as long as it's not reassigned within the loop body (it can change between iterations, because those are two separate variables).
}

// get basic category info (id, positionIndex, name, countLesson, countDialogue, countVocabulary and lessons[] array)