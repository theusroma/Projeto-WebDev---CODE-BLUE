window.addEventListener('DOMContentLoaded', function() {
    // Conteúdo do Menu
    const menuHTML = `
    <header>
        <nav class="navbar">
            <a href="index.html" class="LogoCB">
                <img src="img/codeblue.svg" alt="Logo" />
            </a>              
            <ul>
                <li><a href="sobrenos.html">Sobre Nós</a></li>
                <li><a href="baleias.html">Baleias</a></li>
                <li><a href="golfinhos.html">Golfinhos</a></li>
                <li><a href="tartarugas.html">Tartarugas</a></li>
                <li><a href="cavalosmarinhos.html">Cavalos-Marinhos</a></li>
                <li><a href="querodoar.html">Quero Doar</a></li>
            </ul>
        </nav>
    </header>
    `;

    // Inserir o Menu em todos os elementos com a classe 'menu'
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        menu.innerHTML = menuHTML;
    });

    // Conteúdo do Footer
    const footerHTML = `
    <footer class="rodape">
        <p>&copy;2024 - CodeBlue</p>
    </footer>
    `;

    // Inserir o Footer em todos os elementos com a classe 'footer'
    const footers = document.querySelectorAll('.footer');
    footers.forEach(footer => {
        footer.innerHTML = footerHTML;
    });
});