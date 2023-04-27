function randchoice(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

const statusBox = document.querySelector(".statustext"); 
const button = document.querySelector(".button");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");


const usedBoxes = [];
let userToPlay = 'x'


button1.addEventListener('click', function handleClick() {
    if (!(button1.classList.contains("active-box"))) if (userToPlay === 'x') {
        button1.textContent = 'x';
        button1.classList.add("active-box");
        usedBoxes.push(1);
        userToPlay = 'o';
    }
    });


button2.addEventListener('click', function handleClick() {
    if (!(button2.classList.contains("active-box"))) if (userToPlay === 'x') {
        button2.textContent = 'x';
        button2.classList.add("active-box");
        usedBoxes.push(2);
        userToPlay = 'o';
    }
});


button3.addEventListener('click', function handleClick() {
    if (!(button3.classList.contains("active-box"))) if (userToPlay === 'x') {
        button3.textContent = 'x';
        button3.classList.add("active-box");
        usedBoxes.push(3);
        userToPlay = 'o';
    }
});


button4.addEventListener('click', function handleClick() {
    if (!(button4.classList.contains("active-box"))) if (userToPlay === 'x') {
        button4.textContent = 'x';
        button4.classList.add("active-box");
        usedBoxes.push(4);
        userToPlay = 'o';
    }
});


button5.addEventListener('click', function handleClick() {
    if (!(button5.classList.contains("active-box"))) if (userToPlay === 'x') {
        button5.textContent = 'x';
        button5.classList.add("active-box");
        usedBoxes.push(5);
        userToPlay = 'o';
        

        if (button1.textContent === button2.textContent && button1.textContent===button3.textContent && button3.textContent === button4.textContent && button3.textContent === button6.textContent && button6.textContent === button7.textContent && button6.textContent === button8.textContent && button8.textContent === button9.textContent) {
            
                choice = randchoice([1, 2, 3, 4, 6 ,7, 8, 9])
        

        
                if (choice === 1) if (userToPlay === 'o'){
                    button1.textContent = 'o';
                    button1.classList.add("active-box");
                    usedBoxes.push(-1);
                    userToPlay = 'x';
                }
                if (choice === 2) if (userToPlay === 'o') {
                    button2.textContent = 'o';
                    button2.classList.add("active-box");
                    usedBoxes.push(-2);
                    userToPlay = 'x';
                }    
                if (choice === 3) if (userToPlay === 'o'){
                    button3.textContent = 'o';
                    button3.classList.add("active-box");
                    usedBoxes.push(-3);
                    userToPlay = 'x';
                }    
                if (choice === 4) if (userToPlay === 'o'){
                    button4.textContent = 'o';
                    button4.classList.add("active-box");
                    usedBoxes.push(-4);
                    userToPlay = 'x';
                }    
                if (choice === 6) if (userToPlay === 'o'){
                    button6.textContent = 'o';
                    button6.classList.add("active-box");
                    usedBoxes.push(-6);
                    userToPlay = 'x';
                }    
                if (choice === 7) if (userToPlay === 'o'){
                    button7.textContent = 'o';
                    button7.classList.add("active-box");
                    usedBoxes.push(-7);
                    userToPlay = 'x';
                }    
                if (choice === 8) if (userToPlay === 'o'){
                    button8.textContent = 'o';
                    button8.classList.add("active-box");
                    usedBoxes.push(-8);
                    userToPlay = 'x';
                }    
                if (choice === 9) if (userToPlay === 'o') {
                    button9.textContent = 'o';
                    button9.classList.add("active-box");
                    usedBoxes.push(-9);
                    userToPlay = 'x';
                }  
        }

    }


});


button6.addEventListener('click', function handleClick() {
    if (!(button6.classList.contains("active-box"))) if (userToPlay === 'x'){
        button6.textContent = 'x';
        button6.classList.add("active-box");
        usedBoxes.push(6);
        userToPlay = 'o';
    }
});


button7.addEventListener('click', function handleClick() {
    if (!(button7.classList.contains("active-box"))) if (userToPlay === 'x'){
        button7.textContent = 'x';
        button7.classList.add("active-box");
        usedBoxes.push(7);
        userToPlay = 'o';
    }
});


button8.addEventListener('click', function handleClick() {
    if (!(button8.classList.contains("active-box"))) if (userToPlay === 'x'){
        button8.textContent = 'x';
        button8.classList.add("active-box");
        usedBoxes.push(8);
        userToPlay = 'o';
    }
});

button9.addEventListener('click', function handleClick() {
    if (!(button9.classList.contains("active-box"))) if (userToPlay === 'x'){
        button9.textContent = 'x';
        button9.classList.add("active-box");
        usedBoxes.push(9);
        userToPlay = 'o';;
    }
  });



statusBox.addEventListener('click', function handleClick() {
    usedBoxes.splice(0,usedBoxes.length);
    userToPlay = 'x'
    statusBox.style.zIndex = "-1";
    statusBox.style.opacity = 0;
    button1.classList.remove('button-disabled','active-box','button-win');
    button2.classList.remove('button-disabled','active-box','button-win');
    button3.classList.remove('button-disabled','active-box','button-win');
    button4.classList.remove('button-disabled','active-box','button-win');
    button5.classList.remove('button-disabled','active-box','button-win');
    button6.classList.remove('button-disabled','active-box','button-win');
    button7.classList.remove('button-disabled','active-box','button-win');
    button8.classList.remove('button-disabled','active-box','button-win');
    button9.classList.remove('button-disabled','active-box','button-win');
    button1.innerHTML="&nbsp;&nbsp;";
    button2.innerHTML="&nbsp;&nbsp;";
    button3.innerHTML="&nbsp;&nbsp;";
    button4.innerHTML="&nbsp;&nbsp;";
    button5.innerHTML="&nbsp;&nbsp;";
    button6.innerHTML="&nbsp;&nbsp;";
    button7.innerHTML="&nbsp;&nbsp;";
    button8.innerHTML="&nbsp;&nbsp;";
    button9.innerHTML="&nbsp;&nbsp;";

});


window.addEventListener('click', function handleClick() {

    //****************************//
    //WINNER FINDING
    //****************************//

    //****************************//
    //USER WINS
    //****************************//
    //ROW 1
    if (usedBoxes.includes(1)) if (usedBoxes.includes(2)) if (usedBoxes.includes(3)){
        button1.classList.add("button-win");
        button2.classList.add("button-win");
        button3.classList.add("button-win"); 
        button4.classList.add("button-disabled"); 
        button5.classList.add("button-disabled"); 
        button6.classList.add("button-disabled"); 
        button7.classList.add("button-disabled"); 
        button8.classList.add("button-disabled"); 
        button9.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }

    //ROW 2
    if (usedBoxes.includes(4)) if (usedBoxes.includes(5)) if (usedBoxes.includes(6)){
        button4.classList.add("button-win");
        button5.classList.add("button-win");
        button6.classList.add("button-win"); 
        button1.classList.add("button-disabled"); 
        button2.classList.add("button-disabled"); 
        button3.classList.add("button-disabled"); 
        button7.classList.add("button-disabled"); 
        button8.classList.add("button-disabled"); 
        button9.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }
        
    //ROW 3
    if (usedBoxes.includes(7)) if (usedBoxes.includes(8)) if (usedBoxes.includes(9)){
        button7.classList.add("button-win");
        button8.classList.add("button-win");
        button9.classList.add("button-win"); 
        button4.classList.add("button-disabled"); 
        button5.classList.add("button-disabled"); 
        button6.classList.add("button-disabled"); 
        button1.classList.add("button-disabled"); 
        button2.classList.add("button-disabled"); 
        button3.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }

    //Diagonal 1
    if (usedBoxes.includes(1)) if (usedBoxes.includes(5)) if (usedBoxes.includes(9)){
        button1.classList.add("button-win");
        button5.classList.add("button-win");
        button9.classList.add("button-win"); 
        button4.classList.add("button-disabled"); 
        button2.classList.add("button-disabled"); 
        button6.classList.add("button-disabled"); 
        button7.classList.add("button-disabled"); 
        button8.classList.add("button-disabled"); 
        button3.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }

    //Diagonal 2
    if (usedBoxes.includes(3)) if (usedBoxes.includes(5)) if (usedBoxes.includes(7)){
        button3.classList.add("button-win");
        button5.classList.add("button-win");
        button7.classList.add("button-win"); 
        button4.classList.add("button-disabled"); 
        button2.classList.add("button-disabled"); 
        button6.classList.add("button-disabled"); 
        button1.classList.add("button-disabled"); 
        button8.classList.add("button-disabled"); 
        button9.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }


    //COLUMN 1
    if (usedBoxes.includes(1)) if (usedBoxes.includes(4)) if (usedBoxes.includes(7)){
        button1.classList.add("button-win");
        button4.classList.add("button-win");
        button7.classList.add("button-win"); 
        button2.classList.add("button-disabled"); 
        button3.classList.add("button-disabled"); 
        button5.classList.add("button-disabled"); 
        button6.classList.add("button-disabled"); 
        button8.classList.add("button-disabled"); 
        button9.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }

    //COLUMN 2
    if (usedBoxes.includes(2)) if (usedBoxes.includes(5)) if (usedBoxes.includes(8)){
        button2.classList.add("button-win");
        button5.classList.add("button-win");
        button8.classList.add("button-win"); 
        button1.classList.add("button-disabled"); 
        button3.classList.add("button-disabled"); 
        button4.classList.add("button-disabled"); 
        button6.classList.add("button-disabled"); 
        button7.classList.add("button-disabled"); 
        button9.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }
        
    //COLUMN 3
    if (usedBoxes.includes(3)) if (usedBoxes.includes(6)) if (usedBoxes.includes(9)){
        button3.classList.add("button-win");
        button6.classList.add("button-win");
        button9.classList.add("button-win"); 
        button1.classList.add("button-disabled"); 
        button2.classList.add("button-disabled"); 
        button4.classList.add("button-disabled"); 
        button5.classList.add("button-disabled"); 
        button7.classList.add("button-disabled"); 
        button8.classList.add("button-disabled"); 
        userToPlay = 'win: x';      
    }



    if (userToPlay === 'o')  {




            //AUTO FILL FOR WINNING
            //HORIZONTALS AUTOFILL

            //ROW 1
            //cell 3 auto fill
            if (usedBoxes.includes(-1)) if (usedBoxes.includes(-2)) if (!usedBoxes.includes(3)) if (!usedBoxes.includes(-3)) if (userToPlay === 'o') {
                button3.textContent = 'o';
                button3.classList.add("active-box");
                usedBoxes.push(-3);  
                button1.classList.add("button-win");
                button2.classList.add("button-win");
                button3.classList.add("button-win"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled"); 
                userToPlay = 'win: o';      
            }

            //cell 1 autofill
            if (usedBoxes.includes(-2)) if (usedBoxes.includes(-3)) if (!usedBoxes.includes(1)) if (!usedBoxes.includes(-1)) if (userToPlay === 'o') {
                button1.textContent = 'o';
                button1.classList.add("active-box");
                usedBoxes.push(-1); 
                button1.classList.add("button-win");
                button2.classList.add("button-win");
                button3.classList.add("button-win"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");  
                userToPlay = 'win: o';      
            }

            //cell 2 autofill
            if (usedBoxes.includes(-1)) if (usedBoxes.includes(-3)) if (!usedBoxes.includes(2)) if (!usedBoxes.includes(-2)) if (userToPlay === 'o') {
                button2.textContent = 'o';
                button2.classList.add("active-box");
                usedBoxes.push(-2);  
                button1.classList.add("button-win");
                button2.classList.add("button-win");
                button3.classList.add("button-win"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';       
            }


            //ROW 2
            //cell 6
            if (usedBoxes.includes(-4)) if (usedBoxes.includes(-5)) if (!usedBoxes.includes(6)) if (!usedBoxes.includes(-6)) if (userToPlay === 'o') {
                button6.textContent = 'o';
                button6.classList.add("active-box");
                usedBoxes.push(-6);
                button4.classList.add("button-win");
                button5.classList.add("button-win");
                button6.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //cell 4
            if (usedBoxes.includes(-5)) if (usedBoxes.includes(-6)) if (!usedBoxes.includes(4)) if (!usedBoxes.includes(-4)) if (userToPlay === 'o') {
                button4.textContent = 'o';
                button4.classList.add("active-box");
                usedBoxes.push(-4);
                button4.classList.add("button-win");
                button5.classList.add("button-win");
                button6.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //cell 5
            if (usedBoxes.includes(-4)) if (usedBoxes.includes(-6)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-5);
                button4.classList.add("button-win");
                button5.classList.add("button-win");
                button6.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //ROW 3
            //cell 9
            if (usedBoxes.includes(-7)) if (usedBoxes.includes(-8)) if (!usedBoxes.includes(9)) if (!usedBoxes.includes(-9)) if (userToPlay === 'o') {
                button9.textContent = 'o';
                button9.classList.add("active-box");
                usedBoxes.push(-9);
                button7.classList.add("button-win");
                button8.classList.add("button-win");
                button9.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }
            
            //cell 7
            if (usedBoxes.includes(-8)) if (usedBoxes.includes(-9)) if (!usedBoxes.includes(7)) if (!usedBoxes.includes(-7)) if (userToPlay === 'o') {
                button7.textContent = 'o';
                button7.classList.add("active-box");
                usedBoxes.push(-7);
                button7.classList.add("button-win");
                button8.classList.add("button-win");
                button9.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //cell 8
            if (usedBoxes.includes(-7)) if (usedBoxes.includes(-9)) if (!usedBoxes.includes(8)) if (!usedBoxes.includes(-8)) if (userToPlay === 'o') {
                button8.textContent = 'o';
                button8.classList.add("active-box");
                usedBoxes.push(-8);
                button7.classList.add("button-win");
                button8.classList.add("button-win");
                button9.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }





            //VERTICALS AUTOFILL


            //COLUMN 1
            //cell 7
            if (usedBoxes.includes(-1)) if (usedBoxes.includes(-4)) if (!usedBoxes.includes(7)) if (!usedBoxes.includes(-7)) if (userToPlay === 'o') {
                button7.textContent = 'o';
                button7.classList.add("active-box");
                usedBoxes.push(-7);  
                button1.classList.add("button-win");
                button4.classList.add("button-win");
                button7.classList.add("button-win"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';       
            }

            //cell 1
            if (usedBoxes.includes(-4)) if (usedBoxes.includes(-7)) if (!usedBoxes.includes(1)) if (!usedBoxes.includes(-1)) if (userToPlay === 'o') {
                button1.textContent = 'o';
                button1.classList.add("active-box");
                usedBoxes.push(-1);
                button1.classList.add("button-win");
                button4.classList.add("button-win");
                button7.classList.add("button-win"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //cell 4
            if (usedBoxes.includes(-1)) if (usedBoxes.includes(-7)) if (!usedBoxes.includes(4)) if (!usedBoxes.includes(-4)) if (userToPlay === 'o') {
                button4.textContent = 'o';
                button4.classList.add("active-box");
                usedBoxes.push(-4);
                button1.classList.add("button-win");
                button4.classList.add("button-win");
                button7.classList.add("button-win"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }


            //COLUMN 2
            //cell 8 auto fill
            if (usedBoxes.includes(-2)) if (usedBoxes.includes(-5)) if (!usedBoxes.includes(8)) if (!usedBoxes.includes(-8)) if (userToPlay === 'o') {
                button8.textContent = 'o';
                button8.classList.add("active-box");
                usedBoxes.push(-8);
                button2.classList.add("button-win");
                button5.classList.add("button-win");
                button8.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //cell 2 autofill
            if (usedBoxes.includes(-5)) if (usedBoxes.includes(-8)) if (!usedBoxes.includes(2)) if (!usedBoxes.includes(-2)) if (userToPlay === 'o') {
                button2.textContent = 'o';
                button2.classList.add("active-box");
                usedBoxes.push(-2);
                button2.classList.add("button-win");
                button5.classList.add("button-win");
                button8.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //cell 5 autofill
            if (usedBoxes.includes(-2)) if (usedBoxes.includes(-8)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-5);
                button2.classList.add("button-win");
                button5.classList.add("button-win");
                button8.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }


            //COLUMN 3
            //cell 9
            if (usedBoxes.includes(-3)) if (usedBoxes.includes(-6)) if (!usedBoxes.includes(9)) if (!usedBoxes.includes(-9)) if (userToPlay === 'o') {
                button9.textContent = 'o';
                button9.classList.add("active-box");
                usedBoxes.push(-9);
                button3.classList.add("button-win");
                button6.classList.add("button-win");
                button9.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }
            
            //cell 3
            if (usedBoxes.includes(-6)) if (usedBoxes.includes(-9)) if (!usedBoxes.includes(3)) if (!usedBoxes.includes(-3)) if (userToPlay === 'o') {
                button3.textContent = 'o';
                button3.classList.add("active-box");
                usedBoxes.push(-3);
                button3.classList.add("button-win");
                button6.classList.add("button-win");
                button9.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }

            //cell 6
            if (usedBoxes.includes(-3)) if (usedBoxes.includes(-9)) if (!usedBoxes.includes(6)) if (!usedBoxes.includes(-6)) if (userToPlay === 'o') {
                button6.textContent = 'o';
                button6.classList.add("active-box");
                usedBoxes.push(-6);
                button3.classList.add("button-win");
                button6.classList.add("button-win");
                button9.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button5.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }


            //Diagonal 1

            //cell 9
            if (usedBoxes.includes(-1)) if (usedBoxes.includes(-5)) if (!usedBoxes.includes(9)) if (!usedBoxes.includes(-9)) if (userToPlay === 'o') {
                button9.textContent = 'o';
                button9.classList.add("active-box");
                usedBoxes.push(-9);
                button1.classList.add("button-win");
                button5.classList.add("button-win");
                button9.classList.add("button-win"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }   

            //cell 1
            if (usedBoxes.includes(-9)) if (usedBoxes.includes(-5)) if (!usedBoxes.includes(1)) if (!usedBoxes.includes(-1)) if (userToPlay === 'o') {
                button1.textContent = 'o';
                button1.classList.add("active-box");
                usedBoxes.push(-1);
                usedBoxes.push(-9);
                button1.classList.add("button-win");
                button5.classList.add("button-win");
                button9.classList.add("button-win"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled");
                userToPlay = 'win: o';         
            } 

            //cell 5
            if (usedBoxes.includes(-1)) if (usedBoxes.includes(-9)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-9);
                button1.classList.add("button-win");
                button5.classList.add("button-win");
                button9.classList.add("button-win"); 
                button2.classList.add("button-disabled"); 
                button3.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button7.classList.add("button-disabled"); 
                button8.classList.add("button-disabled");
                usedBoxes.push(-5);
                userToPlay = 'win: o';         
            } 


            //Diagonal 2

            //cell 7
            if (usedBoxes.includes(-3)) if (usedBoxes.includes(-5)) if (!usedBoxes.includes(7)) if (!usedBoxes.includes(-7)) if (userToPlay === 'o') {
                button7.textContent = 'o';
                button7.classList.add("active-box");
                usedBoxes.push(-7);
                usedBoxes.push(-9);
                button3.classList.add("button-win");
                button5.classList.add("button-win");
                button7.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            }   

            //cell 3
            if (usedBoxes.includes(-7)) if (usedBoxes.includes(-5)) if (!usedBoxes.includes(3)) if (!usedBoxes.includes(-3)) if (userToPlay === 'o') {
                button3.textContent = 'o';
                button3.classList.add("active-box");
                usedBoxes.push(-3);
                button3.classList.add("button-win");
                button5.classList.add("button-win");
                button7.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            } 

            //cell 5
            if (usedBoxes.includes(-3)) if (usedBoxes.includes(-7)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-5);
                button3.classList.add("button-win");
                button5.classList.add("button-win");
                button7.classList.add("button-win"); 
                button1.classList.add("button-disabled"); 
                button2.classList.add("button-disabled"); 
                button4.classList.add("button-disabled"); 
                button6.classList.add("button-disabled"); 
                button8.classList.add("button-disabled"); 
                button9.classList.add("button-disabled");
                userToPlay = 'win: o';         
            } 





            //AUTO BLOCK OPONENT FORM WINNING
            
            
            //HORIZONTALS AUTOFILL

            //ROW 1
            //cell 3 auto fill
            if (usedBoxes.includes(1)) if (usedBoxes.includes(2)) if (!usedBoxes.includes(3)) if (!usedBoxes.includes(-3)) if (userToPlay === 'o') {
                button3.textContent = 'o';
                button3.classList.add("active-box");
                usedBoxes.push(-3);  
                userToPlay = 'x';      
            }

            //cell 1 autofill
            if (usedBoxes.includes(2)) if (usedBoxes.includes(3)) if (!usedBoxes.includes(1)) if (!usedBoxes.includes(-1)) if (userToPlay === 'o') {
                button1.textContent = 'o';
                button1.classList.add("active-box");
                usedBoxes.push(-1);  
                userToPlay = 'x';      
            }

            //cell 2 autofill
            if (usedBoxes.includes(1)) if (usedBoxes.includes(3)) if (!usedBoxes.includes(2)) if (!usedBoxes.includes(-2)) if (userToPlay === 'o') {
                button2.textContent = 'o';
                button2.classList.add("active-box");
                usedBoxes.push(-2);  
                userToPlay = 'x';       
            }


            //ROW 2
            //cell 6
            if (usedBoxes.includes(4)) if (usedBoxes.includes(5)) if (!usedBoxes.includes(6)) if (!usedBoxes.includes(-6)) if (userToPlay === 'o') {
                button6.textContent = 'o';
                button6.classList.add("active-box");
                usedBoxes.push(-6);
                userToPlay = 'x';         
            }

            //cell 4
            if (usedBoxes.includes(5)) if (usedBoxes.includes(6)) if (!usedBoxes.includes(4)) if (!usedBoxes.includes(-4)) if (userToPlay === 'o') {
                button4.textContent = 'o';
                button4.classList.add("active-box");
                usedBoxes.push(-4);
                userToPlay = 'x';         
            }

            //cell 5
            if (usedBoxes.includes(4)) if (usedBoxes.includes(6)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-5);
                userToPlay = 'x';         
            }

            //ROW 3
            //cell 9
            if (usedBoxes.includes(7)) if (usedBoxes.includes(8)) if (!usedBoxes.includes(9)) if (!usedBoxes.includes(-9)) if (userToPlay === 'o') {
                button9.textContent = 'o';
                button9.classList.add("active-box");
                usedBoxes.push(-9);
                userToPlay = 'x';         
            }
            
            //cell 7
            if (usedBoxes.includes(8)) if (usedBoxes.includes(9)) if (!usedBoxes.includes(7)) if (!usedBoxes.includes(-7)) if (userToPlay === 'o') {
                button7.textContent = 'o';
                button7.classList.add("active-box");
                usedBoxes.push(-7);
                userToPlay = 'x';         
            }

            //cell 8
            if (usedBoxes.includes(7)) if (usedBoxes.includes(9)) if (!usedBoxes.includes(8)) if (!usedBoxes.includes(-8)) if (userToPlay === 'o') {
                button8.textContent = 'o';
                button8.classList.add("active-box");
                usedBoxes.push(-8);
                userToPlay = 'x';         
            }





            //VERTICALS AUTOFILL


            //COLUMN 1
            //cell 7
            if (usedBoxes.includes(1)) if (usedBoxes.includes(4)) if (!usedBoxes.includes(7)) if (!usedBoxes.includes(-7)) if (userToPlay === 'o') {
                button7.textContent = 'o';
                button7.classList.add("active-box");
                usedBoxes.push(-7);  
                userToPlay = 'x';       
            }

            //cell 1
            if (usedBoxes.includes(4)) if (usedBoxes.includes(7)) if (!usedBoxes.includes(1)) if (!usedBoxes.includes(-1)) if (userToPlay === 'o') {
                button1.textContent = 'o';
                button1.classList.add("active-box");
                usedBoxes.push(-1);
                userToPlay = 'x';         
            }

            //cell 4
            if (usedBoxes.includes(1)) if (usedBoxes.includes(7)) if (!usedBoxes.includes(4)) if (!usedBoxes.includes(-4)) if (userToPlay === 'o') {
                button4.textContent = 'o';
                button4.classList.add("active-box");
                usedBoxes.push(-4);
                userToPlay = 'x';         
            }


            //COLUMN 2
            //cell 8 auto fill
            if (usedBoxes.includes(2)) if (usedBoxes.includes(5)) if (!usedBoxes.includes(8)) if (!usedBoxes.includes(-8)) if (userToPlay === 'o') {
                button8.textContent = 'o';
                button8.classList.add("active-box");
                usedBoxes.push(-8);
                userToPlay = 'x';         
            }

            //cell 2 autofill
            if (usedBoxes.includes(5)) if (usedBoxes.includes(8)) if (!usedBoxes.includes(2)) if (!usedBoxes.includes(-2)) if (userToPlay === 'o') {
                button2.textContent = 'o';
                button2.classList.add("active-box");
                usedBoxes.push(-2);
                userToPlay = 'x';         
            }

            //cell 5 autofill
            if (usedBoxes.includes(2)) if (usedBoxes.includes(8)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-5);
                userToPlay = 'x';         
            }


            //COLUMN 3
            //cell 9
            if (usedBoxes.includes(3)) if (usedBoxes.includes(6)) if (!usedBoxes.includes(9)) if (!usedBoxes.includes(-9)) if (userToPlay === 'o') {
                button9.textContent = 'o';
                button9.classList.add("active-box");
                usedBoxes.push(-9);
                userToPlay = 'x';         
            }
            
            //cell 3
            if (usedBoxes.includes(6)) if (usedBoxes.includes(9)) if (!usedBoxes.includes(3)) if (!usedBoxes.includes(-3)) if (userToPlay === 'o') {
                button3.textContent = 'o';
                button3.classList.add("active-box");
                usedBoxes.push(-3);
                userToPlay = 'x';         
            }

            //cell 6
            if (usedBoxes.includes(3)) if (usedBoxes.includes(9)) if (!usedBoxes.includes(6)) if (!usedBoxes.includes(-6)) if (userToPlay === 'o') {
                button6.textContent = 'o';
                button6.classList.add("active-box");
                usedBoxes.push(-6);
                userToPlay = 'x';         
            }


            //Diagonal 1

            //cell 9
            if (usedBoxes.includes(1)) if (usedBoxes.includes(5)) if (!usedBoxes.includes(9)) if (!usedBoxes.includes(-9)) if (userToPlay === 'o') {
                button9.textContent = 'o';
                button9.classList.add("active-box");
                usedBoxes.push(-9);
                userToPlay = 'x';         
            }   

            //cell 1
            if (usedBoxes.includes(9)) if (usedBoxes.includes(5)) if (!usedBoxes.includes(1)) if (!usedBoxes.includes(-1)) if (userToPlay === 'o') {
                button1.textContent = 'o';
                button1.classList.add("active-box");
                usedBoxes.push(-1);
                userToPlay = 'x';         
            } 

            //cell 5
            if (usedBoxes.includes(1)) if (usedBoxes.includes(9)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-5);
                userToPlay = 'x';         
            } 


            //Diagonal 2

            //cell 7
            if (usedBoxes.includes(3)) if (usedBoxes.includes(5)) if (!usedBoxes.includes(7)) if (!usedBoxes.includes(-7)) if (userToPlay === 'o') {
                button7.textContent = 'o';
                button7.classList.add("active-box");
                usedBoxes.push(-7);
                userToPlay = 'x';         
            }   

            //cell 3
            if (usedBoxes.includes(7)) if (usedBoxes.includes(5)) if (!usedBoxes.includes(3)) if (!usedBoxes.includes(-3)) if (userToPlay === 'o') {
                button3.textContent = 'o';
                button3.classList.add("active-box");
                usedBoxes.push(-3);
                userToPlay = 'x';         
            } 

            //cell 5
            if (usedBoxes.includes(3)) if (usedBoxes.includes(7)) if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)) if (userToPlay === 'o') {
                button5.textContent = 'o';
                button5.classList.add("active-box");
                usedBoxes.push(-5);
                userToPlay = 'x';         
            } 

            
            
            let tryNos = [];
            allNos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            while (userToPlay === 'o') {
                choice = randchoice([1, 2, 3, 4, 5, 6, 7, 8, 9])
                if (!tryNos.includes(choice)) tryNos.push(choice);

                tryNos.sort(function(a, b) {
                    return a - b;
                  });
  
                if (tryNos.toString() === allNos.toString()) {

                    button1.classList.add("button-disabled");
                    button2.classList.add("button-disabled");
                    button3.classList.add("button-disabled"); 
                    button4.classList.add("button-disabled"); 
                    button5.classList.add("button-disabled"); 
                    button6.classList.add("button-disabled"); 
                    button7.classList.add("button-disabled"); 
                    button8.classList.add("button-disabled"); 
                    button9.classList.add("button-disabled");
                    userToPlay = 'win: tie';     

                    break
                }
            
                if (choice === 1) if (userToPlay === 'o') if (!usedBoxes.includes(1)) if (!usedBoxes.includes(-1)){
                    button1.textContent = 'o';
                    button1.classList.add("active-box");
                    usedBoxes.push(-1);
                    userToPlay = 'x';
                    break;
                }
                if (choice === 2) if (userToPlay === 'o') if (!usedBoxes.includes(2)) if (!usedBoxes.includes(-2)){
                    button2.textContent = 'o';
                    button2.classList.add("active-box");
                    usedBoxes.push(-2);
                    userToPlay = 'x';
                    break;
                }    
                if (choice === 3) if (userToPlay === 'o') if (!usedBoxes.includes(3)) if (!usedBoxes.includes(-3)){
                    button3.textContent = 'o';
                    button3.classList.add("active-box");
                    usedBoxes.push(-3);
                    userToPlay = 'x';
                    break;
                }    
                if (choice === 4) if (userToPlay === 'o') if (!usedBoxes.includes(4)) if (!usedBoxes.includes(-4)){
                    button4.textContent = 'o';
                    button4.classList.add("active-box");
                    usedBoxes.push(-4);
                    userToPlay = 'x';
                    break;            
                }    
                if (choice === 5) if (userToPlay === 'o') if (!usedBoxes.includes(5)) if (!usedBoxes.includes(-5)){
                    button5.textContent = 'o';
                    button5.classList.add("active-box");
                    usedBoxes.push(-5);
                    userToPlay = 'x';
                    break;
                }
                if (choice === 6) if (userToPlay === 'o') if (!usedBoxes.includes(6)) if (!usedBoxes.includes(-6)){
                    button6.textContent = 'o';
                    button6.classList.add("active-box");
                    usedBoxes.push(-6);
                    userToPlay = 'x';
                    break;
                }    
                if (choice === 7) if (userToPlay === 'o') if (!usedBoxes.includes(7)) if (!usedBoxes.includes(-7)){
                    button7.textContent = 'o';
                    button7.classList.add("active-box");
                    usedBoxes.push(-7);
                    userToPlay = 'x';
                    break;
                }    
                if (choice === 8) if (userToPlay === 'o') if (!usedBoxes.includes(8)) if (!usedBoxes.includes(-8)){
                    button8.textContent = 'o';
                    button8.classList.add("active-box");
                    usedBoxes.push(-8);
                    userToPlay = 'x';
                    break;
                }    
                if (choice === 9) if (userToPlay === 'o') if (!usedBoxes.includes(9)) if (!usedBoxes.includes(-9)){
                    button9.textContent = 'o';
                    button9.classList.add("active-box");
                    usedBoxes.push(-9);
                    userToPlay = 'x';
                    break;
                } 
            }


        }

        if (userToPlay.startsWith("win")) {
            
            statusBox.style.zIndex = "1";
            statusBox.style.opacity = 1;
            if(userToPlay==="win: tie") {
                statusBox.children[0].textContent = "It's a tie!\nClick here again to reset";
            }
            if(userToPlay==="win: x") {
                statusBox.children[0].textContent = "You win!\nClick here again to reset";
            }
            if(userToPlay==="win: o") {
                statusBox.children[0].textContent = "You lose!\nClick here again to reset";
            }
        }


});