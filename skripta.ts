class Predmet {
    private _id: string;
    private _nazivPredmeta: string;
    private _imeProfesora: string;
    private _ocena: number;

    constructor(id: string, nazivPredmeta: string, imeProfesora: string, ocena: number) {
        this._id = id;
        this._nazivPredmeta = nazivPredmeta;
        this._imeProfesora = imeProfesora;
        this._ocena = ocena;
    }


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Getter nazivPredmeta
     * @return {string}
     */
    public get nazivPredmeta(): string {
        return this._nazivPredmeta;
    }

    /**
     * Setter nazivPredmeta
     * @param {string} value
     */
    public set nazivPredmeta(value: string) {
        this._nazivPredmeta = value;
    }

    /**
     * Getter imeProfesora
     * @return {string}
     */
    public get imeProfesora(): string {
        return this._imeProfesora;
    }

    /**
     * Setter imeProfesora
     * @param {string} value
     */
    public set imeProfesora(value: string) {
        this._imeProfesora = value;
    }

    /**
     * Getter ocena
     * @return {number}
     */
    public get ocena(): number {
        return this._ocena;
    }

    /**
     * Setter ocena
     * @param {number} value
     */
    public set ocena(value: number) {
        this._ocena = value;
    }



}




class Student {
    private _ime: string;
    private _prezime: string;
    private _fakultet: string;
    private _brojIndexa: string;
    private _prosecnaOcena: number;
    private _polozeniPredmeti: Predmet[];

    constructor(ime: string, prezime: string, fakultet: string, brojIndexa: string) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._brojIndexa = brojIndexa;
        this._prosecnaOcena = 0;
        this._polozeniPredmeti = [];
    }


    public predstaviSe(): void {
        console.log(`Ja sam ${this._ime} ${this._prezime}, studiram na ${this._fakultet}, sa prosecnom ocenom ${this._prosecnaOcena}`);

    }

    public izracunajProsecnuOcenu(): number {
        let prosecnaOcena: number = 0;
        let suma: number = 0;
        for (let predmet of this._polozeniPredmeti) {
            suma += predmet.ocena;
        }
        prosecnaOcena = suma / this._polozeniPredmeti.length;
        return prosecnaOcena;

    }

    public omiljeniProfesori(): string[] {
        let omiljeniProfesori: string[] = [];
        for (let predmet of this._polozeniPredmeti) {
            if (predmet.ocena === 11) {
                omiljeniProfesori.push(predmet.imeProfesora);
            }
        }
        return omiljeniProfesori;
    }


    /**
     * Getter ime
     * @return {string}
     */
    public get ime(): string {
        return this._ime;
    }

    /**
     * Setter ime
     * @param {string} value
     */
    public set ime(value: string) {
        this._ime = value;
    }

    /**
     * Getter prezime
     * @return {string}
     */
    public get prezime(): string {
        return this._prezime;
    }

    /**
     * Setter prezime
     * @param {string} value
     */
    public set prezime(value: string) {
        this._prezime = value;
    }

    /**
     * Getter fakultet
     * @return {string}
     */
    public get fakultet(): string {
        return this._fakultet;
    }

    /**
     * Setter fakultet
     * @param {string} value
     */
    public set fakultet(value: string) {
        this._fakultet = value;
    }

    /**
     * Getter brojIndexa
     * @return {string}
     */
    public get brojIndexa(): string {
        return this._brojIndexa;
    }

    /**
     * Setter brojIndexa
     * @param {string} value
     */
    public set brojIndexa(value: string) {
        this._brojIndexa = value;
    }


    /**
     * Getter prosecnaOcena
     * @return {number}
     */
    public get prosecnaOcena(): number {
        return this._prosecnaOcena;
    }

    /**
     * Setter prosecnaOcena
     * @param {number} value
     */
    public set prosecnaOcena(value: number) {
        this._prosecnaOcena = value;
    }


    /**
     * Getter polozeniPredmeti
     * @return {Predmet[]}
     */
    public get polozeniPredmeti(): Predmet[] {
        return this._polozeniPredmeti;
    }

    /**
     * Setter polozeniPredmeti
     * @param {Predmet[]} value
     */
    public set polozeniPredmeti(value: Predmet[]) {
        this._polozeniPredmeti = value;
    }

}

let student = new Student("Pera", "Peric", "FTN", "PS-1") //kreiranje studenta

let predmeti = [                                    //kreiranje predmeta i dodavanje ocena studentu

    new Predmet("1", "Matematika", "Mitic", 8),
    new Predmet("2", "Hemija", "Maric", 11),
    new Predmet("3", "Srpski", "Tomic", 11),
    new Predmet("4", "Fizika", "Golic", 12),
    new Predmet("5", "Engleski", "Vuletic", 7),
];

student.polozeniPredmeti = predmeti;  // dodavanje predmeta studentu

let prosek = student.izracunajProsecnuOcenu();

student.prosecnaOcena = prosek;
console.log(student.predstaviSe());

console.log(student.omiljeniProfesori());




