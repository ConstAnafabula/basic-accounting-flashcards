const cards = [
  {topic:"Overview", q:"Why did accounting develop alongside human civilization?", a:"As people began to trade, own property, collect taxes, and manage resources, they needed ways to record, classify, and summarize economic transactions."},
  {topic:"Ancient Period", q:"Where and when can the earliest forms of accounting be traced?", a:"Ancient Mesopotamia, around 3,000–3,500 BCE."},
  {topic:"Ancient Period", q:"What did people use to record transactions in ancient Mesopotamia?", a:"Merchants and government officials used clay tablets to record crops, livestock, taxes, wages, and other resources."},
  {topic:"Ancient Period", q:"Which other ancient civilizations developed record-keeping systems?", a:"Egypt, Greece, and Rome."},
  {topic:"Ancient Period", q:"What records did the Romans maintain?", a:"Records of receipts, payments, assets, and liabilities."},
  {topic:"Medieval Period", q:"What increased the need for more systematic accounting during the Middle Ages?", a:"The growth of trade, banking, and commerce."},
  {topic:"Medieval Period", q:"What is double-entry bookkeeping?", a:"A system in which every transaction has two corresponding effects, traditionally represented by a debit and a credit."},
  {topic:"Luca Pacioli", q:"Who was Luca Pacioli?", a:"An Italian mathematician and Franciscan friar who helped document, organize, and popularize double-entry bookkeeping."},
  {topic:"Luca Pacioli", q:"What important accounting event occurred in 1494?", a:"Luca Pacioli published Summa de Arithmetica, Geometria, Proportioni et Proportionalita, which included a section describing the Venetian method of double-entry bookkeeping."},
  {topic:"Luca Pacioli", q:"Why is Luca Pacioli known as the “Father of Accounting”?", a:"His work helped document, organize, and popularize double-entry bookkeeping. He did not invent the system."},
  {topic:"Industrial Revolution", q:"How did the Industrial Revolution change accounting?", a:"During the 18th and 19th centuries, businesses became larger, corporations emerged, and transactions became more complex."},
  {topic:"Industrial Revolution", q:"What areas did accounting expand to during the Industrial Revolution?", a:"Cost accounting, financial reporting, budgeting, auditing, and management accounting."},
  {topic:"Industrial Revolution", q:"Why did reliable financial information and independent auditing become more important?", a:"Because the separation between owners and managers increased."},
  {topic:"Modern Accounting", q:"What characterized the development of modern accounting during the 20th century?", a:"Accounting became increasingly standardized and professionalized."},
  {topic:"Modern Accounting", q:"Why were accounting principles and standards developed?", a:"To improve the consistency, reliability, and comparability of financial statements."},
  {topic:"Modern Accounting", q:"What are GAAP and IFRS?", a:"GAAP means Generally Accepted Accounting Principles. IFRS means International Financial Reporting Standards. They help establish common frameworks for financial reporting."},
  {topic:"Philippine Accounting", q:"What financial reporting standards are particularly used in the Philippines?", a:"Philippine Financial Reporting Standards (PFRS), through the adoption and implementation of internationally based financial reporting standards."},
  {topic:"Computerization", q:"How did computers change accounting in the latter part of the 20th century?", a:"Manual journals and ledgers were gradually replaced by accounting software, spreadsheets, databases, and computerized accounting systems."},
  {topic:"Computerization", q:"What can modern computerized accounting systems do?", a:"Automatically record transactions, generate financial statements, monitor inventory, process payroll, and provide real-time financial information."},
  {topic:"Emerging Accounting", q:"Name key technologies and systems shaping modern accounting.", a:"Cloud accounting, artificial intelligence (AI), blockchain, big data analytics, robotic process automation (RPA), enterprise resource planning (ERP) systems, and real-time financial reporting."},
  {topic:"Emerging Accounting", q:"How has the role of accountants expanded?", a:"From merely recording transactions to analyzing information, supporting management decisions, managing risks, ensuring compliance, and providing strategic advice."},
  {topic:"Timeline", q:"What is the overall evolution of accounting?", a:"Ancient record-keeping → Double-entry bookkeeping → Industrial and professional accounting → Standardized financial reporting → Computerized accounting → Digital and intelligent accounting."},
  {topic:"Purpose", q:"What does accounting help organizations do today?", a:"Measure performance, make decisions, safeguard resources, and communicate financial information to stakeholders."},
  {topic:"Timeline", q:"Match the period to its key development: Ancient Period.", a:"Early transaction records using clay tablets in Mesopotamia; other civilizations also developed record-keeping systems."},
  {topic:"Timeline", q:"Match the period to its key development: Medieval Period.", a:"Growth of trade, banking, and commerce; more organized records and the emergence of double-entry bookkeeping."},
  {topic:"Timeline", q:"Match the milestone to its key development: 1494.", a:"Luca Pacioli published a book describing the Venetian method of double-entry bookkeeping."},
  {topic:"Timeline", q:"Match the period to its key development: Industrial Revolution.", a:"Larger businesses and more complex transactions expanded accounting into cost accounting, reporting, budgeting, auditing, and management accounting."},
  {topic:"Timeline", q:"Match the period to its key development: 20th century.", a:"Accounting became more standardized and professionalized, with common principles and reporting standards."},
  {topic:"Timeline", q:"Match the development to its key change: Computerization.", a:"Accounting software, spreadsheets, databases, and computerized systems began replacing manual journals and ledgers."},
  {topic:"Timeline", q:"Match the development to its key change: Modern and emerging accounting.", a:"Digital technologies support real-time reporting, analysis, risk management, compliance, and strategic advice."},
  {topic:"Key Terms", q:"What does double-entry bookkeeping traditionally use to represent the two effects of a transaction?", a:"A debit and a credit."},
  {topic:"Key Terms", q:"What does PFRS stand for?", a:"Philippine Financial Reporting Standards."},
  {topic:"Key Terms", q:"What does GAAP stand for?", a:"Generally Accepted Accounting Principles."},
  {topic:"Key Terms", q:"What does IFRS stand for?", a:"International Financial Reporting Standards."},
  {topic:"Key Terms", q:"What does RPA stand for in emerging accounting technology?", a:"Robotic process automation."},
  {topic:"Key Terms", q:"What does ERP stand for?", a:"Enterprise resource planning."}
];

