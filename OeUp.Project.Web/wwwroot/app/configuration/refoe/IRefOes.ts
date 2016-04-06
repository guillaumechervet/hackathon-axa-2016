/// <reference path="IRefOe.ts"/>

module oeup {
    export interface IRefOes {
        Id: string;
        Title: string;
        Comment: string;
        Date: Date;
        RefOes: Array<IRefOe>;
    }
}