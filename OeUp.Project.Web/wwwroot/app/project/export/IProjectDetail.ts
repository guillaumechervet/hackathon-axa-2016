/// <reference path="IExport.ts"/>
/// <reference path="../EnumProjectState.ts"/>
module oeup {
    
    export interface IProjectDetail  {
        Id: string;
        Title: string;
        Version: string;
        Comment: string;
        State: ProjectState;
        Date: Date;
        Exports : Array<IExport>;
    }
}