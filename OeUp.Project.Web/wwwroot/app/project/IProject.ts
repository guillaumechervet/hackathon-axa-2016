/// <reference path="EnumProjectState.ts"/>
/// <reference path="ISupplierPremium.ts"/>

module oeup {
    export interface IProject {
        Id: string;
        Title: string;
        Version: string;
        Comment: string;
        State: ProjectState;
        Connector: number;
        Date: Date;
        SimilarityId: string;
        SuppliersId: string;
        Suppliers : Array<ISupplierPremium>;
    }
}