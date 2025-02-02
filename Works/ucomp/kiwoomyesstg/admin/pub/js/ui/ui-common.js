    // var header_sysType = 'APP';

    ; (function(window, document, $HTML, undefined) {
        "use strict";

        /* window.onerror = function(message, url, line, col, error) {
            alert( `${message}\n at ${line}:${col} of ${url}` );

            return false;
        };

        window.addEventListener('error', function(evt) {
            var msg = evt.message//.toLowerCase();
            // var url = evt.filename.replace(/(.*)\/(.+\..+($|\?.*$))/g, '$2');

            // if( msg.indexOf('script error') > -1 ) {
            // if( /script error/i.test( msg ) ) {
            if( /script error/i.test( msg ) ) {
                alert( 'JavaScript Error: See browser console for detail.' );

            } else {
                var stack = evt.error.stack;
                 var message = stack.replace(/(.*)(file|https?|ftp)(:\/\/.+\/)(.+\..+:\d+)/g, '$1$4');

                alert( message );
            }

            return false;

        }, { once: true }); */

        /* window.addEventListener('error', function(evt) {
            var error = evt.error

            if( error ) {
                var stack = error.stack || evt.message;
                var message = stack.replace(/(.*)(https?)(:\/\/.+\/)(.+\..+:\d+)/g, '$1$4');

                alert( message );

            } else {
                alert( 'JavaScript Error: See browser console for detail.' );
            }

            return false;

        }, { once: true }); */


        var attachDOM = window.attachDOM = window.attachDOM || {};


        attachDOM.isPassive = function() {
            var supportsPassiveOption = false;

            try {
                addEventListener('test', null, Object.defineProperty({}, "passive", {
                    get: function() {
                        supportsPassiveOption = true;
                    }
                }));
            } catch (err) {}

            return supportsPassiveOption;
        };

        attachDOM.isApp = function() {
            var _var_ = window.header_sysType;

            if( _var_ ) {
                if( /\bAPP\b/.test( _var_ ) ) {
                    return true;

                } else {
                    return false;
                }
            }
        };

        attachDOM.isAppQuery = function() {
            var _class = $HTML.className;

            if( attachDOM.isApp() ) {
                /_inApp/g.test( _class ) || ( $HTML.className = _class.replace(/(^|\s)_inWeb(\s|$)/m, '$1$2') + ' _inApp' );

            } else {
                /_inWeb/g.test( _class ) || ( $HTML.className = _class.replace(/(^|\s)_inApp(\s|$)/m, '$1$2') + ' _inWeb' );
            }
        };


        attachDOM.isAppQuery();

    }( window, document, document.documentElement ));


