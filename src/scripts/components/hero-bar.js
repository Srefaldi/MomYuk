class HeroElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const imageUrl = "images/heros/hero-image_4.jpg";

        this.shadowRoot.innerHTML = `
            <style>
            .hero {
                position: relative;
                width: 100%;
                overflow: hidden;
                text-align: center;
            }
            
            .hero img {
                width: 100%;
                height: auto;
                object-fit: contain;
                display: flex;
                transition: transform 0.2s;
            }
        
            .hero-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        
            .hero-text {
                font-size: 30px;
                color: white;
                margin-bottom: 20px;
                white-space: nowrap; 
                overflow: hidden; 
                text-overflow: ellipsis; 
            }
            @media screen and (min-width: 1200px) {
                .hero img {
                    min-width: 1000px;
                    width: 100%;
                }
            }
        
            @media screen and (max-width: 768px) {
                .hero img {
                    min-width: 100%;
                }
                
                .hero-text {
                    font-size: 18px;
                    margin-top: 70px;
                    white-space: nowrap; 
                    overflow: hidden; 
                    text-overflow: ellipsis; 
                }
        
            }
            a, button, input, input[type='text'], textarea {
                min-width: 44px;
                min-height: 44px;
            }
            </style>
            <div class="hero">
                <img src="${imageUrl}" alt="Hero Image">
                <div class="hero-content">
                    <div class="hero-text">Selamat Datang Di MomYuk</div>
                    
                </div>
            </div>
        `;
    }
}

customElements.define("hero-bar", HeroElement);
