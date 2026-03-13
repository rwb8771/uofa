// =============================================
// PLAYER DATA WITH BACKSTORIES & DID-YOU-KNOW
// =============================================
const players = [
  {
    number: 0, name: "Jaden Bradley", pos: "G", height: "6'3\"", weight: 200, year: "SR",
    ppg: 13.4, rpg: 3.5, apg: 4.6, fg: 46.1, three: 38.2, ft: 79.9, stl: 1.6, blk: 0.0, gp: 31, min: 30.3,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683842.png&w=350&h=254",
    backstory: "Jaden Bradley is a senior guard from Concord, North Carolina who originally committed to and played at Alabama, where he was part of the Crimson Tide's 2023 Final Four run. He transferred to Arizona ahead of the 2024-25 season seeking a bigger role and has become the team's floor general.",
    didYouKnow: [
      "Bradley was a McDonald's All-American nominee and top-30 recruit out of IMG Academy in Florida.",
      "He recorded a career-high 10 assists against South Dakota State this season, showcasing his elite court vision.",
      "His father, Joel Bradley, played professional basketball overseas, making Jaden a second-generation pro prospect."
    ]
  },
  {
    number: 2, name: "Dwayne Aristode", pos: "F", height: "6'8\"", weight: 220, year: "FR",
    ppg: 4.6, rpg: 1.9, apg: 0.9, fg: 48.9, three: 45.9, ft: 58.8, stl: 0.6, blk: 0.1, gp: 27, min: 14.9,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105956.png&w=350&h=254",
    backstory: "Dwayne Aristode is a versatile freshman forward who arrived at Arizona as part of the highly-touted 2025 recruiting class. Known for his shooting touch and basketball IQ, he has carved out a meaningful role off the bench.",
    didYouKnow: [
      "Aristode shot an incredible 45.9% from three-point range this season, the highest on the team among rotation players.",
      "He was ranked as a four-star recruit and chose Arizona over several other Power Five programs.",
      "Despite being a freshman, he appeared in 27 of 31 games, showing the coaching staff's trust in his abilities."
    ]
  },
  {
    number: 3, name: "Anthony Dell'Orso", pos: "G", height: "6'6\"", weight: 205, year: "SR",
    ppg: 8.7, rpg: 2.0, apg: 2.1, fg: 40.3, three: 31.7, ft: 83.3, stl: 0.9, blk: 0.2, gp: 31, min: 21.6,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683025.png&w=350&h=254",
    backstory: "Anthony Dell'Orso is a senior guard who transferred to Arizona after standout seasons at Campbell and Middle Tennessee. The 6'6\" sharpshooter brings veteran experience and scored over 1,500 career points across his college career before arriving in Tucson.",
    didYouKnow: [
      "Dell'Orso shot 83.3% from the free throw line this season, the best mark on the team.",
      "He transferred twice during his career, playing at three different schools before finding his home at Arizona.",
      "At his height of 6'6\", he is one of the tallest guards in the Big 12 conference."
    ]
  },
  {
    number: 5, name: "Brayden Burries", pos: "G", height: "6'4\"", weight: 205, year: "FR",
    ppg: 16.0, rpg: 5.0, apg: 2.6, fg: 49.7, three: 37.0, ft: 78.9, stl: 1.6, blk: 0.2, gp: 31, min: 29.6,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105859.png&w=350&h=254",
    backstory: "Brayden Burries hails from Eleanor Roosevelt High School in California where he was one of the top-ranked guards in the 2025 class. He burst onto the scene at Arizona as an immediate impact freshman and leads the team in scoring at 16.0 PPG.",
    didYouKnow: [
      "Burries set a career high of 31 points against Colorado, scoring 22 of those in the second half alone.",
      "He led the entire team with 50 three-pointers made as a true freshman.",
      "His 16.0 PPG as a freshman is one of the highest by any first-year Wildcat in program history."
    ]
  },
  {
    number: 6, name: "Bryce James", pos: "G", height: "6'5\"", weight: 195, year: "FR",
    ppg: 0, rpg: 0, apg: 0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105860.png&w=350&h=254",
    backstory: "Bryce James, the younger son of NBA legend LeBron James, chose Arizona over other high-profile programs. The 6'5\" freshman guard from Los Angeles brings tremendous athleticism and name recognition to the Wildcats program.",
    didYouKnow: [
      "His father LeBron James is the NBA's all-time leading scorer, and his older brother Bronny plays in the NBA.",
      "Bryce chose Arizona over offers from Ohio State, USC, and Duquesne among others.",
      "He played high school basketball at Sierra Canyon and Notre Dame High School in Sherman Oaks, California."
    ]
  },
  {
    number: 7, name: "Jackson Francois", pos: "G", height: "6'5\"", weight: 160, year: "SR",
    ppg: 0.5, rpg: 0.5, apg: 0.0, fg: 100, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912968.png&w=350&h=254",
    backstory: "Jackson Francois is a senior guard who has been a valued member of the Arizona program. Originally from Las Vegas, Nevada, he brings energy and leadership to the team's practices and locker room as a veteran presence.",
    didYouKnow: [
      "Francois shot 100% from the field during his game appearances this season -- he didn't miss a shot.",
      "He previously played at Missouri before transferring to Arizona.",
      "At 160 pounds, he is the lightest player on the roster but makes up for it with his quickness and hustle."
    ]
  },
  {
    number: 8, name: "Ivan Kharchenkov", pos: "F", height: "6'7\"", weight: 220, year: "FR",
    ppg: 9.8, rpg: 4.0, apg: 2.3, fg: 47.9, three: 29.4, ft: 72.5, stl: 1.5, blk: 0.3, gp: 31, min: 27.3,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105955.png&w=350&h=254",
    backstory: "Ivan Kharchenkov is a talented freshman forward who brings international flair to the Arizona roster. The 6'7\" forward has quickly adapted to the American college game and become a key contributor in Coach Lloyd's rotation.",
    didYouKnow: [
      "Kharchenkov played in all 31 games as a true freshman, averaging 27.3 minutes per game.",
      "He led the team's freshmen in assists per game at 2.3, showing his versatility as a playmaking forward.",
      "His 1.5 steals per game ranked second on the team, highlighting his defensive instincts."
    ]
  },
  {
    number: 10, name: "Koa Peat", pos: "F", height: "6'8\"", weight: 235, year: "FR",
    ppg: 13.8, rpg: 5.3, apg: 2.7, fg: 54.8, three: 31.6, ft: 60.2, stl: 0.7, blk: 0.8, gp: 28, min: 27.3,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105861.png&w=350&h=254",
    backstory: "Koa Peat is a hometown hero from Gilbert, Arizona who starred at Perry High School. A five-star recruit and the consensus No. 2 overall player in the 2025 class, he was a three-time Gatorade Arizona Player of the Year before committing to the Wildcats.",
    didYouKnow: [
      "Peat exploded for 30 points in his very first college game against #3 Florida, announcing his arrival on the national stage.",
      "He won the Gatorade Arizona Player of the Year award THREE times -- the only player in state history to do so.",
      "His 54.8% field goal percentage is remarkable for a perimeter-oriented forward, showing his elite finishing ability."
    ]
  },
  {
    number: 11, name: "Jackson Cook", pos: "G", height: "6'3\"", weight: 185, year: "SO",
    ppg: 0.0, rpg: 0.1, apg: 0.0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912971.png&w=350&h=254",
    backstory: "Jackson Cook is a sophomore guard who continues to develop within the Arizona program. A walk-on who earned his spot through hard work in practice, he represents the grit and determination that defines Wildcat basketball.",
    didYouKnow: [
      "Cook is one of the few walk-ons on the Arizona roster, earning his spot through pure effort and dedication.",
      "He is a Tucson native, making him one of the few hometown players on the team.",
      "Despite limited game minutes, Cook is known as one of the hardest workers in practice by his teammates."
    ]
  },
  {
    number: 13, name: "Motiejus Krivas", pos: "C", height: "7'2\"", weight: 260, year: "JR",
    ppg: 10.8, rpg: 8.2, apg: 1.0, fg: 58.8, three: 36.4, ft: 79.7, stl: 0.7, blk: 1.8, gp: 31, min: 24.9,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912880.png&w=350&h=254",
    backstory: "Motiejus Krivas is a 7'2\" junior center from Kaunas, Lithuania. He came to Arizona as a raw but talented big man and has developed into one of the most dominant centers in the Big 12, providing elite rim protection and efficient scoring.",
    didYouKnow: [
      "Krivas recorded a season-high 6 blocks in a single game against South Dakota State.",
      "At 7'2\" and 260 pounds, he is the tallest and heaviest player on the entire Arizona roster.",
      "He shot 58.8% from the field and even knocked down three-pointers at a 36.4% clip, rare for a player his size."
    ]
  },
  {
    number: 15, name: "Sidi Gueye", pos: "F", height: "6'11\"", weight: 215, year: "FR",
    ppg: 1.3, rpg: 0.8, apg: 0.2, fg: 68.8, three: 50.0, ft: 63.6, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105957.png&w=350&h=254",
    backstory: "Sidi Gueye is a 6'11\" freshman forward with tremendous upside. His length and athleticism make him a project player with a very high ceiling as he continues to add strength and refine his skills under Coach Lloyd's development program.",
    didYouKnow: [
      "Gueye shot an efficient 68.8% from the field in his limited appearances this season.",
      "At 6'11\" and just a freshman, he has the physical tools to develop into a future NBA prospect.",
      "He also hit 50% of his three-point attempts, showing a surprisingly versatile shooting stroke for his size."
    ]
  },
  {
    number: 20, name: "Mabil Mawut", pos: "F", height: "6'11\"", weight: 200, year: "FR",
    ppg: 0, rpg: 0, apg: 0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105958.png&w=350&h=254",
    backstory: "Mabil Mawut is a 6'11\" freshman forward who is redshirting and developing this season. The long, athletic forward has the physical profile of a modern stretch-four and is using this year to prepare for a bigger role in future seasons.",
    didYouKnow: [
      "At 6'11\" and 200 pounds, Mawut has one of the longest wingspans on the team.",
      "He chose Arizona's player development program over several other options, showing his belief in Coach Lloyd's system.",
      "Mawut is using his redshirt year to add muscle and refine his perimeter skills for future seasons."
    ]
  },
  {
    number: 21, name: "Evan Nelson", pos: "G", height: "6'2\"", weight: 175, year: "SR",
    ppg: 0.5, rpg: 0.5, apg: 0.3, fg: 36.4, three: 37.5, ft: 0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683843.png&w=350&h=254",
    backstory: "Evan Nelson is a senior guard who transferred to Arizona from Harvard, bringing Ivy League smarts and experience to the Wildcats. The 6'2\" guard provides veteran depth and leadership in the backcourt.",
    didYouKnow: [
      "Nelson transferred from Harvard, one of only a few Ivy League-to-Power Five transfers in recent years.",
      "He shot 37.5% from three-point range in his appearances, showing he can stretch the floor when called upon.",
      "As a Harvard student-athlete, he carries one of the highest GPAs on the Arizona roster."
    ]
  },
  {
    number: 22, name: "Addison Arnold", pos: "G", height: "6'3\"", weight: 185, year: "SO",
    ppg: 0.4, rpg: 0.5, apg: 0.2, fg: 18.2, three: 0, ft: 100, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912970.png&w=350&h=254",
    backstory: "Addison Arnold is a sophomore guard developing in the Arizona program. He shot 100% from the free throw line in his appearances this season and continues to work on earning a larger role within the rotation.",
    didYouKnow: [
      "Arnold was a perfect 100% from the free-throw line during his game appearances this season.",
      "His father Gib Arnold played basketball at Hawaii, making Addison a second-generation college basketball player.",
      "He is known among teammates for his relentless work ethic in practice and his sharpshooting ability."
    ]
  },
  {
    number: 30, name: "Tobe Awaka", pos: "F", height: "6'8\"", weight: 255, year: "SR",
    ppg: 9.6, rpg: 9.5, apg: 0.9, fg: 59.1, three: 50.0, ft: 69.4, stl: 0.4, blk: 0.7, gp: 31, min: 21.5,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4683028.png&w=350&h=254",
    backstory: "Tobe Awaka is a senior forward and the heart of Arizona's bench unit. Originally from Nigeria, he came to the U.S. to pursue basketball and has developed into one of the most impactful sixth men in college basketball, earning Big 12 Sixth Man of the Year honors.",
    didYouKnow: [
      "Awaka won the Big 12 Sixth Man of the Year award, a testament to his incredible impact off the bench.",
      "He led the entire team in total rebounds with 296 (9.5 per game) despite coming off the bench every game.",
      "His 59.1% field goal percentage was the highest among Arizona players with significant minutes, and he even hit 50% of his threes."
    ]
  },
  {
    number: 42, name: "Sven Djopmo", pos: "G", height: "6'2\"", weight: 190, year: "SO",
    ppg: 0.6, rpg: 0.2, apg: 0.3, fg: 66.7, three: 0, ft: 40.0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4912969.png&w=350&h=254",
    backstory: "Sven Djopmo is a sophomore guard who provides depth in the Arizona backcourt. The 6'2\" guard is continuing to develop his game and shot 66.7% from the field in his limited appearances this season.",
    didYouKnow: [
      "Djopmo shot 66.7% from the field in his appearances, making the most of his opportunities.",
      "He wears #42, one of the highest jersey numbers on the team and an unusual choice for a guard.",
      "He is part of a deep and talented Arizona backcourt that features eight guards on the roster."
    ]
  }
];

