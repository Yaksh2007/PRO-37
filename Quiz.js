class Quiz {
  constructor(){
  this.input.position(130, 160);
  this.button.position(250, 200);
this.SVGTitleElement.position(300,200);
  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.input.hide();
    this.button.hide();
    this.title.hide();
    //write code to change the background color here
    backgroundColor("Yellow");
    //write code to show a heading for showing the result of Quiz
    fill("Blue");
    textSize(20);
    text("Result of The Quiz", 15,250);
    //call getContestantInfo( ) here
    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE: contestant who answered correct are named highlited in green colour!", 130,230);
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      
      if(correctAns === allContestants[plr].answer){
        fill("Green");
      }else{
        fill("Red");
      }
    }
  }

}
