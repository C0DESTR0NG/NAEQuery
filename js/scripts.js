/**
 * @author Chad Milburn <chad@codestrong.org>
 */


// Import naeq-data-controller.js
var script = document.createElement('script');
script.src = "js/naeq-data-controller.js";
script.onload = function () {
    NAEQuery.Controller.init();
};
document.head.appendChild(script);



var _cipherArray = [];
var _cipherValue = 0;
var _cipher6 = ['∴','a','l','w','h','s','d','o','z','k','v','g','r','c','n','y','j','u','f','q','b','m','x','i','t','e','p'];
var _cipherX = ['∴','k','f','w','r','m','d','y','t','a','v','q','h','c','x','o','j','e','l','g','b','s','n','i','z','u','p'];
var _ = [];

String.prototype.format = function() {
   var content = this;
   var _l = arguments.length;
   for (var i=0; i < _l; i++) {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);  
   }
   return content;
};

Array.prototype.uniqueArray = function() {
    return this.filter(
        function(a){return !this[a] ? this[a] = true : false;}, {}
    );
}

function _clean( text ) {
    var _t = text.toLowerCase();
        _t = _t.replace(/\n/g, " ");
        _t = _t.replace(/[^\w\s]/gi, '');
    return _t;
}

function _waterfall( text ) {
    _cipherArray = [];
    var _w = _clean(text);
        _w = _w.split(' ');
        _w = _w.filter(n => n);
    var _l = _w.length;
    var _a = [];
    for (var i = 0; i < _l; i++) {
        var _s = '{0}'.format(_w[i]);
        _a.push({ word: _s, value: _cipher(_s) }); 
        
        if (_w[i+1] != null) {
            _s = '{0} {1}'.format(_w[i], _w[i+1]);
            _a.push({ word: _s, value: _cipher(_s) }); 

            if (_w[i+2] != null) {
                _s = '{0} {1} {2}'.format(_w[i], _w[i+1], _w[i+2]);
                _a.push({ word: _s, value: _cipher(_s) }); 

                if (_w[i+3] != null) {
                    _s = '{0} {1} {2} {3}'.format(_w[i], _w[i+1], _w[i+2], _w[i+3]);
                    _a.push({ word: _s, value: _cipher(_s) }); 
                }
            }
        }
    }

    // console.log( "# MATCHES: \n\n{0}".format( _cipherArray.join("\n") ) );

    return _a;
}

function _cipher( text, matchable = true ) {
    let _words = _clean(text).split(' ');
    let _s = 0;
    _words.forEach( _w => {
        // Check if only a number
        if (_w.match(/^[0-9]+$/)) {    
            _s += parseInt(_w);
        }
        // Sum alphanumeric characters
        else {                          
            var _char = _w.length;
            for (var i = 0; i < _char; i++) {
                if (_w[i].match(/^[0-9]+$/)) {
                    _s += parseInt(_w[i]);
                }
                else {
                    _s += _.indexOf(_w[i]);
                }
            }
        }
    });

    if (matchable && _s == _cipherValue) {
        _cipherArray.push(text.toUpperCase());
    }

    return _s;
}

function constructCloudArray(arr) {
	const count = {};
	for (let i = 0; i < arr.length; i++) {
		const val = arr[i];
		if (val in count) {
			count[val] = count[val] + 1;
		} else {
			count[val] = 1;
		}
	}

    var highestCount = 0;
    var basic_words = [];
	for (let key in count) {
        highestCount = Math.max( highestCount, count[key] );
        basic_words.push( {text: key, weight: count[key]} );
    }
    basic_words.push( {text: _cipherValue, weight: highestCount + 1} );
    
    $('.cloud-wrapper').html('<div id="cloud" class="cloud"></div>');
    $('#cloud').jQCloud(basic_words, {
        autoResize: true,
        colors: ["#96a6b2", "#8fabbf", "#97bad2", "#b5cfe1", "#c8d9e5"],
        fontSize: {
            from: 0.1,
            to: 0.02
        }
    });
}

$(document).ready( function() {
    var maxChar = 10000;
    var charRemaining = maxChar;

    _ = _cipher6;

    $('.naeq-textarea').keyup(function () {
        charRemaining = maxChar - $(this).val().length;
        $('.text-counter').text( charRemaining +' character(s) left');
    });

    $('.naeq-input').on("cut copy paste",function(e) {
        e.preventDefault();
    });
    
    $('button.naeq-analyze').click( function() {

        if ($('input.naeq-input').val() != "" && $('textarea.naeq-textarea').val() != "") {

            $('.form-group .error').removeClass('active');

            _cipherValue = $('input.naeq-input').val();

            $('#collapseDefaultCipher1 .cipher-matches').text( _cipherArray.uniqueArray().sort().join(", ") ).fadeIn();
            if ($('#collapseDefaultCipher1 .card-body').text().length == 0) {
                $('#collapseDefaultCipher1 .card-body').text("No matches.");
                $('.cloud-wrapper').html("");
            }
            else {
                $('.naeq-textarea').highlightTextarea('destroy');
                $('.naeq-textarea').trigger('input').highlightTextarea({
                    words: _cipherArray.uniqueArray(),
                    caseSensitive: false,
                    color: "#d2d0cf",
                    resizable: true
                });
            }
            
            try {
                if ($('.naeq-textarea').val().length > 0) {
                    gtag('event', 'analyze', {
                        'event_category': 'NAEQ Text',
                        'event_label': $('.naeq-textarea').val() 
                    });

                    // Disabled on 03/25/2020
                    /*let selectedCipherType = $('.form-check input.form-check-input[name="cipherType"]:checked').val().replace("cipher","Cipher ");
                    gtag('event', 'analyze', {
                        'event_category': 'NAEQ Text Cipher Type',
                        'event_label': selectedCipherType 
                    });*/
                }
            }
            catch(err) {
                console.warn(err);
            }
        }
        else {
            $('.form-group .error').addClass('active');
            $('#collapseDefaultCipher1 .cipher-matches').fadeOut();
            $('body,html').animate( { scrollTop : ($('input.naeq-input').offset().top - 84) +'px' } , 600);
        }
    });

    $('h1 .about-btn').click( function() {
        $('.about').slideToggle().toggleClass('active');
    });


    $(window).resize( function() {
        $('.naeq-textarea').highlightTextarea('destroy');
        $('#collapseDefaultCipher1 .cipher-matches').hide();
    });
});