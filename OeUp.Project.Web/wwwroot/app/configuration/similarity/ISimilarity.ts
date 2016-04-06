/// <reference path="ISimilarityKeyValue.ts"/>

module oeup {
    export interface ISimilarity {
        Id: string;
        Title: string;
        Date: Date;
        Comment: string;
        Datas : Array<ISimilarityKeyValue>;
    }
}

