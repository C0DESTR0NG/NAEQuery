
if (typeof NAEQuery == 'undefined') {
    NAEQuery = {};
}

const classABooksOfThelema = {
    LIBERI:     'i',       // 1
    LIBERVII:   'vii',     // 7
    LIBERX:     'x',       // 10
    LIBERXXVII: 'xxvii',   // 27
    LIBERXXXI:  'xxxi',    // 31  ****
    LIBERLXV:   'lxv',     // 65
    LIBERLXVI:  'lxvi',    // 66
    LIBERLXC:   'xc',      // 90
    LIBERCLVI:  'clvi'     // 156
}

const pathToClassABooksOfThelema = "js/book-data/naeq-liber-{{bookNumber}}.json";

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
    
var naeqData = [];

NAEQuery.Controller = function() {
	return {

		init: function() {
            console.log("loaded naeq-data-controller");

            NAEQuery.Controller.bindEvents();
            NAEQuery.Controller.loadAllBookData();
        },

        loadAllBookData: function() {
            let classABooksOfThelemaArray = Object.values(classABooksOfThelema);
            if( classABooksOfThelemaArray.length > 0 ) {
                classABooksOfThelemaArray.forEach(function(bookNumber, index) {
                    NAEQuery.Controller.loadBookJson(bookNumber);
                });
            }
        },

        loadBookJson: function(bookNumber) {
            $.getJSON(pathToClassABooksOfThelema.replace("{{bookNumber}}", bookNumber), function(json) {
                // console.log( NAEQuery.Controller.cleanData(naeqData["xxxi"]["112"]) );
                // console.log( NAEQuery.Controller.cleanData(json["112"]) );
                // console.log(bookNumber);

                if( Object.keys(json).length > 0 ) {
                    $('input.custom-control-input[data-book-number="'+ bookNumber +'"]').parents('.custom-checkbox').show();
                    naeqData[bookNumber] = json;
                }
            });
        },

        bindEvents: function() {
            $('textarea.main-textarea').bind('input propertychange', function() {
                let text = _clean($(this).val());
                let cipherValue = _cipher(text, false);
                let allAvalilableBooks = $("#accordion-filter #collapseFilterClassA input:checkbox").map(function(){
                    return $(this).data("book-number");
                }).get();

                // Loop through all books, even those inactive
                allAvalilableBooks.forEach(function(bookNumber, index) {
                    try {
                        let matches = [];
                        if( naeqData[bookNumber][cipherValue] !== undefined ) {
                            matches = naeqData[bookNumber][cipherValue].uniqueArray();                            
                        }

                        $('#accordion-ciphers .card .card-header[data-book-number="'+ bookNumber +'"]')
                        .next()
                        .find('.card-body')
                        .text(matches.join(", "))
                        .parents('.card')
                        .find('.card-header a[aria-expanded="false"]')
                        .click();

                        $('input.custom-control-input[data-book-number="'+ bookNumber +'"]')
                        .prev()
                        .text(matches.length);
                    }
                    catch(err) {
                        console.warn(err);
                    }
                });

                if( text.length == 0 ) {
                    $('#accordion-ciphers .card .card-body').text("");
                }
            });

            $('input.custom-control-input').change( function(){
                let bookNumber = $(this).data('book-number');
                $('#accordion-ciphers .filterable .card-header[data-book-number="'+ bookNumber +'"]')
                .parents('.card')
                .toggleClass('active');
        
                // $('textarea.main-textarea').trigger('propertychange');
                
                let activeBooks = $("#accordion-filter #collapseFilterClassA input:checkbox:checked").map(function(){
                    return $(this).data("book-number");
                }).get(); 

                let columnCount = (activeBooks.length == 1) ? 1 : (activeBooks.length < 8) ? 2 : 3;
                $('#accordion-ciphers.card-columns').attr("data-columns", columnCount);
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