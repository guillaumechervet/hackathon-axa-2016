module oeup {
    export interface IBien {
        Photos: Array<String>;
        Titre: string;
        EstLoue: boolean;
        Tarif: number;
        DateDebut: Date;
        DateFin : Date;
        Frequence : string;
    }
}