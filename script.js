// Rolls all 5 dice at once, replaces each die image and text field
function rollDice() {
    for (let i = 1; i < 6; i++) {
        const die_num = "die" + i.toString();
        const field_num = "value" + i.toString();
        let rand = Math.floor(Math.random() * 6) + 1;
    
        switch (rand) {
            case 1:
                document.getElementById(die_num).src="./images/one.png"
                document.getElementById(field_num).value = "1";
                break;

            case 2:
                document.getElementById(die_num).src="./images/two.png"
                document.getElementById(field_num).value = "2";
                break;

            case 3:
                document.getElementById(die_num).src="./images/three.png"
                document.getElementById(field_num).value = "3";
                break;

            case 4:
                document.getElementById(die_num).src="./images/four.png"
                document.getElementById(field_num).value = "4";
                break;

            case 5:
                document.getElementById(die_num).src="./images/five.png"
                document.getElementById(field_num).value = "5";
                break;

            case 6:
                default:
                document.getElementById(die_num).src="./images/six.png"
                document.getElementById(field_num).value = "6";
        }
    }
}
