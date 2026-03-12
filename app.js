// Player data with photo URLs
const players = [
  { number: 0, name: "Jaden Bradley", pos: "G", height: "6'3\"", weight: 200, year: "SR", ppg: 13.4, rpg: 3.5, apg: 4.6, fg: 46.1, three: 38.2, ft: 79.9, stl: 1.6, blk: 0.0, gp: 31, min: 30.3, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683842.png&w=350&h=254" },
  { number: 2, name: "Dwayne Aristode", pos: "F", height: "6'8\"", weight: 220, year: "FR", ppg: 4.6, rpg: 1.9, apg: 0.9, fg: 48.9, three: 45.9, ft: 58.8, stl: 0.6, blk: 0.1, gp: 27, min: 14.9, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105956.png&w=350&h=254" },
  { number: 3, name: "Anthony Dell'Orso", pos: "G", height: "6'6\"", weight: 205, year: "SR", ppg: 8.7, rpg: 2.0, apg: 2.1, fg: 40.3, three: 31.7, ft: 83.3, stl: 0.9, blk: 0.2, gp: 31, min: 21.6, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683025.png&w=350&h=254" },
  { number: 5, name: "Brayden Burries", pos: "G", height: "6'4\"", weight: 205, year: "FR", ppg: 16.0, rpg: 5.0, apg: 2.6, fg: 49.7, three: 37.0, ft: 78.9, stl: 1.6, blk: 0.2, gp: 31, min: 29.6, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105859.png&w=350&h=254" },
  { number: 6, name: "Bryce James", pos: "G", height: "6'5\"", weight: 195, year: "FR", ppg: 0, rpg: 0, apg: 0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105860.png&w=350&h=254" },
  { number: 7, name: "Jackson Francois", pos: "G", height: "6'5\"", weight: 160, year: "SR", ppg: 0.5, rpg: 0.5, apg: 0.0, fg: 100, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912968.png&w=350&h=254" },
  { number: 8, name: "Ivan Kharchenkov", pos: "F", height: "6'7\"", weight: 220, year: "FR", ppg: 9.8, rpg: 4.0, apg: 2.3, fg: 47.9, three: 29.4, ft: 72.5, stl: 1.5, blk: 0.3, gp: 31, min: 27.3, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105955.png&w=350&h=254" },
  { number: 10, name: "Koa Peat", pos: "F", height: "6'8\"", weight: 235, year: "FR", ppg: 13.8, rpg: 5.3, apg: 2.7, fg: 54.8, three: 31.6, ft: 60.2, stl: 0.7, blk: 0.8, gp: 28, min: 27.3, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105861.png&w=350&h=254" },
  { number: 11, name: "Jackson Cook", pos: "G", height: "6'3\"", weight: 185, year: "SO", ppg: 0.0, rpg: 0.1, apg: 0.0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912971.png&w=350&h=254" },
  { number: 13, name: "Motiejus Krivas", pos: "C", height: "7'2\"", weight: 260, year: "JR", ppg: 10.8, rpg: 8.2, apg: 1.0, fg: 58.8, three: 36.4, ft: 79.7, stl: 0.7, blk: 1.8, gp: 31, min: 24.9, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912880.png&w=350&h=254" },
  { number: 15, name: "Sidi Gueye", pos: "F", height: "6'11\"", weight: 215, year: "FR", ppg: 1.3, rpg: 0.8, apg: 0.2, fg: 68.8, three: 50.0, ft: 63.6, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105957.png&w=350&h=254" },
  { number: 20, name: "Mabil Mawut", pos: "F", height: "6'11\"", weight: 200, year: "FR", ppg: 0, rpg: 0, apg: 0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105958.png&w=350&h=254" },
  { number: 21, name: "Evan Nelson", pos: "G", height: "6'2\"", weight: 175, year: "SR", ppg: 0.5, rpg: 0.5, apg: 0.3, fg: 36.4, three: 37.5, ft: 0, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683843.png&w=350&h=254" },
  { number: 22, name: "Addison Arnold", pos: "G", height: "6'3\"", weight: 185, year: "SO", ppg: 0.4, rpg: 0.5, apg: 0.2, fg: 18.2, three: 0, ft: 100, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912970.png&w=350&h=254" },
  { number: 30, name: "Tobe Awaka", pos: "F", height: "6'8\"", weight: 255, year: "SR", ppg: 9.6, rpg: 9.5, apg: 0.9, fg: 59.1, three: 50.0, ft: 69.4, stl: 0.4, blk: 0.7, gp: 31, min: 21.5, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683028.png&w=350&h=254" },
  { number: 42, name: "Sven Djopmo", pos: "G", height: "6'2\"", weight: 190, year: "SO", ppg: 0.6, rpg: 0.2, apg: 0.3, fg: 66.7, three: 0, ft: 40.0, stl: 0, blk: 0, gp: 0, min: 0, photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912969.png&w=350&h=254" }
];

// Current view mode
let viewMode = "grid";

// Generate initials for player avatar
function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("");
}

// Get color based on position
function getPosColor(pos) {
  const colors = { G: "#cc0033", F: "#003366", C: "#1a1a2e" };
  return colors[pos] || "#666";
}

// Handle image load error - show initials fallback
function handleImgError(img, name, pos) {
  const parent = img.parentElement;
  img.style.display = "none";
  parent.style.background = getPosColor(pos);
  const fallback = document.createElement("span");
  fallback.className = "player-initials";
  fallback.textContent = getInitials(name);
  parent.insertBefore(fallback, parent.firstChild);
}

// Render roster in grid view
function renderGridView(filtered) {
  return filtered.map(p => `
    <div class="player-card" data-pos="${p.pos}">
      <div class="player-avatar" style="background: ${getPosColor(p.pos)}">
        <img src="${p.photo}" alt="${p.name}" class="player-photo"
             onerror="handleImgError(this, '${p.name.replace(/'/g, "\\'")}', '${p.pos}')">
        <span class="player-number-badge">#${p.number}</span>
      </div>
      <div class="player-info">
        <h3 class="player-name">${p.name}</h3>
        <div class="player-meta">
          <span class="player-pos-badge">${p.pos}</span>
          <span>${p.height} &middot; ${p.weight} lbs</span>
        </div>
        <span class="player-year">${p.year}</span>
        ${p.ppg > 0 ? `
        <div class="player-quick-stats">
          <div class="quick-stat">
            <span class="quick-stat-value">${p.ppg}</span>
            <span class="quick-stat-label">PPG</span>
          </div>
          <div class="quick-stat">
            <span class="quick-stat-value">${p.rpg}</span>
            <span class="quick-stat-label">RPG</span>
          </div>
          <div class="quick-stat">
            <span class="quick-stat-value">${p.apg}</span>
            <span class="quick-stat-label">APG</span>
          </div>
        </div>` : `<p class="player-limited">Limited minutes</p>`}
      </div>
    </div>
  `).join("");
}

// Render roster in list view
function renderListView(filtered) {
  return `<div class="roster-list">` + filtered.map(p => `
    <div class="player-list-item" data-pos="${p.pos}">
      <div class="list-player-photo-wrap" style="background: ${getPosColor(p.pos)}">
        <img src="${p.photo}" alt="${p.name}" class="list-player-photo"
             onerror="handleImgError(this, '${p.name.replace(/'/g, "\\'")}', '${p.pos}')">
      </div>
      <div class="list-player-number">#${p.number}</div>
      <div class="list-player-info">
        <h3 class="list-player-name">${p.name}</h3>
        <div class="list-player-meta">
          <span class="player-pos-badge">${p.pos}</span>
          <span>${p.height} &middot; ${p.weight} lbs</span>
          <span class="player-year">${p.year}</span>
        </div>
      </div>
      <div class="list-player-stats">
        ${p.ppg > 0 ? `
          <div class="list-stat"><span class="list-stat-value">${p.ppg}</span><span class="list-stat-label">PPG</span></div>
          <div class="list-stat"><span class="list-stat-value">${p.rpg}</span><span class="list-stat-label">RPG</span></div>
          <div class="list-stat"><span class="list-stat-value">${p.apg}</span><span class="list-stat-label">APG</span></div>
          <div class="list-stat"><span class="list-stat-value">${p.fg.toFixed(1)}%</span><span class="list-stat-label">FG%</span></div>
        ` : `<span class="list-limited">Limited minutes</span>`}
      </div>
    </div>
  `).join("") + `</div>`;
}

// Render roster
function renderRoster(filter = "all") {
  const grid = document.getElementById("rosterGrid");
  const filtered = filter === "all" ? players : players.filter(p => p.pos === filter);

  if (viewMode === "grid") {
    grid.className = "roster-grid";
    grid.innerHTML = renderGridView(filtered);
  } else {
    grid.className = "roster-grid list-mode";
    grid.innerHTML = renderListView(filtered);
  }
}

// Render stats table
function renderStats(sortBy = "ppg", ascending = false) {
  const tbody = document.getElementById("statsBody");
  const sorted = [...players].sort((a, b) => ascending ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]);

  tbody.innerHTML = sorted.map(p => `
    <tr>
      <td><strong>${p.number}</strong></td>
      <td class="player-name-cell">
        <div class="stats-player-info">
          <img src="${p.photo}" alt="${p.name}" class="stats-player-thumb"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
          <span class="stats-player-initials" style="display:none; background:${getPosColor(p.pos)}">${getInitials(p.name)}</span>
          ${p.name}
        </div>
      </td>
      <td><span class="pos-tag pos-${p.pos}">${p.pos}</span></td>
      <td class="stat-num ${sortBy === 'ppg' ? 'highlight' : ''}">${p.ppg.toFixed(1)}</td>
      <td class="stat-num ${sortBy === 'rpg' ? 'highlight' : ''}">${p.rpg.toFixed(1)}</td>
      <td class="stat-num ${sortBy === 'apg' ? 'highlight' : ''}">${p.apg.toFixed(1)}</td>
      <td class="stat-num ${sortBy === 'fg' ? 'highlight' : ''}">${p.fg.toFixed(1)}%</td>
      <td class="stat-num ${sortBy === 'three' ? 'highlight' : ''}">${p.three.toFixed(1)}%</td>
      <td class="stat-num ${sortBy === 'ft' ? 'highlight' : ''}">${p.ft.toFixed(1)}%</td>
      <td class="stat-num ${sortBy === 'stl' ? 'highlight' : ''}">${p.stl.toFixed(1)}</td>
      <td class="stat-num ${sortBy === 'blk' ? 'highlight' : ''}">${p.blk.toFixed(1)}</td>
    </tr>
  `).join("");
}

// Sort state
let currentSort = "ppg";
let sortAscending = false;
let currentFilter = "all";

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderRoster();
  renderStats();

  // View toggle buttons
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      viewMode = btn.dataset.view;
      renderRoster(currentFilter);
    });
  });

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderRoster(currentFilter);
    });
  });

  // Sortable headers
  document.querySelectorAll(".stats-table th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (key === "name" || key === "number" || key === "pos") return;
      if (currentSort === key) {
        sortAscending = !sortAscending;
      } else {
        currentSort = key;
        sortAscending = false;
      }
      document.querySelectorAll(".stats-table th").forEach(h => h.classList.remove("sort-asc", "sort-desc"));
      th.classList.add(sortAscending ? "sort-asc" : "sort-desc");
      renderStats(key, sortAscending);
    });
  });

  // Mobile nav toggle
  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
    document.getElementById("navToggle").classList.toggle("active");
  });

  // Close mobile nav on link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("open");
      document.getElementById("navToggle").classList.remove("active");
    });
  });

  // Close mobile nav on outside click
  document.addEventListener("click", (e) => {
    const nav = document.getElementById("navLinks");
    const toggle = document.getElementById("navToggle");
    if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("open");
      toggle.classList.remove("active");
    }
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
  });
});
