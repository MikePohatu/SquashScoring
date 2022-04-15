import player from "./player";

export const completions = {
    winner: 1,
    let: 2,
    stroke: 3
}

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

    complete(winner: player, loser: player, completion: number): rally {
        this.winner = winner;
        this.loser = loser;
        let newrally = new rally(winner);

        if (completion === completions.let) {
            newrally.rightServe = this.rightServe;
            newrally.handOut = false;
            newrally.server = this.server;
        }
        if (winner === this.server) {
            newrally.rightServe = !(this.rightServe);
            newrally.handOut = false;
            newrally.server = this.server;
        } else {
            newrally.handOut = true;
            newrally.server = this.winner;
        }

        return newrally;
    }
}