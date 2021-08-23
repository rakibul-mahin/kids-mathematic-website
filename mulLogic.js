var playing = false;
var score;
var action;
var timeRemainingValue;
var ans;

//if we click on play button
document.getElementById('play').onclick = function(){
    //if we are playing
    if (playing == true){
        //reload the page
        location.reload();
    }else{ //if we are not playing
        //Set timeRemaining to 60
        timeRemainingValue = 60
        document.getElementById('timeRemaining').innerHTML = timeRemainingValue;
        //set score to 0
        score = 0;
        //change playing to true
        playing = true;
        document.getElementById('scoreValue').innerHTML = score;
        //show timer box
        document.getElementById('timeBox').style.display = "block";
        //chamge the button to reset
        document.getElementById('play').innerHTML = "RESET";
        //hide gameover box
        document.getElementById('gameoverBox').style.display = "none";
        //countdown
        startCountDown();
        //generate new question and their options
        generateQuestion();
    }
}

document.getElementById('box1').onclick =  function(){
    if(playing == true){
        if(this.innerHTML == ans){
            document.getElementById('correctBox').style.display = "block";
            document.getElementById('wrongBox').style.display = "none";
            score++;
            document.getElementById('scoreValue').innerHTML = score;
            setTimeout(function(){
                document.getElementById('correctBox').style.display = "none"
            },1000)
            generateQuestion();
        }else{
            document.getElementById('wrongBox').style.display = "block";
            setTimeout(function(){
                document.getElementById('wrongBox').style.display = "none"
            },1000)
        }
    }
}

document.getElementById('box2').onclick =  function(){
    if(playing == true){
        if(this.innerHTML == ans){
            document.getElementById('correctBox').style.display = "block";
            document.getElementById('wrongBox').style.display = "none";
            score++;
            document.getElementById('scoreValue').innerHTML = score;
            setTimeout(function(){
                document.getElementById('correctBox').style.display = "none"
            },1000)
            generateQuestion();
        }else{
            document.getElementById('wrongBox').style.display = "block";
            setTimeout(function(){
                document.getElementById('wrongBox').style.display = "none"
            },1000)
        }
    }
}

document.getElementById('box3').onclick =  function(){
    if(playing == true){
        if(this.innerHTML == ans){
            document.getElementById('correctBox').style.display = "block";
            document.getElementById('wrongBox').style.display = "none";
            score++;
            document.getElementById('scoreValue').innerHTML = score;
            setTimeout(function(){
                document.getElementById('correctBox').style.display = "none"
            },1000)
            generateQuestion();
        }else{
            document.getElementById('wrongBox').style.display = "block";
            setTimeout(function(){
                document.getElementById('wrongBox').style.display = "none"
            },1000)
        }
    }
}

document.getElementById('box4').onclick =  function(){
    if(playing == true){
        if(this.innerHTML == ans){
            document.getElementById('correctBox').style.display = "block";
            document.getElementById('wrongBox').style.display = "none";
            score++;
            document.getElementById('scoreValue').innerHTML = score;
            setTimeout(function(){
                document.getElementById('correctBox').style.display = "none"
            },1000)
            generateQuestion();
        }else{
            document.getElementById('wrongBox').style.display = "block";
            setTimeout(function(){
                document.getElementById('wrongBox').style.display = "none"
            },1000)
        }
    }
}




function startCountDown(){
    action = setInterval(function(){
        timeRemainingValue -= 1;
        document.getElementById('timeRemaining').innerHTML = timeRemainingValue;
        if(timeRemainingValue == 0){ //check time left
            stopCountDown(); //if time  left we will continue //otherwise game over
            document.getElementById('gameoverBox').style.display = "block";
            document.getElementById('gameoverBox').innerHTML  = "<p>Game Over!!!</p> <p>Your score is: " + score +" . </p>";
            document.getElementById('timeRemaining').style.display =  "none";
            playing = false;
            document.getElementById('play').innerHTML = "START";
        }
    },1000)
}


function stopCountDown(){
    clearInterval(action);
}

function generateQuestion(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    ans = x*y;
    document.getElementById('questionBox').innerHTML = x + " X " + y;
    var positionCorrect = 1+ Math.round(3*Math.random());
    document.getElementById('box'+positionCorrect).innerHTML = ans; //filled correct box
    
    var answers = [ans]
    
    for(i = 1; i <=4; i++){
        if(i !== positionCorrect){
            var wrongNum;
            do{
                 wrongNum = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            }while(answers.indexOf(wrongNum)>-1)
            document.getElementById('box'+i).innerHTML = wrongNum;
            answers.push(wrongNum);
        }
    }
}
        
    
        
        
        
            
            
        
       



//if we click on answer box
    //if we are playing
        //is answer correct
            //if yes increase score by one
                //show correct box for 1s
                //generate new question and option
            //if answer is wrong
                //show wrong box
                //