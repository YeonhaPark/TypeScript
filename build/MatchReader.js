"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (el) {
            return [
                utils_1.dateStringToDate(el[0]),
                el[1],
                el[2],
                parseInt(el[3]),
                parseInt(el[4]),
                el[5],
                el[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
