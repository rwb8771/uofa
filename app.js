// =============================================
// PLAYER DATA WITH BACKSTORIES & DID-YOU-KNOW
// =============================================
const players = [
  {
    number: 0, name: "Jaden Bradley", pos: "G", height: "6'3\"", weight: 200, year: "SR",
    ppg: 13.3, rpg: 3.6, apg: 4.5, fg: 46.0, three: 38.2, ft: 80.1, stl: 1.6, blk: 0.1, gp: 32, min: 30.3,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4432737.png&w=350&h=254",
    nil: { valuation: "~$1M", details: "Revenue-share deal with Arizona; RallyFuel fan-funding page" },
    backstory: "Jaden Bradley is a senior guard from Concord, North Carolina who originally committed to and played at Alabama, where he was part of the Crimson Tide's 2023 Final Four run. He transferred to Arizona ahead of the 2024-25 season seeking a bigger role and has become the team's floor general.",
    didYouKnow: [
      "Bradley was a McDonald's All-American nominee and top-30 recruit out of IMG Academy in Florida.",
      "He recorded a career-high 10 assists against South Dakota State this season, showcasing his elite court vision.",
      "His father, Joel Bradley, played professional basketball overseas, making Jaden a second-generation pro prospect."
    ]
  },
  {
    number: 2, name: "Dwayne Aristode", pos: "F", height: "6'8\"", weight: 220, year: "FR",
    ppg: 4.4, rpg: 1.9, apg: 0.8, fg: 48.3, three: 45.2, ft: 58.8, stl: 0.6, blk: 0.1, gp: 28, min: 14.9,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5186456.png&w=350&h=254",
    nil: null,
    backstory: "Dwayne Aristode is a versatile freshman forward who arrived at Arizona as part of the highly-touted 2025 recruiting class. Known for his shooting touch and basketball IQ, he has carved out a meaningful role off the bench.",
    didYouKnow: [
      "Aristode shot an incredible 45.2% from three-point range this season, the highest on the team among rotation players.",
      "He was ranked as a four-star recruit and chose Arizona over several other Power Five programs.",
      "Despite being a freshman, he appeared in 28 of 32 games, showing the coaching staff's trust in his abilities."
    ]
  },
  {
    number: 3, name: "Anthony Dell'Orso", pos: "G", height: "6'6\"", weight: 205, year: "SR",
    ppg: 8.6, rpg: 2.1, apg: 2.1, fg: 39.7, three: 31.0, ft: 80.7, stl: 0.9, blk: 0.2, gp: 32, min: 21.5,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5108141.png&w=350&h=254",
    nil: { valuation: "Mid-6 figures", details: "Revenue-share deal to return for senior season" },
    backstory: "Anthony Dell'Orso is a senior guard who transferred to Arizona after standout seasons at Campbell and Middle Tennessee. The 6'6\" sharpshooter brings veteran experience and scored over 1,500 career points across his college career before arriving in Tucson.",
    didYouKnow: [
      "Dell'Orso shot 80.7% from the free throw line this season, one of the best marks on the team.",
      "He transferred twice during his career, playing at three different schools before finding his home at Arizona.",
      "At his height of 6'6\", he is one of the tallest guards in the Big 12 conference."
    ]
  },
  {
    number: 5, name: "Brayden Burries", pos: "G", height: "6'4\"", weight: 205, year: "FR",
    ppg: 16.2, rpg: 4.9, apg: 2.6, fg: 49.9, three: 37.3, ft: 79.6, stl: 1.6, blk: 0.2, gp: 32, min: 29.7,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5082206.png&w=350&h=254",
    nil: { valuation: "High 6 figures", details: "Five-star recruit (#10 national, #1 combo guard); part of ~$1.77M guard allocation" },
    backstory: "Brayden Burries hails from Eleanor Roosevelt High School in California where he was one of the top-ranked guards in the 2025 class. He burst onto the scene at Arizona as an immediate impact freshman and leads the team in scoring at 16.0 PPG.",
    didYouKnow: [
      "Burries set a career high of 31 points against Colorado, scoring 22 of those in the second half alone.",
      "He led the entire team with 50 three-pointers made as a true freshman.",
      "His 16.2 PPG as a freshman is one of the highest by any first-year Wildcat in program history."
    ]
  },
  {
    number: 6, name: "Bryce James", pos: "G", height: "6'5\"", weight: 195, year: "FR",
    ppg: 0, rpg: 0, apg: 0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5082287.png&w=350&h=254",
    nil: { valuation: "~$1.3M", details: "Beats by Dre, Taco Bell, Sprite; 3.4M social media followers" },
    backstory: "Bryce James, the younger son of NBA legend LeBron James, chose Arizona over other high-profile programs. The 6'5\" freshman guard from Los Angeles brings tremendous athleticism and name recognition to the Wildcats program.",
    didYouKnow: [
      "His father LeBron James is the NBA's all-time leading scorer, and his older brother Bronny plays in the NBA.",
      "Bryce chose Arizona over offers from Ohio State, USC, and Duquesne among others.",
      "He played high school basketball at Sierra Canyon and Notre Dame High School in Sherman Oaks, California."
    ]
  },
  {
    number: 7, name: "Jackson Francois", pos: "G", height: "6'5\"", weight: 160, year: "SR",
    ppg: 0.5, rpg: 0.5, apg: 0.0, fg: 100, three: 0, ft: 0, stl: 0, blk: 0, gp: 8, min: 1.5,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105542.png&w=350&h=254",
    nil: null,
    backstory: "Jackson Francois is a senior guard who has been a valued member of the Arizona program. Originally from Las Vegas, Nevada, he brings energy and leadership to the team's practices and locker room as a veteran presence.",
    didYouKnow: [
      "Francois shot 100% from the field during his game appearances this season -- he didn't miss a shot.",
      "He previously played at Missouri before transferring to Arizona.",
      "At 160 pounds, he is the lightest player on the roster but makes up for it with his quickness and hustle."
    ]
  },
  {
    number: 8, name: "Ivan Kharchenkov", pos: "F", height: "6'7\"", weight: 220, year: "FR",
    ppg: 9.8, rpg: 4.0, apg: 2.3, fg: 48.8, three: 30.2, ft: 72.9, stl: 1.4, blk: 0.3, gp: 32, min: 27.3,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5311896.png&w=350&h=254",
    nil: null,
    backstory: "Ivan Kharchenkov is a talented freshman forward who brings international flair to the Arizona roster. The 6'7\" forward has quickly adapted to the American college game and become a key contributor in Coach Lloyd's rotation.",
    didYouKnow: [
      "Kharchenkov played in all 32 games as a true freshman, averaging 27.3 minutes per game.",
      "He led the team's freshmen in assists per game at 2.3, showing his versatility as a playmaking forward.",
      "His 1.5 steals per game ranked second on the team, highlighting his defensive instincts."
    ]
  },
  {
    number: 10, name: "Koa Peat", pos: "F", height: "6'8\"", weight: 235, year: "FR",
    ppg: 13.7, rpg: 5.3, apg: 2.7, fg: 54.1, three: 31.6, ft: 60.3, stl: 0.7, blk: 0.7, gp: 29, min: 27.3,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5041953.png&w=350&h=254",
    nil: { valuation: "~$1.1M", details: "Ranked 22nd in On3 NIL rankings; five-star recruit, consensus #2 overall in 2025 class" },
    backstory: "Koa Peat is a hometown hero from Gilbert, Arizona who starred at Perry High School. A five-star recruit and the consensus No. 2 overall player in the 2025 class, he was a three-time Gatorade Arizona Player of the Year before committing to the Wildcats.",
    didYouKnow: [
      "Peat exploded for 30 points in his very first college game against #3 Florida, announcing his arrival on the national stage.",
      "He won the Gatorade Arizona Player of the Year award THREE times -- the only player in state history to do so.",
      "His 54.1% field goal percentage is remarkable for a perimeter-oriented forward, showing his elite finishing ability."
    ]
  },
  {
    number: 11, name: "Jackson Cook", pos: "G", height: "6'3\"", weight: 185, year: "SO",
    ppg: 0.0, rpg: 0.1, apg: 0.0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 8, min: 1.4,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5174956.png&w=350&h=254",
    nil: null,
    backstory: "Jackson Cook is a sophomore guard who continues to develop within the Arizona program. A walk-on who earned his spot through hard work in practice, he represents the grit and determination that defines Wildcat basketball.",
    didYouKnow: [
      "Cook is one of the few walk-ons on the Arizona roster, earning his spot through pure effort and dedication.",
      "He is a Tucson native, making him one of the few hometown players on the team.",
      "Despite limited game minutes, Cook is known as one of the hardest workers in practice by his teammates."
    ]
  },
  {
    number: 13, name: "Motiejus Krivas", pos: "C", height: "7'2\"", weight: 260, year: "JR",
    ppg: 10.7, rpg: 8.3, apg: 1.0, fg: 57.7, three: 36.4, ft: 78.1, stl: 0.7, blk: 1.8, gp: 32, min: 24.9,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5174954.png&w=350&h=254",
    nil: { valuation: "Mid-6 figures", details: "Revenue-share deal to return; projected late first-round 2026 NBA Draft pick" },
    backstory: "Motiejus Krivas is a 7'2\" junior center from Kaunas, Lithuania. He came to Arizona as a raw but talented big man and has developed into one of the most dominant centers in the Big 12, providing elite rim protection and efficient scoring.",
    didYouKnow: [
      "Krivas recorded a season-high 6 blocks in a single game against South Dakota State.",
      "At 7'2\" and 260 pounds, he is the tallest and heaviest player on the entire Arizona roster.",
      "He shot 57.7% from the field and even knocked down three-pointers at a 36.4% clip, rare for a player his size."
    ]
  },
  {
    number: 15, name: "Sidi Gueye", pos: "F", height: "6'11\"", weight: 215, year: "FR",
    ppg: 1.3, rpg: 0.7, apg: 0.2, fg: 68.8, three: 0, ft: 63.6, stl: 0.1, blk: 0.3, gp: 23, min: 3.5,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5311897.png&w=350&h=254",
    nil: null,
    backstory: "Sidi Gueye is a 6'11\" freshman forward with tremendous upside. His length and athleticism make him a project player with a very high ceiling as he continues to add strength and refine his skills under Coach Lloyd's development program.",
    didYouKnow: [
      "Gueye shot an efficient 68.8% from the field in his limited appearances this season.",
      "At 6'11\" and just a freshman, he has the physical tools to develop into a future NBA prospect.",
      "At 6'11\" he provides valuable size and rim protection, recording 0.3 blocks per game in limited minutes."
    ]
  },
  {
    number: 20, name: "Mabil Mawut", pos: "F", height: "6'11\"", weight: 200, year: "FR",
    ppg: 0, rpg: 0, apg: 0, fg: 0, three: 0, ft: 0, stl: 0, blk: 0, gp: 0, min: 0,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5311898.png&w=350&h=254",
    nil: null,
    backstory: "Mabil Mawut is a 6'11\" freshman forward who is redshirting and developing this season. The long, athletic forward has the physical profile of a modern stretch-four and is using this year to prepare for a bigger role in future seasons.",
    didYouKnow: [
      "At 6'11\" and 200 pounds, Mawut has one of the longest wingspans on the team.",
      "He chose Arizona's player development program over several other options, showing his belief in Coach Lloyd's system.",
      "Mawut is using his redshirt year to add muscle and refine his perimeter skills for future seasons."
    ]
  },
  {
    number: 21, name: "Evan Nelson", pos: "G", height: "6'2\"", weight: 175, year: "SR",
    ppg: 0.6, rpg: 0.5, apg: 0.3, fg: 41.7, three: 44.4, ft: 0, stl: 0.1, blk: 0.0, gp: 22, min: 3.5,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4702960.png&w=350&h=254",
    nil: null,
    backstory: "Evan Nelson is a senior guard who transferred to Arizona from Harvard, bringing Ivy League smarts and experience to the Wildcats. The 6'2\" guard provides veteran depth and leadership in the backcourt.",
    didYouKnow: [
      "Nelson transferred from Harvard, one of only a few Ivy League-to-Power Five transfers in recent years.",
      "He shot 37.5% from three-point range in his appearances, showing he can stretch the floor when called upon.",
      "As a Harvard student-athlete, he carries one of the highest GPAs on the Arizona roster."
    ]
  },
  {
    number: 22, name: "Addison Arnold", pos: "G", height: "6'3\"", weight: 185, year: "SO",
    ppg: 0.3, rpg: 0.4, apg: 0.2, fg: 18.2, three: 0, ft: 100, stl: 0, blk: 0.1, gp: 18, min: 2.2,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4896359.png&w=350&h=254",
    nil: null,
    backstory: "Addison Arnold is a sophomore guard developing in the Arizona program. He shot 100% from the free throw line in his appearances this season and continues to work on earning a larger role within the rotation.",
    didYouKnow: [
      "Arnold was a perfect 100% from the free-throw line during his game appearances this season.",
      "His father Gib Arnold played basketball at Hawaii, making Addison a second-generation college basketball player.",
      "He is known among teammates for his relentless work ethic in practice and his sharpshooting ability."
    ]
  },
  {
    number: 30, name: "Tobe Awaka", pos: "F", height: "6'8\"", weight: 255, year: "SR",
    ppg: 9.7, rpg: 9.6, apg: 0.8, fg: 59.9, three: 50.0, ft: 66.2, stl: 0.4, blk: 0.8, gp: 32, min: 21.4,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5105555.png&w=350&h=254",
    nil: { valuation: "Mid-6 figures", details: "NIL merchandise via Athlete's Thread; revenue-share deal to return" },
    backstory: "Tobe Awaka is a senior forward and the heart of Arizona's bench unit. Originally from Nigeria, he came to the U.S. to pursue basketball and has developed into one of the most impactful sixth men in college basketball, earning Big 12 Sixth Man of the Year honors.",
    didYouKnow: [
      "Awaka won the Big 12 Sixth Man of the Year award, a testament to his incredible impact off the bench.",
      "He led the entire team in rebounds with 9.6 per game despite coming off the bench every game.",
      "His 59.9% field goal percentage was the highest among Arizona players with significant minutes, and he even hit 50% of his threes."
    ]
  },
  {
    number: 42, name: "Sven Djopmo", pos: "G", height: "6'2\"", weight: 190, year: "SO",
    ppg: 0.6, rpg: 0.2, apg: 0.2, fg: 66.7, three: 0, ft: 40.0, stl: 0.1, blk: 0, gp: 17, min: 1.8,
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5239487.png&w=350&h=254",
    nil: null,
    backstory: "Sven Djopmo is a sophomore guard who provides depth in the Arizona backcourt. The 6'2\" guard is continuing to develop his game and shot 66.7% from the field in his limited appearances this season.",
    didYouKnow: [
      "Djopmo shot 66.7% from the field in his appearances, making the most of his opportunities.",
      "He wears #42, one of the highest jersey numbers on the team and an unusual choice for a guard.",
      "He is part of a deep and talented Arizona backcourt that features eight guards on the roster."
    ]
  }
];

