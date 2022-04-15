import player from './player';
import rally from './rally';
import { ScoringSystem } from "./scoring";

export default class {
    rallies: rally[] = [];
    winner: player | null = null;
    currentRally: rally | null = null;
}