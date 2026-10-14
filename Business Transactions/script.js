const cards = [
  {type:"Inflows", name:"Initial capital investment", meaning:"Money or other resources invested by the owner to start the business."},
  {type:"Inflows", name:"Additional capital investment", meaning:"Additional money or resources invested by the owner after the initial investment."},
  {type:"Inflows", name:"Cash sales", meaning:"Sales in which payment is received in cash at the time of sale."},
  {type:"Inflows", name:"Credit sales", meaning:"Sales made on credit, where the customer pays at a later date."},
  {type:"Inflows", name:"Collections – receivables", meaning:"Cash received from customers who previously bought goods or services on credit."},
  {type:"Inflows", name:"Loan borrowings", meaning:"Money received by the business from a lender; it creates an obligation to repay."},
  {type:"Inflows", name:"Sale of old assets", meaning:"Money received from selling assets the business already owns."},
  {type:"Inflows", name:"Cash deposits", meaning:"Cash placed into a bank account."},
  {type:"Inflows", name:"Interest income from bank deposits", meaning:"Interest earned on money kept in bank deposits."},
  {type:"Inflows", name:"Issuance of shares of stocks (corporation)", meaning:"Money received by a corporation when it issues shares of stock."},
  {type:"Inflows", name:"Government grants and subsidies", meaning:"Financial assistance received from the government."},
  {type:"Inflows", name:"Donation", meaning:"Money or other resources received as a gift."},

  {type:"Outflows", name:"Cash purchases", meaning:"Purchases paid for immediately in cash."},
  {type:"Outflows", name:"Credit purchases", meaning:"Purchases made on credit, with payment due later."},
  {type:"Outflows", name:"Payment of loan", meaning:"Cash paid to repay a loan, according to its terms."},
  {type:"Outflows", name:"Payment of accounts", meaning:"Cash paid to settle amounts owed to suppliers or other creditors."},
  {type:"Outflows", name:"Acquisitions of fixed assets", meaning:"Purchase of long-term assets used by the business, such as equipment or buildings."},
  {type:"Outflows", name:"Payment of expenses", meaning:"Cash paid for business costs, such as rent, utilities, or salaries."},
  {type:"Outflows", name:"Replacement of old assets", meaning:"Acquiring a replacement for an old asset; the transaction may involve paying cash."},
  {type:"Outflows", name:"Payment of dividends", meaning:"Cash distributed by a corporation to its shareholders as dividends."},
  {type:"Outflows", name:"Personal withdrawals", meaning:"Cash or other assets taken by the owner for personal use."},
  {type:"Outflows", name:"Declaration of dividends", meaning:"A corporation formally declares dividends to shareholders. Declaration creates a dividend obligation; payment is a separate transaction."},
  {type:"Outflows", name:"Bank withdrawals", meaning:"Cash taken out of a bank account."},
  {type:"Outflows", name:"Depreciation and amortization", meaning:"Allocation of the cost of a long-term tangible asset over its useful life (depreciation) or an intangible asset over its useful life (amortization). These are usually non-cash expenses."},

  {type:"Review", name:"What are inflows?", meaning:"Transactions listed as bringing money or resources into the business in the provided notes."},
  {type:"Review", name:"What are outflows?", meaning:"Transactions listed as involving payments, withdrawals, or other uses of business resources in the provided notes."},
  {type:"Review", name:"Name three examples of inflows.", meaning:"Examples include initial capital investment, cash sales, and loan borrowings."},
  {type:"Review", name:"Name three examples of outflows.", meaning:"Examples include cash purchases, payment of expenses, and payment of accounts."},
  {type:"Review", name:"Which inflow is related to customers paying earlier credit sales?", meaning:"Collections – receivables."},
  {type:"Review", name:"Which inflow is related to a business receiving money from a lender?", meaning:"Loan borrowings."},
  {type:"Review", name:"Which outflow is related to the owner taking business resources for personal use?", meaning:"Personal withdrawals."},
  {type:"Review", name:"Which listed transaction involves a corporation distributing value to shareholders?", meaning:"Payment of dividends. Declaration of dividends is listed separately."},
  {type:"Review", name:"Are depreciation and amortization usually cash payments at the time they are recorded?", meaning:"No. They are usually non-cash expenses that allocate an asset's cost over time."}
];

let deck=[...cards], index=0, known=new Set(), flipped=false;
const $=id=>document.getElementById(id);
const cardButton=$("flashcard");

function filtered(){
  const term=$("search").value.trim().toLowerCase();
  const filter=$("filter").value;
  return deck.filter(c=>(filter==="all"||c.type===filter||filter==="Review"&&c.type==="Review")&&
    (!term||`${c.name} ${c.meaning} ${c.type}`.toLowerCase().includes(term)));
}
function render(){
  const list=filtered();
  if(!list.length){
    cardButton.hidden=true; $("empty").hidden=false;
    $("counter").textContent="No matching cards";
    $("knownCount").textContent=`Known: ${known.size}`;
    $("progressFill").style.width="0%";
    return;
  }
  cardButton.hidden=false; $("empty").hidden=true;
  if(index>=list.length) index=0;
  const c=list[index];
  $("question").textContent=c.name;
  $("answer").textContent=c.meaning;
  $("frontTag").textContent=c.type;
  $("backTag").textContent=c.type;
  $("counter").textContent=`Card ${index+1} of ${list.length}`;
  $("knownCount").textContent=`Known: ${known.size}`;
  $("progressFill").style.width=`${(index+1)/list.length*100}%`;
  const marked=known.has(c.name);
  $("known").classList.toggle("marked",marked);
  $("known").textContent=marked?"✓ Marked as known":"✓ Mark as known";
  flipped=false; cardButton.classList.remove("flipped"); $("flip").textContent="Show answer";
}
function flip(){
  if(cardButton.hidden)return;
  flipped=!flipped; cardButton.classList.toggle("flipped",flipped);
  $("flip").textContent=flipped?"Show question":"Show answer";
}
function move(step){
  const list=filtered(); if(!list.length)return;
  index=(index+step+list.length)%list.length; render();
}
cardButton.addEventListener("click",flip);
$("flip").addEventListener("click",flip);
$("prev").addEventListener("click",()=>move(-1));
$("next").addEventListener("click",()=>move(1));
$("search").addEventListener("input",()=>{index=0;render()});
$("filter").addEventListener("change",()=>{index=0;render()});
$("known").addEventListener("click",()=>{
  const list=filtered();if(!list.length)return;
  const name=list[index].name;known.has(name)?known.delete(name):known.add(name);render();
});
$("shuffle").addEventListener("click",()=>{
  for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]]}
  index=0;render();
});
$("restart").addEventListener("click",()=>{
  deck=[...cards];index=0;known.clear();$("search").value="";$("filter").value="all";render();
});
document.addEventListener("keydown",e=>{
  if(e.target.matches("input,select"))return;
  if(e.code==="Space"){e.preventDefault();flip()}
  if(e.key==="ArrowRight")move(1);
  if(e.key==="ArrowLeft")move(-1);
});
render();
