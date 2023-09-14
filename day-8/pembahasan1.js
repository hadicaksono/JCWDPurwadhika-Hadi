class Player {
    health = 100
    power = 10

    constructor(name){
        this.name = name
    }
    showStatus(){
        console.log(`${this.name} (Health => ${this.health}), Power =>${this.power}`);
    }
    hit(power){
        this.health-=power
        console.log(`Player ${this.nam} has ${this.health} remaining health`);
    }
   
}
class ShootingGame{
    constructor(player1, player2){

    }
    
    
} 