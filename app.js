const ideas = [
  {title:"Picknick zum Sonnenuntergang",budget:15,duration:"medium",kind:"romantic",cost:"ca. 5–15 €",time:"1–2 Stunden",desc:"Sucht euch einen schönen Aussichtspunkt, packt Snacks und eine Decke ein und genießt den Abend zusammen.",tag:"ROMANTISCH",image:"linear-gradient(135deg,#9a526a,#30202c)"},
  {title:"Kaffee-Date & Spaziergang",budget:12,duration:"short",kind:"cozy",cost:"ca. 5–12 €",time:"Unter 1 Stunde",desc:"Holt euch euren Lieblingskaffee und macht einen kleinen Spaziergang. Einfach Zeit füreinander – ohne großen Plan.",tag:"GEMÜTLICH",image:"linear-gradient(135deg,#9a795f,#44312a)"},
  {title:"Escape Room",budget:80,duration:"long",kind:"creative",cost:"ca. 50–80 €",time:"2–4 Stunden",desc:"Löst gemeinsam Rätsel und feiert euren Teamgeist danach bei einem Getränk oder Essen.",tag:"ABENTEUER",image:"linear-gradient(135deg,#59436f,#211d35)"},
  {title:"Gemeinsam etwas Neues kochen",budget:25,duration:"medium",kind:"cozy",cost:"ca. 15–25 €",time:"1–2 Stunden",desc:"Sucht ein Rezept aus, kauft zusammen ein und macht euch einen schönen Kochabend mit Musik und Kerzen.",tag:"ZUHAUSE",image:"linear-gradient(135deg,#a66d50,#493127)"},
  {title:"Therme & Wellness-Auszeit",budget:120,duration:"day",kind:"romantic",cost:"ca. 100–120 €",time:"Halber / ganzer Tag",desc:"Gönnt euch eine gemeinsame Auszeit mit warmem Wasser, Ruhe und Zeit zum Abschalten.",tag:"BESONDERS",image:"linear-gradient(135deg,#548b91,#1c3944)"},
  {title:"Minigolf-Challenge",budget:30,duration:"medium",kind:"active",cost:"ca. 15–30 €",time:"1–2 Stunden",desc:"Wer gewinnt? Macht eine kleine Challenge daraus und der Verlierer spendiert danach ein Eis.",tag:"AKTIV",image:"linear-gradient(135deg,#69915f,#263b32)"},
  {title:"Tagesausflug ins Blaue",budget:120,duration:"day",kind:"creative",cost:"ab 100 €",time:"Halber / ganzer Tag",desc:"Sucht euch ein Ziel aus, das keiner von euch kennt, und macht den Weg selbst zum Teil des Dates.",tag:"ÜBERRASCHUNG",image:"linear-gradient(135deg,#6782a5,#26344a)"},
  {title:"Sternenhimmel beobachten",budget:0,duration:"short",kind:"romantic",cost:"0 €",time:"Unter 1 Stunde",desc:"Fahrt oder spaziert zu einem möglichst dunklen Ort, nehmt eine Decke mit und sucht gemeinsam Sternbilder.",tag:"ROMANTISCH",image:"linear-gradient(135deg,#27345f,#111323)"},
  {title:"Foto-Challenge in der Stadt",budget:0,duration:"medium",kind:"creative",cost:"0 €",time:"1–2 Stunden",desc:"Gebt euch gegenseitig kleine Foto-Aufgaben: etwas Rotes, einen schönen Hauseingang oder euer lustigstes gemeinsames Bild.",tag:"KREATIV",image:"linear-gradient(135deg,#8d6c9b,#342943)"},
  {title:"Bowlingabend",budget:45,duration:"long",kind:"active",cost:"ca. 25–45 €",time:"2–4 Stunden",desc:"Spielt zwei Runden Bowling und macht eine kleine Wette daraus – der Gewinner darf das nächste Date aussuchen.",tag:"AKTIV",image:"linear-gradient(135deg,#526c9d,#202d49)"},
  {title:"Eis essen & Lieblingsmusik teilen",budget:15,duration:"short",kind:"cozy",cost:"ca. 5–15 €",time:"Unter 1 Stunde",desc:"Jeder zeigt dem anderen drei Songs, die gerade wichtig sind. Dazu gibt es euer Lieblingseis.",tag:"GEMÜTLICH",image:"linear-gradient(135deg,#9c7890,#493449)"},
  {title:"Gemeinsamer Fahrradausflug",budget:20,duration:"long",kind:"active",cost:"0–20 €",time:"2–4 Stunden",desc:"Sucht eine schöne Route aus, macht unterwegs einen Stopp und nehmt euch etwas zu trinken mit.",tag:"AKTIV",image:"linear-gradient(135deg,#668a68,#293d31)"},
  {title:"Spieleabend mit Lieblingssnacks",budget:20,duration:"medium",kind:"cozy",cost:"ca. 5–20 €",time:"1–2 Stunden",desc:"Sucht euch zwei Spiele aus, macht Snacks bereit und legt die Handys für eine Weile weg.",tag:"ZUHAUSE",image:"linear-gradient(135deg,#a47755,#4a3428)"},
  {title:"Kleiner Roadtrip mit Überraschungsziel",budget:50,duration:"day",kind:"creative",cost:"ca. 20–50 €",time:"Halber / ganzer Tag",desc:"Eine Person plant das Ziel, die andere darf nur das Nötigste wissen. Unterwegs wird spontan angehalten.",tag:"ÜBERRASCHUNG",image:"linear-gradient(135deg,#637f9b,#273747)"},
  {title:"Gemeinsam Töpfern oder Kreativkurs",budget:100,duration:"long",kind:"creative",cost:"ca. 50–100 €",time:"2–4 Stunden",desc:"Probiert etwas Neues aus und gestaltet etwas, das euch später an den gemeinsamen Tag erinnert.",tag:"KREATIV",image:"linear-gradient(135deg,#ad806b,#503b35)"},
  {title:"Frühstücks-Date",budget:30,duration:"medium",kind:"romantic",cost:"ca. 15–30 €",time:"1–2 Stunden",desc:"Startet entspannt in den Tag und nehmt euch bewusst Zeit für ein gemeinsames Frühstück.",tag:"ROMANTISCH",image:"linear-gradient(135deg,#b58b61,#59422e)"},
  {title:"Schwarzlicht-Minigolf",budget:40,duration:"medium",kind:"active",cost:"ca. 20–40 €",time:"1–2 Stunden",desc:"Spielt eine Runde in leuchtenden Kulissen und macht ein kleines Turnier daraus.",tag:"AKTIV",image:"linear-gradient(135deg,#6c5a9e,#272343)"},
  {title:"Picknick zuhause auf dem Wohnzimmerboden",budget:10,duration:"short",kind:"cozy",cost:"ca. 0–10 €",time:"Unter 1 Stunde",desc:"Decke auf den Boden, kleine Snacks, Musik und ein gemütlicher Abend – manchmal braucht es nicht mehr.",tag:"GEMÜTLICH",image:"linear-gradient(135deg,#98745d,#45342d)"}
];

