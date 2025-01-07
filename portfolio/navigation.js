
// Main Nav

var nav = document.querySelector('nav');

var templateNav = ` 
    <div class="iconmenu">
        <div class="iconopen">
            <span></span>
        </div>
    </div>
    <div class="nav">
        <div class="menu">
            <a class="menu-item" href="/">home</a>
            <a class="menu-item" href="/works">works</a>
            <a class="menu-item" href="/about">about</a>
        </div>
    </div>`;

nav.insertAdjacentHTML('beforeend', templateNav);


// Footer

var footer = document.querySelector('footer');

var templateFooter = ` 
<p></p>
<p>Jialu Yu / <span id="year"></span></p>`;



footer.insertAdjacentHTML('beforeend', templateFooter);
/* Dynamic footer Year */

document.getElementById("year").innerHTML = new Date().getFullYear();
/* end Dynamic footer Year */