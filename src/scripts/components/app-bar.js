class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();

       
        this.mobileNavToggle = this.shadowDOM.querySelector(".mobile-nav-toggle");
        this.mobileNav = this.shadowDOM.querySelector(".mobile-nav");
        this.mobileNavActive = false; 
        this.setupEventListeners();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            
        .app-bar {
            background-color: #0B2447;
            color: white;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 10px 0;
            width: 100%;
            position: fixed; 
            top: 0; 
            z-index: 1000; 
        }
            .brand-logo {
                font-size: 24px;
                font-weight: bold;
                text-align: left;
                margin-bottom: 20px;
                margin-top: 20px;
                padding-left: 50px;
            }
            .nav-menu {
                list-style: none;
                padding: 0;
                display: flex;
                justify-content: flex-end;
                margin-right: 20px;
            }
            .nav-menu li {
                margin-right: 20px;
            }
            .nav-menu a {
                text-decoration: none;
                color: white;
            }
            .mobile-nav {
                background-color: #0B2447;
                color: white;
                position: fixed;
                top: 0;
                margin-top: 87px;
                left: -250px;
                height: 100%;
                width: 250px;
                overflow-x: hidden;
                transition: 0.3s;
            }
            .mobile-nav.active {
                left: 0;
                z-index: 2000; 
            }
            .mobile-nav-toggle {
                display: none;
                margin-top: 22px;
                font-size: 24px;
                cursor: pointer;
                position: fixed;
                top: 10px;
                left: 10px;
            }
            .hamburger-icon {
                display: none;
                font-size: 24px;
                cursor: pointer;
                position: fixed;
                top: 10px;
                left: auto;
                right: 10px;
            }
            .hamburger-line {
                width: 24px;
                height: 2px;
                background-color: white;
                margin: 4px 0;
            }
            .nav-menu-mobile {
                list-style: none;
                padding: 0;
                text-align: center;
            }
            .nav-menu-mobile li {
                margin-bottom: 20px;
            }
            .nav-menu-mobile a {
                text-decoration: none;
                color: white;
                font-size: 18px;
            }
           
            @media screen and (max-width: 768px) {
                .app-bar {
                position: fixed;
                z-index: 2000; 
                    }
                .brand-logo {
                    text-align: center; 
                    padding-left: 0; 
                 }
                .nav-menu {
                    display: none; 
                 }
                .mobile-nav-toggle {
                    display: block; 
                    
                }
            }
            a, button, input, input[type='text'], textarea {
                min-width: 44px;
                min-height: 44px;
            }
        </style>

        <nav class="app-bar">
            <div class="brand-logo">MamYuk</div>
            <div class="nav-menu">
                <li class="nav-menu-item"><a href="/">Home</a></li>
                <li class="nav-menu-item"><a href="#">Favorite</a></li>
                <li class="nav-menu-item"><a href="https://github.com/Srefaldi">About</a></li>
            </div>
            <div class="mobile-nav-toggle">
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
            </div>
        </nav>
            
        <div class="mobile-nav" id="mobileNav">
     
            <ul class="nav-menu-mobile">
                <li><a href="/">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
    `;
    }

    setupEventListeners() {
        this.mobileNavToggle.addEventListener("click", () => {
            this.mobileNavActive = !this.mobileNavActive;
            this.updateMobileNavVisibility();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                this.mobileNavActive = false;
                this.updateMobileNavVisibility();
            }
        });
    }

    updateMobileNavVisibility() {
        if (this.mobileNavActive) {
            this.mobileNav.classList.add("active");
            this.shadowDOM.querySelector(".brand-logo").classList.add("active");
         
            
        } else {
            this.mobileNav.classList.remove("active");
            this.shadowDOM.querySelector(".brand-logo").classList.remove("active");
            
            document.body.style.filter = "none";
        }
    }
    
    
}

customElements.define("nav-bar", AppBar);