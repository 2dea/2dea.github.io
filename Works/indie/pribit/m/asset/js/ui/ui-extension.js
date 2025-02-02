/*! onExt:ONE-Extension JS | (c) 2dea | ego@2dea.com
 **	2dea Extra-Templet JS (powered by jQuery)
 *	Author   :	PRIBIT Front-end UX.Div
 *	Create   :	2009-12-18 | 2dea; ego@2dea.com
 *	Update   :	2019-12-14 | 2dea
 */


(function($, window, document, location, undefined) {
    "use strict";

    var onExt = window.onExt = window.onExt || {};

    if( onExt.test ) {
        alert( 'Load Notification: The object \"window.onExt\" is already defined.' );

        return false;
    }

    onExt.get = onExt.get || {};
    //onExt.pre = onExt.pre || {};
    onExt.fx = onExt.fx || {};
    onExt.fn = onExt.fn || {};
    onExt.ui = onExt.ui || {};
    onExt.page = onExt.page || {};
    onExt.test = onExt.test || {};


    /* 
    onExt.fn.$_ex = {
        tag: '',

        sel: '',

        msg: {
            "e1": function(args) {
                return alert( '' );
            }
        },

        ext: {},

        create: function() {
            var tag = this.tag;

            
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        attach: function() {
            
        },

        callback: function() {
            
        },

        init: function() {
            this.callback();
            this.attach();
            this.refresh();
        }
    };
     */


    /** Get */
    onExt.get.id = function(elem) {
        return document.getElementById(( /^#/.test( elem ) ) ? elem.slice(1) : elem);
    };

    onExt.get.attrs = function(node) {
        var attrs = node.attributes,
            _attr;

        try {
            _attr = Array.prototype.slice.call(attrs);

        } catch(err) {
            _attr = [];

            for( var i = 0; i < attrs.length; i++ ) {
                _attr.push(attrs[i]);
            }
        }

        return _attr;
    };

    onExt.get.style = function(prop, elem) {
        // if( typeof elem === 'object' ) {
            if( !window.getComputedStyle ) window.getComputedStyle = function(elem) { return elem.currentStyle; };

            return window.getComputedStyle(elem, null)[prop].replace(/(^|\s)([.0-9]*)pt/gm, function($0,$1,$2) { return $1 + $2 * 96/72 + 'px'; });
        // }
    };

    /* onExt.get.href = function(elem) {
        // return $(elem).attr('href'); // $_href
        return elem.getAttribute('href');
    }; */

    onExt.get.interval = function(elem) {
        var duration;

        function Prop(prop, spec, vendor) {
            var sep = '-';

            spec = ( spec ) ? sep + spec : '';
            vendor = ( vendor ) ? sep + vendor + sep : '';

            return vendor + prop + spec;
        }
        // console.log( Prop('transition', 'duration', 'webkit') );

        /* function Short(prop, vendor) {
            prop = ( prop === 1 ) ? 'transition' : ( prop === 2 ) ? 'animation' : '';
            vendor = ( vendor === true ) ? 'webkit' : '';

            return Prop(prop, 'duration', vendor);
        } */
        // console.log( Short(2, !0) );

        /* function Style(prop) {
            return onExt.get.style(prop, elem);
        } */

        function Int(val) {
            return ( /ms$/g.test(val) ) ? parseFloat(val) : parseFloat(val) * 1e3;
        }

        /* function Cond(prop, vendor) {
            prop = ( prop === 1 ) ? 'transition' : ( prop === 2 ) ? 'animation' : '';
            vendor = ( vendor === true ) ? 'webkit' : '';

            return Int( Style( Prop(prop, 'duration', vendor) ) );
        } */
        // console.log( Cond(1, !0) );

        function Style(prop, vendor) {
            prop = ( prop === 1 ) ? 'animation' : ( prop === 2 ) ? 'transition' : '';
            vendor = ( vendor === true ) ? 'webkit' : '';

            return Int( onExt.get.style(Prop(prop, 'duration', vendor), elem) );
        }

        if( Style(1) > 0 ) {
            duration = Style(1);

        } else if( Style(2) > 0 ) {
            duration = Style(2);

        } else if( Style(1, !0) > 0 ) {
            duration = Style(1, !0);

        } else if( Style(2, !0) > 0 ) {
            duration = Style(2, !0);
        }

        return duration || 0;
    };

    onExt.get.selector = function(str, pre) {
        if( pre ) {
            return pre + str;

        } else {
            return '[' + str + ']';
        }
    };

    onExt.get.pushArraySel = function(arr, pre, suf) {
        var sep = ', ';

        arr = (( typeof arr === 'string' ) ? onExt.pre[arr] : arr).join(sep).slice(2);
        pre = pre || '', suf = suf || '';

        return pre + arr.split(sep).join(suf + sep + pre) + suf;
    };

    onExt.get.byteLength = function(str, opt, bytes, i, code) {
        if( !!String.prototype.charCodeAt ) {
            if( opt !== 'utf' ) {
                for( bytes = i = 0; code = str.charCodeAt(i++); bytes += ( code == 10 ) ? 2 : (( code >> 7 ) ? 2 : 1) );

                return bytes;

            } else {
                for( bytes = i = 0; code = str.charCodeAt(i++); bytes += code >> 11 ? 3 : code >> 7 ? 2 : 1 );

                return bytes;
            }

        } else {
            return str.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length;
        }
    };

    onExt.get.toLocaleString = function(val) {
        if( typeof val === 'number' && !!Number.prototype.toLocaleString ) {
            return val.toLocaleString();

        } else {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    };

    onExt.get.$_checkDuplicateId = function(elem, cond) {
        if( /^#/.test( elem ) ) {
            var id = elem.slice(1);

            if( cond === false ) {
                if( $('[id="' + id + '"]').length > 1 ) {
                    alert( 'Interaction Error: Invalid duplicate IDs \"' + id + '\".' );
                }

            } else {
                return $('[id="' + id + '"]').length > 1;
            }
        }
    };


    /** Javascript Core */
    onExt.jsc = {};


    /** Define Document Object */
    onExt.dom = {
        "focus": function(target, delay) {
            if( target /* && !top.length */ ) {
                if( onExt.bom.isFrame() ) {
                    return false;
                }

                if( target.tabIndex === '-1' ) {
                    return false;
                }

                if( /\b(a|area|input|button|select|textarea)\b/ig.test( target.tagName ) ) {
                    target.blur();
                    target.focus();

                } else {
                    if( !target.getAttribute('tabindex') ) {
                        target.tabIndex = '-1';
                        target.style.outline = '0 none';

                        setTimeout(function() {
                            target.removeAttribute('tabindex');
                            target.style.outline = '';
                            target.blur();
                        }, delay || 10);
                    }

                    target.blur();
                    target.focus();
                }

            } /* else {
                alert('Target is not defined');
            } */
        },

        "resize": function(opt) {
            if( opt === true ) {
                $(window).trigger('resize');

            } else {
                $(window).triggerHandler('resize');
            }
        },

        /* "onScroll": function(event) {
            var target = ( event.target === document ) ? event.target.documentElement : event.target;

            // console.log( target.className );
        }, */

        "onKey": function(event) {
            return event.keyCode || event.which;
        },

        "onWheel": ( "onwheel" in document ) ? 'wheel' : 'mousewheel',

        "_": {
            divbody: '.div-contents',

            root: document.documentElement
        }
    };


    /** Get BOM Data */
    onExt.bom = {
        "isFrame": function(id) {
            var __PARENT__ = parent.frames[0];

            if( id ) {
                return __PARENT__ && __PARENT__.name === id;

            } else {
                return __PARENT__;
            }
        },

        "hasEvents": function(elem, evts) {
            var evts = evts.split('.');
            var events = $._data(elem, 'events')[evts[0]];
            var ns = evts[1];
            var value = false;

            if( events ) {
                for( var i = 0; i < events.length; i++ ) {
                    if( !value ) {
                        value = ( ns ) ? events[i].namespace === ns : !!events;

                    } else {
                        return value;
                    }
                }
            }

            return value;
        },

        "scrollY": function() {
            return window.scrollY || window.pageYOffset;
        },

        "resolution": 96 * window.devicePixelRatio || 96 * (Math.sqrt(screen.logicalXDPI * screen.logicalYDPI) / 96) || 96,

        "zoomLevel": Math.round((window.devicePixelRatio || 1) * 100),

        "scrollbarWidth": 17,

        "resopndBreakpoint": parseFloat( window.getComputedStyle( onExt.dom._.root ).getPropertyValue('--breakpoint-lg') || 992 ),

        "locationPath": location.pathname,

        "locationHash": location.hash,

        "hashHistory": undefined,

        "afterScroll": undefined,

        "afterResize": undefined
    };


    /** Prepare */
    onExt.pre = {
        "_": {
            imp: ' !important'
        },

        // "hash": '[href*="#"]:not([href="#"]), [data-href^="#"])',

        "forms": ['', 'input', 'button', 'select', 'textarea'],

        "inputs": ['', 'input[type="text"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]', 'input[type="email"]', 'input[type="password"]', 'input[type="number"]', 'textarea', '[role~="textbox"]', '[contenteditable="true"]'],

        "checks": ['', 'input[type="checkbox"]', 'input[type="radio"]'],

        "focusable": ['', 'a', 'iframe', 'embed', 'object', 'video', 'audio', 'area', 'input', 'button', 'select', 'textarea', '[tabindex]:not([tabindex="-1"])'],

        "clickable": ['', 'a', 'area', 'label', 'input', 'button', 'select', 'textarea'],

        "scrollable": ['', 'html', '.o-layer ' + onExt.dom._.divbody, '.dom-nav .nav-total >* >.label +*'],

        // "_root": document.documentElement,

        "$": {
            popbody: $(0),

            root: $( onExt.dom._.root )
        }
    };


    /** Debug */
    onExt.debug = {
        "log": function(str, pre, pos) {
            
        },

        "del": function(sec) {
            
        },

        "test": function(elem) {
            
        },

        "speed": function(elem) {
            
        },

        "input": function() {
            var _input = onExt.get.id('Console-Input');

            _input.parentNode.addEventListener('submit', function(evt) {
                var command = _input.value,
                    Exec = new Function( command );
                    
                ( evt.preventDefault ) ? evt.preventDefault() : (evt.returnValue = false);
                
                Exec( _input.value = '' );
                
                return false;

            }, false);
        }
    };


    /** Effects */
    onExt.fx = {
        "debounce": function(callback, limit, immediate) {
            var timeout;

            return function() {
                var context = this, args = arguments;

                clearTimeout(timeout);

                timeout = setTimeout(function() {
                    timeout = null;

                    if( !immediate ) {
                        callback.apply(context, args);
                    }

                }, limit || 150);

                if( immediate && !timeout ) {
                    callback.apply(context, args);
                }
            };
        },

        "throttle": function(callback, limit) {
            var timeout = false;

            return function() {
                if( !timeout ) {
                    callback.call();

                    timeout = true;

                    setTimeout(function() {
                        timeout = false;

                    }, limit || 75);
                }
            };
        },

//        "rAF": function(callback, throttle) {
//            var timeout, context, args;
//            var exec = function() {
//                timeout = false;
//
//                callback.apply(context, args);
//            };
//
//            return function() {
//                context = this;
//                args = arguments;
//
//                if( timeout && throttle ) {
//                    return;
//                }
//
//                timeout = true;
//
//                window.requestAnimationFrame(exec);
//            };
//        },

        "reqFrame": function(callback) {
            var timeout = null;

            return function() {
                if( timeout ) {
                    window.cancelAnimationFrame(timeout);
                }

                timeout = window.requestAnimationFrame(function() {
                    //console.log(callback);
                    callback();
                });
            };
        }
    };

    onExt.fx.typoNumCount = function(elem, number) {
        this.count = 0; this.diff = 0;
        this.number = parseInt(number);
        this.elem = document.getElementById(elem);
        this.timer = null;
        this.counter();
    };

    onExt.fx.typoNumCount.prototype.counter = function() {
        var self = this;
        this.diff = this.number - this.count;

        if( this.diff > 0 ) {
            self.count += Math.ceil( this.diff / 5 );
        }

        this.elem.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if( this.count < this.number ) {
            this.timer = setTimeout(function() { self.counter(); }, 20);

        } else {
            clearTimeout( this.timer );
        }
    };


    /** BOM Functions */
    onExt.fn.trim = function(str) {
        return str.replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
    };

    onExt.fn.trimStyleRules = function(sheet) {
        return sheet.replace(/(})/gm, '$1\n').replace(/\n($)/g, '$1');
    };

    onExt.fn.hasAttr = function(elem, attr, value) {
        var prop = elem.getAttribute(attr);

        if( prop ) {
            return new RegExp(' ' + value + ' ').test( prop.replace(prop, ' ' + prop + ' ') );
        }
    };

    /* onExt.fn.removeAttr: function(elem, attr, value, opt) {
        var prop = elem.getAttribute(attr);

        value = onExt.fn.trim(value).split(' ');

        for( var i = 0; i < value.length; i++ ) {
            elem.className = onExt.fn.trim( elem.className.replace(new RegExp('(^|\\s)' + value[i] + (( opt !== true ) ? '' : '\\d*') + '(?!-|\\w)', "gm"), '$1') );
        }
    };

    onExt.fn.addAttr: function(elem, attr, value) {
        var prop = elem.getAttribute(attr);

        value = onExt.fn.trim(value).split(' ');

        for( var i = 0; i < value.length; i++ ) {
            if( !(onExt.fn.hasAttr(value[i], elem)) ) {
                elem.className += (( elem.className ) && ' ') + value[i];
            }
        }
    }; */

    onExt.fn.attachNode = function(text, elem, pos) {
        var node = text.split('<').slice(1, -1);
        var isOnly = node.length < 2;

        if( isOnly ) {
            if( node.length < 1 ) {
                node = text.split('<').slice(1);

            } else {
                node = node.join().split('>');
            }
        }

        var wrap = node.shift().trim().replace(/\s*\/?>$/, '');
        var attrs = wrap.replace(/\s+(?=([^"]*"[^"]*")*[^"]*$)/g, '`^`').split('`^`');
        var tagName = attrs.shift();
        var isLink = /\b(link|script)\b/ig.test( tagName );

        if( !isLink && elem && !!Element.prototype.insertAdjacentHTML ) {
            return elem.insertAdjacentHTML(pos || 'beforeend', text);

        } else {
            var _wrap_ = document.createElement(tagName);

            for( var i = 0; i < attrs.length; i++ ) {
                _wrap_.setAttribute(attrs[i].split('=')[0], attrs[i].split('=')[1].trim().slice(1, -1));
            }

            _wrap_.innerHTML = (( isOnly ) ? '' : '<') + node.join('<');
            // _wrap_.insertAdjacentHTML('beforeend', '<' + node.join('<'));
            // _wrap_.className += ' jsui_createnode';

            if( tagName === 'link' ) {
                document.getElementsByTagName('HEAD')[0].appendChild(_wrap_);

            } else {
                document.body.appendChild(_wrap_);
            }

            return _wrap_;
        }




        /* var id = 'tempResolutions',
            append = '<div id="' + id + '" style="font-size:9pt; width:1in; overflow-y:scroll; position:absolute; top:-2em;">&nbsp;<\/div>\n';

        if( !(getId(id)) ) document.body.innerHTML += append;

        onExt.bom.resolution = onExt.bom.resolution / 96 * getId(id).offsetWidth,
        onExt.bom.scrollbarWidth = getId(id).offsetWidth - getId(id).clientWidth;

        if( getId(id) ) document.body.removeChild(getId(id)); */

    };

    onExt.fn.attachStyle = function(sheet, id, replace) {
        var getId = onExt.get.id;
        var isReplace = replace === true;
        var _root = onExt.dom._.root;
        var _style_ = document.createElement('style');

        id = id || 'varInterStyle';
        sheet = ( ( getId(id) && !isReplace ) ? '/* [+] */\n' : '\n' ) + sheet + '\n';

        if( !getId(id) ) {
            _style_.type = 'text/css';
            _style_.id = id;
            _style_.className = 'jsui_stylesheet';

            document.getElementsByTagName('HEAD')[0].appendChild(_style_);
        }

        var node = getId(id);

        if( _root.textContent ) {
            if( isReplace ) {
                node.textContent = sheet;

            } else {
                node.textContent += sheet;
            }

        } else {
            if( isReplace ) {
                node.styleSheet.cssText = sheet;

            } else {
                node.styleSheet.cssText += sheet;
            }
        }

        return node;
    };

    onExt.fn.removeHash = function() {
        if( "pushState" in history ) {
            history.pushState('', document.title, location.pathname + location.search);

            $(window).triggerHandler('hashchange');
        }
    };

    onExt.fn.$_hashChange = function() {
        var $root = onExt.pre.$.root;
        var __HASH__ = location.hash;
//        var target = toTarget(__HASH__);
//        var memory = toTarget( onExt.bom.hashHistory );
//
//        function toTarget(str) {
//            if( /^#/.test(str) ) {
//                return 'js_hash-' + str.slice(1);
//            }
//        }
//
//        $root
//            .addClass(function() {
//                $(this)
//                    .removeClass(memory)
//                ;
//
//                onExt.bom.hashHistory = __HASH__;
//
//                return target;
//            })
//        ;

        $root
            .attr({
                'data-js-hash': function() {
                    onExt.bom.hashHistory = __HASH__;

                    return __HASH__;
                }
            })
        ;
    };

    onExt.fn.$_hashChange.prototype = {
        "back": function() {
            return history.go(-1);
//        },
//
//        "reset": function(target) {
//            var hash = location.hash;
//            var back = this.back;
//
//            function removeHash() {
//                /* if( !top.length ) {
//                    if( document.referrer ) {
//                        if( history.length > 1 ) {
//                            back();
//
//                        }
//                    } else {
//                        if( history.length < 2 ) {
//                            onExt.fn.removeHash();
//
//                        } else {
//                            back();
//                        }
//                    }
//                } */
//
//            }
//
//            if( hash ) {
//                if( target ) {
//                    if( target === hash ) {
//                        removeHash();
//                    }
//
//                } else {
//                    removeHash();
//                }
//            }
        }
    };

    onExt.fn.$_replaceTagName = function(tagName, elem) {
        if( elem ) {
            elem = ( elem.length ) ? elem[0] : elem;

            var _attr = onExt.get.attrs(elem);
            var $nodes = $(elem),
                $frag = $('<' + tagName + ' />');

            $.map(_attr, function(val) {
                $frag
                    .attr(val.name, val.value)
                ;
            });

            $nodes
                .replaceWith( $frag.append( $nodes.contents() ) )
            ;
        }
    };


    /** DOM Events (ready) */
    onExt.fn.$_fireActiveEvents = {
        callback: function() {
            $(document)
                .on('touchstart.all.fireActiveEvents', function(evt) {
                    $.noop();
                })
            ;
        }
    };

    onExt.fn.$_fireHashChange = {
        callback: function() {
            $(document)
                .on('click.anchors.fireHashChange', '[href^="#"]:not([href="#"])', function(evt) {
                    var bind = this, $hash = $(bind);
                    var href = $hash.attr('href');
                    var hash = location.hash;

                    if( href === hash ) {
                        if( "pushState" in history ) {
                            // history.pushState({uxKeyUponHash: hash}, null);
                            history.pushState({uponHash: hash}, null);
                        }

                        $(window).trigger('popstate');
                    }
                })
            ;
        }
    };

    /* onExt.fn.$_fireLabelClick = {
        callback: function() {
            $(document)
                .on('click.labels.iOSFixed', 'label', function(evt) {
                    $.noop();
                })
            ;
        }
    }; */

    onExt.fn.$_focusin = {
        callback: function() {
            $(document)
                .on('focusout.forms.focusing', '.FN_focusin', function(evt) {
                    var bind = this, $form = $(bind);

                    $form.removeClass('js_focusin');
                })
                .on('focusin.forms.focusing', '.FN_focusin', function(evt) {
                    var bind = this, $form = $(bind);

                    $form/* .removeClass('is-error') */.addClass('js_focusin');
                })
            ;
        }
    };

    onExt.fn.$_keypressEnter = {
        callback: function() {
            $(document)
                .on('keyup.buttons.keypress', '.FN_keypress', function(evt) {
                    if( /\b32\b/.test( onExt.dom.onKey(evt) ) ) {
                        evt.preventDefault();

                        $(this).trigger('pointerup').triggerHandler('mouseup');
                    }
                })
                .on('keydown.buttons.keypress', '.FN_keypress', function(evt) {
                    if( /\b(13|32)\b/.test( onExt.dom.onKey(evt) ) ) {
                        evt.preventDefault();

                        if( /\b13\b/.test( onExt.dom.onKey(evt) ) ) {
                            $(this).trigger('pointerup').triggerHandler('mouseup');
                        }
                    }
                })
            ;
        }
    };

    /* onExt.fn.$_inputDateChange = {
        callback: function() {
            $(document)
                .on('blur.dates.inputDateChange', 'input[type="date"]', function(evt) {
                    // var bind = this, $date = $(bind);

                    onExt.fn.$_detectHeight.orient();
                })
            ;
        }
    }; */

    onExt.fn.$_radioPreventArrowKey = {
        callback: function() {
            $(document)
                .on('keydown.checks.radioPreventArrowKey', 'input[type="radio"]:not(.FN_prevent)', function(evt) {
                    var bind = this, $radio = $(bind);
                    var name = bind.name, $radios = $('input[type="radio"][name="' + name + '"]');
                    var size = $radios.length - 1;
                    var index = $radios.index(bind);

                    function Exec(idx) {
                        if( $radios.eq(idx).length ) {
                            $radios
                                .eq(idx)
                                    .prop('checked', true)
                                    .get(0).focus()
                            ;
                        }
                    }

                    if( /\b(37|38|39|40)\b/.test( onExt.dom.onKey(evt) ) ) {
                        evt.preventDefault();

                        if( /\b(37|38)\b/.test( onExt.dom.onKey(evt) ) ) {
                            Exec(--index);

                        } else if( /\b(39|40)\b/.test( onExt.dom.onKey(evt) ) ) {
                            if( index === size ) {
                                Exec(0);

                            } else {
                                Exec(++index);
                            }
                        }
                    }
                })
            ;
        }
    };

    onExt.fn.$_actChecks = {
        callback: function() {
            $(document)
                .on('mouseup.checks.actChecks', '[role~="checkbox"]:not(.FN_prevent), [role~="radio"]:not(.FN_prevent)', function(evt) {
                    var bind = this, $checks = $(bind);
                    var _radio = '[role~="radio"]';

                    if( $checks.is(_radio) ) {
                        $checks
                            .attr('aria-checked', true)
                            .closest('[role~="radiogroup"]')
                                .find(_radio)
                                    .not(bind)
                                        .attr('aria-checked', false)
                                        .end()
                                    .end()
                                .end()
                            [0].focus()
                        ;

                    } else {
                        /* switch( $checks.attr('aria-checked') ) {
                            case 'true': {
                                $checks.attr('aria-checked', false);
                            } break;

                            case 'false': {
                                $checks.attr('aria-checked', true);
                            } break;
                        } */

                        if( $checks.attr('aria-checked') === 'true' ) {
                            $checks.attr('aria-checked', false);

                        } else {
                            $checks.attr('aria-checked', true);
                        }
                    }
                })
                .on('keydown.checks.actChecks', '[role~="radio"]:not(.FN_prevent)', function(evt) {
                    var bind = this, $radio = $(bind);
                    var $group = $radio.closest('[role~="radiogroup"]'), $radios = $group.find('[role~="radio"]');
                    var size = $radios.length - 1;
                    var index = $radios.index(bind);

                    function Exec(idx) {
                        if( $radios.eq(idx).length ) {
                            $radios
                                .eq(idx)
                                    .trigger('mouseup.checks.actChecks')
                                    .trigger('click')
                            ;
                        }
                    }

                    if( /\b(37|38|39|40)\b/.test( onExt.dom.onKey(evt) ) ) {
                        evt.preventDefault();

                        if( /\b(37|38)\b/.test( onExt.dom.onKey(evt) ) ) {
                            Exec(--index);

                        } else if( /\b(39|40)\b/.test( onExt.dom.onKey(evt) ) ) {
                            if( index === size ) {
                                Exec(0);

                            } else {
                                Exec(++index);
                            }
                        }
                    }

                    if( $radio.is('[role~="tab"]') && /\b13\b/.test( onExt.dom.onKey(evt) ) ) {
                        evt.preventDefault();

                        $radio.trigger('mouseup.checks.actChecks');
                    }
                })
                .on('keyup.checks.actChecks', '[role~="checkbox"]:not(.FN_prevent), [role~="radio"]:not(.FN_prevent)', function(evt) {
                    if( /\b32\b/.test( onExt.dom.onKey(evt) ) ) {
                        evt.preventDefault();

                        $(this).trigger('mouseup.checks.actChecks').trigger('click');
                    }
                })
            ;
        }
    };

    onExt.fn.$_actRadio = {
        callback: function() {
            $(document)
                .on('click.checks.actRadio', '.FN_actRadio', function(evt) {
                    var bind = this;
                    var $checks = $('input[type="checkbox"][name="' + bind.name + '"]');

                    $checks
                        .not(bind)
                            .prop('checked', false)
                    ;
                })
            ;
        }
    };

    onExt.fn.$_focusTrap = {
        callback: function() {
            /* if( hasModal ) {
            } */

            /* $(document)
                //.on('focusout.focusables._focusTrap', '.FN_focusTrap.js_focusTrap-loaded *', function(evt) {
                //.on('keydown.focusables._focusTrap', '[aria-modal="true"] *, [data-fn~="focusTrap"] *', function(evt) {
                .on('keydown.focusables.focusTrap', '[aria-modal="true"], [aria-modal="true"] :focus, .FN_focusTrap, .FN_focusTrap :focus', function(evt) {
                    
                })
            ; */

            /* var _sel = [
                onExt.get.pushArraySel(onExt.pre.focusable, '[aria-modal="true"] '),
                onExt.get.pushArraySel(onExt.pre.focusable, '.FN_focusTrap ')
            ];

            console.log( _sel.join() ); */

            $(document)
                .on('keydown.focusables.focusTrap', '[aria-modal="true"], .FN_focusTrap', function(evt) {
                    var bind = this, $wrap = $(bind);
                    var _focus = onExt.get.pushArraySel('focusable');
                    var $focus = $(evt.target);
                    var $first = $wrap.find(_focus).not(':hidden').first();
                    var $last = $wrap.find(_focus).not(':hidden').last();
                    var isFocusable = $wrap.is('[tabindex]:not([tabindex="-1"])');

                    if( onExt.dom.onKey(evt) === 9 ) {
                        if( !evt.shiftKey && $focus.is( $last[0] ) ) {
                            evt.preventDefault();

                            onExt.dom.focus( bind );

                            if( !isFocusable ) {
                                $first[0].focus();
                            }

                        } else if( evt.shiftKey && $focus.is( $first[0] ) ) {
                            evt.preventDefault();

                            onExt.dom.focus( bind );

                            if( !isFocusable ) {
                                $last[0].focus();
                            }

                        } else if( evt.shiftKey && $focus.is( bind ) ) {
                            evt.preventDefault();

                            $last[0].focus();
                        }
                    }
                })
            ;

        }
    };


    /** DOM Functions (ready) */
    onExt.ui.$_scrollableArea = {
        tag: 'scrollableArea',

        ext: {
            "cn": 'js_scrollable'
        },

        create: function() {
            var cnAble = this.ext.cn;
            var $scroll = $( onExt.get.pushArraySel('scrollable') );

            $scroll.addClass(cnAble);
        },

        refresh: function() {
            var cnAble = this.ext.cn;
            var $popbody = onExt.pre.$.popbody;

            if( $popbody.length ) {
                var $popup = $popbody.closest('.o-layer');

                $popup.find(onExt.dom._.divbody).addClass(cnAble);

            } else {
                this.create();
            }
        },

        init: function() {
            this.refresh();
        }
    };

    onExt.ui.$_checkValue = {
        tag: 'checkValue',

        sel: onExt.get.pushArraySel('inputs'),

        ext: {},

        create: function() {
            var tag = this.tag;
            var _input = this.sel;

            $(_input)
                .trigger('input.inputs.' + tag)
            ;
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            var tag = this.tag;
            var _input = this.sel;

            $(document)
                .on('input.inputs.' + tag, _input, function(evt) {
                    var bind = this, $input = $(bind);
                    var cnNull = 'js_' + tag + '-null';

                    if( $input.val() === '' ) {
                        $input
                            .addClass(cnNull)
                        ;
                    } else {
                        $input
                            .removeClass(cnNull)
                        ;
                    }
                })
            ;
        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };

    onExt.ui.$_modifyButtonText = {
        tag: 'placeholder',

        ext: {},

        create: function() {
            var tag = this.tag;
            var cnLoad = 'js_' + tag + '-loaded';

            $('.FN_' + tag + ':not(select):not(.' + cnLoad + ')')
                .each(function(idx) {
                    var node = this, $btn = $(node);

                    $btn
                        .addClass(cnLoad)
                    ;
                })
                .trigger('DOMSubtreeModified.buttons.' + tag)
                .trigger('propertychange.buttons.' + tag)
            ;
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        attach: function() {
            /* $('.o-form-button.has-arrow.FN_placeholder .o-form-button__text')
                .each(function(idx) {
                    var node = this, $text = $(node);

                    $text
                        .addClass('FN_placeholder-option')
                    ;
                })
            ; */
        },

        callback: function() {
            var tag = this.tag;

            $(document)
                .on('DOMSubtreeModified.buttons.' + tag + ' propertychange.buttons.' + tag, '.FN_' + tag + '.js_' + tag + '-loaded:not(select)', function(evt) {
                    var bind = this, $btn = $(bind);
                    var hints = $btn.data('placeholder');
                    var option = $.trim( ( $btn.is(':has(.FN_' + tag + '-option)') ) ? $btn.find('.FN_' + tag + '-option').text() : $btn.text() );

                    // if( $btn.is(':contains(' + hints + ')') ) {
                    if( option === hints ) {
                        $btn
                            .addClass('js_' + tag + '-ready')
                        ;
                    } else {
                        $btn
                            .removeClass('js_' + tag + '-ready')
                        ;
                    }
                })
            ;
        },

        init: function() {
            this.callback();
            this.attach();
            this.refresh();
        }
    };

    onExt.ui.$_createSelectHint = {
        tag: 'placeholder',

        ext: {},

        create: function() {
            var tag = this.tag;

            $('select.FN_' + tag + ':not(.js_' + tag + '-loaded)')
                .each(function(idx) {
                    var node = this, $form = $(node);
                    // var _sel_ = ( $form.is(':has([selected])') ) ? '' : ' selected="selected"';
                    var hasSelected = $form.is(':has([selected])');
                    var selected = ( hasSelected ) ? '' : ' selected="selected"';
                    var hints = $form.data('placeholder');
                    var _hint_ = '<option disabled="disabled"' + selected + ' class="jsui_' + tag + '-option">' + hints + '</option>' /* + '\n<option disabled="disabled" class="jsui_' + tag + '-option"></option>' */;
                    var $hint = $(_hint_);
                    var $option = $form.find('option');

                    // alert( $form.is(':has([selected])') );

                    if( hints ) {
                        $form
                            .addClass(function() {
                                if( $option.length ) {
                                    $hint
                                        .prependTo( $option.first().parent() )
                                    ;
                                } else {
                                    $hint
                                        .prependTo( ( $(this).is(':has(optgroup)') ) ? $(this).find('optgroup:eq(0)') : $(this) )
                                    ;
                                }

                                ( !hasSelected ) && $(this).find('.jsui_' + tag + '-option:eq(0)').prop('selected', true);

                                return 'js_' + tag + '-loaded';
                            })
                        ;
                    }
                })
                .trigger('change.selects.' + tag)
            ;
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            var tag = this.tag;

            $(document)
                .on('change.selects.' + tag, 'select.FN_' + tag + '.js_' + tag + '-loaded', function(evt) {
                    var bind = this, $form = $(bind);
                    var $hint = $form.find('.jsui_' + tag + '-option');

                    if( $hint.is(':selected') ) {
                        $form
                            .addClass('js_' + tag + '-selected')
                        ;
                    } else {
                        $form
                            .removeClass('js_' + tag + '-selected')
                        ;
                    }
                })
            ;
        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };





























    /** Refactoring~~~ */






    onExt.fn.$_listbox = {
        tag: 'listbox',

        ext: {},

        create: function() {
            var tag = this.tag;

            
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            var tag = this.tag;

            $(document)
                .on('click.checks.' + tag, '.o-layer._ground.type-select .m-listbox input', function(evt) {
//                .on('mouseup.checks.' + tag, '.ground-layer.type-select .m-listbox input', function(evt) {
                    var bind = this, $check = $(bind);
                    var $label = $(this).siblings('.label'), label = $.trim( $label.html() );
                    var $popup = $check.closest('.o-layer'), id = $popup[0].id;
                    var $fire = $('[data-js-layer-trigger="0"][data-href="#' + id + '"]');

                    if( !$fire.length ) {
                        alert('Interaction Error: Target is not defined');

                    } else {
                        $fire.find('.inner').html(label);

                        onExt.fn.$_popup.hide('#' + id);
                    }
                })
            ;
        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };

    onExt.fn.$_hasPopup = {
        tag: 'hasPopup',

        ext: {},

        "open": function(_target, _fire) {
            var $fire = $(_fire);

            $fire
                .attr('data-href', _target)
                .addClass('FN_hasPopup')
                .trigger('focus')
                .trigger('click')
            ;
        },

        "reset": function(_fire) {
            _fire = _fire || '.FN_hasPopup';

            var $fire = $(_fire);

            $fire
                .each(function(idx) {
                    var node = this, $select = $(node);
                    var placeholder = $select.attr('data-placeholder') || '';
                    var _target = $select.attr('data-href'), $target = $(_target);

                    $select
                        .find('>.inner')
                            .text(placeholder)
                    ;

                    $target
                        .find('.m-listbox input')
                            .prop('checked', false)
                    ;

                    onExt.fn.$_popup.hide(_target);

                })
            ;
        },

        create: function() {
            var tag = this.tag;

            
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            var tag = this.tag;

            $(document)
                .on('focus.buttons.' + tag, '.FN_' + tag, function(evt) {
                    var bind = this, $fire = $(bind);
                    var _target = $fire.data('href'), $popup = $(_target);

                    if( $popup.length ) {
//                        $popup
//                            .attr({
//                                'role': function() {
//                                    if( !$(this).attr('role') ) {
//                                        return 'listbox';
//                                    }
//                                }
//                            })
//                        ;
                    }
                })
                .on('click.buttons.' + tag, '.FN_' + tag, function(evt) {
                    var bind = this, $fire = $(bind);
                    var $selected = $fire.find('>.inner'), selected = $.trim( $selected.text() );
                    var _target = $fire.data('href'), $popup = $(_target);

                    // if( $popup.length ) {
                        $popup
                            .find('.m-listbox .label')
                                .siblings('input')
                                    .prop('checked', false)
                                    .end()
                                .filter(function() {
                                    return $.trim( $(this).text() ) === selected;
                                })
                                    .siblings('input')
                                        .prop('checked', true)
                        ;

                        onExt.fn.$_popup.show(_target, bind);

                    // } else {
                    //     alert('Target is not defined');
                    // }
                })
            ;
        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };







    onExt.ui.$_varStickyLayout = {
        tag: 'varStickyLayout',

        ext: {},

        create: function() {
            var tag = this.tag;
            var ext = this.ext;

            $('.UI_' + tag + ':not(.js_' + tag + '-loaded)')
                .each(function(idx) {
                    var node = this, $nodes = $(node);
                    var id = node.id;

                    // var $clone = ext["detach" + (id || "N" + idx)] = $nodes.clone(true).detach();
                    var $clone = $nodes.clone(true).detach();

                    $clone = $clone.removeClass(function() {
                        $(this)
                            .attr({
                                // id: '',
                                role: 'none presentation',
                                'aria-hidden': 'true'
                            })
                            .css({
                                display: 'none'
                            })
                            // .addClass('jsui_' + tag + '-cloned c-static c-invisible')
                            .addClass('jsui_' + tag + '-cloned')
                            .find('[name], [id], [data-id]')
                        .addBack()
                                .removeAttr('name id data-id')
                        ;

                        return 'UI_' + tag;
                    });

                    $clone
                        .insertAfter($nodes)
                        .ReplaceTagName('div')
                        .each(function() {
                            if( this ) $nodes.addClass('js_' + tag + '-loaded');
                        })
                    ;
                })
            ;
        },

        destroy: function(_target) {
            /* _target = _target || '';

            var tag = this.tag;

            $(_target + '.js_' + tag + '-loaded').each(function(idx) {
                onExt.ui.$_varStickyLayout.ext.detach = $(this).removeClass('js_' + tag + '-loaded').prev('.jsui_' + tag + '-cloned').detach();
            }); */
        },

        refresh: function(_target) {
            /* _target = _target || '';

            var tag = this.tag;
            var $detach = this.ext.detach;

            if( $detach ) {
                $(_target + '.UI_' + tag).each(function(idx) {
                    $detach
                        .insertBefore(this)
                        .next(this)
                            .addClass('js_' + tag + '-loaded')
                    ;
                });

            } else {
                this.create();

            } */

            this.create();
        },

        attach: function() {
            var _sticky = '.Index-Page .dom-footer, .Index-Page .dom-main .div-main-utile.is-app';

            $(_sticky)
                .addClass('UI_varStickyLayout')
            ;
        },

        callback: function() {
            
        },

        init: function() {
            this.callback();
            this.attach();
            this.refresh();
        }
    };






    onExt.fn.$_bindsRow = {
        tag: 'bindsRow',

        ext: {},

        create: function() {
            var tag = this.tag;

            /* $('.js_' + tag + '-wrap')
                .each(function(idx) {
                    var node = this, $wrap = $(node);

                    if( $wrap.children().hasClass('js_' + tag + '-wrap') ) {
                        

                    } else {
                        $wrap
                            .children(':has([data-fn="FN_' + tag + '-item"])')
                                .addClass('FN_' + tag)
                        ;
                    }
                })
            ; */
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        attach: function() {
            /* $('.INDEXES-TABLE tbody')
                .each(function(idx) {
                    $(this).addClass('js_bindsRow-wrap');
                })
            ; */
        },

        callback: function() {
            var tag = this.tag;
            var _events = onExt.get.pushArraySel('clickable', '.FN_' + tag + ' ');

            $(document)
                .on('click.events.' + tag, _events, function(evt) {
                    evt.stopPropagation();
                })
                .on('click.rows.' + tag, '.FN_' + tag, function(evt) {
                    var _item = '[data-fn~="FN_' + tag + '-item"]';
                    var bind = this, $row = $(bind).filter(':has(' + _item + ')');

                    $row
                        .find(_item)
                            [0].click()
                    ;
                })
            ;
        },

        init: function() {
            this.callback();
            this.attach();
            this.refresh();
        }
    };




























    /** Show-Hide Functions */
/* 
    FN_toggle
        hide/show

    FN_tabpanel
    FN_collapse
        Fold/Spread

    FN_layer
    FN_popup
    FN_hasPopup

    FN_carousel
        Swiper
 */

    onExt.fn.$_toggle = {
        tag: 'toggle',

        msg: {
            "e1": function(args) {
                return alert( 'Interaction Error: The target \"' + args + '\" does not exist in the document.' );
            },

            "e2": function(args) {
                return alert( 'Interaction Error: Invalid duplicate IDs \"' + args + '\".' );
            }
        },

        ext: {
            "duration": 250,

            "delay": 50
        },

        "fireReset": function(_target) {
            var target = _target.slice(1);
            var $region = $(_target).not(':animated');
            var $fires = $('[aria-controls="' + target + '"], [data-href="' + _target + '"], [href="' + _target + '"]');
            var status = 'data-var-text', _status = onExt.get.selector(status);

            var isVisible = $region.css('display') !== 'none';
            var _expanded_ = ( isVisible ) ? true : false;
            var _varText_ = ( isVisible ) ? 1 : 0;
            var _removeClass_ = ( isVisible ) ? 'js_toggle-hidden' : 'js_toggle-shown';
            var _addClass_ = ( isVisible ) ? 'js_toggle-shown' : 'js_toggle-hidden';

            $fires
                .each(function(idx) {
                    var node = this, $fire = $(node);
                    var $var = $fire.find(_status), varText = $var.attr(status);
                    // var isCollapse = $fire.closest(':has(' + _target + ')').parent().is('.UI_collapse');
                    var isCollapse = $region.parent().is('.UI_collapse') || $region.parent().parent().is('.UI_collapse');

                    $fire
                        .attr({
                            'aria-expanded': ( isCollapse ) ? _expanded_ : undefined
                        })
                    ;

                    // if( onExt.fn.hasAttr(node, 'data-fn', 'FN_bindsRow-item') ) {
                    if( $fire.is('[data-fn~="FN_bindsRow-item"]') ) {
                        $fire = $fire.closest('.FN_bindsRow');
                    }

                    $fire
                        .removeClass(_removeClass_)
                        .addClass(function() {
                            // if( $(this).is(':has(' + _status + ')') ) {
                            if( varText && /\//.test( varText ) ) {
                                $var.text( varText.split('\/')[_varText_] );
                            }

                            return _addClass_;
                        })
                    ;
                })
            ;
        },

        "hide": function(_target, fxType, fxSpeed) {
            var obj = this;
            var msgTargetError = obj.msg.e1;
            var msgDupError = obj.msg.e2;
            var fireReset = obj.fireReset;

            var target = _target.slice(1);
            var $region = $(_target);
//            var $fires = $('[aria-controls="' + target + '"], [data-href="' + _target + '"], [href="' + _target + '"]');
//            var status = 'data-var-text', _status = onExt.get.selector(status);

            fxSpeed = ( !fxType || fxType === 'none' || fxSpeed === 0 ) ? 0 : fxSpeed || obj.ext.duration;
            fxSpeed = ( fxSpeed > 0 ) ? fxSpeed + obj.ext.delay : 0;

            $.fn.HideEffects
                = ( /\b(none|both)\b/i.test( fxType ) ) ? $.fn.hide
                : ( /\bfade\b/i.test( fxType ) ) ? $.fn.fadeOut
                : ( /\bslide\b/i.test( fxType ) ) ? $.fn.slideUp
                : $.fn.hide
            ;

            if( !$region.length ) {
                msgTargetError(_target);

            } else {
                if( onExt.get.$_checkDuplicateId(_target) ) {
                    msgDupError(target);

                    return false;
                }

                if( $region.css('display') !== 'none' ) {
                    $region
                        .stop()
                        .removeClass('js_toggle-show')
                        .addClass('js_toggle-hiding')
                        .HideEffects(fxSpeed, function() {
//                            $fires
//                                .each(function(idx) {
//                                    var node = this, $fire = $(node);
//                                    var $var = $fire.find(_status), varText = $var.attr(status);
//                                    var isCollapse = $fire.closest(':has(' + _target + ')').parent().is('.UI_collapse');
//
//                                    $fire
//                                        .attr({
//                                            'aria-expanded': ( isCollapse ) ? false : undefined
//                                        })
//                                    ;
//
//                                    // if( onExt.fn.hasAttr(node, 'data-fn', 'FN_bindsRow-item') ) {
//                                    if( $fire.is('[data-fn~="FN_bindsRow-item"]') ) {
//                                        $fire = $fire.closest('.FN_bindsRow');
//                                    }
//
//                                    $fire
//                                        .removeClass('js_toggle-shown')
//                                        .addClass(function() {
//                                            // if( $(this).is(':has(' + _status + ')') ) {
//                                            if( varText && /\//.test( varText ) ) {
//                                                $var.text( varText.split('\/')[0] );
//                                            }
//
//                                            return 'js_toggle-hidden';
//                                        })
//                                    ;
//                                })
//                            ;

                            $region
                                .removeClass('js_toggle-hiding')
                                .addClass(function() {
                                    if( $(this).data('jsToggleHidden') === true ) {
                                        $(this).prop('hidden', true);

                                    } else {
                                        // return 'js_toggle-hide';
                                    }

                                    return 'js_toggle-hide';
                                })
                                .css({ display: '' })
                            ;

                            fireReset(_target);

                            onExt.dom.resize();
                        })
                    ;
                }
            }
        },

        "show": function(_target, fxType, fxSpeed) {
            var obj = this;
            var msgTargetError = obj.msg.e1;
            var msgDupError = obj.msg.e2;
            var fireReset = obj.fireReset;

            var target = _target.slice(1);
            var $region = $(_target);
//            var $fires = $('[aria-controls="' + target + '"], [data-href="' + _target + '"], [href="' + _target + '"]');
//            var status = 'data-var-text', _status = onExt.get.selector(status);
            var isCollapse = $region.parent().is('.UI_collapse') || $region.parent().parent().is('.UI_collapse');

            fxSpeed = ( !fxType || fxType === 'none' || fxSpeed === 0 ) ? 0 : fxSpeed || obj.ext.duration;

            $.fn.ShowEffects
                = ( /\b(none|both)\b/i.test( fxType ) ) ? $.fn.show
                : ( /\bfade\b/i.test( fxType ) ) ? $.fn.fadeIn
                : ( /\bslide\b/i.test( fxType ) ) ? $.fn.slideDown
                : $.fn.show
            ;

            function focusCollapseLabel(delay) {
                onExt.dom.focus($region.prev()[0], delay || obj.ext.delay);
            }

            if( !$region.length ) {
                msgTargetError(_target);

            } else {
                if( onExt.get.$_checkDuplicateId(_target) ) {
                    msgDupError(target);

                    return false;
                }

                if( $region.css('display') === 'none' ) {
                    /* $(window).on('scroll.test', function(evt) {
                        focusCollapseLabel(1);
                    }); */

                    $region
                        .stop()
                        /* .css({
                            display: function() {
                                if( $(this).css('display') === 'none' ) {
                                    return 'none';
                                }
                            }
                        }) */
                        .css('display', 'none')
                        .removeClass(function() {
                            if( this.hidden ) {
                                $(this)
                                    .data('jsToggleHidden', true)
                                    .removeAttr('hidden')
                                ;

                            } else {
                                // return 'js_toggle-hide';
                            }

                            return 'js_toggle-hide';
                        })
                        .addClass('js_toggle-showing')
                        .ShowEffects(fxSpeed, function() {
//                            $fires
//                                .each(function(idx) {
//                                    var node = this, $fire = $(node);
//                                    var $var = $fire.find(_status), varText = $var.attr(status);
//                                    var isCollapse = $fire.closest(':has(' + _target + ')').parent().is('.UI_collapse');
//
//                                    $fire
//                                        .attr({
//                                            'aria-expanded': ( isCollapse ) ? true : undefined
//                                        })
//                                    ;
//
//                                    // if( onExt.fn.hasAttr(node, 'data-fn', 'FN_bindsRow-item') ) {
//                                    if( $fire.is('[data-fn~="FN_bindsRow-item"]') ) {
//                                        $fire = $fire.closest('.FN_bindsRow');
//                                    }
//
//                                    $fire
//                                        .removeClass('js_toggle-hidden')
//                                        .addClass(function() {
//                                            // if( $(this).is(':has(' + _status + ')') ) {
//                                            if( varText && /\//.test( varText ) ) {
//                                                $var.text( varText.split('\/')[1] );
//                                            }
//
//                                            return 'js_toggle-shown';
//                                        })
//                                    ;
//                                })
//                            ;

                            $region
                                .removeClass('js_toggle-showing')
                                .addClass('js_toggle-show')
                                .css({ display: '' })
                                .closest('.js_scrollable')
                                    .css({
                                        scrollBehavior: function() {
                                            $(this).css('scroll-behavior', 'auto');

                                            if( isCollapse ) {
                                                focusCollapseLabel(10);

                                            } else {
                                                onExt.dom.focus( $region[0] );
                                            }

                                            return '';
                                        }
                                    })
                            ;

                            /* $(window).off('scroll.test'); */

                            fireReset(_target);

                            onExt.dom.resize();
                        })
                    ;

                    if( isCollapse ) {
                        focusCollapseLabel();
                    }

                }
            }
        },

        "toggle": function(_target, fxType, fxSpeed) {
            var $region = $(_target).not(':animated');

            if( $region.is(':visible') ) {
                return this.hide(_target, fxType, fxSpeed);

            } else {
                return this.show(_target, fxType, fxSpeed);
            }
        }
    };

    onExt.fn.$_modal = {
        tag: 'modal',

        "hide": function(interval) {
            
        },

        "show": function(interval, scroll, type) {
            
        }
    };

    onExt.fn.$_layer = {
        tag: 'layer',

        msg: {
            "e1": function(args) {
                return alert( 'Layer is running...' );
            }
        },

        ext: {
            /* "Sel": function(str, pre) {
                if( pre ) {
                    return pre + str;

                } else {
                    return '[' + str + ']';
                }
            },

            "Sel": onExt.get.selector, */

            "run": 'js_layer-isRunning',

            "fired": 'data-js-layer-trigger',

            "layer": 'data-js-layer-index',

            "counter": 'data-js-layer-count'
        },

        "base": function(_target) {
            // onExt.get.$_checkDuplicateId(_target, false);

            var ext = this.ext;
            var run = ext.run,  fired = ext.fired,  layer = ext.layer,  counter = ext.counter;
            var Sel = onExt.get.selector;

            var _run = Sel(run, '.');
            var _layers = Sel(layer);
            var $popup = $(_layers);
            var $counter = ( $popup.length ) ? $(document.body).attr(counter, $popup.length) : $(document.body).removeAttr(counter);
            var count = $counter.attr(counter) - 1;

            var arrPops = $popup.get().sort(function(a, b) {
                return ( $(a).attr(layer) * 1 > $(b).attr(layer) * 1 ) ? 1 : -1;
            });

            $.each($(arrPops), function(idx, val) {
                var node = this,  $layer = $(node);
                var tmp = 'data-js-layer-temp-num';
                var tmpData = $layer.attr(layer);

                $layer
                    .attr({
                        'data-js-layer-temp-num': function() {
                            return tmpData;
                        },

                        'data-js-layer-index': function() {
                            if( $layer.is( $(_target) ) ) {
                                return 0;

                            } else {
                                return -(count--);
                            }
                        }
                    })
                    .css({
                        zIndex: function() {
                            var value = $(this).data('jsLayerZidx') * 1 || 1e3;
                            var num = $(this).attr(layer) * 1;
                            var count = $counter.attr(counter) - 1;

                            return value + count + num;
                        }
                    })
                ;

                $counter
                    .find('[' + fired + '="' + tmpData + '"]:not(' + _run + ')')
                        .addClass(run)
                        .attr({
                            'data-js-layer-trigger': function() {
                                var num = $('[' + tmp + '="' + tmpData + '"]').attr(layer);

                                return num;
                            }
                        })
                        .end()
                    .find(Sel(tmp))
                        .removeAttr(tmp)
                ;
            });

            /* onExt.pre.$.popbody = $popup.filter('[data-js-layer-index="0"]').find('.js_scrollready:visible'); */
            /* onExt.pre.$.popbody = $popup.filter('[' + layer + '="0"]').find('.js_scrollable:visible'); */
            onExt.pre.$.popbody = $popup.filter('[' + layer + '="0"]').find(onExt.dom._.divbody + ':visible');
            // console.log( onExt.pre.$.popbody.closest('.popup-layer, .dialog-layer, .ground-layer') );

            $(_run).removeClass(run);
        },

        "hide": function(_target) {
            var msgRunError = this.msg.e1;
            var ext = this.ext;
            var run = ext.run,  fired = ext.fired,  layer = ext.layer;
            var $body = $(document.body);

            if( $body.hasClass(run) ) {
                msgRunError();

                return false;

            } else {
                $body.addClass(run);
            }

            var $opener = $('[' + fired + '="' + $(_target).attr(layer) + '"]').removeAttr(fired);
            var $target = $(_target).css('z-index', '').removeAttr(layer);

            this.base(_target);
        },

        "show": function(_target, _fire) {
            var msgRunError = this.msg.e1;
            var ext = this.ext;
            var run = ext.run,  fired = ext.fired,  layer = ext.layer;
            var $body = $(document.body);

            if( $body.hasClass(run) ) {
                msgRunError();

                return false;

            } else {
                $body.addClass(run);
            }

            var $opener = ( _fire && _fire !== window ) ? $(_fire).attr(fired, 1) : $('[' + fired + '="' + $(_target).attr(layer) + '"]').attr(fired, 1);
            var $target = $(_target).attr(layer, 1).data('jsLayerZidx', $(_target).css('z-index'));

            this.base(_target);
        }
    };

    onExt.fn.$_popup = {
        tag: 'popup',

        msg: {
            "e1": function(args) {
                return alert( 'Interaction Error: The target \"' + args + '\" does not exist in the document.' );
            },

            "e2": function(args) {
                return alert( 'Interaction Error: Invalid duplicate IDs \"' + args + '\".' );
            }
        },

        ext: {},

        "hide": function(_target) {
            var msgTargetError = this.msg.e1;
            var msgDupError = this.msg.e2;

            var _root = onExt.dom._.root;
            var $popup = $(_target);
            var $fire = $('[data-js-layer-trigger="0"]');
            var modal = 'js_modal';

            if( !$popup.length ) {
                msgTargetError(_target);

            } else {
                if( onExt.get.$_checkDuplicateId(_target) ) {
                    msgDupError(_target.slice(1));

                    return false;
                }

                if( !($popup.hasClass('_ground type-select') && $popup.find('input:checked').length) ) {
                    $popup
                        .find('.js_scrollable:visible')
                            .css({
                                scrollBehavior: 'auto'
                            })
                            .scrollTop(0)
                            .css({
                                scrollBehavior: ''
                            })
                    ;
                }

                $popup.addClass('js_hiding');

                var interval = onExt.get.interval( $popup[0] ) || 0;

                setTimeout(function() {
                    $popup
                        //.removeAttr('data-fn')
                        .removeClass('js_hiding js_show FN_focusTrap js_expand')
                        .find('.layer-body')
                            .addClass(function() {
                                $(this).removeClass('js_scrollend js_show');

                                return 'js_hide';
                            })
                            .first()
                                .addClass(function() {
                                    $(this).removeClass('js_hide');

                                    return 'js_show';
                                })
                                .end()
                            .end()
                        .closest(_root)
                            .removeClass(modal)
                            .addClass(function() {
                                var $dims = $('[data-js-layer-index]').not(_target).find('>.g-overlay:not(._modeless)');

                                modal = '';

                                $dims
                                    .each(function(idx) {
                                        var node = this, $dim = $(node);

                                        modal = ( !$dim.is(':hidden') || $dim.css('visibility') !== 'hidden' ) && 'js_modal';
                                    })
                                ;

                                return modal;
                            })
                    ;

                    onExt.dom.focus( $fire[0] );
                    onExt.fn.$_layer.hide(_target);

                    onExt.dom.resize();

                }, interval);
            }
        },

        "show": function(_target, _fire) {
            var msgTargetError = this.msg.e1;
            var msgDupError = this.msg.e2;

            var _root = onExt.dom._.root;
            var $popup = $(_target);
            var $layer = $popup.find('>.layer-wrap');
            var modal = 'js_modal';

            if( !$popup.length ) {
                msgTargetError(_target);

            } else {
                if( onExt.get.$_checkDuplicateId(_target) ) {
                    msgDupError(_target.slice(1));

                    return false;
                }

                onExt.fn.$_layer.show(_target, _fire);
                onExt.ui.$_scrollableArea.refresh();

                $layer
                    .attr({
                        'tabindex': function() {
                            return ( $(this).attr('tabindex') ) ? undefined : '0';
                        }
                    })
                    .find('.js_scrollable:not(.js_scrollready)')
                        // .on('scroll', onExt.fn.$_detectScroll.top)
                        .on('scroll', onExt.fx.reqFrame( onExt.get.$.Document.scroll ))
                        .addClass('js_scrollready')
                        .end()
                    .closest(_target)
                        //.attr({
                        //    'data-fn': function() {
                        //        return 'focusTrap';
                        //    }
                        //})
                        .addClass('js_show js_showing FN_focusTrap')
                        .end()
                    .closest(_root)
                        .addClass(function() {
                            var $dim = $popup.find('>.g-overlay:not(._modeless)');

                            if( !$dim.is(':hidden') || $dim.css('visibility') !== 'hidden' ) {
                                return modal;
                            }
                        })
                ;

                var interval = onExt.get.interval( $popup[0] ) || 0;

                setTimeout(function() {
                    /* $popup
                        .removeClass('js_showing')
                        .find('.js_scrollable')
                            .first()
                                .trigger('scroll')
                    ; */
                    $popup.removeClass('js_showing');

                    onExt.dom.focus( $layer[0] );

                    $(window).scrollTop( $layer.offset().top );
                    /* $popup
                        .closest('.js_scrollable')
                            .css('scroll-behavior', 'auto')
                            .animate({ scrollTop: $layer.offset().top }, 300, function() {
                                $(this).css('scroll-behavior', '');
                            })
                    ; */

                    onExt.dom.resize();

                }, interval);
            }
        },

        callback: function() {
            $(document)
                .on('click.popups.close', '.layer-tail .close', function(evt) {
                    // onExt.fn.$_popup.hide( '#' + $(this).closest('.layer-wrap').parent()[0].id );

                    var $target = $(this).closest('.o-layer');

                    onExt.fn.$_popup.hide( '#' + $target[0].id );
                })
                .on('keydown.popups.close', function(evt) {
                    if( /\b27\b/.test( onExt.dom.onKey(evt) ) ) {
                        var $target = onExt.pre.$.popbody.closest('.o-layer');

                        if( $target.length ) {
                            onExt.fn.$_popup.hide( '#' + $target[0].id );
                        }
                    }
                })
                .on('mouseup.modals.close', '.g-overlay', function(evt) {
                    var bind = this, $dim = $(bind);

                    if( $dim.parent().is('.o-layer._popup, .o-layer._ground') ) {
                        // evt.stopImmediatePropagation();

                        $dim
                            .siblings('.layer-wrap')
                                .find('.layer-tail .close')
                                    .trigger('click')
                        ;
                    }
                })
            ;

            /* $('.layer-wrap .js_scrollable:not(.js_scrollready)')
                .on('scroll', onExt.fn.$_detectScroll.top)
                .addClass('js_scrollready')
            ; */

            try {
                if( "ontouchstart" in window ) {
                    /* $('.ground-layer .layer-tail .close, .ground-layer .layer-tail .close >*')
                        .Panmove({ threshold: 25 })
                        .on('panup pandown', function(evt) {
                            var bind = this, $close = $(bind);
                            var $layer = $close.closest('.layer-wrap').parent();

                            switch( evt.type ) {
                                case 'panup': {
                                    if( $layer.hasClass('case-half') ) {
                                        $layer.addClass('js_expand');
                                    }
                                } break;

                                case 'pandown': {
                                    $close.trigger('click');
                                } break;
                            }
                        })
                    ; */

                    $('.o-layer._ground .layer-tail .close, .o-layer._ground .g-overlay')
                        .Touchmove({
                            swipe: function(evt, dir) {
                                var bind = this, $bind = $(bind);
                                var $layer = ( $bind.is('.g-overlay') ) ? $bind.parent() : $bind.closest('.layer-wrap').parent();
                                var $close = $layer.find('.layer-tail .close');

                                switch( dir ) {
                                    case 'up': {
                                        evt.preventDefault();
                                        evt.stopPropagation();

                                        if( $layer.is('.case-half:not(.js_expand)') ) {
                                            $layer.addClass('js_expand');

                                            var interval = onExt.get.interval( $layer[0] ) || 0;

                                            setTimeout(function() {
                                                onExt.dom.resize();
                                            }, interval);
                                        }
                                    } break;

                                    case 'down': {
                                        evt.preventDefault();
                                        evt.stopPropagation();

                                        $close.trigger('click');
                                    } break;
                                }
                            },

                            threshold: 25
                        })
                    ;
                }

            } catch(err) {}
        }
    };

    onExt.fn.$_load = {
        tag: 'load',

        "complete": function() {
            // $(document.documentElement).removeClass('js_modal js_loading');

            var $load = $('.dom-loading.type-univ[aria-busy="true"]');
            var $root = onExt.pre.$.root;

            $load
                .attr({
                    'aria-busy': 'false'
                })
            ;

            $root.removeClass('js_loading');
        },

        "start": function(msg) {
            // $(document.documentElement).addClass('js_loading js_modal');

            var _load_ = '<div role="alert" aria-busy="true" class="dom-loading type-univ ANI_ellipsis"><div class="nodes"><div class="div-loading"><i aria-hidden="true"><span></span><span></span><span></span><span></span></i><p class="messages">Loading...</p></div></div><hr class="g-overlay" /></div>';
            var $load = $(_load_);
            var $loading = $('.dom-loading.type-univ');
            var $root = onExt.pre.$.root;
            var message = ( msg ) ? msg : '\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.'/* '데이터를 불러오는 중입니다.' */;

            if( $loading.length ) {
                $loading
                    .find('.messages')
                        .html(message)
                        .end()
                    .attr({
                        'aria-busy': 'true'
                    })
                ;

            } else {
                $load
                    .find('.messages')
                        .html(message)
                        .end()
                    .prependTo(document.body)
                ;
            }

            $root.addClass('js_loading');
        },

        "refComplete": function() {
            var $load = $('.dom-loading.type-ref[aria-busy="true"]');
            var $root = onExt.pre.$.root;

            $load
                .attr({
                    'aria-busy': 'false'
                })
            ;

            $root.removeClass('js_loading');
        },

        "refStart": function(msg) {
            var _load_ = '<div role="alert" aria-busy="true" class="dom-loading type-ref"><div class="nodes"><div class="div-loading"><i aria-hidden="true"></i><p class="messages">Loading...</p></div></div><hr class="g-overlay" /></div>';
            var $load = $(_load_);
            var $loading = $('.dom-loading.type-ref');
            var $root = onExt.pre.$.root;
            var message = ( msg ) ? msg : '\uC870\uD68C \uC911\uC785\uB2C8\uB2E4.'/* '조회 중입니다.' */;

            if( $loading.length ) {
                $loading
                    .find('.messages')
                        .html(message)
                        .end()
                    .attr({
                        'aria-busy': 'true'
                    })
                ;

            } else {
                $load
                    .find('.messages')
                        .html(message)
                        .end()
                    .prependTo(document.body)
                ;
            }

            $root.addClass('js_loading');
        }
    };

    onExt.fn.$_stepsMove = {
        tag: 'stepsMove',

        ext: {
            "div": 'data-div-step',

            //$wrap: undefined,

            "$current": undefined,

            "$target": undefined
        },

        "push": function(num) {
            var ext = this.ext;
            var div = ext.div;

            var $popup = onExt.pre.$.popbody.closest('.o-layer');
            var $steps = ( $popup.length ) ? $popup.find('>* >[' + div + ']') : $('.dom-main').find('>[' + div + ']');

            //ext.$wrap = $steps.parent();
            ext.$current = $steps.filter('.js_show, :visible');
            ext.$target = $steps.filter('[' + div + '="' + num + '"]');
        },

        "base": function(num, dir) {
            var tag = this.tag, ext = this.ext;
            var /* $wrap = ext.$wrap, */ $current = ext.$current, $target = ext.$target;
            var $wrap = $current.parent();

            var isPrev = dir === 'prev';
            var cnPre = 'js_';
            var cnWrap = cnPre + tag + '-animate';
            var cnFixed = cnPre + tag + '-fixed';
            var cnTrans = cnPre + tag + '-trans';
            var cnHide = 'js_hide';
            var cnShow = 'js_show';
            var cnReady = 'js_ready';
            var _cnDir_ = cnPre + (( isPrev ) ? 'backward' : 'forward');
            var _cnCurrent_ = ( isPrev ) ? cnTrans : cnFixed;
            var _cnTarget_ = ( isPrev ) ? cnFixed : cnTrans;
            var _divbody = onExt.dom._.divbody;

            if( $target.index() === $current.index()  || $wrap.hasClass(cnWrap) ) {
                alert( 'Interaction Error: Cannot Move!' );

            } else {
                if( !$target.length ) {
                    alert( 'Interaction Error: The target does not exist in this steps.' );

                    return false;
                }

                $target
                    .addClass(_cnTarget_ + ' ' + cnReady)
                    .removeClass(function() {
                        $current
                            .addClass(_cnCurrent_)
                            .closest($wrap[0])
                                .addClass(cnWrap + ' ' + _cnDir_)
                        ;

                        setTimeout(function() {
                            $target.removeClass(cnReady);
                        });

                        return cnHide;
                    })
                ;

                var interval = onExt.get.interval( $target[0] ) || 0;

                setTimeout(function() {
                    onExt.dom.focus( $target[0] );

                    $target
                        .addClass(function() {
                            $current
                                .children(_divbody)
                                    .css({
                                        scrollBehavior: 'auto'
                                    })
                                    .scrollTop(0)
                                    .css({
                                        scrollBehavior: ''
                                    })
                                    .end()
                                .removeClass(cnShow + ' ' + _cnCurrent_)
                                .addClass(cnHide)
                            ;

                            $target
                                .trigger('blur')
                                .removeClass(_cnTarget_)
                                .closest($wrap[0])
                                    .removeClass(cnWrap + ' ' + _cnDir_)
                            ;

                            return cnShow;
                        })
                    ;

                    if( onExt.pre.$.popbody.length ) {
                        onExt.pre.$.popbody = $target.children(_divbody);
                    }

                    /* ext.$wrap =  */ext.$current = ext.$target = undefined;

                    onExt.dom.resize();

                }, interval);
            }
        },

        "prev": function(num, push) {
            var obj = this;
            var ext = obj.ext;

            if( !push ) {
                obj.push(num);
            }

            if( !num ) {
                ext.$target = ext.$current.prev('[' + ext.div + ']');
            }

            obj.base(num, 'prev');
        },

        "next": function(num, push) {
            var obj = this;
            var ext = obj.ext;

            if( !push ) {
                obj.push(num);
            }

            if( !num ) {
                ext.$target = ext.$current.next('[' + ext.div + ']');
            }

            obj.base(num, 'next');
        },

        "go": function(num) {
            /* var $target = ( $('[data-js-layer-index="0"]').length ) ? $('[data-js-layer-index="0"]').find('[data-div-step="' + num + '"]') : $('.dom-main').find('[data-div-step="' + num + '"]');

            $target.removeClass('js_hide').addClass('js_show').siblings().removeClass('js_show').addClass('js_hide'); */

            var obj = this;
            var ext = obj.ext;

            obj.push(num);

            if( ext.$target.index() < ext.$current.index() ) {
                obj.prev(num, !0);

            } else {
                obj.next(num, !0);
            }
        }
    };

    onExt.fn.$_navCtrl = {
        create: function() {
            $('.dom-nav .nav-total [role="tabpanel"] >*')
                .each(function(idx) {
                    var node = this, $depth2 = $(node);

                    $depth2
                        .addClass('UI_collapse')
                        .attr({
                            'data-collapse-id': $depth2.parent()[0].id,
                            'data-fn-collapse-fold': 'opened'
                        })
                        .find('>* .label:not(:only-child)')
                            .addClass('FN_toggle')
                            .next()
                                .attr({
                                    'data-fn': 'FN_toggle-panel'
                                })
                    ;
                })
                .closest('.dom-nav')
                    .attr({
                        'tabindex': function() {
                            return ( $(this).attr('tabindex') ) ? undefined : '0';
                        }
                    })
                    .addClass('FN_focusTrap')
            ;
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            $(document)
                .on('click.open.navCtrl', '.dom-header .div-bind .menu-show >*', function(evt) {
                    $('.dom-nav')
                        .attr({
                            'tabindex': function() {
                                return ( $(this).attr('tabindex') ) ? undefined : '0';
                            }
                        })
                        .addClass('FN_focusTrap')
                    ;
                })
                .on('click.close.navCtrl', 'html[data-js-hash="#Navigator"] .dom-nav .menu-hide >*', function(evt) {
                    evt.preventDefault();

                    var bind = this, $close = $(bind);
                    var $nav = $close.closest('.dom-nav');
                    var target = $nav[0].id;

                    if( history.state && history.state.uponHash === '#' + target ) {
                        onExt.fn.removeHash();

                    } else {
                        onExt.fn.$_hashChange.prototype.back();
                    }
                })
                .on('pointerup.overlay.navCtrl', '.dom-nav >.g-overlay', function(evt) {
                    evt.stopPropagation();

                    var bind = this, $dim = $(bind);
                    var $nav = $dim.closest('.dom-nav');
                    var $close = $nav.find('.menu-hide >*');

                    function Trigger() {
                        $close.trigger('click');
                    }

                    setTimeout(Trigger, 100);
                })
                .on('click.tabs.navCtrl', '.dom-nav .nav-total [role~="tab"]', function(evt) {
                    evt.preventDefault();

                    var bind = this, $depth1 = $(bind);
                    var interval = onExt.get.interval( $depth1[0] );

                    $depth1
                        .attr({
                            'aria-selected': true
                        })
                        .next('[role~="tabpanel"]')
                            .fadeIn(interval, function() {
                                $(this)
                                    .addClass('js_tabpanel-selected')
                                    .css('display', '')
                                    /* .find('[data-fn~="FN_toggle-panel"]')
                                        .each(function(idx) {
                                            onExt.fn.$_toggle.fireReset( '#' + $(this)[0].id );
                                        }) */
                                ;
                            })
                            .scrollTop(0)
                            .parentsUntil('.nav-total')
                                .siblings()
                                    .find('[role~="tab"]')
                                        .attr({
                                            'aria-selected': false
                                        })
                                        .next('[role~="tabpanel"]')
                                            .fadeOut(interval, function() {
                                                $(this)
                                                    .removeClass('js_tabpanel-selected')
                                                    .css('display', '')
                                                ;
                                            })
                    ;
                })
            ;
        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };

    onExt.fn.$_tabpanel = {
        create: function() {
            $('.FN_tabpanel')
                .each(function(idx) {
                    var node = this, $panels = $(node).not('.js_tabpanel-loaded');
                    var name = $panels.attr('data-tabpanel-id');

                    if( !name ) {
                        $panels.attr('data-tabpanel-id', 'jsidx_tabs' + (idx + 1));

                        name = $panels.attr('data-tabpanel-id');
                    }

                    $panels
                        .find('[role~="tabpanel"]')
                            .attr({
                                'id': function() {
                                    if( this.id === '' ) {
                                        return name + '_panel' + ($(this).index() + 1);
                                    }
                                },

                                'aria-labelledby': function() {
                                    if( !$(this).attr('aria-labelledby') ) {
                                        return name + '_tab' + ($(this).index() + 1);
                                    }
                                }
                            })
                            .end()
                        .siblings('[role~="tablist"]')
                            .find('[role~="tab"]')
                                .attr({
                                    'id': function() {
                                        if( this.id === '' ) {
                                            return name + '_tab' + ($(this).parentsUntil('[role~="tablist"]').index() + 1);
                                        }
                                    },

                                    'href': function() {
                                        if( $(this).is('a') && (this.href === '' || /javascript:/i.test( this.href )) ) {
                                            return '#' + name + '_tab' + ($(this).parentsUntil('[role~="tablist"]').index() + 1);
                                        }
                                    },

                                    'aria-controls': function() {
                                        if( !$(this).attr('aria-controls') ) {
                                            return name + '_panel' + ($(this).parentsUntil('[role~="tablist"]').index() + 1);
                                        }
                                    }
                                })
                                .filter('[aria-selected="true"]')
                                    .trigger('click')
                                    .end()
                                .end()
                            .end()
                        .addClass('js_tabpanel-loaded')
                    ;
                })
            ;
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            $(document)
                .on('click.tabs._tabpanel', '[role~="tab"]', function(evt) {
                    if( $(this).is('a') ) {
                        evt.preventDefault();
                    }

                    var bind = this, $tab = $(bind);
                    var $tabs = $tab.closest('[role~="tablist"]');
                    //var $panels = $tab.closest('[role~="tablist"]').siblings('.FN_tabpanel');
                    //var offset = $tabs.position().top;

                    //if( !$tabs.offsetParent().is('.js_scrollable') ) {
                    //    $tabs.closest('.js_scrollable').css('position', 'relative');
                    //}

                    var _panel = '#' + $tab.attr('aria-controls');
                    var $panel = $(_panel);

                    if( /\b(-webkit-sticky|sticky)\b/i.test( $tabs.css('position') ) ) {
                        $tabs.closest('.js_scrollable').scrollTop( parseFloat( $tabs.css('top') ) );
                    }

                    if( !$tab.nextAll().is('[role~="tabpanel"]') && !$panel.parents().is('.UI_carousel') ) {
                        $panel
                            .addClass('js_tabpanel-showing')
                            .fadeIn(100, function() {
                                $(this)
                                    .removeClass('js_tabpanel-showing')
                                    .addClass('js_tabpanel-selected')
                                    .css('display', '')
                        //            .closest('.js_scrollable')
                        //                .scrollTop( offset )
                        //                .css('position', '');
                                ;
                            })
                            .siblings('.js_tabpanel-selected')
                                .fadeOut(100, function() {
                                    $(this)
                                        .removeClass('js_tabpanel-selected')
                                        .css('display', '')
                                    ;

                                    $tab
                                        .attr({ 'aria-selected': true })
                                        .closest('li')
                                            .siblings()
                                                .find('[role~="tab"]')
                                                    //.removeAttr('aria-selected')
                                                    .attr({ 'aria-selected': false })
                                    ;

                                })
                        ;
                    }
                })
                /* .on('focus.panels._tabpanel', '[role~="tabpanel"]', function(evt) {
                    var bind = this, $panel = $(bind).not(':animated');
                    var match = $(bind).attr('aria-labelledby');

                    $('#' + match)
                        .trigger('click')
                    ;
                }) */
            ;

        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };

    onExt.ui.$_carousel = {
        tag: 'carousel',

        ext: {
            "data": 'data-fn-carousel-',

            "init": 'container-initialized',

            "_pre": '.swiper-',

            "_fn": '.UI_carousel'
        },

        "swipe": function() {
            
        },

        "update": function() {
            /* var ext = this.ext;

            $(ext._fn + ext._pre + ext.init) */
            $('.UI_carousel.swiper-container-initialized')
                .each(function(idx) {
                    var node = this, $swiper = $(node);
                    var $play = $swiper.find('.swiper-button-toggle');
                    var wrapIndex = idx;
                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
                    var Obj = onExt.page[id];
                    var autoObj = Obj.autoplay;

                    Obj.update();

                    if( autoObj.running ) {
                        autoObj.run();

                        $play.attr('aria-pressed', ( autoObj.paused ) ? 'false' : 'true');
                    }
                })
            ;
        },

        create: function() {
            /* var ext = this.ext;
            var data = ext.data, _pre = ext._pre; */

            $('.UI_carousel:not(.swiper-container-initialized)')
                .each(function(idx) {
                    var node = this, $swiper = $(node);
                    var autoplay = $swiper.attr('data-fn-carousel-autoplay');
                    var delay = autoplay * 1;
                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + idx;
                    var loop = $swiper.attr('data-fn-carousel-loop');
                    var direction = $swiper.attr('data-fn-carousel-dir');
                    var group = $swiper.attr('data-fn-carousel-group') * 1;
                    // var paging = $swiper.find('.swiper-pagination').attr('data-fn');
                    var paging = $swiper.attr('data-fn-carousel-page');
                    var isAuto = autoplay === 'true' || !isNaN(delay);

                    // console.log( isAuto );

                    onExt.page[id] = new Swiper(node, {
                        on: {
                            // 'slideChange': function() {
                            'slideChangeTransitionEnd': function() {
//                                var Obj = this;
//                                var autoObj = Obj.autoplay;
//                                var $swiper = $(Obj.el);
//
//                                if( autoObj.running ) {
//                                    $swiper
//                                        .find('.swiper-button-toggle')
//                                            .attr('aria-pressed', ( autoObj.paused ) ? 'false' : 'true')
//                                    ;
//                                }

                                onExt.dom.resize();
                            }
                        },
                        autoplay: {
                            enabled: ( isAuto ) ? true : false,
                            delay: delay || 3e3,
                            disableOnInteraction: false
                        },
                        loop: ( loop === 'false' ) ? false : true,
                        direction: direction || 'horizontal',
                        freeMode: ( !isNaN(group) ) ? true : false,
                        slidesPerGroup: group || 1,
                        slidesPerView: 'auto',
                        pagination: {
                            el: '.swiper-pagination',
                            type: paging || 'bullets', // 'fraction' || 'progressbar' || 'custom'
                            clickable: true
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        },
                        a11y: {
                            prevSlideMessage: '\uC774\uC804 \uC2AC\uB77C\uC774\uB4DC'/* '이전 슬라이드' */,
                            nextSlideMessage: '\uB2E4\uC74C \uC2AC\uB77C\uC774\uB4DC'/* '다음 슬라이드' */,
                            firstSlideMessage: '\uCC98\uC74C \uC2AC\uB77C\uC774\uB4DC'/* '처음 슬라이드' */,
                            lastSlideMessage: '\uB9C8\uC9C0\uB9C9 \uC2AC\uB77C\uC774\uB4DC'/* '마지막 슬라이드' */,
                            paginationBulletMessage: '{{index}}\uBC88 \uC2AC\uB77C\uC774\uB4DC \uC774\uB3D9'/* '{{index}}번 슬라이드 이동' */
                        },
                        grabCursor: true,
                        /* followFinger: false,
                        // allowTouchMove: false, */
                        autoHeight: true
                    });

                    $swiper
                        .find( onExt.get.pushArraySel('focusable', '.swiper-slide-duplicate ') )
                            .attr({
                                'tabindex': '-1'
                            })
                            .end()
                        // .find('.swiper-button-toggle', '.swiper-controls')
                        .find('.swiper-controls .swiper-button-toggle')
                            .attr({
                                'aria-pressed': ( isAuto ) ? true : false
                            })
                    ;
                })
            ;
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            $(document)
                .on('focusin', '.UI_carousel.swiper-container-initialized .swiper-slide', function(evt) {
                    var bind = this, $slide = $(bind);
                    var $swiper = $slide.closest('.swiper-container');
                    var slideIndex = $slide.index();
                    var wrapIndex = $swiper.index('.UI_carousel');
                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
                    var Obj = onExt.page[id];

                    if( slideIndex !== Obj.activeIndex ) {
                        setTimeout(function() {
                            $swiper[0].scrollLeft = 0;
                            $swiper[0].scrollTop = 0;

                            Obj.slideTo(slideIndex);
                        });
                    }
                })
                .on('pointerup', '.UI_carousel.swiper-container-initialized .swiper-button-toggle', function(evt) {
                    evt.preventDefault();

                    var bind = this, $play = $(bind);
                    var $swiper = $play.closest('.swiper-container');
                    var $active = $swiper.find('.swiper-pagination-clickable >.js_clicked');
                    var wrapIndex = $swiper.index('.UI_carousel');
                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
                    var autoObj = onExt.page[id].autoplay;

                    if( autoObj.running && !$active.length ) {
                        autoObj.stop();

                        $play.attr('aria-pressed', 'false');

                    } else {
                        autoObj.start();

                        $play.attr('aria-pressed', 'true');
                    }
                })
//                .on('blur', '.UI_carousel .swiper-pagination-clickable >*', function(evt) {
//                    evt.stopPropagation();
//
//                    var bind = this, $page = $(bind);
//                    var $swiper = $page.closest('.swiper-container');
//                    var $play = $swiper.find('.swiper-button-toggle');
//                    var wrapIndex = $swiper.index('.UI_carousel');
//                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
//                    var autoObj = onExt.page[id].autoplay;
//
//                    setTimeout(function() {
//                        if( autoObj.running && !$page.parent().children(':focus').length ) {
//                            autoObj.run();
//
//                            $play.attr('aria-pressed', 'true');
//                        }
//                    }, 100);
//                })
//                .on('focus', '.UI_carousel .swiper-pagination-clickable >*', function(evt) {
//                    evt.stopPropagation();
//
//                    var bind = this, $page = $(bind);
//                    var $swiper = $page.closest('.swiper-container');
//                    var $play = $swiper.find('.swiper-button-toggle');
//                    var wrapIndex = $swiper.index('.UI_carousel');
//                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
//                    var Obj = onExt.page[id];
//                    var autoObj = Obj.autoplay;
//                    var Pause = autoObj.pause;
//                    var delay = Obj.params.autoplay.delay;
//
//                    if( autoObj.running ) {
//                        Pause();
//
////                        setTimeout(function() {
////                            if( $page.hasClass('js_clicked') ) {
////                                $page.removeClass('js_clicked')
////
////                            } else {
////                                Pause();
////                            }
////                        }, (delay || 3e3) * 2 + 100);
//
//                        $play.attr('aria-pressed', 'false');
//                    }
//                })
//                .on('click', '.UI_carousel .swiper-pagination-clickable >*', function(evt) {
//                    evt.stopPropagation();
//
//                    var bind = this, $page = $(bind);
//                    var $swiper = $page.closest('.swiper-container');
//                    var wrapIndex = $swiper.index('.UI_carousel');
//                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
//                    var speed = onExt.page[id].params.speed;
//
//                    setTimeout(function() {
//                        bind.blur();
//                        bind.focus();
//                    }, (speed || 300) + 50);
//                })
                .on('blur', '.UI_carousel .swiper-pagination-clickable >*', function(evt) {
                    evt.stopPropagation();

                    var bind = this, $page = $(bind);
                    var $pages = $page.parent().children();
                    var $swiper = $page.closest('.swiper-container');
                    var $play = $swiper.find('.swiper-button-toggle');
                    var wrapIndex = $swiper.index('.UI_carousel');
                    var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
                    var autoObj = onExt.page[id].autoplay;

//                    setTimeout(function() {
//                        if( !$pages.filter(':focus').length ) {
//                            if( $pages.hasClass('js_clicked') ) {
//                                setTimeout(function() {
//                                    $pages.removeClass('js_clicked');
//                                }, 150);
//
//                                autoObj.paused = false;
//                            }
//
//                            if( autoObj.running ) {
//                                autoObj.run();
//
//                                $play.attr('aria-pressed', 'true');
//                            }
//                        }
//                    }, 100);

                    setTimeout(function() {
                        if( autoObj.running && !$pages.filter(':focus').length ) {
                            setTimeout(function() {
                                $pages.removeClass('js_clicked');
                            }, 150);

                            autoObj.run();

                            $play.attr('aria-pressed', 'true');
                        }
                    }, 100);
                })
                .on('pointerdown click', '.UI_carousel .swiper-pagination-clickable >*', function(evt) {
                    evt.stopPropagation();

                    if( evt.type === 'click' ) {
                        var bind = this, $page = $(bind);
                        var $swiper = $page.closest('.swiper-container');
                        var $play = $swiper.find('.swiper-button-toggle');
                        var wrapIndex = $swiper.index('.UI_carousel');
                        var id = $swiper.attr('data-fn-carousel-id') || 'swipeR' + wrapIndex;
                        var Obj = onExt.page[id];
                        var autoObj = Obj.autoplay;

                        if( autoObj.running ) {
                            $page
                                .addClass('js_clicked')
                                .siblings()
                                    .removeClass('js_clicked')
                            ;

                            setTimeout(function() {
                                autoObj.pause();

                                $play.attr('aria-pressed', 'false');

                                bind.blur();
                                bind.focus();
                            }, (Obj.params.speed || 300) + 50);
                        }
                    }
                })
                .on('pointerdown', '.UI_carousel', function(evt) {
                    var bind = this, $swiper = $(bind);
                    var _page = '.swiper-pagination-clickable >*';

                    if( !$(evt.target).is(_page) ) {
                        $swiper.find(_page + ':focus').trigger('blur');
                    }
                })
            ;
        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };

    onExt.ui.$_collapse = {
        tag: 'collapse',

        ext: {},

        "prev": function() {
            
        },
        
        "next": function() {
            
        },
        
        "loop": function() {
            
        },

        create: function() {
            var tag = this.tag;

            $('.UI_collapse')
                .each(function(idx) {
                    var node = this, $wrap = $(node)/* .not('.js_collapse-loaded') */;
                    var wrapIndex = idx;
                    var name = $wrap.attr('data-collapse-id');

                    if( !name ) {
                        $wrap.attr('data-collapse-id', 'jsidx_folds' + (wrapIndex + 1));

                        name = $wrap.attr('data-collapse-id');
                    }

                    var fxType = $wrap.attr('data-fn-collapse-fxtype') || $wrap.attr('data-fn-collapse-fxtype', 'slide');
                    var _panel = '[data-fn~="FN_toggle-panel"]';

                    $wrap
                        .find(_panel)
                            .each(function(idx) {
                                var node = this, $panel = $(node);
                                var isChild = $panel.parent().is('.UI_collapse');
                                var $item = ( isChild ) ? $panel : $panel.parentsUntil('.UI_collapse');
                                var $fire = ( isChild ) ? $item.prev().find('.FN_toggle').first() : $item.find('.FN_toggle').first();
                                var $label = ( $fire.is('[data-fn~="FN_bindsRow-item"]') ) ? $fire.closest('.FN_bindsRow') : $fire;
                                var itemIndex = $item.index( ( isChild ) && _panel ) + 1;

                                $panel
                                    .data({
                                        'jsToggleHidden': true,
                                        'collapsePanelId': ( $panel.attr('id') && $panel.attr('id').indexOf(name) === -1 ) && $panel.attr('id'),
                                        'ariaLabelledby': ( $panel.attr('aria-labelledby') && $panel.attr('aria-labelledby').indexOf(name) === -1 ) && $panel.attr('aria-labelledby')
                                    })
                                    .attr({
                                        'id': ( $panel.data('collapsePanelId') ) || name + '_panel' + itemIndex,
                                        'aria-labelledby': ( $panel.data('ariaLabelledby') ) || name + '_label' + itemIndex
                                    })
                                    .prop('hidden', function() {
                                        if( $wrap.data('fnCollapseFold') === 'opened' ) {
                                            $panel.addClass('js_toggle-show');

                                            return false;

                                        } else {
                                            $panel.addClass('js_toggle-hide');

                                            return true;
                                        }
                                    })
                                ;

                                $label
                                    .data({
                                        'collapseLabelId': ( $label.attr('id') && $label.attr('id').indexOf(name) === -1 ) && $label.attr('id')
                                    })
                                    .attr({
                                        'id': ( $label.data('collapseLabelId') ) || name + '_label' + itemIndex
                                    })
                                ;

                                $fire
                                    .data({
                                        'ariaControls': ( $fire.attr('aria-controls') && $fire.attr('aria-controls').indexOf(name) === -1 ) && $fire.attr('aria-controls')
                                    })
                                    .attr({
                                        //'aria-expanded': ( $panel.is(':visible') ) ? true : false,
                                        'aria-controls': ( $fire.data('ariaControls') ) || name + '_panel' + itemIndex
                                    })
                                ;

                                onExt.fn.$_toggle.fireReset( '#' + node.id );
                            })
                        /*     .end()
                        .addClass('js_collapse-loaded') */
                    ;
                })
            ;
        },

        destroy: function() {
            
        },

        refresh: function() {
            this.create();
        },

        callback: function() {
            $(document)
                .on('click.toggles.collapse', '.UI_collapse .FN_toggle', function(evt) {
                    if( $(this).is('a') ) {
                        evt.preventDefault();
                    }

                    var xtToggle = onExt.fn.$_toggle;
                    var duration = xtToggle.ext.duration - xtToggle.ext.delay;

                    var bind = this, $fire = $(bind);
                    var $wrap = $fire.closest('.UI_collapse');
                    var fxType = $wrap.attr('data-fn-collapse-fxtype');
                    var fxSpeed = $wrap.attr('data-fn-collapse-fxspeed') * 1;
                    var _target = '#' + $fire.attr('aria-controls');
                    var _panel = '[data-fn~="FN_toggle-panel"]';
                    var $panel = $(_target);
                    var isChild = $panel.parent().is('.UI_collapse');
                    // var $panels = ( isChild ) ? $panel.siblings(_panel) : $panel.parentsUntil('.UI_collapse').siblings().find(_panel + ':eq(0)');
                    var $panels = ( isChild ) ? $panel.parent().children(_panel) : $panel.parentsUntil('.UI_collapse').parent().children().find(_panel + ':eq(0)');

                    $panel
                        .filter(':hidden')
                            .removeClass(function() {
                                var cnTemp = 'temp_collapse-ready';
                                var imp = onExt.pre._.imp;
                                // var rule = '.' + cnTemp + '  { display: block' + imp + '; position: absolute' + imp + '; visibility: hidden' + imp + '; }';
                                var rule = '.' + cnTemp + '{display:block' + imp + ';position:absolute' + imp + ';visibility:hidden' + imp + ';}';

                                onExt.fn.attachStyle(rule, 'pageTempStyles', !1);

                                $panel.addClass(cnTemp);

                                fxSpeed = fxSpeed || Math.max(duration, Math.min(parseInt($panel.innerHeight() / 2.5, 10), 1e3));
                                // console.log( fxSpeed );

                                return cnTemp;
                            })
                    ;

                    if( $wrap.data('fnCollapseAutofold') === true ) {
                        $panels
                            .filter(':visible:not(' + _target + ')')
                                .each(function(idx) {
                                    var node = this, $opened = $(node);
                                    var isNext = $panels.index($panel[0]) > $panels.index(node);
                                    var isFlow = $opened.innerHeight() > Math.floor(window.innerHeight / 100) * 100;
                                    // var fxSpeedAuto = ( isNext && isFlow ) ? 0 : fxSpeed;
                                    // var fxSpeedAuto = ( isNext && isFlow ) ? 0 : fxSpeed = duration;
                                    // var fxSpeedAuto = ( isNext && isFlow ) ? 0 : fxSpeed = ( isNext ) ? duration : fxSpeed;
                                    var fxSpeedAuto = ( isNext && isFlow ) ? 0 : ( isNext ) && (fxSpeed = duration);
                                    // console.log( fxSpeedAuto );

                                    xtToggle.hide('#' + node.id, fxType, fxSpeedAuto);
                                })
                        ;
                    }
                    // console.log( fxSpeed || duration );

                    xtToggle.toggle(_target, fxType, fxSpeed || duration);
                })
            ;
        },

        init: function() {
            this.callback();
            this.refresh();
        }
    };

    onExt.fn.$_selectToggle = {
        refresh: function() {
            
        },
        
        callback: function() {
            $(document)
                .on('change', '.FN_selectToggle', function(evt) {
                    var bind = this, $sel = $(bind);
                    var match = $sel.data('jsToggleName');
                    var index = $sel.find('option:selected').index();

                    $('.FN_selectToggle-item[data-js-toggle-name="' + match + '"]')
                        .hide()
                        .eq(index)
                            .show()
                    ;
                })
            ;
        },
        
        init: function() {
            this.callback();
            this.refresh();
        }
    };












    onExt.fn.$_detectResolution = {
        tag: 'detectResolution',

        sel: '#tempDimensions',

        ext: {},

        create: function() {
            var id = this.sel.slice(1);
            var style = 'font-size:9pt; position:fixed; left:-1in; top:-3ex; width:1in; height:100%; height:100vh; overflow-y:scroll; visibility:hidden; -webkit-transition:0s; transition:0s;';
            var _temp_ = '<div id="' + id + '" aria-hidden="true" class="jsui_createnode" style="' + style + '"><div>&nbsp;<\/div><\/div>';
            var getId = onExt.get.id;

            if( !getId(id) ) {
                onExt.fn.attachNode(_temp_, getId('Document') || document.body);
            }
        },

        value: function() {
            this.create();

            var value = onExt.bom.resolution = onExt.bom.resolution / 96 * onExt.get.id(this.sel).offsetWidth;

            return value;
        },

        "zoom": function() {
            var value = onExt.bom.zoomLevel = Math.round((window.devicePixelRatio || 1) * 100);

            return value;
        },

        init: function() {
            this.value();
        }
    };

    onExt.fn.$_detectHeight = {
        tag: 'detectHeight',

        ext: {
            "$tempVh": undefined
        },

//        "reset": function() {
//            var id = 'varRemainedHeight';
//            // var viewportHeight = document.documentElement.clientHeight; /* 100vh - bar */
//            var remain = window.screen.availHeight - document.documentElement.clientHeight;
//            // var remain = window.screen.availHeight - window.innerHeight;
//            var rule = '';
//
//            rule += ':root  { --height-window-remainder: ' + (( onExt.bom.isFrame() ) ? '0' : remain) + 'px; }';
//
//            rule = onExt.fn.trimStyleRules(rule);
//
//            onExt.fn.attachStyle(rule, id, true);
//
//            $('#' + id).attr('data-js-value', remain);
//
//            /* iOS = 75 * 50 / Android = 56 * 56 */
//            // onExt.test.log.header(window.screen.availHeight + ' - ' + document.documentElement.clientHeight + ' = ' + remain);
//            onExt.test.log.header( $( document.documentElement ).height() ); // -webkit-fill-available
//        },

        "orient": function() {
            var cnOrient = 'js_orientation';
            var $root = onExt.pre.$.root;

            $root.addClass(cnOrient);

            setTimeout(function() {
                $root.removeClass(cnOrient + ' js_scrolldown');
            }, 350);
        },

        "viewport": function() {
            var vid = 'varViewportHeight';
            var cnVh = 'js_viewport';
            var cnMaxVh = 'js_maxvh';
            var _root = onExt.dom._.root;
            var $root = onExt.pre.$.root;
            var $temp = this.ext.$tempVh || (this.ext.$tempVh = $(onExt.fn.$_detectResolution.sel));
            var minVh = _root.clientHeight;
            var maxVh = minVh;
            var winVh = window.innerHeight;
            var rule = [];

            $root
                .removeClass(function() {
                    if( $temp.length ) {
                        maxVh = parseInt($temp.innerHeight(), 10);

                    } else {
                        /* if( $(this).hasClass(cnVh) ) {
                            maxVh = parseInt($(this).innerHeight(), 10);

                        } else {
                            $(this).addClass(cnVh);

                            maxVh = parseInt($(this).innerHeight(), 10);

                            return cnVh;
                        } */
                        $(this).addClass(cnVh);

                        maxVh = parseInt($(this).innerHeight(), 10);

                        return cnVh;
                    }
                })
                .addClass(function() {
                    if( maxVh !== winVh ) {
                        $(this).removeClass(cnMaxVh);

                    } else {
                        return cnMaxVh;
                    }
                })
                .attr({
                    // 'data-js-vh-max': maxVh,
                    'data-js-vh-win': winVh
                })
            ;

            rule.push(':root  {');
            rule.push('  --height-window-maximum: ' + maxVh + 'px;');
            rule.push('  --height-window-variable: ' + winVh + 'px;');
            rule.push('}');

            rule = rule.join('\n');

            onExt.fn.attachStyle(rule, vid, !0);

            // onExt.test.log.header( maxVh + ' / ' + winVh + ' / ' + minVh );
            // onExt.test.log.contain( maxVh + ' / ' + winVh + ' / ' + minVh );

            return winVh;
        },

        "window": function() {
            
        }
    };

    onExt.fn.$_detectScroll = {
        tag: 'detectScroll',

        ext: {
            "direction": undefined,

            "status": undefined
        },

        "barSize": function() {
            var vid = 'varScrollbarWidth';
            /* var id = 'tempDimensions';
            var style = 'font-size:9pt; position:fixed; left:-1in; width:1in; height: 100%; height: 100vh; overflow-y:scroll; visibility:hidden;';
            var _temp_ = '<div id="' + id + '" aria-hidden="true" class="jsui_createnode" style="' + style + '">&nbsp;<\/div>';
            var getId = onExt.get.id; */
            var getRes = onExt.fn.$_detectResolution;
            var _temp = onExt.get.id( getRes.sel );

            var $root = onExt.pre.$.root;
            var rule = [];
            var value;

            /* if( !getId(id) ) {
                onExt.fn.attachNode(_temp_, getId('Document') || document.body);
            } */
            getRes.create();

            // value = onExt.bom.scrollbarWidth = _temp.offsetWidth - _temp.clientWidth;
            // console.log( (_temp.offsetWidth - _temp.childNodes[0].getBoundingClientRect().width) * window.devicePixelRatio );
            value = onExt.bom.scrollbarWidth = Math.round( (_temp.offsetWidth - _temp.childNodes[0].getBoundingClientRect().width) * window.devicePixelRatio );

            $root
                .attr({
                    'data-js-size-scrollbar': value
                })
            ;

            rule.push(':root  {');
            rule.push('  --width-window-scrollbar: ' + value + 'px;');
            rule.push('}');

            rule = rule.join('\n');

            onExt.fn.attachStyle(rule, vid, !0);

            return value;
        },

        "top": function(obj) {
            var cnScroll = 'js_scrolling';
            var cnStart = 'js_scrollstart';
            var cnEnd = 'js_scrollend';
            var cnUp = 'js_pageup';
            var cnDown = 'js_pagedown js_scrolldown';
            var isWin = obj === window;
            var _scroll, $root, $header, $footer;
            var footerHeight, _topDatums_, _bottomDatums_;
            var timeout, scrollY;

            if( !isWin ) {
                // _scroll = '[data-js-layer-index="0"] .js_scrollready:visible';

                if( !event ) {
                    obj = onExt.pre.$.popbody[0];

                } else {
                    obj = event.target;
                }

                $root = $(obj).parent();
                $header = $root.prevAll('.layer-head');
                $footer = $root.find('>.div-footer').first();
                footerHeight = $footer.innerHeight() / 2 || 0;
                _topDatums_ = $header.innerHeight() / 2 || 0;
                _bottomDatums_ = obj.scrollHeight - obj.offsetHeight - footerHeight;
                timeout = 1e3 / 10;
                scrollY = obj.scrollTop;

            } else {
                _scroll = onExt.dom._.root;
                $root = onExt.pre.$.root/* .filter('.js_scrollable') */;
                $header = $('.dom-header').first();
                $footer = $('.dom-main >:visible >.div-footer');
                footerHeight = ( /\bfixed\b/i.test( $footer.css('position') ) ) ? $footer.innerHeight() / 2 : 0;
                _topDatums_ = ( !/\b(static|relative)\b/i.test( $header.css('position') ) ) ? $header.innerHeight() / 2 : 0;
                _bottomDatums_ = _scroll.scrollHeight - obj.innerHeight - footerHeight;
                timeout = 1e3 / 20;
                scrollY = parseInt(onExt.bom.scrollY(), 10);
            }

            var scrollYData = $root.data('jsScrollTop') || 0; //###
            var deltaY = 5;
            var Scrolled;

            clearTimeout(Scrolled);

            Scrolled = setTimeout(function() {
                if( scrollY > _topDatums_ ) {
                    $root.addClass(cnStart);

                } else {
                    $root.removeClass(cnStart);
                }

                if( scrollY >= _bottomDatums_ ) {
                    $root.addClass(cnEnd);

                } else {
                    $root.removeClass(cnEnd);
                }

                 //###
                //if( Math.abs(scrollYData - scrollY) > deltaY ) {
                if( isWin && !!onExt.bom.afterScroll && Math.abs(scrollYData - scrollY) > deltaY ) {
                    if( scrollYData > scrollY ) {
                        // console.log( 'up: ' + scrollYData + ', ' + scrollY );

                        $root
                            .removeClass(function() {
                                $(this).addClass(cnUp);

                                return cnDown;
                            })
                        ;

                    } else {
                        // console.log( 'down: ' + scrollYData + ', ' + scrollY );

                        $root
                            .removeClass(function() {
                                $(this).addClass(( scrollYData && !$root.hasClass('js_orientation') ) ? cnDown : cnDown.split(' ')[0]);

                                return cnUp;
                            })
                        ;
                    }

                    $root.data('jsScrollTop', scrollY);
                }
                 //###
            }, timeout || 0);
        }
    };

    onExt.fn.$_detectKeyboard = {
        tag: 'detectKeyboard',

        sel: onExt.get.pushArraySel('inputs', '', ':not([readonly]):not([aria-readonly="true"])'),

        ext: {},

        callback: function() {
            var tag = this.tag;
            var _input = this.sel;
            // var _focus = onExt.get.pushArraySel([''].concat(_input.split(', ')), '', ':focus');
            var cnReady = 'js_keyready';
            var cnLoad = 'js_keyload';
            var $root = onExt.pre.$.root;

            $(document)
                .on('blur.inputs.' + tag, _input, function(evt) {
                    setTimeout(function() {
                        var $focus = $(_input).filter(':focus');

                        if( !$focus.length ) {
                            $(document).off(onExt.dom.onWheel + '.inputs.' + tag);

                            $(window).off('resize.inputs.' + tag);

                            $root.removeClass(cnLoad + ' ' + cnReady);
                        }
                    }, 100);
                })
                .on('focus.inputs.' + tag, _input, function(evt) {
                    $root.addClass(cnReady);

                    // var bind = this, $input = $(bind);
                    var width0 = window.innerWidth;
                    var height0 = window.innerHeight;
                    var scroll0 = parseInt(onExt.bom.scrollY(), 10);
                    var Repeat;

                    function Opened() {
                        if( !$root.hasClass(cnLoad) ) {
                            var height1 = window.innerHeight;
                            var scroll1 = parseInt(onExt.bom.scrollY(), 10);

                            if( scroll0 !== scroll1 || height0 !== height1 ) {
                                $root.addClass(cnLoad);
                            }

                            height0 = window.innerHeight;

                            $(document)
                                .on(onExt.dom.onWheel + '.inputs.' + tag, function(evt) {
                                    $root.removeClass(cnLoad);
                                })
                            ;

                            $(window)
                                .on('resize.inputs.' + tag, function(evt) {
                                    var width1 = window.innerWidth;
                                    var height1 = window.innerHeight;
                                    var isOrientation = width0 !== width1;

                                    // onExt.test.log.contain( width0 + ' / ' + width1 );
                                    if( !isOrientation && height1 - height0 > 120 ) {
                                        $root.removeClass(cnLoad);

                                    } else if( !isOrientation && height0 - height1 > 120 ) {
                                        $root.addClass(cnLoad);
                                    }

                                    height0 = height1;

                                    setTimeout(function() {
                                        width0 = width1;
                                    }, 500);
                                })
                            ;

                            /* setTimeout(function() {
                                $input.trigger('focus');
                            }, 500); */
                        }
                    }

                    setTimeout(function() {
                        Opened();

                        Repeat = setInterval(Opened, 150);
                    }, 200);

                    setTimeout(function() {
                        if( $root.hasClass(cnLoad) ) {
                            clearInterval(Repeat);
                        }
                    }, 600);

                    setTimeout(function() {
                        clearInterval(Repeat);
                    }, 900);
                })
            ;
        }
    };











    /** Plugins */
    onExt.fn.$_datepicker = {
        create: function() {
            $('.FN_datepicker')
                .each(function(idx) {
                    var node = this, $date = $(node);
                    var _name = $date.attr('data-js-date-name');
                    var _range = $date.attr('data-js-date-range');
                    var _min = $date.attr('data-js-date-min');
                    var _max = $date.attr('data-js-date-max');

                    // console.log( _name ); //###

                    try {
                        $date
                            .AbDatepicker({
                                // weekDayFormat: 'narrow',
                                update: true,
                                refresh: true,
                                inputFormat: ['yyyy-MM-dd'],
                                outputFormat: 'yyyy-MM-dd',
                                next: ( _range === 'start' ) ? '[data-js-date-name="' + _name + '"][data-js-date-range="end"]' : null,
                                previous: ( _range === 'end' ) ? '[data-js-date-name="' + _name + '"][data-js-date-range="start"]' : null,
                                min: ( _min ) ? _min : null,
                                max: ( _max ) ? _max : null,
                                modal: true,
                                onUpdate: function(evt) {
                                    $date
                                        .trigger('input')
                                    ;
                                }
                            })
                            .prop({
                                readonly: true
                            })
                            .get(0)
                                .blur()
                        ;

                    } catch(err) {}
                })
            ;
        },

        destroy: function() {
            $('.FN_datepicker.form-control')
                .each(function(idx) {
                    var node = this, $date = $(node);

                    /* $date
                        // .nextUntil('.datepicker-calendar')
                        .siblings('.datepicker-calendar')
                            .remove()
                            .end()
                        .next('.datepicker-button')
                            .remove()
                            .end()
                        .removeAttr('readonly aria-invalid aria-autocomplete')
                        .removeClass('form-control')
                    ; */
                })
            ;
        },

        refresh: function() {
            /* var obj = this;

            // obj.destroy();
            obj.create(); */

            this.create();
        },

        callback: function() {
            /* $(document)
                .on('click', '.FN_datepicker-wrap input, .FN_datepicker', function(evt) {
                    $(this)
                        .next('.datepicker-button')
                            .triggerHandler('click')
                    ;
                })
                .on('click', '.FN_datepicker-wrap input ~.date-button, .FN_datepicker ~.date-button', function(evt) {
                    $(this)
                        .parent()
                            .find('input')
                                .trigger('click')
                    ;
                })
            ; */

            $(document)
                .on('click', '.FN_datepicker', function(evt) {
                    $(this)
                        .next('.datepicker-button')
                            .triggerHandler('click')
                    ;
                })
                .on('mouseup', '.datepicker-overlay', function(evt) {
                    $('.datepicker-calendar .datepicker-close')
                        .trigger('click')
                    ;
                })
            ;
        },

        init: function() {
            this.refresh();
            this.callback();
        }
    };












    onExt.test.log = {
        header: function(log) {
            /* $('.dom-header')
                .find(':not(iframe)')
                    .addBack()
                .contents()
                    .filter(function() {
                        return this.nodeType === 3;
                    })
                        .text(log)
            ; */
            $('.dom-header .div-title')
                .contents('.inner')
                    .text(log)
            ;
//        },
//
//        contain: function(log) {
//            $('.div-contents:visible')
//                .contents()
//                    .prepend('<p>' + log + '</p>')
//            ;
        }
    };

    onExt.test.perf = function(callback, count) {
        if( window.performance && performance.now ) {
            var start = performance.now();
            var end;
            var msg;

            count = count || 1e4;

            for( var i = 0; i < count; i++ ) {
                callback();
            }

            end = performance.now();
            msg = 'performance.time: ' + (end - start) + 'ms';

            return console.log( msg );
        }
    };

//    ///* 
//    onExt.test.$1 = function() {
//        onExt.pre.$.popbody;
//    };
//    onExt.test.perf( onExt.test.$1, 5e3 );
//    // */
















    /* Functions Ordering */
    onExt.get.$ = {
        "Bind": function() {
            onExt.fn.$_fireActiveEvents.callback();
            onExt.fn.$_fireHashChange.callback();
            onExt.fn.$_focusin.callback();
            onExt.fn.$_keypressEnter.callback();
            // onExt.fn.$_inputDateChange.callback();
            onExt.fn.$_radioPreventArrowKey.callback();
            onExt.fn.$_actChecks.callback();
            onExt.fn.$_actRadio.callback();
            onExt.fn.$_focusTrap.callback();
        },

        "Create": function() {
            onExt.fn.$_navCtrl.init();
            onExt.ui.$_createSelectHint.init();
            onExt.ui.$_collapse.init();
        },

        "Attr": function() {
            
        },

        "Class": function() {
            onExt.ui.$_scrollableArea.init();
        },

        "Style": function() {
            onExt.ui.$_checkValue.init();
            onExt.ui.$_modifyButtonText.init();
        },

        "Plugin": function() {
            $.fn.duDatepicker = function(options) {
                duDatepicker(this.selector, options);

                return this;
            };

            $.fn.Panmove = $.fn.hammer;
            $.fn.Touchmove = $.fn.swipe;
            $.fn.AbDatepicker = $.fn.datepicker;
            $.fn.DuDatepicker = $.fn.duDatepicker;
        },

        "Action": function() {
            onExt.fn.$_bindsRow.init();
            onExt.fn.$_selectToggle.init();
            onExt.fn.$_listbox.init();
            onExt.fn.$_hasPopup.init();
            onExt.fn.$_tabpanel.init(); // (*Deprecated)
            onExt.ui.$_carousel.init();
            // onExt.ui.$_tabpanel.init();
        },

        "Common": function() {
            onExt.ui.$_varStickyLayout.init();
            onExt.fn.$_detectResolution.init();
            onExt.fn.$_detectKeyboard.callback();
            onExt.fn.$_popup.callback();

            onExt.fn.$_datepicker.init();
        },

        "Document": {
            "scroll": function() {
                onExt.fn.$_detectScroll.top();
            }
        },

        "Window": {
            "popstate": function() {
                onExt.fn.$_hashChange();
            },

            "hashchange": function() {
                $(window).triggerHandler('popstate');
            },

            "scroll": function() {
                var $root = onExt.pre.$.root;
                var afterScroll = onExt.bom.afterScroll;

                if( !!afterScroll && onExt.bom.scrollY() /* && !$root.hasClass('js_scrolling') */ ) $root.addClass('js_scrolling');

                onExt.fn.$_detectScroll.top(window);
            },

            "afterScroll": function() {
                var $root = onExt.pre.$.root;
                var afterScroll = onExt.bom.afterScroll = onExt.bom.afterScroll || onExt.bom.hasEvents(window, 'scroll.window@afterScroll');

                $root
                    .filter('.js_scrolling')
                        .removeClass('js_scrolling')
                        .addClass(function() {
                            setTimeout(function() {
                                $root.removeClass('js_pageup js_pagedown js_scrollstop');

                            }, 150);

                            return 'js_scrollstop';
                        })
                ;
            },

            "orientationchange": function() {
                onExt.fn.$_detectHeight.orient();
            },

            "resize": function() {
                var $root = onExt.pre.$.root;
                var afterResize = onExt.bom.afterResize;

                if( !!afterResize ) $root.addClass('js_resizing');

                onExt.ui.$_carousel.update();
                onExt.fn.$_detectResolution.zoom();
                onExt.fn.$_detectHeight.viewport();
                onExt.fn.$_detectScroll.barSize();

                if( !afterResize ) {
                    onExt.pre.$.popbody.triggerHandler('scroll');
                    $(window).triggerHandler('scroll');
                }
            },

            "afterResize": function() {
                var $root = onExt.pre.$.root;
                var afterResize = onExt.bom.afterResize = onExt.bom.afterResize || onExt.bom.hasEvents(window, 'resize.window@afterResize');

                $root
                    .filter('.js_resizing')
                        .removeClass('js_resizing')
                        .addClass(function() {
                            setTimeout(function() {
                                $root.removeClass('js_resized');
                            }, 150);

                            return 'js_resized';
                        })
                ;

                onExt.pre.$.popbody.triggerHandler('scroll');
                $(window).triggerHandler('scroll');
            },

            "update": function() {
                var obj = this;

                obj.hashchange();
                obj.orientationchange();
                obj.resize();

                if( !!obj.afterResize ) obj.afterResize();
            }
        },

        "ready": function() {
            var obj = this;

            obj.Bind();
            obj.Create();
            obj.Attr();
            obj.Class();
            obj.Style();
        },

        "load": function() {
            var obj = this;

            obj.Plugin();
            obj.Action();
            obj.Common();
        },

        "update": function() {
            var obj = this;

            obj.ready();
            obj.load();
            obj.Window.update();
        },

        "test": function() {
            /* var mut = new MutationObserver(function(mutations, mut) {
                // if attribute changed === 'class' && 'open' has been added, add css to 'otherDiv'
            });
            mut.observe(document.querySelector('.selector'), {
                'attributes': true
            }); */

//            $(document)
//                .on('keyup.test', function(evt) {
//                    console.log( onExt.dom.onKey(evt) );
//                })
//            ;

//            $('head')
//                // .append( '<style>:root  { --height-window-remainder: ' + (( top.length /* && !frames.length */ ) ? '0' : window.screen.availHeight - document.documentElement.clientHeight) + 'px; }</style>' )
//                .append( '<style>:root  { --height-window-remainder: ' + (( onExt.bom.isFrame() ) ? '0' : window.screen.availHeight - document.documentElement.clientHeight) + 'px; }</style>' )
//            ;

        }
    };


    /** jQuery Chaining Extend-Functions */
    $.fn.PreFocus = function(target, delay) {
        onExt.dom.focus(target || this[0], delay);

        return this;
    };

    $.fn.AddJsAttr = function(value) {
        value = $.trim(value).replace(/\s+/g, ' ').split(' ');

        var prop = 'data-js-attr';
        var attr = this.attr(prop);

        /* console.log(value);
        for( var i = 0; i < value.length; i++ ) {new RegExp(' ' + cls + ' ').test( prop.replace(prop, ' ' + prop + ' ') )
            if( !(this.hasClass(value[i], param)) ) {
                param.className += (( param.className ) && ' ') + value[i];
            }
        } */

        return this;
    };

    $.fn.ReplaceTagName = function(tagName) {
        onExt.fn.$_replaceTagName(tagName, this);

        return this;
    };

}( jQuery, window, document, location ));


jQuery(document).ready(function($) {
    "use strict";

    var get = onExt.get.$;

//    $(document)
//        /* .on('keydown', 'label:not(:has(' + onExt.get.pushArraySel(onExt.pre.forms) + '))', function(evt) {
//            if( /13|32/.test( onExt.dom.onKey(evt) ) ) {
//                this.click();
//            }
//        }) */
//
//
//
//
//
//
//
//
//
//
//        /* .triggerHandler('touchend') */
//    ;

    /* document.querySelector('._has-modal, ._has-modal body').addEventListener(onExt.dom.onWheel, function(evt) {
        console.log( evt.className );
        // evt.stopPropagation();
        evt.preventDefault();
    }, { passive: false });

    document.querySelector('._has-modal, ._has-modal body').addEventListener('touchmove', function(evt) {
        console.log( evt.className );
        // evt.stopPropagation();
        evt.preventDefault();
    }, { passive: false }); */

    get.ready();
    get.test();//###

});


jQuery(window).on('load', function(evt) {
    "use strict";

    var $ = jQuery;
    var get = onExt.get.$;
    var win = get.Window;
    var opt = onExt.fx;

    get.load();

    $(this)
        /* .on({
            scroll: opt.debounce( win.afterScroll, 150 ),

            resize: opt.debounce( win.afterResize, 350 )
        }) */
        .on('scroll.window@afterScroll', opt.debounce( win.afterScroll, 150 ))
        .on('resize.window@afterResize', opt.debounce( win.afterResize, 350 ))
        .on({
            popstate: win.popstate,

            hashchange: win.hashchange,

            scroll: opt.reqFrame( win.scroll ),

            orientationchange: win.orientationchange,

            resize: opt.reqFrame( win.resize )
        })
        // .trigger('hashchange')
        .triggerHandler('resize')
    ;

});
