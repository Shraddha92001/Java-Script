const mynum = [1, 2, 3, 4, 5, 6, 7, 8]


const totalnum = mynum.reduce(function(acc, currvalue) {
    console.log(`acc : ${acc} and curvalue : ${currvalue}`);
    return acc + currvalue

}, 0)