// =============================================
// COACHING STAFF DATA
// =============================================
const coaches = [
  {
    name: "Tommy Lloyd", role: "Head Coach",
    photo: "",
    bio: "Fifth-year head coach. 2025 Big 12 Coach of the Year. 141 career wins, the most for any head coach in his first five seasons at Arizona. Previously spent 20+ years as associate head coach at Gonzaga under Mark Few."
  },
  {
    name: "Jack Murphy", role: "Associate Head Coach",
    photo: "",
    bio: "Associate head coach under Tommy Lloyd. Has been a key part of Lloyd's staff since the beginning of his tenure at Arizona, helping with game strategy and recruiting."
  },
  {
    name: "Brandon Chappell", role: "Assistant Coach",
    photo: "",
    bio: "Hired May 2025 from Texas, where he spent three seasons as an assistant. Previously coached at UNLV, Lamar, and Arkansas-Fort Smith. Replaces the retired Steve Robinson."
  },
  {
    name: "Evan Manning", role: "Assistant Coach",
    photo: "",
    bio: "Promoted to assistant coach in September 2025 after two seasons as Director of Basketball Operations. Son of legendary Kansas basketball player Danny Manning."
  },
  {
    name: "Austin Torres", role: "Director of Operations",
    photo: "",
    bio: "Hired September 2025 as Director of Basketball Operations. Returns to Lloyd's staff after a year as an assistant coach at Notre Dame Prep."
  }
];