let deck = [...cards];
let index = 0;
let known = new Set();
let flipped = false;

const $ = id => document.getElementById(id);
const flashcard = $("flashcard");
const topics = [...new Set(cards.map(c => c.topic))];
topics.forEach(topic => {
  const option = document.createElement("option");
  option.value = topic; option.textContent = topic;
  $("stageFilter").appendChild(option);
});

function getFilteredDeck() {
  const term = $("search").value.trim().toLowerCase();
  const topic = $("stageFilter").value;
  return deck.filter(c => (topic === "all" || c.topic === topic) &&
    (!term || `${c.q} ${c.a} ${c.topic}`.toLowerCase().includes(term)));
}
function render() {
  const filtered = getFilteredDeck();
  if (!filtered.length) {
    flashcard.hidden = true; $("emptyState").hidden = false;
    $("counter").textContent = "No matching cards";
    $("knownCount").textContent = `Known: ${known.size}`;
    $("progressFill").style.width = "0%";
    return;
  }
  flashcard.hidden = false; $("emptyState").hidden = true;
  if (index >= filtered.length) index = 0;
  const c = filtered[index];
  $("question").textContent = c.q;
  $("answer").textContent = c.a;
  $("frontTopic").textContent = c.topic;
  $("backTopic").textContent = c.topic;
  $("counter").textContent = `Card ${index + 1} of ${filtered.length}`;
  $("knownCount").textContent = `Known: ${known.size}`;
  $("progressFill").style.width = `${((index + 1) / filtered.length) * 100}%`;
  const isKnown = known.has(c.q);
  $("knownBtn").classList.toggle("marked", isKnown);
  $("knownBtn").textContent = isKnown ? "✓ Marked as known" : "✓ Mark as known";
  flipped = false; flashcard.classList.remove("flipped"); $("flipBtn").textContent = "Show answer";
}
function flip() {
  if (flashcard.hidden) return;
  flipped = !flipped;
  flashcard.classList.toggle("flipped", flipped);
  $("flipBtn").textContent = flipped ? "Show question" : "Show answer";
}
function move(step) {
  const filtered = getFilteredDeck();
  if (!filtered.length) return;
  index = (index + step + filtered.length) % filtered.length;
  render();
}
flashcard.addEventListener("click", flip);
$("flipBtn").addEventListener("click", flip);
$("prevBtn").addEventListener("click", () => move(-1));
$("nextBtn").addEventListener("click", () => move(1));
$("search").addEventListener("input", () => { index = 0; render(); });
$("stageFilter").addEventListener("change", () => { index = 0; render(); });
$("knownBtn").addEventListener("click", () => {
  const filtered = getFilteredDeck(); if (!filtered.length) return;
  const q = filtered[index].q;
  known.has(q) ? known.delete(q) : known.add(q);
  render();
});
$("shuffleBtn").addEventListener("click", () => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  index = 0; render();
});
$("resetBtn").addEventListener("click", () => {
  deck = [...cards]; index = 0; known.clear();
  $("search").value = ""; $("stageFilter").value = "all"; render();
});
document.addEventListener("keydown", e => {
  if (e.target.matches("input, select")) return;
  if (e.code === "Space") { e.preventDefault(); flip(); }
  if (e.key === "ArrowRight") move(1);
  if (e.key === "ArrowLeft") move(-1);
});
render();
