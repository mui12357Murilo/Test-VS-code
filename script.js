// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mensagem de Boas-Vindas Dinâmica (baseada no horário)
    const heroTitle = document.querySelector('.hero h1');
    const hora = new Date().getHours();
    let saudacao = 'O café do futuro';

    if (hora >= 5 && hora < 12) {
        saudacao = 'O seu café da manhã do futuro';
    } else if (hora >= 12 && hora < 18) {
        saudacao = 'O seu impulso da tarde';
    } else {
        saudacao = 'Sua dose de energia noturna';
    }

    if (heroTitle) {
        heroTitle.innerHTML = `${saudacao}, <span>hoje</span>.`;
    }

    // 2. Interatividade ao clicar nos Cards do Cardápio
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', () => {
            const nomeItem = card.querySelector('h3').textContent;
            const precoItem = card.querySelector('.price').textContent;

            mostrarNotificacao(`☕ ${nomeItem} (${precoItem}) adicionado ao seu pedido!`);
        });
    });

    // 3. Sistema de Notificação Flutuante (Toast)
    function mostrarNotificacao(mensagem) {
        // Remove notificação anterior se existir
        const notificacaoExistente = document.querySelector('.toast-notificacao');
        if (notificacaoExistente) {
            notificacaoExistente.remove();
        }

        // Cria o elemento da notificação
        const toast = document.createElement('div');
        toast.className = 'toast-notificacao';
        toast.textContent = mensagem;

        // Estilização dinâmica da notificação
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#38bdf8',
            color: '#0f172a',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 'bold',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)',
            zIndex: '1000',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: '0',
            transform: 'translateY(20px)'
        });

        document.body.appendChild(toast);

        // Animação de entrada
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 10);

        // Remove a notificação após 3 segundos
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
});
