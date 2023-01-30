var csInterface = new CSInterface();

var emailFild = document.getElementById("email");
var serilFiled = document.getElementById("seril");
var actBut = document.getElementById("active");
var actWin = document.getElementById('logwin');
var uiWin = document.getElementById('main');
var staTxt = document.getElementById('sta');
var resTxt = document.getElementById('res');
csInterface.evalScript("redCon();", function (ress) {
    var res = JSON.parse(ress);
    if (res != 'false') {
        if (res.success == 'true' || res.success == true) {
            actWin.style.display = "none";
            uiWin.style.visibility = "visible";
            action("getAll()");
        } else {
            if (!window.navigator.onLine) {
                staTxt.innerHTML = 'No Internet Cunnection';
                window.addEventListener('online', function () { staTxt.innerHTML = 'Became online' });
                window.addEventListener('offline', function () { staTxt.innerHTML = 'Became offline' });
            }
        }
    }
});

var thisVer = '4.0.0'
var copyR = document.getElementById('copy');
copyR.textContent = copyR.textContent + thisVer;
if (verSion != undefined) {
    if (verSion > thisVer) {
        var verDiv = document.getElementById('ver');
        verDiv.parentElement.style.display = 'block';
        verDiv.textContent = 'New Version Available Your Version is:- ' + thisVer + '\nNew Version:- ' + verSion + ' Check your Mail or you can login to your Gumroad Account to Download the Updated Version for Free';
    }
}

function onLoaded() {
    var b = new CSInterface;
    updateThemeWithAppSkinInfo(b.hostEnvironment.appSkinInfo);
    b.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, onAppThemeColorChanged);
    b = (new SuiteMessageEvent(SuiteMessageEvent.TYPE + ".HelloCSComm")).type;
    VulcanInterface.addEventListener(b, function (a) {
        alert("Received:" + a.getPayload())
    })
}

function updateThemeWithAppSkinInfo(b) {
    var a = b.panelBackgroundColor.color;
    document.body.bgColor = toHex(a);
    var c = (new CSInterface).hostEnvironment.appName;
    if ("PHXS" == c && addRule("ppstyle", "button, select, input[type=button], input[type=submit]", "border-radius:3px;"),
        "PHXS" == c || "PPRO" == c || "PRLD" == c) {
        var e, f, g, h, k, c = "background-image: -webkit-linear-gradient(top, " + toHex(a, 40) + " , " + toHex(a, 10) + ");", l = "background-image: -webkit-linear-gradient(top, " + toHex(a, 15) + " , " + toHex(a, 5) + ");";
        127 < a.red ? (e = "#000000;",
            f = "color:" + toHex(a, -70) + ";",
            g = "border-color: " + toHex(a, -90) + ";",
            h = toHex(a, 54) + ";",
            k = "background-image: -webkit-linear-gradient(top, " + toHex(a, -40) + " , " + toHex(a, -50) + ");") : (e = "#ffffff;",
                f = "color:" + toHex(a, 100) + ";",
                g = "border-color: " + toHex(a, -45) + ";",
                h = toHex(a, -20) + ";",
                k = "background-image: -webkit-linear-gradient(top, " + toHex(a, -20) + " , " + toHex(a, -30) + ");");
        addRule("ppstyle", ".default", "font-size:" + b.baseFontSize + "px; color:" + e + "; background-color:" + toHex(a) + ";");
        addRule("ppstyle", "button, select, input[type=text], input[type=button], input[type=submit]", g);
        addRule("ppstyle", "button, select, input[type=button], input[type=submit]", c);
        addRule("ppstyle", "button, select, input[type=button], input[type=submit]", "-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);");
        addRule("ppstyle", "button:enabled:active, input[type=button]:enabled:active, input[type=submit]:enabled:active", k);
        addRule("ppstyle", "button:enabled:active, input[type=button]:enabled:active, input[type=submit]:enabled:active", "-webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);");
        addRule("ppstyle", "[disabled]", l);
        addRule("ppstyle", "[disabled]", f);
        addRule("ppstyle", "input[type=text]", "padding:1px 3px;");
        addRule("ppstyle", "input[type=text]", "background-color: " + h);
        addRule("ppstyle", "input[type=text]:focus", "background-color: #ffffff;");
        addRule("ppstyle", "input[type=text]:focus", "color: #000000;")
    } else
        addRule("ppstyle", ".default", "font-size:" + b.baseFontSize + "px; color:" + reverseColor(a) + "; background-color:" + toHex(a, 20)),
            addRule("ppstyle", "button", "border-color: " + toHex(panelBgColor, -50))
}
function addRule(b, a, c) {
    (b = document.getElementById(b)) && ((b = b.sheet).addRule ? b.addRule(a, c) : b.insertRule && b.insertRule(a + " { " + c + " }", b.cssRules.length))
}
function reverseColor(b, a) {
    return toHex({
        red: Math.abs(255 - b.red),
        green: Math.abs(255 - b.green),
        blue: Math.abs(255 - b.blue)
    }, a)
}
function toHex(b, a) {
    function c(a, b) {
        var c = isNaN(b) ? a : a + b;
        return 0 > c ? c = 0 : 255 < c && (c = 255),
            1 == (c = c.toString(16)).length ? "0" + c : c
    }
    var e = "";
    if (b)
        with (b)
        e = c(red, a) + c(green, a) + c(blue, a);
    return "#" + e
}
function onAppThemeColorChanged(b) {
    updateThemeWithAppSkinInfo(JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo)
}
function sendVulcanMessage(b) {
    var a = new SuiteMessageEvent(SuiteMessageEvent.TYPE + ".HelloCSComm");
    a.setPayload(b);
    VulcanInterface.dispatchEvent(a)
}
function action(bc) {
    var csInterface = new CSInterface;
    csInterface.evalScript(bc, function (a) {
        if (a != false && a != 'false') {
            var b = document.getElementById("main")
                , ee = document.createElement("p");
            ee.innerHTML = a;
            // alert(ee.innerHTML);
            var arr = ee.innerHTML.split(',');
            for (d = 0; d < arr.length; d++) {
                // alert(arr[d]);
                var b = document.getElementById("main")
                    , e = document.createElement("BUTTON")
                    , f = arr[d].split("/").pop().split(".")[0]
                    , f = document.createTextNode(f);
                e.classList.add("default");
                e.title = arr[d];
                e.appendChild(f);
                b.appendChild(e);
                e.addEventListener("click", function () { csInterface.evalScript('rnScript("' + this.title + '")'); })
            }
            ee.parentNode.removeChild(ee);
        }
    })
}
function openHelp() {
    (new CSInterface).evalScript("help()")
}


