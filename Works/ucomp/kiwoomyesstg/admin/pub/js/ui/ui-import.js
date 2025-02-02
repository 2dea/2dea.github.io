; (function(document, $HTML, undefined) {
    "use strict";

    var cssPath = ( document.getElementById('Global-CSS') ) && document.getElementById('Global-CSS').href.replace(/(.*)\/.+\.css($|\?.*$)/g, '$1\/');
    var jsPath = ( document.getElementById('Plugin-JS') ) && document.getElementById('Plugin-JS').src.replace(/(.*)\/.*\/.+\.js($|\?.*$)/g, '$1\/');
    var docLang = ( $HTML.lang ) ? $HTML.lang : 'ko';


    // ( window.CSS && CSS.supports('top', 'var(--var)') || window.cssVars ) || document.write('\n<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"><\/script>\n<script type="text/javascript">cssVars();<\/script>');

    if( jsPath ) {
        ( window.CSS && CSS.supports('top', 'var(--var)') || window.cssVars ) || document.write('\n<script type="text/javascript" src="' + jsPath + '.\/lib\/ponyfill-cssvars.js"><\/script>\n<script type="text/javascript">cssVars();<\/script>');
        document.write('\n<script type="text\/javascript" src="' + jsPath + '.\/lib\/jquery\/jquery.abdatepicker.locale-' + docLang + '.js">\<\/script>');
        document.write('\n<script type="text\/javascript" src="' + jsPath + '.\/lib\/jquery\/jquery.abdatepicker.js">\<\/script>');
    }

    

}( document, document.documentElement ));
