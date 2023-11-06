class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <script src="https://kit.fontawesome.com/7d33d53aa9.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../../style.css">
        <div style="
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 100;
        ">
        <div id="navbar">
            <a href="../../index.html" id="home-btn">Home</a>
            <button id="secret-btn"><a href="../../secret.html">???</a></button>
            <button id="search">
                <img src="../../icons/search.svg" style="
                width: 20px;
                filter: invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%);
                ">
            </button>
        </div>
        <p style="
            color: white;
            position: absolute;
            top: 0;
            margin-left: 50px;
            font-family: 'Comfortaa', sans-serif; 
        ">Astro Games</p>
        <img src="../../astro.jpg" alt="astro" style="width: 50px; position: absolute; top: 0;">
        </div>
        `;
    }
}
customElements.define('nav-bar', MyCustomElement);

class MyCustomElementAd extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2939348888494004"
        crossorigin="anonymous"></script>
        <!-- sides of games -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-2939348888494004"
            data-ad-slot="1518187149"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        `;
    }
}
customElements.define('ad-elm', MyCustomElementAd);

class MyCustomElementOpt extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <script src="https://kit.fontawesome.com/7d33d53aa9.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../../style.css">
        <center>
        <div style="
            background: rgb(41, 41, 41);
            width: 80%;
            height: 35px;
            border-radius: 5px;
            margin-bottom: 5px;
            align-items: center;
            display: flex;
        "><img onclick="goFullscreen('embededGame'); return false"  id="fullscreen-btn" style="
            float: right;
            color: white;
            font-size: 25px;
            margin-right: 25px;
            top:50%;
            margin-left: 90%;
            filter: invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%);
            width: 20px;
        " src="../../icons/expand.svg"></div>
        </center>
        `;
    }
}
customElements.define('opt-elm', MyCustomElementOpt);

class MyCustomElementHome extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <center><button style="
            color: rgb(0, 0, 0);
            background-color: rgb(255, 255, 255);
            border: none;
            border-radius: 5px;
            width: 300px;
            height: 50px;
            font-size: large;
            font-family: 'Comfortaa', sans-serif;
            margin-top: 50px;
            margin-bottom: 100px;
        ">
        <a href="../../index.html" style="
            color: rgb(0, 0, 0);
            text-decoration: none;
            width: 300px;
            height: 50px;
        ">Home</a>
        </button></center>
        `;
    }
}
customElements.define('home-btn', MyCustomElementHome);