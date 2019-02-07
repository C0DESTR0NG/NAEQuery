
var _112 = [];
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

function _clean( text ) {

    var _t = text.toLowerCase();
        _t = _t.replace(/\n/g, " ");
        _t = _t.replace(/[^\w\s]/gi, '');
        _t = _t.replace(/[0-9]/g, '');
    
    return _t;

}

function _waterfall( text ) {

    _112 = [];

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

    // console.log( "112 MATCHES: \n\n{0}".format( _112.join("\n") ) );

    return _a;
}

function _cipher( text ) {

    var _t = text.replace(/\s/g,'');

    var _s = 0;
    var _l = _t.length;
    for (var i = 0; i < _l; i++) {
        _s += _.indexOf(_t[i]);
    }

    if( _s == 112 ) {
        _112.push(text.toUpperCase());
    }

    return _s;
}

$(document).ready( function() {
    var maxChar = 1000;
    var charRemaining = maxChar;
    $('.naeq-textarea').keyup(function () {
        charRemaining = maxChar - $(this).val().length;
        $('.text-counter').text( charRemaining +' character(s) left');
    });

    $('button.naeq-analyze').click( function() {
        var _output = _waterfall( $('.naeq-textarea').val() );

        $('#collapseOne1 .card-body').text( _112.join(", ") );
        $('#json').text( JSON.stringify(_output, undefined, 2) );

        if( !$('#collapseOne1').hasClass('show') ) { 
            $('#headingOne1 a').click();
        }
    });
});