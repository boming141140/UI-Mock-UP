import data from './data.js';

const buildWB = web => {
    const topr = document.getElementById('top-r');
    const topl = document.getElementById('top-l');
    const lefto = document.getElementById('left');
    const righto = document.getElementById('right');
    
    const a = document.createElement("a");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const img = document.createElement("img");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const btn = document.createElement("button");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    let ifr = document.createElement("iframe");
    
    /*top left */
    btn.append(a);
    a.append(img);
    topr.append(btn);
    /*top right */
    btn1.append(a2);
    a2.append(img1);
    topl.append(btn1);
    /*bot left */
    btn2.append(a1);
    a1.append(img2);
    lefto.append(btn2);
    /*bot right */
    ifr = resizeIF(ifr);
    a3.append(btn3);
    righto.append(a3);
    righto.append(ifr);
    
    topr.getElementsByTagName("button")[0].style.backgroundColor = "#701414";
    topr.getElementsByTagName("button")[0].style.border = "none";
    topr.getElementsByTagName("button")[0].style.width = "100%";
    topr.getElementsByTagName("button")[0].style.height = "100%";
    topr.getElementsByTagName("img")[0].setAttribute("src", web.log);
    topr.getElementsByTagName("img")[0].style.width ="100%";
    topr.getElementsByTagName("a")[0].setAttribute("href",web.mainsite);

    topl.getElementsByTagName("button")[0].style.backgroundColor = "#701414";
    topl.getElementsByTagName("button")[0].style.border = "none";
    topl.getElementsByTagName("button")[0].style.width = "100%";
    topl.getElementsByTagName("img")[0].setAttribute("src", web.promim)
    topl.getElementsByTagName("img")[0].style.width = "100%";
    topl.getElementsByTagName("a")[0].setAttribute("href",web.prom1);

    lefto.getElementsByTagName("button")[0].style.backgroundColor = "#701414";
    lefto.getElementsByTagName("button")[0].style.border = "none";
    lefto.getElementsByTagName("button")[0].style.height = "100%";
    lefto.getElementsByTagName("img")[0].setAttribute("src", web.prom2im);
    lefto.getElementsByTagName("img")[0].style.height = "100%";
    lefto.getElementsByTagName("img")[0].style.width = "100%";
    lefto.getElementsByTagName("a")[0].setAttribute("href",web.prom2);

    righto.getElementsByTagName("a")[0].style.width = "100%";
    righto.getElementsByTagName("a")[0].style.height = "100%";
    righto.getElementsByTagName("button")[0].style.height = "6%";
    righto.getElementsByTagName("button")[0].style.width = "10%";
    righto.getElementsByTagName("button")[0].style.marginBottom = "0.2%";
    righto.getElementsByTagName("button")[0].style.border = "none";
    righto.getElementsByTagName("button")[0].style.backgroundColor = "#F4CAC2";
    righto.getElementsByTagName("button")[0].innerHTML = "HomeWeb";
    righto.getElementsByTagName("button")[0].style.borderRadius = "12px";
    righto.getElementsByTagName("button")[0].style.fontSize = "105%";
    righto.getElementsByTagName("button")[0].style.cursor = "pointer";
    righto.getElementsByTagName("a")[0].setAttribute("href", web.src);
    righto.getElementsByTagName("iframe")[0].setAttribute("src",web.src);
    righto.getElementsByTagName("iframe")[0].style.borderStyle = "solid";
    righto.getElementsByTagName("iframe")[0].style.borderWidth = "2px";
    righto.getElementsByTagName("iframe")[0].style.height = "94%";
    function resizeIF(iFrame)  {
        iFrame.width = righto.scrollWidth;
        iFrame.height = righto.scrollHeight;
        iFrame.style.border = 0;
        return iFrame
    }
}
window.onresize = function(){ location.reload(); }
data.forEach(web => buildWB(web));
