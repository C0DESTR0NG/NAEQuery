
if (typeof NAEQuery == 'undefined') {
    NAEQuery = {};
}

const classABooksOfThelema = {
    LIBERXXXI: 'js/book-data/naeq-liber-xxxi.json'
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
Liber CCXX: Liber AL Vel Legis Sub Figurâ CCXX
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
                // TODO write extension to remove "& " (if first characters) then sort by values (alphabetically))
                console.log(json[key].sort());
            });
        }
    }
}();