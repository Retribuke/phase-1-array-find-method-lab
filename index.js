function superbowlWin(array) {
    let winner = array.find(item => item.result === "W");
    if (winner) {
        return winner.year;
    }
}



