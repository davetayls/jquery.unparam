/**
    jQuery.unparam v0.1
    Dave Taylor http://the-taylors.org

    The reverse of the param function, takes a url and returns an object
    jQuery.unparam('http://the-taylors.org/?foo=one&bar=two');
    returns {object}: { foo: "one", bar: "two" }

    @license The MIT License (MIT)
    @preserve Copyright (c) <2011> <Dave Taylor http://the-taylors.org>
*/
/*jslint browser: true, vars: true, white: true, forin: true, plusplus: true */
(function($){
    'use strict';

    $.unparam = function(url) {
        var vars = {}, hash, i,
            urlParams = url.indexOf('?') > -1 ? url.split('?')[1] : url
        ;
        var hashes = urlParams.split('&');
        for(i = 0; i < hashes.length; i++){
            hash = hashes[i].split('=');
            vars[hash[0]] = decodeURIComponent(hash[1]).replace(/\+/g, ' ');
        }
        return vars;
    };

}(window.jQuery));

