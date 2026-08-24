class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <navbar>
                <x>
                    <a href="/">home</a> /
                    <a href="/games/">games</a> /
                    <a href="/music/">music</a> /
                    <a href="/tools/">tools</a> /
                    <a href="/toys/">toys</a> /
                    <a href="/experiments/">experiments</a> /
                    <a href="https://github.com/i-rember/i-rember.github.io">github</a>
                </x>
            </navbar>
        `;
    }
}

customElements.define("navbar-ph", Navbar);