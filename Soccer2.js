 let player_info = [
    new SoccerPlayer ("Mohamed Salah", 29, "Forward","Liverpool Club"),
    new SoccerPlayer("Takumi Minamino", 26, "Forward","Liverpool Club"),
    new SoccerPlayer("Sadio Mane", 29, "Forward","Liverpool Club"),
    new SoccerPlayer("Virgil van Dijk", 30, "Defender","Liverpool Club"),
    new SoccerPlayer("Roberto Firmino", 30, "Midfielder","Liverpool Club")];
                for (index=0; index<5; index++){
                    let player = player_info[index]
                    let player_list= document.querySelector("#list");
                    let playerListItem = document.createElement("li");
                    playerListItem.innerHTML= `The player name: ${player.name} <br> 
                    Age: ${player.age} <br>
                     The position: ${player.position} <br> 
                     ${player.club}`
                     player_list.append(playerListItem);
                }



