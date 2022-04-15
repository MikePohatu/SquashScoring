import player from "./player";
import game from "./game";

export default class {
    rules = "";
    firstTo = 3;
    player1: player = new player();
    player2: player = new player();
    games: game[] = [];
}