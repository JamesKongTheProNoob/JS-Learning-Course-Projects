let score=JSON.parse(localStorage.getItem
      ('score'))||{//if the first part is falsely, then do the second part
        win:0,
        losses:0,
        tie:0
      };
      updateScoreElement()
      /*
      null vs undefined:
      null=intentionally want something to be empty, while if something is set to undefined it would be set to its default value
      if(!score){//same as if score === null
        score={
          win:0,
          losses:0,
          tie:0
        }
      }
      */
      function updateScoreElement(){
       document.querySelector('.js-scores').innerHTML=`Win: ${score.win},Losses: ${score.losses},Ties: ${score.tie}`;
      }
      function playGame(playMove){
        let computerMove=pickComputerMove();
        result = ''
        if ((computerMove==='rock'&&playMove==='rock')||(computerMove==='scissors'&&playMove==='scissors')||(computerMove==='paper'&&playMove==='paper')){
          result='Tie';
          score.tie++;
        }else if((computerMove==='scissors'&&playMove==='rock')||(computerMove==='rock'&&playMove==='paper')||(computerMove==='paper'&&playMove==='scissors')){
          result='Win';
          score.win++;
        }else{
          result='Lose';
          score.losses++;
        }
        localStorage.setItem('score',JSON.stringify(score));//the first string is the name for the container of the value we want to store(localStorage only support String)
        updateScoreElement();
        document.querySelector('.js-result').
        innerHTML=result;
        document.querySelector('.js-moves').innerHTML=`You <img src="images/${playMove}-emoji.png" class="move-icon"> - <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`
      }
      //let computerMove=''; //sets computerMove as a global variable for everybutton to access
     
      function pickComputerMove(){
        let computerMove='';
        const randomNumber=Math.random();
        
        if(0<=randomNumber && randomNumber<1/3){
          computerMove='rock';
          //any const,var,or let variables only exists within the scope or subscopes(scopes are brackets),var doesn'tfollow this thus its removed
        }else if(1/3<=randomNumber&&randomNumber<2/3){
          computerMove='paper';
          //any const,var,or let variables only exists within the scope or subscopes(scopes are brackets),var doesn'tfollow this thus its removed
        }else{
          computerMove='scissor';
          //any const,var,or let variables only exists within the scope(scopes are brackets), var doesn'tfollow this thus its removed
        }
        return computerMove;
      }
