const coding = [1, 2, 3, 4, 5, 6, 7, 8]
const value = coding.filter((num) => num > 4)
console.log(value);

//eg..

const book = [
    { tital: "one", genre: "history", publish: 1920, adition: 2022 },
    { tital: "two", genre: "science", publish: 2010, adition: 2002 },
    { tital: "threee", genre: "history", publish: 2020, adition: 2032 },
    { tital: "four", genre: "science", publish: 2002, adition: 2021 },
    { tital: "five", genre: "hindi", publish: 1923, adition: 2020 },
    { tital: "six", genre: "math", publish: 2016, adition: 2024 },
    { tital: "seven", genre: "math", publish: 1910, adition: 2002 },
]

let userbook = book.filter((bk) => bk.genre === "history")
    // console.log(userbook);
userbook = book.filter((bk) => {
    return bk.publish >= 1910 && bk.genre === "history"
})

console.log(userbook);