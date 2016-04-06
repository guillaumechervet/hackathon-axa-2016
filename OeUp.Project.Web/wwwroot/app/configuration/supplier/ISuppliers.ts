/// <reference path="ISupplier.ts"/>

module oeup {
    export interface ISuppliers {
        Id: string;
        Title: string;
        Comment: string;
        Date: Date;
        Suppliers: Array<ISupplier>;
    }
}