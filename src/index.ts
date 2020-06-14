import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
// create an object that satisfies the 'DataReader' interface
const matchReader = MatchReader.fromCsv("football.csv");

matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Mans United");

summary.buildAndPrintReport(matchReader.matches);