let selectedBudget = 20;
let currentIdea = null;
const $ = id => document.getElementById(id);

document.querySelectorAll(".budget").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".budget").forEach(x => x.classList.remove("active"));
  btn.classList.add("active");
  selectedBudget = Number(btn.dataset.budget);
}));

$("radius").addEventListener("input", e => $("radiusValue").textContent = e.target.value + " km");

function chooseIdea() {
  const duration = $("duration").value;
  const kind = $("kind").value;
  let pool = ideas.filter(idea => {
    const budgetMatch = selectedBudget === 101
      ? idea.budget >= 100
      : idea.budget <= selectedBudget;
    const durationMatch = duration === "any" || idea.duration === duration;
    const kindMatch = kind === "any" || idea.kind === kind;
    return budgetMatch && durationMatch && kindMatch;
  });

  if (!pool.length) {
    openInfo("Keine passende Idee gefunden", "Für diese Kombination haben wir aktuell noch keine Date-Idee gespeichert. Ändere einen Filter oder wähle „Überrasch mich“ bei der Date-Stimmung.");
    return;
  }

  const choices = pool.filter(idea => idea !== currentIdea);
  const available = choices.length ? choices : pool;
  currentIdea = available[Math.floor(Math.random() * available.length)];

  $("ideaTitle").textContent = currentIdea.title;
  $("ideaDescription").textContent = currentIdea.desc;
  $("ideaMeta").textContent = currentIdea.cost + " · " + currentIdea.time;
  $("ideaTag").textContent = currentIdea.tag;
  $("ideaImage").style.background = currentIdea.image;
  $("ideaCard").hidden = false;
  updateSaveButton();
  $("ideaCard").scrollIntoView({ behavior: "smooth", block: "start" });
}

