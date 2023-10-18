var Predmet = /** @class */ (function () {
    function Predmet(id, nazivPredmeta, imeProfesora, ocena) {
        this._id = id;
        this._nazivPredmeta = nazivPredmeta;
        this._imeProfesora = imeProfesora;
        this._ocena = ocena;
    }
    Object.defineProperty(Predmet.prototype, "id", {
        /**
         * Getter id
         * @return {string}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {string} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "nazivPredmeta", {
        /**
         * Getter nazivPredmeta
         * @return {string}
         */
        get: function () {
            return this._nazivPredmeta;
        },
        /**
         * Setter nazivPredmeta
         * @param {string} value
         */
        set: function (value) {
            this._nazivPredmeta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "imeProfesora", {
        /**
         * Getter imeProfesora
         * @return {string}
         */
        get: function () {
            return this._imeProfesora;
        },
        /**
         * Setter imeProfesora
         * @param {string} value
         */
        set: function (value) {
            this._imeProfesora = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "ocena", {
        /**
         * Getter ocena
         * @return {number}
         */
        get: function () {
            return this._ocena;
        },
        /**
         * Setter ocena
         * @param {number} value
         */
        set: function (value) {
            this._ocena = value;
        },
        enumerable: false,
        configurable: true
    });
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, fakultet, brojIndexa) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._brojIndexa = brojIndexa;
        this._prosecnaOcena = 0;
        this._polozeniPredmeti = [];
    }
    Student.prototype.predstaviSe = function () {
        console.log("Ja sam ".concat(this._ime, " ").concat(this._prezime, ", studiram na ").concat(this._fakultet, ", sa prosecnom ocenom ").concat(this._prosecnaOcena));
    };
    Student.prototype.izracunajProsecnuOcenu = function () {
        var prosecnaOcena = 0;
        var suma = 0;
        for (var _i = 0, _a = this._polozeniPredmeti; _i < _a.length; _i++) {
            var predmet = _a[_i];
            suma += predmet.ocena;
        }
        prosecnaOcena = suma / this._polozeniPredmeti.length;
        return prosecnaOcena;
    };
    Student.prototype.omiljeniProfesori = function () {
        var omiljeniProfesori = [];
        for (var _i = 0, _a = this._polozeniPredmeti; _i < _a.length; _i++) {
            var predmet = _a[_i];
            if (predmet.ocena === 11) {
                omiljeniProfesori.push(predmet.imeProfesora);
            }
        }
        return omiljeniProfesori;
    };
    Object.defineProperty(Student.prototype, "ime", {
        /**
         * Getter ime
         * @return {string}
         */
        get: function () {
            return this._ime;
        },
        /**
         * Setter ime
         * @param {string} value
         */
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prezime", {
        /**
         * Getter prezime
         * @return {string}
         */
        get: function () {
            return this._prezime;
        },
        /**
         * Setter prezime
         * @param {string} value
         */
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fakultet", {
        /**
         * Getter fakultet
         * @return {string}
         */
        get: function () {
            return this._fakultet;
        },
        /**
         * Setter fakultet
         * @param {string} value
         */
        set: function (value) {
            this._fakultet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "brojIndexa", {
        /**
         * Getter brojIndexa
         * @return {string}
         */
        get: function () {
            return this._brojIndexa;
        },
        /**
         * Setter brojIndexa
         * @param {string} value
         */
        set: function (value) {
            this._brojIndexa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prosecnaOcena", {
        /**
         * Getter prosecnaOcena
         * @return {number}
         */
        get: function () {
            return this._prosecnaOcena;
        },
        /**
         * Setter prosecnaOcena
         * @param {number} value
         */
        set: function (value) {
            this._prosecnaOcena = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "polozeniPredmeti", {
        /**
         * Getter polozeniPredmeti
         * @return {Predmet[]}
         */
        get: function () {
            return this._polozeniPredmeti;
        },
        /**
         * Setter polozeniPredmeti
         * @param {Predmet[]} value
         */
        set: function (value) {
            this._polozeniPredmeti = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student("Pera", "Peric", "FTN", "PS-1"); //kreiranje studenta
var predmeti = [
    new Predmet("1", "Matematika", "Mitic", 8),
    new Predmet("2", "Hemija", "Maric", 11),
    new Predmet("3", "Srpski", "Tomic", 11),
    new Predmet("4", "Fizika", "Golic", 12),
    new Predmet("5", "Engleski", "Vuletic", 7),
];
student.polozeniPredmeti = predmeti; // dodavanje predmeta studentu
var prosek = student.izracunajProsecnuOcenu();
student.prosecnaOcena = prosek;
console.log(student.predstaviSe());
console.log(student.omiljeniProfesori());
