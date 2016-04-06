module oeup {
    export interface ICommandResult<T> {
        Success: boolean;
        Data: T;
    }
}