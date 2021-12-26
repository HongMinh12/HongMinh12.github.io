class CardComponent extends HTMLElement {
    constructor() {
        super();
        //khai bao them shadow_dom
        this._shadowDom = this.attachShadow({mode:'open'})
        this.imgSrc = this.getAttribute('imgSrc')
        this.title = this.getAttribute('title')
        this.description = this.getAttribute('description')
        this._shadowDom.innerHTML = `
            ${style}
            <div class="card">
                <img scr="${this.imgSrc}"></img>
                <div class="card-body">
                    <div class='title'>${this.title}</div>
                    <div class='description'>${this.description}</div>
                </div>
            </div>
        `
    }
}
window.customElements.define('card-container', CardComponent)