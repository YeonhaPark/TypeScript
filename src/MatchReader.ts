import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (el: string[]): MatchData => {
        return [
          dateStringToDate(el[0]),
          el[1],
          el[2],
          parseInt(el[3]),
          parseInt(el[4]),
          el[5] as MatchResult,
          el[6],
        ];
      }
    );
  }
}
