"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// create an object that satisfies the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Mans United");
summary.buildAndPrintReport(matchReader.matches);
