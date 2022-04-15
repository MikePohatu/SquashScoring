import player from "./player";
import game from "./game";
import { systems } from "./scoring";

export default class {
    scoringSystem = systems.PAR15;
    rules = "";
    bestOf = 5;
    player1: player = new player();
    player2: player = new player();
    games: game[] = [];
}