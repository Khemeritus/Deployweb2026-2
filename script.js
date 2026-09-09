const gamesData = [
      { id: 1, title: "Cozy Island Cafe", platform: "pc", type: "Digital (Indie)", price: "$9.50 USD", imgBg: "linear-gradient(135deg, #ff9a9e, #fecfef)", category: "indie", emoji: "🧁" },
      { id: 2, title: "Animal Crossing: New Horizons", platform: "switch", type: "Físico", price: "$38.00 USD", imgBg: "linear-gradient(135deg, #a8eddaf5, #fed6e3)", category: "switch", emoji: "🍃" },
      { id: 3, title: "Astro Bot", platform: "ps5", type: "Físico", price: "$45.00 USD", imgBg: "linear-gradient(135deg, #c2e9fb, #a1c4fd)", category: "ps5", emoji: "🤖" },
      { id: 4, title: "Stardew Valley", platform: "pc", type: "Digital (Indie)", price: "$12.00 USD", imgBg: "linear-gradient(135deg, #fddb92, #d1fdff)", category: "indie", emoji: "🌾" },
      { id: 5, title: "Ori and the Will of the Wisps", platform: "xbox", type: "Físico", price: "$20.00 USD", imgBg: "linear-gradient(135deg, #e0c3fc, #8ec5fc)", category: "xbox", emoji: "🦊" },
      { id: 6, title: "Hollow Knight: Silksong", platform: "pc", type: "Digital", price: "$18.00 USD", imgBg: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", category: "pc", emoji: "🦋" }
    ];

    function renderCatalog(items) {
      const grid = document.getElementById('catalog-grid');
      grid.innerHTML = '';
      items.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
          <div class="game-img" style="--game-bg: ${game.imgBg}">
            ${game.emoji}
            <span class="badge-type">${game.type}</span>
          </div>
          <div class="game-info">
            <div>
              <div class="game-title">${game.title}</div>
              <div class="game-meta">Plataforma: ${game.platform.toUpperCase()}</div>
            </div>
            <div class="game-footer">
              <span class="price">${game.price}</span>
              <button class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;" onclick="openModal('buy')">Ver más</button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    document.addEventListener('DOMContentLoaded', () => renderCatalog(gamesData));

    function switchTab(tab) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      if (tab === 'buy') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('tab-buy').classList.add('active');
      } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('tab-sell').classList.add('active');
      }
    }

    function calculateQuote() {
      const input = document.getElementById('sell-input').value.trim();
      const resultDiv = document.getElementById('quote-result');
      if (!input) { alert('Por favor ingresa el título de tu juego ✨'); return; }
      const baseEstimate = Math.floor(Math.random() * (38 - 18 + 1)) + 18;
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `✨ Estimado de pago para <strong>"${input}"</strong>: ~$${baseEstimate}.00 USD.<br><small style="font-weight: 600; color: #0f4d3e;">¡Publicarlo es gratis!</small>`;
    }

    function filterCatalog(category, btnElement) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      btnElement.classList.add('active');
      if (category === 'all') renderCatalog(gamesData);
      else renderCatalog(gamesData.filter(game => game.category === category || game.platform === category));
    }

    function searchGames() {
      const query = document.getElementById('buy-search').value.toLowerCase();
      renderCatalog(gamesData.filter(game => game.title.toLowerCase().includes(query)));
    }

    function openModal(type) {
      document.getElementById('modal-title').innerText = type === 'login' ? '¡Bienvenida de nuevo! 🌸' : 'Únete a Shareme 💖';
      document.getElementById('modal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('modal').classList.remove('open');
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      alert('✨ ¡Registro exitoso!');
      closeModal();
    }
