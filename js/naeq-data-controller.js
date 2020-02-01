
if (typeof NAEQuery == 'undefined') {
    NAEQuery = {};
}

const classABooksOfThelema = {
    LIBERI:     'js/book-data/naeq-liber-i.json',       // 1
    LIBERVII:   'js/book-data/naeq-liber-vii.json',     // 7
    LIBERX:     'js/book-data/naeq-liber-x.json',       // 10
    LIBERXXVII: 'js/book-data/naeq-liber-xxvii.json',   // 27
    LIBERXXXI:  'js/book-data/naeq-liber-xxxi.json',    // 31  ****
    LIBERLXV:   'js/book-data/naeq-liber-lxv.json',     // 65
    LIBERLXVI:  'js/book-data/naeq-liber-lxvi.json',    // 66
    LIBERLXC:   'js/book-data/naeq-liber-xc.json',      // 90
    LIBERCLVI:  'js/book-data/naeq-liber-clvi.json'     // 156
}

/* The Holy Books of Thelema (Class A)
    Liber I: Liber B Vel Magi Sub Figurâ 1
    Liber VII: Liber Liberi Vel Lapidis Lazuli, Adumbratio Kabbalæ Ægyptiorum Sub Figurâ VII
    Liber X: Liber Porta Lucis Sub Figureâ X
    Liber XXVII: Liber Trigrammaton Sub Figurâ XXVII
    Liber LXV: Liber Cordis Cincti Serpente Sub Figurâ LXV
    Liber LXVI: Liber Stellæ Rubeæ Sub Figurâ LXVI
    Liber XC: Liber Tzaddi Vel Hamus Hermeticus Sub Figurâ XC
    Liber CLVI: Liber Cheth Vel Vallum Abiegni Sub Figurâ CLVI
    Liber XXXI: Liber AL(Liber Legis), The Book of the Law
Liber CCXXXI: Liber Arcanorum ιων ATU ν TAHUTI Quas Vidit Asar in Amenti Sub Figurâ CCXXXI Liber Carcerorum ιων Qliphoth cum suis Geniis
Liber CCCLXX: Liber A'ash Vel Capricoroni Pneumatici Sub Figuræ CCCLXX
Liber CD: Liber Tau Vel Kabbalæ Trium Literarum Sub Figuræ CD
Liber DCCCXIII: Vel Ararita Sub Figuræ DLXX*/
    

NAEQuery.Controller = function() {
	return {

		init: function() {
            console.log("loaded naeq-data-controller");
        },

        loadBookJson: function(path, key) {
            $.getJSON(path, function(json) {
                console.log( NAEQuery.Controller.cleanData(json[key]) );
            });
        },

        cleanData: function(array) {
            array.forEach(function(part, index) {
                this[index] = part.replace(/^& /, '').replace(/\s&$/, '');
            }, array);
            return NAEQuery.Controller.unique(array).sort();
        },

        unique: function(array) {
            return $.grep(array, function(el, index) {
                return index === $.inArray(el, array);
            });
        }
    }
}();