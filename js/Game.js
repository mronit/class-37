class Game {
  constructor(){}
  
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
   play(){
     form.hide();
     textSize(30);
     text("GaMe StArT",120,100);
     player.getplayerinfo();
     if(allplayers !== undefined){
     var displayposition = 130;
     displayposition = displayposition + 20;
     textSize(15);
     text(allplayers[plr].name + " : " + allplayers[plr].distance,120,diplayposition)
     }
   } 
    
   if(keyIsDown(UP_ARROW) && player.index !== null){
   player.distance = player.distance + 50
   player.update()
   }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