function active() {
    if (window.navigator.onLine) {
        var url = "https://api.gumroad.com/v2/licenses/verify";
        var res;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 2) {
                staTxt.innerHTML = 'Sending...'
                console.log(staTxt.innerHTML)
            }
            if (xhr.readyState === 3) {
                staTxt.innerHTML = 'Getting..'
                console.log(staTxt.innerHTML)
            }
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    res = JSON.parse(xhr.responseText);
                    if (res.success) {
                        if (res.uses < 5) {
                            console.log(res)
                            resTxt.innerHTML = JSON.stringify(res);
                            actWin.style.display = "none";
                            uiWin.style.visibility = "visible";
                            writeFile();
                            action("getAll()");
                        } else {
                            staTxt.innerHTML = "Activetion limet end"
                        }
                    }
                    // resArr.push(res);
                } else if (xhr.status == 404) {
                    staTxt.innerHTML = 'Wrong Serial Number Enter Valid Serial Number'
                } else if (xhr.status == 402) {
                    staTxt.innerHTML = 'Request Failed Try Again'
                } else if (xhr.status == 402) {
                    staTxt.innerHTML = 'Request Failed Try Again'
                } else if (xhr.status == 500 || xhr.status == 502 || xhr.status == 503 || xhr.status == 504) {
                    staTxt.innerHTML = 'Server Error Please try after Some time'
                } else if (xhr.status == 401) { staTxt.innerHTML = 'Unauthorized' }
            }
        }
        var data = "product_permalink=scriptRunner&license_key=" + document.getElementById("seril").value;
        xhr.send(data);
    } else {
        staTxt.innerHTML = 'No Internet Cunnection';
        window.addEventListener('online', function () { staTxt.innerHTML = 'Became online Click Again to Activee' });
        window.addEventListener('offline', function () { staTxt.innerHTML = 'Became offline' });
    };
}


function writeFile() {
    (new CSInterface()).evalScript("conFigFile.writeTxt('obj=" + resTxt.innerHTML + "')");
    (new CSInterface()).evalScript("if (conFigFile.exists) $.evalFile(conFigFile);");
}
function uninstall() {
    var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);
    csInterface.evalScript("uninstall('" + extensionPath + "')");
}





function runScript(t) {
    csInterface.evalScript('rnScript("' + t.title + '")');
}
function editScript(t) {
    csInterface.evalScript('editScript("' + t.title + '")');
}
function removBtn(t) {
    var btn = document.getElementById('removeThis');
    btn.parentNode.removeChild(btn);
    csInterface.evalScript('removScript("' + t.title + '")');
}
function openFol(t) {
    csInterface.evalScript('openFol("' + t.title + '")');
}


var flyoutXML = '\
<Menu> \
<MenuItem Id="RunaScript" Label="Run a Script" Enabled="true" Checked="false"/> \
<MenuItem Id="reset" Label="Reset Scripts Runner" Enabled="true" Checked="false"/> \
<MenuItem Id="uninstall" Label="Uninstall" Enabled="true" Checked="false"/> \
</Menu>';
// <MenuItem Id="disabledMenuItem" Label="Disabled Menu Item" Enabled="false" Checked="false"/> \/
csInterface.setPanelFlyoutMenu(flyoutXML);
csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", flyoutMenuClickedHandler);

function flyoutMenuClickedHandler(event) {
    switch (event.data.menuId) {
        case "RunaScript":
            runonlyScript();
            break;
        case "reset":
            resst()
            break;
        case "uninstall":
            uninstall();
            break;
        default:
    }
}
function runonlyScript(){
    csInterface.evalScript("runOnly()");
}
function resst(){csInterface.evalScript("reset()");}