$("generateBtn").addEventListener("click", chooseIdea);
$("anotherBtn").addEventListener("click", chooseIdea);

function openInfo(title, text) {
  $("dialogTitle").textContent = title;
  $("dialogText").textContent = text;
  $("infoDialog").showModal();
}

const FAVORITES_KEY = "amore-favorites-v1";
let favorites = loadFavorites();

function loadFavorites() {
  try {
    const parsed = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites() {
  const list = $("favoritesList");
  list.replaceChildren();
  if (!favorites.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Noch keine Dates gespeichert. Entdecke eine Idee und tippe auf „Merken“.";
    list.appendChild(empty);
    return;
  }
  favorites.forEach((idea, index) => {
    const item = document.createElement("article");
    item.className = "favorite-item";
    const swatch = document.createElement("div");
    swatch.className = "favorite-swatch";
    swatch.style.background = idea.image;
    const copy = document.createElement("div");
    copy.className = "favorite-copy";
    const title = document.createElement("strong");
    title.textContent = idea.title;
    const meta = document.createElement("small");
    meta.textContent = `${idea.cost} · ${idea.time}`;
    copy.append(title, meta);
    const remove = document.createElement("button");
    remove.className = "remove-favorite";
    remove.type = "button";
    remove.textContent = "Entfernen";
    remove.addEventListener("click", () => {
      favorites.splice(index, 1);
      saveFavorites();
      updateSaveButton();
    });
    item.append(swatch, copy, remove);
    list.appendChild(item);
  });
}

function updateSaveButton() {
  if (!currentIdea) return;
  const saved = favorites.some(idea => idea.title === currentIdea.title);
  $("saveIdeaBtn").textContent = saved ? "♥ Gespeichert" : "♡ Merken";
  $("saveIdeaBtn").classList.toggle("saved", saved);
}

$("saveIdeaBtn").addEventListener("click", () => {
  if (!currentIdea) return;
  if (favorites.some(idea => idea.title === currentIdea.title)) {
    favorites = favorites.filter(idea => idea.title !== currentIdea.title);
  } else {
    favorites.unshift(currentIdea);
  }
  saveFavorites();
  updateSaveButton();
});

$("settingsBtn").addEventListener("click", () => openInfo("Amore-Einstellungen", "Deine gespeicherten Date-Ideen bleiben privat auf diesem Gerät. Deine Freundin kann ihre eigene Merkliste auf ihrem iPhone führen."));
$("closeDialog").addEventListener("click", () => $("infoDialog").close());
$("dialogOk").addEventListener("click", () => $("infoDialog").close());
$("todayLabel").textContent = new Intl.DateTimeFormat("de-DE", { weekday: "long", day: "numeric", month: "long" }).format(new Date()).toUpperCase();

// Beziehungstage seit dem 28.06.2025: wird bei jedem Öffnen automatisch neu berechnet.
function updateTogetherCounter() {
  const start = new Date(2025, 5, 28);
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const elapsed = Math.floor((todayMidnight - start) / 86400000);
  $("daysTogether").textContent = Math.max(0, elapsed).toLocaleString("de-DE");
  $("anniversaryLabel").textContent = "Seit dem 28.06.2025";
}
updateTogetherCounter();
renderFavorites();
