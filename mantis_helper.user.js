// ==UserScript==
// @name           FM-MantisHelper
// @namespace      userscript.futurmaster.com
// @author         pelebl@gmail.com
// @description    Mantis Help
// @homepageURL    https://github.com/pelebl/MantisHelper/
// @updateURL      https://raw.github.com/pelebl/MantisHelper/master/mantis_helper.user.js
// @downloadURL    https://raw.github.com/pelebl/MantisHelper/master/mantis_helper.user.js
// @version        1.0.0
// @include        http://10.86.0.130/mantis/*
// @run-at         document-end
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==
var version = "1.0.0";
var buider61, builder71, builder72;

//#region 更新专用检测代码

//firefox 专用检测代码
GM_xmlhttpRequest({
    method: "GET",
    url: "https://raw.github.com/pelebl/MantisHelper/master/version.js",
    onload: function (o) {
        eval(o.responseText);

        console.log("[INFO] 更新检查：当前版本=" + version + "，新版本=" + version_helper);
        if (compareVersion(version, version_helper) < 0 && confirm("MantisHelper has new version 【" + version_helper + "】，are you ready to update? \n\n update comments：\n" + version_updater.join("\n"))) {
            GM_openInTab("https://raw.github.com/pelebl/MantisHelper/master/mantis_helper.user.js");
        }
        
        builder61 = build_num_61;
        builder71 = build_num_71;
        builder72 = build_num_72;       
    }
});

function compareVersion(v1, v2) {
    var vv1 = v1.split('.');
    var vv2 = v2.split('.');

    var length = Math.min(vv1.length, vv2.length);
    for (var i = 0; i < length; i++) {
        var s1 = parseInt(vv1[i]);
        var s2 = parseInt(vv2[i]);

        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
    }

    return vv1.length > vv2.length ? 1 : vv1.length < vv2.length ? -1 : 0;
};

//#endregion

var build_number_input = $("input[name='custom_field_27']");

build_number_input.val('');

build_number_input.after("<button id='number61' >6.1</button>");
build_number_input.after("<button id='number71'>7.1</button>");
build_number_input.after("<button id='number72'>7.2</button>");

$('#number61').click(function(){
    build_number_input.val(build_number_input.val() + builder61);
     return false;
});
$('#number71').click(function(){
    build_number_input.val(build_number_input.val() + builder71);
     return false;
});
$('#number72').click(function(){
    build_number_input.val(build_number_input.val() + builder72);
     return false;
});

