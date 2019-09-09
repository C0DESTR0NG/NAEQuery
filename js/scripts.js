
var _cipherArray = [];
var _cipherValue = 0;
var _ = ['∴','a','l','w','h','s','d','o','z','k','v','g','r','c','n','y','j','u','f','q','b','m','x','i','t','e','p'];

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
        _t = _t.replace(/[0-9]/g, '');
    
    return _t;

}

function _waterfall( text ) {

    _cipherArray = [];

    var _w = _clean(text);
        _w = _w.split(' ');
        _w = _w.filter(n => n);

    var _a = [];

    var _l = _w.length;
    for (var i = 0; i < _l; i++) {
        var _s = '{0}'.format(_w[i]);
        _a.push({ word: _s, value: _cipher(_s) }); 
        
        if( _w[i+1] != null ) {
            _s = '{0} {1}'.format(_w[i], _w[i+1]);
            _a.push({ word: _s, value: _cipher(_s) }); 

            if( _w[i+2] != null ) {
                _s = '{0} {1} {2}'.format(_w[i], _w[i+1], _w[i+2]);
                _a.push({ word: _s, value: _cipher(_s) }); 

                if( _w[i+3] != null ) {
                    _s = '{0} {1} {2} {3}'.format(_w[i], _w[i+1], _w[i+2], _w[i+3]);
                    _a.push({ word: _s, value: _cipher(_s) }); 
                }
            }
        }
    }

    // console.log( "# MATCHES: \n\n{0}".format( _cipherArray.join("\n") ) );

    return _a;
}

function _cipher( text ) {

    var _t = text.replace(/\s/g,'');

    var _s = 0;
    var _l = _t.length;
    for (var i = 0; i < _l; i++) {
        _s += _.indexOf(_t[i]);
    }

    if( _s == _cipherValue ) {
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

    $('.naeq-textarea').keyup(function () {
        charRemaining = maxChar - $(this).val().length;
        $('.text-counter').text( charRemaining +' character(s) left');
    });

    $('.naeq-input').on("cut copy paste",function(e) {
        e.preventDefault();
     });

    $('.naeq-input').on('keyup change', function () {
        $('.cipher-value').text( $(this).val() );
    });
    
    $('button.naeq-analyze').click( function() {

        if( $('input.naeq-input').val() != "" ) {

            $('.form-group .error').removeClass('active');

            _cipherValue = $('input.naeq-input').val();

            var _output = _waterfall( $('.naeq-textarea').val() );

            $('#collapseOne1 .card-body').text( _cipherArray.uniqueArray().join(", ") );
            if( $('#collapseOne1 .card-body').text().length == 0 ) {
                $('#collapseOne1 .card-body').text("No matches.");
            }
            else {
                constructCloudArray( _cipherArray );
            }
            $('#json').text( JSON.stringify(_output, undefined, 2) );

            if( !$('#collapseOne1').hasClass('show') ) { 
                $('#headingOne1 a').click();
            }

            $('body,html').animate( { scrollTop : $('.jqcloud').offset().top +'px' } , 600);

            try {
                if( $('.naeq-textarea').val().length > 0 ) {
                    gtag('event', 'analyze', {
                        'event_category': 'NAEQ Text',
                        'event_label': $('.naeq-textarea').val() 
                    });
                }
            }
            catch(err) {
                console.warn(err);
            }
        }
        else {
            $('.form-group .error').addClass('active');
        }
    });
});