// Nested scope 
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