; (function(window, document, _HTML, undefined) {
    "use strict";

    var cssElem = document.getElementById('Global-CSS');
    var jsElem = document.getElementById('Plugin-JS');
    var cssPath = ( cssElem ) && cssElem.href.replace(/(.*)\/.+\.css($|\?.*$)/g, '$1\/');
    var jsPath = ( jsElem ) && jsElem.src.replace(/(.*)\/.*\/.+\.js($|\?.*$)/g, '$1\/');
    var docLang = ( _HTML.lang ) ? _HTML.lang : 'ko';

    function attachResource(src, opt) {
        var ext = src.replace(/.+\/.+\.(css|js)($|\?.*$)/g, '$1');
        var arrOpt = ( typeof opt === 'object' ) && Object.keys(opt);
        var _node_;

        if( ext === 'css' ) {
            _node_ = document.createElement('link');

            _node_.rel = 'stylesheet';
            _node_.type = 'text\/css';
            _node_.href = src;

        } else {
            _node_ = document.createElement('script');

            _node_.type = 'text\/javascript';

            if( ext === 'js' ) {
                _node_.src = src;

            } else {
                _node_.text = src;
            }
        }

        for( var i = 0; i < arrOpt.length; i++ ) {
            _node_.setAttribute(arrOpt[i], opt[arrOpt[i]]);
        }

        return document.getElementsByTagName('HEAD')[0].appendChild(_node_);
    }

    if( cssPath || jsPath ) {
        var arrRes = [
            jsPath + '.\/lib\/swiper.js',
            // jsPath + '.\/lib\/hammer.js',
            // jsPath + '.\/lib\/jquery\/jquery.hammer.js',
        ];

        if( !(window.CSS && CSS.supports('top', 'var(--var)') || window.cssVars) ) {

            if( !/^https?:$/i.test( location.protocol ) ) {
                alert( 'Access to XMLHttpRequest at \'' + location.pathname + '\' from origin \'null\' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.' );

                window.addEventListener('load', function(evt) {
                    document.body.className += ' js_cssVars-error';
                }, false);

            } else {
                attachResource(jsPath + '.\/lib\/ponyfill-cssvars.js', {});

                window.addEventListener('load', function(evt) {
                    attachResource('cssVars({ onComplete: function(cssText, styleElms, cssVariables, benchmark) { document.body.className += \' js_cssVars-complete\', onExt.page && onExt.dom.resize(); } });', { "defer": "defer" });
                }, false);
            }
        }

        for( var i = 0; i < arrRes.length; i++ ) {
            attachResource(arrRes[i]);
        }

    }

}( window, document, document.documentElement ));
