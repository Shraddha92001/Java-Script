// Nested scope  in function
function one() {
    const username = "shree"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()