// =============================================
// STATE
// =============================================
let rosterViewMode = "grid";
let currentFilter = "all";
let sortField = "ppg";
let sortDir = "desc";

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

function sortPlayers(arr) {
  return [...arr].sort((a, b) => {
    let va = a[sortField], vb = b[sortField];
    if (sortField === "name") {
      return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    }
    if (sortField === "totalPts") {
      va = Math.round(a.ppg * a.gp);
      vb = Math.round(b.ppg * b.gp);
    }
    return sortDir === "asc" ? va - vb : vb - va;
  });
}

// =============================================
// ROSTER GRID RENDERING
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

// =============================================
// ROSTER SPREADSHEET (LIST VIEW)
// =============================================
function renderSpreadsheet(filtered) {
  const cols = [
    { key: "number", label: "#", cls: "col-num" },
    { key: "name", label: "Player", cls: "col-name" },
    { key: "pos", label: "Pos", cls: "col-pos" },
    { key: "year", label: "Yr", cls: "col-yr" },
    { key: "gp", label: "GP", cls: "col-stat" },
    { key: "ppg", label: "PPG", cls: "col-stat" },
    { key: "rpg", label: "RPG", cls: "col-stat" },
    { key: "apg", label: "APG", cls: "col-stat" },
    { key: "fg", label: "FG%", cls: "col-stat" },
    { key: "three", label: "3P%", cls: "col-stat" },
    { key: "ft", label: "FT%", cls: "col-stat" },
    { key: "stl", label: "STL", cls: "col-stat" },
    { key: "blk", label: "BLK", cls: "col-stat" },
    { key: "totalPts", label: "PTS", cls: "col-stat" }
  ];

  const headers = cols.map(c => {
    const isActive = sortField === c.key;
    const arrow = isActive ? (sortDir === "desc" ? " \u25BC" : " \u25B2") : "";
    return `<th class="ss-th ${c.cls} ${isActive ? "ss-active" : ""}" data-sort="${c.key}">${c.label}${arrow}</th>`;
  }).join("");

  const rows = filtered.map((p, i) => {
    const totalPts = Math.round(p.ppg * p.gp);
    return `<tr class="ss-row" data-index="${players.indexOf(p)}" style="animation-delay: ${i * 0.02}s">
      <td class="ss-td col-num">${p.number}</td>
      <td class="ss-td col-name">
        <div class="ss-player">
          <div class="ss-avatar" style="background: ${getPosColor(p.pos)}">
            <img src="${p.photo}" alt="${p.name}" class="ss-avatar-img"
                 onerror="this.style.display='none'; this.parentElement.querySelector('.ss-init').style.display='flex'">
            <span class="ss-init" style="display:none">${getInitials(p.name)}</span>
          </div>
          <span class="ss-name">${p.name}</span>
        </div>
      </td>
      <td class="ss-td col-pos"><span class="pos-tag pos-${p.pos}">${p.pos}</span></td>
      <td class="ss-td col-yr">${p.year}</td>
      <td class="ss-td col-stat">${p.gp}</td>
      <td class="ss-td col-stat ss-highlight">${p.ppg}</td>
      <td class="ss-td col-stat">${p.rpg}</td>
      <td class="ss-td col-stat">${p.apg}</td>
      <td class="ss-td col-stat">${p.fg > 0 ? p.fg.toFixed(1) : "—"}</td>
      <td class="ss-td col-stat">${p.three > 0 ? p.three.toFixed(1) : "—"}</td>
      <td class="ss-td col-stat">${p.ft > 0 ? p.ft.toFixed(1) : "—"}</td>
      <td class="ss-td col-stat">${p.stl}</td>
      <td class="ss-td col-stat">${p.blk}</td>
      <td class="ss-td col-stat ss-highlight">${totalPts}</td>
    </tr>`;
  }).join("");

  return `<div class="ss-wrapper"><table class="ss-table">
    <thead><tr>${headers}</tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;
}

// =============================================
// COACHES RENDERING
// =============================================
function renderCoachesGrid() {
  return `<div class="roster-grid">${coaches.map((c, i) => `
    <div class="player-card coach-card" style="animation-delay: ${i * 0.05}s">
      <div class="player-avatar" style="background: #002244">
        ${c.photo ? `<img src="${c.photo}" alt="${c.name}" class="player-photo"
             onerror="handleImgError(this, '${c.name.replace(/'/g, "\\'")}', 'C')">` :
          `<span class="player-initials">${getInitials(c.name)}</span>`}
      </div>
      <div class="player-info">
        <h3 class="player-name">${c.name}</h3>
        <span class="coach-role">${c.role}</span>
        <p class="coach-bio">${c.bio}</p>
      </div>
    </div>
  `).join("")}</div>`;
}

