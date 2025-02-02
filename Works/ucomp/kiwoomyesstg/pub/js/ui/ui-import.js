; (function(window, document, _HTML, undefined) {
    "use strict";

    var cssElem = document.getElementById('Global-CSS');
    // var jsElem = document.getElementById('Plugin-JS');
    var jsElem = document.getElementById('Global-JS');
    // var cssPath = document.getElementById('Global-CSS').href.replace(/\/.*\.css($|\?.*$)/, '\/');
    // var jsPath = document.getElementById('Global-JS').src.replace(/\/.*\.js($|\?.*$)/, '\/');
    var cssPath = ( cssElem ) && cssElem.href.replace(/(.*)\/.+\.css($|\?.*$)/g, '$1\/');
    // var jsPath = ( document.getElementById('Plugins-JS') ) && document.getElementById('Plugins-JS').src.replace(/(.*)\/.*\/.+\.js($|\?.*$)/g, '$1\/');
    var jsPath = ( jsElem ) && jsElem.src.replace(/(.*)\/.*\/.+\.js($|\?.*$)/g, '$1\/');
    var docLang = ( _HTML.lang ) ? _HTML.lang : 'ko';

    // console.log( jsPath );
    // console.log( cssPath );
    // console.log( docLang );

    // console.log( document.head.lastChild.src );
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
            /* _node_.src = src;

            if( text ) {
                _node_.text = text;

                new Function( _node_.text )();
            } */

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

    /* var onExt = window.onExt = window.onExt || {};

    onExt.fn = onExt.fn || {};
    onExt.page = onExt.page || {};

    onExt.fn.attachResource = attachResource;
    onExt.page.jsPath = jsPath; */


//    ( window.CSS && CSS.supports('top', 'var(--var)') || window.cssVars ) || document.write('\n<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"><\/script>\n<script type="text/javascript">cssVars();<\/script>');
//
//    if( jsPath ) {
//        // document.write('\n<link rel="stylesheet" type="text\/css" href="' + cssPath + '.\/plugins\/swiper.css" \/>');
//        document.write('\n<script type="text\/javascript" src="' + jsPath + '.\/lib\/swiper.js">\<\/script>');
//        // document.write('\n<script type="text\/javascript" src="' + jsPath + '.\/lib\/jquery\/jquery.abdatepicker.locale-' + docLang + '.js">\<\/script>');
//        // document.write('\n<script type="text\/javascript" src="' + jsPath + '.\/lib\/jquery\/jquery.abdatepicker.js">\<\/script>');
//        // document.write('\n<script type="text\/javascript" src="' + jsPath + '.\/lib\/jquery\/jquery.counterup.js">\<\/script>');
//        document.write('\n<script type="text\/javascript" src="' + jsPath + '.\/lib\/jquery\/jquery.touchSwipe.js">\<\/script>');
//
//        /* var test1 = document.createElement('script');
//        test1.src = jsPath + '.\/lib\/swiper.js';
//        document.getElementsByTagName('HEAD')[0].insertBefore(test1, null);
//
//        var test2 = document.createElement('script');
//        test2.src = jsPath + '.\/lib\/jquery\/jquery.touchSwipe.js';
//        document.getElementsByTagName('HEAD')[0].insertBefore(test2, null); */
//    }

    if( cssPath || jsPath ) {
        // attachResource(jsPath + '.\/test.js', { "async": "async", "data-test": "s10000" });

        var arrRes = [
            jsPath + '.\/lib\/swiper.js',
            // jsPath + '.\/lib\/hammer.js',
            // jsPath + '.\/lib\/jquery\/jquery.hammer.js',
            jsPath + '.\/lib\/jquery\/jquery.touchSwipe.js'
        ];

        if( !(window.CSS && CSS.supports('top', 'var(--var)') || window.cssVars) ) {
            // document.write('\n<script type="text/javascript" src="' + jsPath + '.\/lib\/ponyfill-cssvars.js"><\/script>\n<script type="text/javascript">cssVars();<\/script>');
            // attachResource(jsPath + '.\/lib\/ponyfill-cssvars.js', { "onload": "cssVars();" });

            attachResource(jsPath + '.\/lib\/ponyfill-cssvars.js', {});

            window.addEventListener('load', function(evt) {
                attachResource('cssVars();', { "defer": "defer" });
            }, false);
        }

        for( var i = 0; i < arrRes.length; i++ ) {
            attachResource(arrRes[i]);
        }

        // attachResource(jsPath + '.\/lib\/hammer.js', { "onload": "onExt.fn.attachResource(onExt.page.jsPath + '.\/lib\/jquery\/jquery.hammer.js');" });

    }

}( window, document, document.documentElement ));

//jQuery(function($) {
//    var __PATH__ = location.pathname;
//    var htmPath = __PATH__.replace(/(.*)\/.*\/.+\.html?($|\?.*$)/g, '$1\/');
//
//    if( $('.dom-nav >*').length < 2 ) {
//        $('.dom-nav')
//            .load(htmPath + '.\/uti\/uti_app_01_0001.html .dom-nav', function() {
//                $(this).children().unwrap();
//            })
//        ;
//    }
//
//});
