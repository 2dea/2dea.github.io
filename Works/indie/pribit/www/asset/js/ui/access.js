/*! 
 **	2dea Access-DOM JS v2.8.3
 *	Author   :	2dea.Com Front-end UX.Div
 *	Create   :	2003-04-05 | 2dea; 2ndLAB@2dea.com
 *	Update   :	2019-04-16 | 2dea
 */


(function(window, document, navigator, $root, undefined) {
    "use strict";

//    $HTML.className = $HTML.className.replace(/(^|\s)_noscript(\s|$)/m, '$1$2');

    window.addEventListener('load', function(e) {
        document.body.className = document.body.className.replace(/_unload/m, '_onload');
    }, false);

//    var _XES = window._XES = window._XES || {};

//    var $ = {};

    var $ = {
            noop: function() {
                return ;
            },

            trim: function(str) {
                return str.replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
            },

            hasClass: function(cls, Node) {
                var prop = Node.className;  return new RegExp(' ' + cls + ' ').test( prop.replace(prop, ' ' + prop + ' ') );
            },

            removeClass: function(cls, Node, opt) {
                cls = this.trim(cls).split(' ');

                for( var i = 0; i < cls.length; i++ ) {
                    Node.className = this.trim( Node.className.replace(new RegExp('(^|\\s)' + cls[i] + (( opt !== true ) ? '' : '\\d*') + '(?!-|\\w)', "gm"), '$1') );
                }
            },

            addClass: function(cls, Node) {
                var param = Node || $root;

                cls = this.trim(cls).split(' ');

                for( var i = 0; i < cls.length; i++ ) {
                    if( !(this.hasClass(cls[i], param)) ) {
                        param.className += (( param.className ) && ' ') + cls[i];
                    }
                }
            },

            triggerEvent: function(bind, obj) {
                /* _BOM.debug('\273 ' + obj + '.trigger(\'' + bind + '\');', 0); */

                var ev = _VAR.newCustomEvent = ( obj.dispatchEvent ) ? document.createEvent("HTMLEvents") : ( obj.fireEvent ) && document.createEventObject();

                if( obj.dispatchEvent ) {
                    ev.initEvent(bind, true, true);
                    obj.dispatchEvent(ev);

                } else if( obj.fireEvent ) {
                    obj.fireEvent("on" + bind, ev);

                }

                ev.eventName = 'on' + bind.charAt(0).toUpperCase() + bind.slice(1);
            },

            removeEvent: function(obj, unbind, func, opt) {
                if( obj.removeEventListener ) {
                    obj.removeEventListener(unbind, func, (opt || false));

                } else if( obj.detachEvent ) {
                    obj.detachEvent("on" + unbind, obj[unbind + func]);
                    obj[unbind + func] = null;

                }

                /* _BOM.debug('\273 ' + obj + '.off("' + unbind + '", ' + func + ');', 0); */
            },

            addEvent: function(bind, obj, func, opt) {
                if( obj.addEventListener ) {
                    obj.addEventListener(bind, func, (opt || false));

                } else if( obj.attachEvent ) {
                    obj["e" + bind + func] = func;
                    obj[bind + func] = function() {
                        return obj["e" + bind + func]( window.event );
                    };

                    obj.attachEvent("on" + bind, obj[bind + func]);

                }
            },

            removeNode: function(Elem) {
                if( Elem ) Elem.parentNode.removeChild(Elem);
            },

            height: function(Elem, opt) {
                return ( opt !== true ) ? Elem.offsetHeight : Elem.clientHeight;
            },

            width: function(Elem, opt) {
                return ( opt !== true ) ? Elem.offsetWidth : Elem.clientWidth;
            },

            getStyle: function(Elem, prop) {
                if( !(window.getComputedStyle) ) window.getComputedStyle = function(Elem) { return Elem.currentStyle; };

                return window.getComputedStyle(Elem, null)[prop].replace(/(^|\s)([.0-9]*)pt/gm, function($0,$1,$2) { return $1 + $2 * 96/72 + 'px'; });
            },

            get: {
                agent: function(param) {
                    return param.test( navigator.userAgent.toLowerCase() );
                }
            }

    };

    var
        Browser = {
            webkit: "WebkitAppearance" in $root.style,
            moz: "MozAppearance" in $root.style,
            presto: $.get.agent( /Opera|OPR|Presto/i ),
            msie: $.get.agent( /MSIE|Trident/i )
        },

        WindowsMobile = $.get.agent( /Windows (Phone|CE)|IEMobile/i ),
        BlackBerry = $.get.agent( /BlackBerry|BB\d+|\bRIM\b/i ),
        iPhone = $.get.agent( /i(Phone|P[oa]d)/i ),
        Android = $.get.agent( /Android/i ),
        isMOS = Android || iPhone || BlackBerry || WindowsMobile,

        Device = {
            PC: /\b(?:(Win(?:dows|32|64))|(Mac(?:intosh|Intel| OS X)))\b/i.exec( navigator.platform || navigator.userAgent ),
            M: isMOS || $.get.agent( /LiMo|MeeGo|Symbian|webOS|Tizen|POLARIS|Zune|Opera (Mini|Mobi)|\bCrMo\/|Mobile/i )
        },

        iOSWV = iPhone && $.get.agent( /.+AppleWebKit(?!.*Safari)/i ),
        AndroidWV = Android && $.get.agent( / Gecko. Version\/\d\.\d Chrome\/[.0-9]*/i ),
        hasWV = $.get.agent( /\bwv\b|WebView|\w*App(?!le|Ver)/i ),
        WVName = /(my|2dea)?\w+App(?!l)\w*/.exec( navigator.userAgent ),
        //WVName = /.+\b((2dea)?.*WebView\w*)/.exec( navigator.userAgent ),
        isApp = hasWV || (AndroidWV || iOSWV),

        touchEvent = "ontouchstart" in window,
        touchPoint = navigator.maxTouchPoints || navigator.msMaxTouchPoints,
        isTouchable = $.get.agent( /Touch/i ) || touchEvent || touchPoint > 0,

        isDeeperScreen = !(Math.max(screen.width, screen.height) / Math.min(screen.width, screen.height) < 1.8),
        //isHandheld = ("orientation" in window || window.opera) && (isTouchable || isHiRes || M),
        //isHandheld = "orientation" in window || isTouchable || (isHiRes && Device.M),
        isHandheld = "orientation" in window || isTouchable,
        //isMobile = isHandheld && !(Device.PC) && _BOM.viewportWidth() < 980,
        //isMobile = isHandheld && (isMOS || !(Device.PC)),
        //isMobile = !($.get.agent( /\bx86/i )),
        isMobile = isHandheld && Device.M && !$.get.agent( /\bx86\b/i ),
        isTablet = $.get.agent( /Tablet|iPad|Nexus (7|10)/i );

    var Classes = [
            '_onscript',
            '_onpointer'
          , ( document.hasFocus() ) ? '' : '_deactivated'
          , ( isTouchable ) ? '_ontouch' : '_untouch'
        //  , ( isLowResolution ) ? '_vuLDPI' : ''	// Low DPI
          , ( isMobile && !(/(^\?|&)(?:(ref=)?mobile|view(port)?=desktop)\b/g.test( location.search )) ) ? '__M' : '__W'
          , ( isTablet ) ? '__T' : ''
          , ( isApp ) ? '__A ' + (( WVName ) ? '-' + WVName[0] : '') : ''
          , ( WindowsMobile ) ? '-WINCE' : ( BlackBerry ) ? '-RIM' : ( iPhone ) ? '-IOS' : ( Android ) ? '-AND'
          : ( Device.PC ) ? (( $.get.agent( /Windows NT 5\.1/i ) ) ? '-WIN -WINXP' : ( Device.PC[1] ) ? '-WIN' : ( Device.PC[2] ) ? '-MAC' : '') : ''
        //  , ( isMobile && isVistaVision ) ? '-UAR' : ''	// Ultra Aspect Ratio
          , ( isMobile && isDeeperScreen ) ? '-xcreen' : ''
          , ( Browser.webkit ) ? '-webkit' : ( Browser.moz ) ? '-moz' : ( Browser.presto ) ? '-opr' : ( Browser.msie ) ? '-ms' : ''
        ];

    $root.className = $.trim( $root.className.replace(/(^|\s)_noscript(\s|$)/m, '$1$2') + ' ' + Classes.join(' ') );

}( window, document, navigator, document.documentElement ));
