//break and continue keyword

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
}
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}