// =============================================
// RECORD HOLDERS DATA
// =============================================
const records = {
  game: [
    { record: "Most Points", player: "Ernie McCray", value: "46", detail: "vs. Cal State LA, 1961", pos: "F", photo: "" },
    { record: "Most Rebounds", player: "Bob Elliott", value: "25", detail: "vs. Northern Arizona, 1976", pos: "F/C", photo: "" },
    { record: "Most Assists", player: "Russell Brown", value: "16", detail: "vs. Arizona State, 1983", pos: "G", photo: "" },
    { record: "Most Blocks", player: "Loren Woods", value: "10", detail: "vs. Oregon, 2001", pos: "C", photo: "" },
    { record: "Most Steals", player: "Damon Stoudamire", value: "8", detail: "vs. Oregon State, 1995", pos: "G", photo: "" },
    { record: "Most 3-Pointers", player: "Salim Stoudamire", value: "10", detail: "vs. Stanford, 2005", pos: "G", photo: "" }
  ],
  season: [
    { record: "Most Points", player: "Ernie McCray", value: "649", detail: "1960-61 season", pos: "F", photo: "" },
    { record: "Highest PPG", player: "Coniel Norman", value: "24.7", detail: "1973-74 season", pos: "G/F", photo: "" },
    { record: "Most Rebounds", player: "Albert Johnson", value: "393", detail: "1965-66 season", pos: "F", photo: "" },
    { record: "Most Assists", player: "Russell Brown", value: "247", detail: "1978-79 season (9.1 APG)", pos: "G", photo: "" },
    { record: "Most Blocks", player: "Christian Koloko", value: "102", detail: "2021-22 season", pos: "C", photo: "" },
    { record: "Most 3-Pointers", player: "Salim Stoudamire", value: "120", detail: "2004-05 season", pos: "G", photo: "" },
    { record: "Most Wins", player: "2024-25 Team", value: "32", detail: "32-5 overall record", pos: "Team", photo: "" }
  ],
  career: [
    { record: "Most Points", player: "Sean Elliott", value: "2,555", detail: "1985-89, NBA #3 pick", pos: "F", photo: "" },
    { record: "2nd Most Points", player: "Steve Kerr", value: "2,024", detail: "1984-88, 5x NBA Champion coach", pos: "G", photo: "" },
    { record: "3rd Most Points", player: "Bob Elliott", value: "1,906", detail: "1973-77", pos: "F/C", photo: "" },
    { record: "Most Rebounds", player: "Bob Elliott", value: "1,095", detail: "1973-77", pos: "F/C", photo: "" },
    { record: "Most Assists", player: "Damon Stoudamire", value: "698", detail: "1991-95, NBA ROY 1996", pos: "G", photo: "" },
    { record: "Most Blocks", player: "Loren Woods", value: "283", detail: "1999-2001", pos: "C", photo: "" },
    { record: "Most Steals", player: "Damon Stoudamire", value: "246", detail: "1991-95", pos: "G", photo: "" },
    { record: "Best Career 3PT%", player: "Steve Kerr", value: "57.3%", detail: "1984-88, NCAA record at the time", pos: "G", photo: "" }
  ]
};

