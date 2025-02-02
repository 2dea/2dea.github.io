if( window.NodeList && !NodeList.prototype.forEach ) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for( var i = 0; i < this.length; i++ ) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

; (function(window, document, $HTML, undefined) {
    "use strict";

    window.addEventListener('error', function(evt) {
        var error = evt.error

        if( error ) {
            var stack = error.stack || evt.message;
            var message = stack.replace(/(.*)(https?)(:\/\/.+\/)(.+\..+:\d+)/g, '$1$4');

            alert( message );

        } else {
            alert( 'JavaScript Error: See browser console for detail.' );
        }

        return false;

    }, { once: true });


//    var attachDOM = window.attachDOM = window.attachDOM || {};
//
//
//    attachDOM.isPassive = function() {
//        var supportsPassiveOption = false;
//
//        try {
//            addEventListener('test', null, Object.defineProperty({}, "passive", {
//                get: function() {
//                    supportsPassiveOption = true;
//                }
//            }));
//        } catch (err) {}
//
//        return supportsPassiveOption;
//    };

}( window, document, document.documentElement ));


