
function confirmation(){
    let pick = confirm("You are about to leave page, would you like to continue?");
    if(!pick) {
        return false
    }
}