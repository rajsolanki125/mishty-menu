async function loadMenu() {
    const res = await fetch('json/data.json');
    const data = await res.json();

    const menu = document.getElementById('menu');

    data.sections.forEach((section, index) => {
        const div = document.createElement('div');
        div.classList.add('menu-section');

        div.innerHTML = `
            <div class="section-header" onclick="toggleSection(${index})">
                ${section.name}
                <span id="arrow-${index}">+</span>
            </div>

            <div class="section-body" id="section-${index}">
                ${section.items.map(item => `
                    <div class="menu-item">
                        <div class="item-top">
                            <div class="item-name">${item.name}</div>
                            <div class="item-price">₹${item.price}</div>
                        </div>
                        <div class="item-desc">${item.description}</div>
                    </div>
                `).join('')}
            </div>
        `;

        menu.appendChild(div);
    });
}

function toggleSection(index) {
    const section = document.getElementById(`section-${index}`);
    const arrow = document.getElementById(`arrow-${index}`);

    section.classList.toggle('active');
    arrow.textContent = section.classList.contains('active') ? '-' : '+';
}

loadMenu();
