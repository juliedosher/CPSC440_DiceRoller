function rollDice() {
    for (let i = 1; i < 6; i++) {
        const die_num = "die" + i.toString();
        let rand = Math.floor(Math.random() * 6) + 1;
    
        switch (rand) {
            case 1:
                document.getElementById(die_num).src="./images/one.png"
                break;

            case 2:
                document.getElementById(die_num).src="./images/two.png"
                break;

            case 3:
                document.getElementById(die_num).src="./images/three.png"
                break;

            case 4:
                document.getElementById(die_num).src="./images/four.png"
                break;

            case 5:
                document.getElementById(die_num).src="./images/five.png"
                break;

            case 6:
                default:
                document.getElementById(die_num).src="./images/six.png"
        }
    }
}
