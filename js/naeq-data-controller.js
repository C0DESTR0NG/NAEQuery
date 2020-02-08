
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
            NAEQuery.Controller.resize();

            $('textarea.main-textarea').bind('input propertychange', function() {
                _ =  _cipher6;
                
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
                            matches = naeqData[bookNumber][cipherValue].sort(function(a, b) {
                                var x = a.removeVerseNumbers().cleanAmpersands(), y = b.removeVerseNumbers().cleanAmpersands();	
                                return x < y ? -1 : x > y ? 1 : 0;
                            })
                            
                            matches = matches.map(function(item, index){
                                return '<li>'+ item.cleanAmpersands()
                                                   .cleanVerseNumbers();
                            }).uniqueArray();
                        }

                        $('.naeq-number-value span').text(cipherValue);

                        let matchHtml = "";
                        if( matches.length > 0 ) {
                            matchHtml = '<ul>'+ matches.join("</li>") +'</ul>';
                        }

                        $('#accordion-ciphers .card .card-header[data-book-number="'+ bookNumber +'"]')
                        .next()
                        .find('.card-body')
                        .html(matchHtml)
                        .parents('.card')
                        .find('.card-header a[aria-expanded="false"]')
                        .click();

                        $('input.custom-control-input[data-book-number="'+ bookNumber +'"]')
                        .prev()
                        .text(matches.length);




                        // TODO parse each active result window to find common matches: ?????
                        /*var text1 = $('#collapseBookI .card-body').text();
                        var text2   = $('#collapseBookXXXI .card-body').text();
                        var text3   = $('#collapseBookVII .card-body').text();

                        var text1Words = text1.split(', ');
                        var text2Words = text2.split(', ');
                        var text3Words = text3.split(', ');

                        var commonWords = $(text1Words).filter(text2Words).toArray();
                            commonWords = $(text3Words).filter(commonWords).toArray();
                        console.log(commonWords);*/

                    }
                    catch(err) {
                        console.warn(err);
                    }
                });

                if( text.length == 0 ) {
                    $('#accordion-ciphers .card .card-body').text("");
                }
            }).focus();

            $('input.custom-control-input').change( function(){
                let bookNumber = $(this).data('book-number');
                let checkbox = $('#accordion-ciphers .filterable .card-header[data-book-number="'+ bookNumber +'"]');
                if( !$(this).is(":checked") ) { $(checkbox).parents('.card').removeClass('active'); }
                else { $(checkbox).parents('.card').addClass('active'); }

                NAEQuery.Controller.clearCookie("checkbox-"+ bookNumber);
                NAEQuery.Controller.setCookie("checkbox-"+ bookNumber, $(this).is(":checked"), 30);
        
                // $('textarea.main-textarea').trigger('propertychange');
                
                NAEQuery.Controller.resetFilterColumns();
            });

            $('.form-check input.form-check-input[name="cipherType"]').change( function(){
                _ = ($(this).val() == "cipher6") ? _cipher6 : _cipherX;
            });

            $(window).scroll(function() {
                let _w = $(window);
                let _hr = $('.hr-text');
                let mainWrapper = $('.form-group .main-textarea-wrapper');

                if( $(_w).scrollTop() > 254 ) {
                    if( !$(mainWrapper).hasClass('snap') ) {
                        $('body').css('padding-top', parseInt(($(mainWrapper).outerHeight()+49)+'px'));
                        $(mainWrapper).addClass('snap');
                        $(window).resize();
                    }
                    if( ($(_w).scrollTop()+0) > ($(_hr).offset().top-$(mainWrapper).outerHeight()) ) {
                        $(mainWrapper).addClass('hide');
                    }
                    else {
                        $(mainWrapper).removeClass('hide');
                    }
                }
                else {
                    $('body').css('padding-top', '1.5em');
                    $(mainWrapper).removeClass('snap');
                }
            });
            $(window).scroll();
        },

        resize: function() {
            $(window).resize( function() {
                let snappedElements = $('.form-group .main-textarea-wrapper');
                $(snappedElements).width( $(snappedElements).parent().width() ); 
            });
            $(window).resize();
        },

        cleanData: function(array) {
            array.forEach(function(part, index) {
                this[index] = part.replace(/^& /, '').replace(/\s&$/, '');
            }, array);
            return NAEQuery.Controller.unique(array).sort();
        },

        resetFilterColumns: function() {
            let activeBooks = $("#accordion-filter #collapseFilterClassA input:checkbox:checked").map(function(){
                return $(this).data("book-number");
            }).get(); 

            let columnCount = (activeBooks.length == 1) ? 1 : (activeBooks.length < 8) ? 2 : 3;
            $('#accordion-ciphers.card-columns').attr("data-columns", columnCount);
        },

        setCookie: function(name, value, daysToLive) {
            var cookie = name + "=" + encodeURIComponent(value);
            
            if(typeof daysToLive === "number") {
                cookie += "; max-age=" + (daysToLive*24*60*60) + "; path=/";
                document.cookie = cookie;
            }
        },

        clearCookie: function(name) {
            NAEQuery.Controller.setCookie(name,"",-1);
        },

        unique: function(array) {
            return $.grep(array, function(el, index) {
                return index === $.inArray(el, array);
            });
        }
    }
}();


// Extension methods

String.prototype.cleanAmpersands = function () {
    return this.replace(/^&\s/, '')
               .replace(/\s&$/, '')
               .trim();
}

String.prototype.cleanCapitalization = function () {
    return this.replace(/^i\s/, 'I ')
               .replace(/\si$/, ' I')
               .replace(/\si\s/, ' I ')
               .trim();
}
String.prototype.cleanVerseNumbers = function () {
    return this.replace(/{{/g, '<span class="verse">')
               .replace(/}}/g, '</span>')
               .trim();
}
String.prototype.removeVerseNumbers = function () {
    return this.replace(/[0-9]/g, '')
               .replace(/{{/g, '')
               .replace(/}}/g, '')
               .trim();
}