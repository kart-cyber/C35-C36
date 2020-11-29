class Form{
    constructor(){
        this.title = createElement("h1");
        this.input = createInput("Name");
        this.button = createButton("Play!");
        this.greeting = createElement("h2");
    }
    hide(){
        this.title.hide(); 
        this.input.hide();
        this.button.hide();
        this.greeting.hide(); 
    }
    display(){
        this.title.html("Car racing game");
        this.title.position(250,0);
        this.input.position(250,160);
        this.button.position(350,200);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(250,100);

        });
    }

}