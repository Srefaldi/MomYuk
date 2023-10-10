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
                max-width: 100%;
                overflow: hidden;
                text-align: center; /* Tengahkan teks */
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
                font-size: 60px;
                color: white;
                margin-bottom: 20px;
                white-space: nowrap; 
                overflow: hidden; 
                text-overflow: ellipsis; 
            }
            .hero-button {
                background-color: #0B2447;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 10px;
                font-size: 18px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
        
            .hero-button:hover {
                background-color: #064663;
            }
        
            
            @media screen and (max-width: 768px) {
                
                .hero-text {
                    font-size: 18px;
                    margin-top: 70px;
                    white-space: nowrap; 
                    overflow: hidden; 
                    text-overflow: ellipsis; 
                }
        
                .hero-button {
                    font-size: 16px;
                    padding: 8px 16px;
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
                    <button class="hero-button">Temukan Resto</button>
                </div>
            </div>
        `;
    }
}

customElements.define("hero-bar", HeroElement);