function renderCoachesList() {
  return `<div class="roster-list">${coaches.map((c, i) => `
    <div class="player-list-item" style="animation-delay: ${i * 0.03}s">
      <div class="list-player-avatar" style="background: #002244">
        ${c.photo ? `<img src="${c.photo}" alt="${c.name}" class="list-player-photo"
             onerror="handleImgError(this, '${c.name.replace(/'/g, "\\'")}', 'C')">` :
          `<span class="player-initials">${getInitials(c.name)}</span>`}
      </div>
      <div class="list-player-info">
        <h3 class="list-player-name">${c.name}</h3>
        <div class="list-player-meta">
          <span class="coach-role">${c.role}</span>
        </div>
      </div>
      <div class="list-player-stats">
        <span style="font-size: 0.85rem; color: var(--gray-600); line-height: 1.5">${c.bio}</span>
      </div>
    </div>
  `).join("")}</div>`;
}

// =============================================
// RENDER ROSTER
// =============================================
function renderRoster() {
  const container = document.getElementById("rosterContainer");
  const sortControl = document.getElementById("gridSortWrap");

  if (currentFilter === "coaches") {
    if (sortControl) sortControl.style.display = "none";
    container.innerHTML = rosterViewMode === "grid" ? renderCoachesGrid() : renderCoachesList();
    return;
  }

  // Show/hide sort dropdown based on view
  if (sortControl) sortControl.style.display = rosterViewMode === "grid" ? "" : "none";

  let filtered;
  const yearFilters = ["FR", "SO", "JR", "SR"];
  if (currentFilter === "all") {
    filtered = players;
  } else if (yearFilters.includes(currentFilter)) {
    filtered = players.filter(p => p.year === currentFilter);
  } else {
    filtered = players.filter(p => p.pos === currentFilter);
  }

  const sorted = sortPlayers(filtered);

  if (rosterViewMode === "grid") {
    container.innerHTML = renderRosterGrid(sorted);
  } else {
    container.innerHTML = renderSpreadsheet(sorted);
    // Attach sort handlers on spreadsheet headers
    container.querySelectorAll(".ss-th[data-sort]").forEach(th => {
      th.style.cursor = "pointer";
      th.addEventListener("click", () => {
        const key = th.dataset.sort;
        if (sortField === key) {
          sortDir = sortDir === "desc" ? "asc" : "desc";
        } else {
          sortField = key;
          sortDir = key === "name" ? "asc" : "desc";
        }
        // Sync grid sort dropdown
        const gridSort = document.getElementById("gridSort");
        if (gridSort) gridSort.value = sortField;
        renderRoster();
      });
    });
  }

  // Attach click handlers for player cards/rows
  container.querySelectorAll("[data-index]").forEach(el => {
    el.addEventListener("click", () => openPlayerModal(parseInt(el.dataset.index)));
    el.style.cursor = "pointer";
  });
}

