import player from "./player";
import rally from "./rally";

export const systems = {
    PAR11: {
        score: (completedRally:rally): boolean => {
            return scorePAR(completedRally, 11);
        }
    },
    PAR15: {
        score: (completedRally:rally): boolean => {
            return scorePAR(completedRally, 15);
        }
    },
    HiHo11: {
        score: (completedRally:rally): boolean => {
            return scoreHiho(completedRally, 11);
        }
    },
    HiHo15: {
        score: (completedRally:rally): boolean => {
            return scoreHiho(completedRally, 15);
        }
    },
}

function scorePAR(completedRally: rally, target: number): boolean {
    if (completedRally.winner === null || completedRally.loser === null) { 
        console.error("Winner or loser or rally not defined");
    }
    const winner = completedRally.winner as player;
    const loser = completedRally.loser as player;
    winner.gameScore++;
    if (winner.gameScore >= target && winner.gameScore >= loser.gameScore+2) {
        return true;
    } else {
        return false;
    }
}

function scoreHiho(completedRally: rally, target: number): boolean {
    if (completedRally.winner === null || completedRally.loser === null) { 
        console.error("Winner or loser or rally not defined");
    }
    const winner = completedRally.winner as player;
    const loser = completedRally.loser as player;
    if (completedRally.server === winner) {
        winner.gameScore++;
    }
    
    if (winner.gameScore >= target && winner.gameScore >= loser.gameScore+2) {
        return true;
    } else {
        return false;
    }
}