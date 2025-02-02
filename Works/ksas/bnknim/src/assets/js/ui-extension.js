if( window.NodeList && !NodeList.prototype.forEach ) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for( var i = 0; i < this.length; i++ ) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


; (function(window, document, undefined) {
    "use strict";

    let onExt = window.onExt = window.onExt || {};

    if( onExt.test ) {
        alert( 'Load Notification: The object \"window.onExt\" is already defined.' );

        return false;
    }

    onExt.get = onExt.get || {};
    onExt.fx = onExt.fx || {};
    onExt.fn = onExt.fn || {};
    onExt.ui = onExt.ui || {};
    onExt.page = onExt.page || {};
    onExt.test = onExt.test || {};


    onExt.fn.collapse = {
        attach: function() {
            let navs = document.querySelectorAll('.dom-nav .UI_collapse >* >.label:not(:only-child)');

            // for( let anchor of navs ) {
            for( let i = 0; i < navs.length; i++ ) {
                navs[i].addEventListener('click', function(evt) {
                    evt.preventDefault();

                    let bind = this;
                    //let func = bind.closest('.UI_collapse');
                    let _cond = bind.getAttribute('aria-expanded');

                    navs.forEach(function(elem) {
                        if( elem !== bind ) {
                            elem.setAttribute('aria-expanded', 'false');
                        }
                    });

                    if( _cond === 'false' ) {
                        bind.setAttribute('aria-expanded', 'true');

                    } else {
                        bind.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        },

        callback: function() {
            
        },

        init: function() {
            this.callback();
            this.attach();
        }
    };

//onExt.page.colorset = {
//    dashboard1: window.getComputedStyle(document.documentElement).getPropertyValue('--color-dashboard1') || '#ff0000',
//    dashboard2: window.getComputedStyle(document.documentElement).getPropertyValue('--color-dashboard2') || '#ffff00'
//};

    onExt.fn.getRowData = function(elem, del, reverse, index) {
        index = index || 0;

        var datas = [];

        elem.childNodes
            .forEach(function(elem) {
                if( elem.innerText ) {
                    datas.push( elem.innerText );
                }
            })
        ;

        datas.splice(index, del);

       if( reverse === true ) {
           datas = datas.reverse();
       }

        return datas;
    };

    onExt.page.chart5Calc = function(val) {
        val = Math.round( parseFloat(val) );

        if( isNaN(val) ) {
            val = 50;
        }

        if(val < -50) {
            val = -50;

        } else if(val > 50) {
            val = 50;
        }

        var per = -val + 50;
        var deg = 180 / 100 * per;

        return deg;
    };

    /* onExt.page.chart5Draws = function(array) {
        if( array ) {
            if( typeof array !== 'object' ) {
                array = arguments;
            }

            for( var i = 0; i < array.length; i++ ) {
                array[i] = onExt.page.chart5Calc( array[i] );
            }
        }

        return array;
    }; */

    onExt.page.chart5Draw = function(val, elem) {
        if( elem ) {
            // elem = elem || document.documentElement;

            var deg = onExt.page.chart5Calc(val);

            elem.style.WebkitTransform = 'rotate(' + deg + 'deg)';
            elem.style.transform = 'rotate(' + deg + 'deg)';
        }
    };

    onExt.page.chart5Push = function(array) {
        if( array ) {
            if( typeof array !== 'object' ) {
                array = arguments;
            }

            var items = document.querySelectorAll('.p-dashboard .region.is-sect5 .diagram >* >*');

            items
                .forEach(function(elem, idx) {
                    var score = Math.round( parseFloat( array[idx] ) );

                    if( isNaN(score) ) {
                        score = '--';
                    }

                    if( score < 0 ) {
                        elem.querySelector('.chart .DATA').innerHTML = '<span class="neg">-</span>' + score.toString().slice(1);

                    } else {
                        elem.querySelector('.chart .DATA').innerText = score;
                    }
                })
            ;
        }
    };

    onExt.page.chart5 = {
        callback: function() {
            var chart5 = document.querySelector('.p-dashboard .region.is-sect5');

            if( chart5 ) {
                var chart5Diagram = chart5.querySelectorAll('.chart .DATA');
                var chart5Row = chart5.querySelectorAll('.table tbody tr:not(.nodata)');

                chart5Diagram
                    .forEach(function(elem) {
                        elem
                            .addEventListener('DOMSubtreeModified', function(evt) {
                                var bind = this;
                                var value = parseFloat( bind.innerText );
                                var target = bind.previousSibling.childNodes[0];
                                var wrap = bind.parentNode;
                                var status = ['is-status1', 'is-status2', 'is-status3', 'is-status4', 'is-status5'];
                                var vars;

                                if( value < -25 ) {
                                    vars = status[4];

                                } else if( value < 0 ) {
                                    vars = status[3];

                                } else if( value < 25 ) {
                                    vars = status[2];

                                } else {
                                    vars = status[1];
                                }

                                // wrap.classList.remove( status.map(function(val) { return '\'' + val + '\'' }).join(', ') );
                                // wrap.classList.remove( ...status );
                                wrap.classList.remove.apply( wrap.classList, status );
                                wrap.classList.add( vars );

                                onExt.page.chart5Draw(value, target);
                            })
                        ;
                    })
                ;

                chart5Row
                    .forEach(function(elem) {
                        var selected = 'js_selected';

                        elem
                            .addEventListener('click', function(evt) {
                                var bind = this;
                                var datas = onExt.fn.getRowData(elem, 2, !0);

                                onExt.page.chart5Push(datas);

                                chart5Row
                                    .forEach(function(elem) {
                                        elem.classList.remove(selected);
                                    })
                                ;

                                elem.classList.add(selected);
                            })
                        ;

                        if( elem.classList.contains('js_selected') ) {
                            var event = document.createEvent('Event');

                            event.initEvent('click', false, true);
                            elem.dispatchEvent(event);
                        }
                    })
                ;
            }
        },

        init: function() {
            this.callback();
        }
    };


    window.addEventListener('DOMContentLoaded', function(evt) {
        onExt.fn.collapse.init();
        onExt.page.chart5.init();
    });

    window.addEventListener('load', function(evt) {
        
    });

}( window, document ));
