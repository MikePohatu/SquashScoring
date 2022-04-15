import player from "./player";

export default class rally {
    server: player;
    winner: player | null;
    loser: player | null;
    rightServe: boolean;
    handOut: boolean;

    constructor(server: player) {
        this.server = server;
        this.rightServe = true;
        this.winner = null;
        this.loser = null;
        this.handOut = false;
    }

    complete(winner: player, loser: player): rally {
        this.winner = winner;
        this.loser = loser;
        let newrally = new rally(winner);
        if (winner === this.server) {
            newrally.rightServe = !(this.rightServe);
            newrally.handOut = false;
        } else {
            newrally.handOut = true;
        }

        return newrally;
    }
}