// =============================================
// STATE
// =============================================
let rosterViewMode = "grid";
let recordsViewMode = "grid";
let currentFilter = "all";
let currentRecordCategory = "game";

// =============================================
// HELPERS
// =============================================
function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("");
}

function getPosColor(pos) {
  const colors = { G: "#cc0033", F: "#003366", C: "#1a1a2e" };
  return colors[pos] || "#666";
}

function handleImgError(img, name, pos) {
  const parent = img.parentElement;
  img.style.display = "none";
  parent.style.background = getPosColor(pos);
  const fallback = document.createElement("span");
  fallback.className = "player-initials";
  fallback.textContent = getInitials(name);
  parent.insertBefore(fallback, parent.firstChild);
}

// =============================================
// ROSTER RENDERING
// =============================================
function renderRosterGrid(filtered) {
  return `<div class="roster-grid">${filtered.map((p, i) => `
    <div class="player-card" data-index="${players.indexOf(p)}" style="animation-delay: ${i * 0.05}s">
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
          <div class="quick-stat"><span class="quick-stat-value">${p.ppg}</span><span class="quick-stat-label">PPG</span></div>
          <div class="quick-stat"><span class="quick-stat-value">${p.rpg}</span><span class="quick-stat-label">RPG</span></div>
          <div class="quick-stat"><span class="quick-stat-value">${p.apg}</span><span class="quick-stat-label">APG</span></div>
        </div>` : `<p class="player-limited">Limited minutes</p>`}
      </div>
    </div>
  `).join("")}</div>`;
}

function renderRosterTable(filtered) {
  return `<div class="spreadsheet-wrapper"><table class="spreadsheet">
    <thead><tr>
      <th>#</th><th>Player</th><th>Pos</th><th>Ht</th><th>Wt</th><th>Yr</th>
      <th>GP</th><th>MIN</th><th>PPG</th><th>RPG</th><th>APG</th><th>FG%</th><th>3PT%</th><th>FT%</th><th>STL</th><th>BLK</th>
    </tr></thead>
    <tbody>${filtered.map((p, i) => `
      <tr class="spreadsheet-row" data-index="${players.indexOf(p)}" style="animation-delay: ${i * 0.03}s">
        <td class="cell-number">${p.number}</td>
        <td class="cell-player">
          <div class="cell-player-inner">
            <div class="cell-thumb" style="background: ${getPosColor(p.pos)}">
              <img src="${p.photo}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
              <span class="cell-initials" style="display:none">${getInitials(p.name)}</span>
            </div>
            ${p.name}
          </div>
        </td>
        <td><span class="pos-tag pos-${p.pos}">${p.pos}</span></td>
        <td>${p.height}</td>
        <td>${p.weight}</td>
        <td class="cell-year">${p.year}</td>
        <td>${p.gp}</td>
        <td>${p.min.toFixed(1)}</td>
        <td class="cell-highlight">${p.ppg.toFixed(1)}</td>
        <td>${p.rpg.toFixed(1)}</td>
        <td>${p.apg.toFixed(1)}</td>
        <td>${p.fg.toFixed(1)}%</td>
        <td>${p.three.toFixed(1)}%</td>
        <td>${p.ft.toFixed(1)}%</td>
        <td>${p.stl.toFixed(1)}</td>
        <td>${p.blk.toFixed(1)}</td>
      </tr>
    `).join("")}</tbody>
  </table></div>`;
}

function renderRoster() {
  const container = document.getElementById("rosterContainer");
  const filtered = currentFilter === "all" ? players : players.filter(p => p.pos === currentFilter);
  container.innerHTML = rosterViewMode === "grid" ? renderRosterGrid(filtered) : renderRosterTable(filtered);

  // Attach click handlers
  container.querySelectorAll("[data-index]").forEach(el => {
    el.addEventListener("click", () => openPlayerModal(parseInt(el.dataset.index)));
    el.style.cursor = "pointer";
  });
}

// =============================================
// RECORDS RENDERING
// =============================================
function renderRecordsGrid(data) {
  return `<div class="records-grid">${data.map((r, i) => `
    <div class="record-card" data-record='${JSON.stringify(r).replace(/'/g, "&#39;")}' style="animation-delay: ${i * 0.05}s">
      <div class="record-card-top">
        <div class="record-value">${r.value}</div>
        <div class="record-label">${r.record}</div>
      </div>
      <div class="record-card-bottom">
        <h3 class="record-player">${r.player}</h3>
        <p class="record-detail">${r.detail}</p>
        <span class="record-pos">${r.pos}</span>
      </div>
    </div>
  `).join("")}</div>`;
}

function renderRecordsTable(data) {
  return `<div class="spreadsheet-wrapper"><table class="spreadsheet records-spreadsheet">
    <thead><tr>
      <th>Record</th><th>Player</th><th>Value</th><th>Details</th><th>Pos</th>
    </tr></thead>
    <tbody>${data.map((r, i) => `
      <tr class="spreadsheet-row" data-record='${JSON.stringify(r).replace(/'/g, "&#39;")}' style="animation-delay: ${i * 0.03}s">
        <td class="cell-record-name">${r.record}</td>
        <td class="cell-player"><strong>${r.player}</strong></td>
        <td class="cell-highlight">${r.value}</td>
        <td>${r.detail}</td>
        <td><span class="pos-tag pos-${r.pos === 'G' ? 'G' : r.pos === 'C' ? 'C' : 'F'}">${r.pos}</span></td>
      </tr>
    `).join("")}</tbody>
  </table></div>`;
}

function renderRecords() {
  const container = document.getElementById("recordsContainer");
  const data = records[currentRecordCategory];
  container.innerHTML = recordsViewMode === "grid" ? renderRecordsGrid(data) : renderRecordsTable(data);

  // Click handlers for record cards/rows
  container.querySelectorAll("[data-record]").forEach(el => {
    el.addEventListener("click", () => {
      const r = JSON.parse(el.dataset.record);
      openRecordModal(r);
    });
    el.style.cursor = "pointer";
  });
}

// =============================================
// PLAYER MODAL
// =============================================
let dykIndex = 0;

function openPlayerModal(index) {
  const p = players[index];
  dykIndex = 0;
  const modal = document.getElementById("playerModal");
  const header = document.getElementById("modalHeader");
  const body = document.getElementById("modalBody");

  header.innerHTML = `
    <div class="modal-photo-wrap" style="background: ${getPosColor(p.pos)}">
      <img src="${p.photo}" alt="${p.name}" class="modal-photo"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <span class="modal-initials" style="display:none">${getInitials(p.name)}</span>
    </div>
    <div class="modal-header-info">
      <span class="modal-number">#${p.number}</span>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-meta">
        <span class="player-pos-badge">${p.pos}</span>
        <span>${p.height} &middot; ${p.weight} lbs</span>
        <span class="player-year">${p.year}</span>
      </div>
    </div>
  `;

  body.innerHTML = `
    <div class="modal-section">
      <h3>About</h3>
      <p>${p.backstory}</p>
    </div>
    ${p.ppg > 0 ? `
    <div class="modal-section">
      <h3>Season Stats</h3>
      <div class="modal-stats-grid">
        <div class="modal-stat"><span class="modal-stat-val">${p.ppg}</span><span class="modal-stat-lbl">PPG</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${p.rpg}</span><span class="modal-stat-lbl">RPG</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${p.apg}</span><span class="modal-stat-lbl">APG</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${p.fg.toFixed(1)}%</span><span class="modal-stat-lbl">FG%</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${p.three.toFixed(1)}%</span><span class="modal-stat-lbl">3PT%</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${p.ft.toFixed(1)}%</span><span class="modal-stat-lbl">FT%</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${p.stl}</span><span class="modal-stat-lbl">STL</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${p.blk}</span><span class="modal-stat-lbl">BLK</span></div>
      </div>
    </div>` : ""}
    <div class="modal-section dyk-section">
      <h3>Did You Know?</h3>
      <div class="dyk-carousel">
        <button class="dyk-arrow dyk-left" id="dykLeft">&#8249;</button>
        <div class="dyk-content" id="dykContent">
          <div class="dyk-card">
            <div class="dyk-icon">?</div>
            <p id="dykText">${p.didYouKnow[0]}</p>
          </div>
        </div>
        <button class="dyk-arrow dyk-right" id="dykRight">&#8250;</button>
      </div>
      <div class="dyk-dots" id="dykDots">
        ${p.didYouKnow.map((_, i) => `<span class="dyk-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></span>`).join("")}
      </div>
    </div>
  `;

  // DYK navigation
  const updateDyk = () => {
    document.getElementById("dykText").textContent = p.didYouKnow[dykIndex];
    document.querySelectorAll(".dyk-dot").forEach((d, i) => d.classList.toggle("active", i === dykIndex));
    // Animate
    const card = document.querySelector(".dyk-card");
    card.style.animation = "none";
    card.offsetHeight; // trigger reflow
    card.style.animation = "dykSlide 0.4s ease";
  };

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Attach DYK handlers after modal is open
  setTimeout(() => {
    document.getElementById("dykLeft").addEventListener("click", (e) => {
      e.stopPropagation();
      dykIndex = (dykIndex - 1 + p.didYouKnow.length) % p.didYouKnow.length;
      updateDyk();
    });
    document.getElementById("dykRight").addEventListener("click", (e) => {
      e.stopPropagation();
      dykIndex = (dykIndex + 1) % p.didYouKnow.length;
      updateDyk();
    });
    document.querySelectorAll(".dyk-dot").forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        dykIndex = parseInt(dot.dataset.i);
        updateDyk();
      });
    });
  }, 10);
}

function openRecordModal(r) {
  const modal = document.getElementById("playerModal");
  const header = document.getElementById("modalHeader");
  const body = document.getElementById("modalBody");
  const posColor = r.pos === "G" ? "#cc0033" : r.pos === "C" ? "#1a1a2e" : "#003366";

  header.innerHTML = `
    <div class="modal-photo-wrap" style="background: ${posColor}">
      <span class="modal-initials" style="display:flex">${getInitials(r.player)}</span>
    </div>
    <div class="modal-header-info">
      <span class="modal-number record-badge">${r.value}</span>
      <h2 class="modal-name">${r.player}</h2>
      <div class="modal-meta">
        <span class="player-pos-badge">${r.pos}</span>
      </div>
    </div>
  `;

  body.innerHTML = `
    <div class="modal-section">
      <h3>${r.record}</h3>
      <p>${r.detail}</p>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("playerModal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// =============================================
// INIT
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  renderRoster();
  renderRecords();

  // Roster view toggle
  document.querySelectorAll(".roster .view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".roster .view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      rosterViewMode = btn.dataset.view;
      renderRoster();
    });
  });

  // Roster filters
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderRoster();
    });
  });

  // Records view toggle
  document.querySelectorAll(".records .records-view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".records .records-view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      recordsViewMode = btn.dataset.view;
      renderRecords();
    });
  });

  // Records category filter
  document.querySelectorAll(".records-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".records-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentRecordCategory = btn.dataset.category;
      renderRecords();
    });
  });

  // Modal close
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("playerModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("playerModal")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
