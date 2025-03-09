document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const settingsIcon = document.getElementById('settings-icon');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('inatelAppTheme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
    
    // Menu de temas
    settingsIcon.addEventListener('click', function() {
        if (themeMenu.style.display === 'block') {
            themeMenu.style.display = 'none';
        } else {
            themeMenu.style.display = 'block';
        }
    });
    
    // Trocar tema ao clicar nas opções
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            document.body.className = theme;
            
            // Salvar tema no localStorage
            localStorage.setItem('inatelAppTheme', theme);
            
            // Fechar menu após selecionar
            themeMenu.style.display = 'none';
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!settingsIcon.contains(event.target) && !themeMenu.contains(event.target)) {
            themeMenu.style.display = 'none';
        }
    });

    // Carregar tema salvo após iniciar a página
    window.addEventListener('load', function() {
        const savedTheme = localStorage.getItem('inatelAppTheme');
        if (savedTheme) {
            document.body.className = savedTheme;
        }
    });
});