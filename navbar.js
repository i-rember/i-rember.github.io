class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <navbar>
                <x>
                    <a>home</a> /
                    <a>games</a> /
                    <a>music</a> /
                    <a>tools</a> /
                    <a>toys</a> /
                    <a>experiments</a> /
                    <a href="https://github.com/i-rember/i-rember.github.io">github</a>
                </x>
            </navbar>
        `;
    }
}

customElements.define("navbar-ph", Navbar);