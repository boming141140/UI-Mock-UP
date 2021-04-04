import data from './data.js';

const buildWB = web => {
    const topr = document.getElementById('top-r');
    const topl = document.getElementById('top-l');
    const lefto = document.getElementById('left');
    const righto = document.getElementById('right');
    
    
    const a = document.createElement("a");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const img = document.createElement("img");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const btn = document.createElement("BUTTON");
    const btn1 = document.createElement("BUTTON");
    const btn2 = document.createElement("BUTTON");
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
    righto.append(ifr);
    
    topr.getElementsByTagName("button")[0].style.backgroundColor = "#701414";
    topr.getElementsByTagName("button")[0].style.border = "none";
    topr.getElementsByTagName("img")[0].setAttribute("src", web.log)
    topr.getElementsByTagName("a")[0].setAttribute("href",web.mainsite);

    topl.getElementsByTagName("button")[0].style.backgroundColor = "#701414";
    topl.getElementsByTagName("button")[0].style.border = "none";
    topl.getElementsByTagName("img")[0].setAttribute("src", web.promIM)
    topl.getElementsByTagName("a")[0].setAttribute("href",web.prom1);

    lefto.getElementsByTagName("button")[0].style.backgroundColor = "#701414";
    lefto.getElementsByTagName("button")[0].style.border = "none";
    lefto.getElementsByTagName("img")[0].setAttribute("src", web.prom2IM);
    lefto.getElementsByTagName("img")[0].style.width = "500px";
    lefto.getElementsByTagName("img")[0].style.height = "1040px";
    lefto.getElementsByTagName("a")[0].setAttribute("href",web.prom2);

    righto.getElementsByTagName("iframe")[0].setAttribute("src",web.src);
    function resizeIF(iFrame)  {
        iFrame.width = righto.scrollWidth;
        iFrame.height = righto.scrollHeight;
        iFrame.style.border = 0;
        return iFrame
    }
}

data.forEach(web => buildWB(web));
