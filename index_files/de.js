var _referer = document.referrer;
var _width = window.innerWidth;
var _height = window.innerHeight;
var _time = parseInt((new Date).getTime() / 1000);
var _url = window.location.href;
var theUrl = '';
var os = function () {
var ua = navigator.userAgent,
 isWindowsPhone = /(?:Windows Phone)/.test(ua),
 isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
 isAndroid = /(?:Android)/.test(ua),
 isFireFox = /(?:Firefox)/.test(ua),
 isChrome = /(?:Chrome|CriOS)/.test(ua),
 isTablet = /(?:PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
 isPad = /(?:iPad)/.test(ua),
 isPhone = /(?:iPhone)/.test(ua) && !isTablet,
 isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
        isPad: isPad
    };
}();

var ua = navigator.userAgent.toLowerCase();
if (ua.match(/MicroMessenger/i) == "micromessenger") {
    if (os.isPad || os.isPhone)
    {
        theUrl = '';
    } else
    {
        theUrl = '';
    }
}
else
{
    if (os.isAndroid || os.isTablet) {
        theUrl = '';
    }
    else if (os.isPad || os.isPhone) {
        theUrl = '';
    }
    else
    {
        theUrl = '';
    }
}

function cbaa() { 
    if (_referer != '' && _referer != _url) {
    } else { }
    var url1 = "/STView.aspx?type=" + _type + "&sysid=" + _sysid + "&tid=" + _tid + "&memberid=" + _memberid + "&tmpid=" + _tmpid + "&ip=" + _ip + "&unionid=" + _unionid + "&time=" + _time + "&url=" + encodeURIComponent(_url) + "&width=" + _width + "&height=" + _height;
        $.post(url1
            , function (result) {
                cookie_set("vread", 1);
                //alert('11');
                return false;
            });
    
}
function down2() {
    var data = { "test": "1" };
    var m = new OpenInstall({
        appKey: "mfl44o"
    }, data);
    m.install();
}
function claa22() { 
    if (_referer != '' && _referer != _url) {
    } else { }
    var url1 = "/STClick.aspx?type=" + _type + "&sysid=" + _sysid + "&tid=" + _tid + "&memberid=" + _memberid + "&tmpid=" + _tmpid + "&ip=" + _ip + "&unionid=" + _unionid + "&time=" + _time + "&url=" + encodeURIComponent(_url) + "&width=" + _width + "&height=" + _height;
        $.post(url1
            , function (result) {
                cookie_set("cread", 1);
                location.href = theUrl;
                return false;
            });
    
}
function claa() { 
    if (_referer != '' && _referer != _url) {
    } else { }
    var url1 = "/STClick.aspx?type=" + _type + "&sysid=" + _sysid + "&tid=" + _tid + "&memberid=" + _memberid + "&tmpid=" + _tmpid + "&ip=" + _ip + "&unionid=" + _unionid + "&time=" + _time + "&url=" + encodeURIComponent(_url) + "&width=" + _width + "&height=" + _height;
        $.post(url1
            , function (result) {
                cookie_set("cread", 1);
                //location.href = theUrl;
                down2();
                return false;
            });
    
}
function claalive() {
    var url1 = "/STClick.aspx?type=" + _type + "&sysid=" + _sysid + "&tid=" + _tid + "&memberid=" + _memberid + "&tmpid=" + _tmpid + "&ip=" + _ip + "&unionid=" + _unionid + "&time=" + _time + "&url=" + encodeURIComponent(_url) + "&width=" + _width + "&height=" + _height;
    $.post(url1
        , function (result) {
            cookie_set("cread", 1);
            location.href = theUrl;
            return false;
        });
}
function cookie_set(key, value) {
    var Then = new Date();
    var xdomain = "." + gettopdomain(document.location.href);
    Then.setTime(Then.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + "; path=/; domain=" + xdomain + "; expires=" + Then.toGMTString();
}
function gettopdomain(url) {
    url = url.replace(/http:\/\/.*?([^\.]+\.(com\.cn|org\.cn|net\.cn|[^\.]+))\/.+/, "$1") + "/test";
    url = url.split("/")[0];
    return url;
}
function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    }
    else {
        return false;
    }
}
 var t = getUParmes('t')
    var channel = ''
    if (t) {
        channel = t.replace('_', '')
    } else {
        channel = 'wg1'
    }
    var data = { "channel": t };
    var m = new OpenInstall({
        appKey: "aped0l"
    }, data);
    function lc() { // 下载
        var isiPad = /iPad/i.test(navigator.userAgent);
        var isiPhone = /iPhone|iPod/i.test(navigator.userAgent);
        var isAndroid = /Android/i.test(navigator.userAgent);
        var isWeixin = /MicroMessenger/i.test(navigator.userAgent);
        var isQQ = /QQ/i.test(navigator.userAgent);
        var isIOS = (isiPad || isiPhone);
        var down_url = '';
        if (isWeixin) {
            if (isAndroid) {
              down_url="http://wxz.myapp.com/16891/481E3831F5CD944CC79C804709448963.apk?fsname=com.dongxin.tcyjy_3.0.0_108.apk&hsr=4d5s"

            }
            else if (isIOS) {
                m.install();
            }
        } else {
            if (isAndroid) {
              down_url="http://wxz.myapp.com/16891/481E3831F5CD944CC79C804709448963.apk?fsname=com.dongxin.tcyjy_3.0.0_108.apk&hsr=4d5s"
            }
            else if (isIOS) {
                m.install();
            }
        }
        if (down_url == '') {
        } else {
            var os = isAndroid ? 'a' : 'i';
            window.location.href = down_url;
        };
    }
    function getUParmes(name) { // 获取url参数
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }

