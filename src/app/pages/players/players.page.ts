import { Component, OnInit } from '@angular/core';
import players from '../../files/playerlist.json';
import { PlayerService } from 'src/app/services/playersService.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  constructor(
    private playerService: PlayerService,
  ) { }

  public playerList:any = [];
  public goalKeepersList:any = [];
  public midFieldersList:any = [];
  public defenseFieldersList:any = [];
  public forwardFieldersList:any = [];

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.playerService.playersList({}).subscribe((response: any) => { 
      this.playerList = response.data;
      this.parsePlayersRole();
    });
    console.log("RESPONSE",this.playerList)

  }

  parsePlayersRole(){
    this.playerList.forEach((element:any) => {
      switch(element.position){
        case "Delantero":
          this.forwardFieldersList.push(element);
          break;
        case "Defensa":
          this.defenseFieldersList.push(element);
          break;
        case "Mediocampista":
          this.midFieldersList.push(element);
          break;
        case "Portero":
          this.goalKeepersList.push(element);
          break;
      }
    })
    console.log("DELANTERO", this.forwardFieldersList)
  }

}
