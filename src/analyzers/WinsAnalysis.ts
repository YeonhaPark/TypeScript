import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      const winner = match[5];
      const homeTeam = match[1];
      const awayTeam = match[2];
      if (homeTeam === "Man United" && winner === MatchResult.HomeWin) {
        wins++;
      } else if (awayTeam === "Man United" && winner === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