// =============================================
// BASKETBALL CARD MODAL
// =============================================
let cardFlipped = false;

function openPlayerModal(index) {
  const p = players[index];
  cardFlipped = false;
  const modal = document.getElementById("playerModal");
  const cardInner = document.getElementById("bballCard");
  const front = document.getElementById("cardFront");
  const back = document.getElementById("cardBack");

  cardInner.classList.remove("flipped");

  const totalPts = Math.round(p.ppg * p.gp);

  // FRONT OF CARD - photo + bio info only, no stats
  front.innerHTML = `
    <div class="card-front-header">
      <img src="https://a.espncdn.com/i/teamlogos/ncaa/500/12.png" alt="AZ" class="card-team-logo">
      <div class="card-front-number">#${p.number}</div>
    </div>
    <div class="card-front-photo" style="background: ${getPosColor(p.pos)}">
      <img src="${p.photo}" alt="${p.name}" class="card-photo-img"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <span class="card-photo-initials" style="display:none">${getInitials(p.name)}</span>
    </div>
    <div class="card-front-info">
      <h2 class="card-player-name">${p.name}</h2>
      <div class="card-player-meta">
        <span class="card-pos">${p.pos}</span>
        <span class="card-detail">${p.height} &middot; ${p.weight} lbs</span>
        <span class="card-year-badge">${p.year}</span>
      </div>
    </div>
    <div class="card-front-footer">
      <span>ARIZONA WILDCATS</span>
      <span>2025-26</span>
    </div>
    <div class="card-flip-hint">
      <span class="flip-icon">&#8635;</span> Click to flip
    </div>
  `;

  // BACK OF CARD
  back.innerHTML = `
    <div class="card-back-header">
      <div class="card-back-name">${p.name} <span>#${p.number}</span></div>
    </div>
    <div class="card-back-scroll">
      ${p.ppg > 0 ? `
      <div class="card-back-section">
        <h4>Season Stats</h4>
        <div class="card-stats-grid">
          <div class="card-bstat"><span class="card-bstat-val">${p.ppg}</span><span class="card-bstat-lbl">PPG</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.rpg}</span><span class="card-bstat-lbl">RPG</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.apg}</span><span class="card-bstat-lbl">APG</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.fg.toFixed(1)}%</span><span class="card-bstat-lbl">FG%</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.three > 0 ? p.three.toFixed(1) + "%" : "—"}</span><span class="card-bstat-lbl">3P%</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.ft > 0 ? p.ft.toFixed(1) + "%" : "—"}</span><span class="card-bstat-lbl">FT%</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.stl}</span><span class="card-bstat-lbl">STL</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.blk}</span><span class="card-bstat-lbl">BLK</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.gp}</span><span class="card-bstat-lbl">GP</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.min}</span><span class="card-bstat-lbl">MIN</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${totalPts}</span><span class="card-bstat-lbl">PTS</span></div>
          <div class="card-bstat"><span class="card-bstat-val">${p.gp}</span><span class="card-bstat-lbl">GP</span></div>
        </div>
      </div>` : ""}
      <div class="card-back-section">
        <h4>About</h4>
        <p>${p.backstory}</p>
      </div>
      <div class="card-back-section">
        <h4>Did You Know?</h4>
        <ul class="card-dyk-list">
          ${p.didYouKnow.map(fact => `<li>${fact}</li>`).join("")}
        </ul>
      </div>
      ${p.nil ? `
      <div class="card-back-section card-nil-section">
        <h4>NIL</h4>
        <div class="card-nil-val">${p.nil.valuation}</div>
        <p>${p.nil.details}</p>
      </div>` : ""}
    </div>
    <div class="card-front-footer">
      <span>ARIZONA WILDCATS</span>
      <span>2025-26</span>
    </div>
    <div class="card-flip-hint">
      <span class="flip-icon">&#8635;</span> Click to flip back
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function flipCard() {
  const card = document.getElementById("bballCard");
  cardFlipped = !cardFlipped;
  card.classList.toggle("flipped", cardFlipped);
}

function closeModal() {
  const modal = document.getElementById("playerModal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
  cardFlipped = false;
  document.getElementById("bballCard").classList.remove("flipped");
}

// =============================================
// HERO BACKGROUND ANIMATION
// =============================================
function initHeroBackground() {
  const overlay = document.querySelector(".hero-overlay");
  if (!overlay) return;
  // Create floating orbs
  for (let i = 0; i < 6; i++) {
    const orb = document.createElement("div");
    orb.className = "hero-orb";
    orb.style.cssText = `
      width: ${60 + Math.random() * 200}px;
      height: ${60 + Math.random() * 200}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${12 + Math.random() * 12}s;
      opacity: ${0.03 + Math.random() * 0.07};
    `;
    overlay.appendChild(orb);
  }
}

// =============================================
// SWIPE SUPPORT FOR CARD
// =============================================
function initSwipeSupport() {
  const cardContainer = document.querySelector(".bball-card-wrap");
  if (!cardContainer) return;
  let startX = 0;
  cardContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  cardContainer.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) flipCard();
  }, { passive: true });
}

// =============================================
// INIT
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroBackground();
  renderRoster();

  // Roster view toggle
  document.querySelectorAll(".roster .view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".roster .view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      rosterViewMode = btn.dataset.view;
      renderRoster();
    });
  });

  // Roster filter dropdown
  document.getElementById("rosterFilter").addEventListener("change", (e) => {
    currentFilter = e.target.value;
    renderRoster();
  });

  // Grid sort dropdown
  document.getElementById("gridSort").addEventListener("change", (e) => {
    sortField = e.target.value;
    sortDir = sortField === "name" ? "asc" : "desc";
    renderRoster();
  });

  // Modal close
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("playerModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("playerModal")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Card flip on click
  document.getElementById("bballCard").addEventListener("click", (e) => {
    // Don't flip if clicking scrollable content on back
    if (e.target.closest(".card-back-scroll") && cardFlipped) return;
    flipCard();
  });

  // Swipe support
  let startX = 0;
  const cardEl = document.getElementById("bballCard");
  cardEl.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  cardEl.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) flipCard();
  }, { passive: true });
});
