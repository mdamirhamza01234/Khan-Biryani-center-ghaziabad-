const dishes = [
 {category:"Rice",name:"Diet Biryani",prices:{Half:180,Full:350}},
 {category:"Rice",name:"Veg Biryani",prices:{Quarter:50,Half:90,Full:160}},
 {category:"Rice",name:"Chicken Biryani",prices:{Quarter:60,Half:120,Full:240}},
 {category:"Rice",name:"Mutton Biryani",prices:{Quarter:150,Half:280,Full:510}},
 {category:"Main Course",name:"Chicken Korma",prices:{Quarter:120,Half:240,Full:450}},
 {category:"Main Course",name:"Chicken Changezi",prices:{Quarter:150,Half:290,Full:580}},
 {category:"Main Course",name:"Mutton Korma",prices:{Quarter:210,Half:420,Full:800}},
 {category:"Main Course",name:"Chicken Nihari",prices:{Quarter:140,Half:260,Full:500}},
 {category:"Main Course",name:"Mutton Nihari",prices:{Quarter:220,Half:410,Full:820}},
 {category:"Main Course",name:"Egg Curry (2 pcs)",prices:{Quarter:120}},
 {category:"Main Course",name:"Mutton Stew",prices:{Quarter:240,Half:460,Full:910}},
 {category:"Main Course",name:"Kaju Keema",prices:{Quarter:180,Half:340,Full:650}},
 {category:"Starters",name:"Chicken Tandoori",prices:{Quarter:140,Half:260,Full:500}},
 {category:"Starters",name:"Chicken Lollipop",prices:{"4 pcs":140,"8 pcs":270,"15 pcs":500}},
 {category:"Starters",name:"Chicken Popcorn",prices:{Quarter:120,Half:220,Full:460}},
 {category:"Starters",name:"Chicken Fry",prices:{Quarter:110,Half:220,Full:430}},
 {category:"Starters",name:"Chicken Kebab",prices:{"2 pcs":130,"4 pcs":250,"8 pcs":480}},
 {category:"Starters",name:"Mutton Kebab",prices:{"2 pcs":180,"4 pcs":350,"7 pcs":680}},
 {category:"Starters",name:"Chicken Tikka Spicy",prices:{Quarter:160,Half:300,Full:580}},
 {category:"Starters",name:"Chicken Malai Tikka",prices:{Quarter:200,Half:380,Full:750}},
 {category:"Starters",name:"Fish Fry",prices:{Quarter:150,Half:330,Full:650}},
 {category:"Breads",name:"Roomali Roti",prices:{Piece:10}},
 {category:"Breads",name:"Khameeri Roti",prices:{Piece:15}},
 {category:"Sweet & Beverages",name:"Thandi Kheer",prices:{Bowl:50}},
 {category:"Sweet & Beverages",name:"Coke / Sprite / Limca / Fanta / Thums Up (250 ml)",prices:{Bottle:20}},
 {category:"Sweet & Beverages",name:"Coke / Sprite / Limca / Fanta / Thums Up (750 ml)",prices:{Bottle:40}},
 {category:"Sweet & Beverages",name:"Minute Maid (250 ml)",prices:{Bottle:20}},
 {category:"Sweet & Beverages",name:"Maaza Refresh (135 ml)",prices:{Bottle:10}},
 {category:"Sweet & Beverages",name:"Kinley Water (1 L)",prices:{Bottle:20}}
];
const groups=["Rice","Main Course","Starters","Breads","Sweet & Beverages"];
let activeCategory="all", cart=[];
const money=n=>"₹"+n;
function renderMenu(){
 const q=(document.getElementById("menuSearch").value||"").toLowerCase();
 const root=document.getElementById("menuGroups");root.innerHTML="";
 groups.forEach(group=>{
  if(activeCategory!=="all"&&activeCategory!==group)return;
  const list=dishes.filter(d=>d.category===group&&d.name.toLowerCase().includes(q));
  if(!list.length)return;
  const section=document.createElement("section");section.className="menu-group";
  section.innerHTML=`<h3 class="group-title">${group==="Rice"?"Biryani & Rice":group}</h3><div class="menu-grid"></div>`;
  const grid=section.querySelector(".menu-grid");
  list.forEach(d=>{
   const first=Object.entries(d.prices)[0];
   const card=document.createElement("article");card.className="dish";
   card.innerHTML=`<div><h4>${d.name}</h4><p>${Object.keys(d.prices).join(" · ")}</p></div><div style="display:flex;align-items:center;gap:10px"><div class="dish-price">From ${money(first[1])}<small>${first[0]}</small></div><button class="add-btn" aria-label="Add ${d.name}">+</button></div>`;
   card.querySelector("button").addEventListener("click",()=>addDish(d));grid.appendChild(card);
  });
  root.appendChild(section);
 });
 if(!root.children.length)root.innerHTML='<p class="menu-footnote">No dishes found. Try another search.</p>';
}
function addDish(d){
 const variants=Object.entries(d.prices);
 let choice=variants[0];
 if(variants.length>1){
  const answer=prompt(`Choose portion for ${d.name}:\n${variants.map((v,i)=>`${i+1}. ${v[0]} — ₹${v[1]}`).join("\n")}\n\nEnter option number:`, "1");
  if(answer===null)return;
  const index=Number(answer)-1;if(!Number.isInteger(index)||index<0||index>=variants.length){toast("Please choose a valid portion.");return;}choice=variants[index];
 }
 const key=d.name+"|"+choice[0],existing=cart.find(x=>x.key===key);
 if(existing)existing.qty++;else cart.push({key,name:d.name,variant:choice[0],price:choice[1],qty:1});
 updateCart();toast(d.name+" added to cart");
}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
 document.getElementById("cartSubtotal").textContent=money(cart.reduce((s,x)=>s+x.price*x.qty,0));
 const box=document.getElementById("cartItems");box.innerHTML="";
 if(!cart.length){box.innerHTML='<div class="empty-cart">Your cart is waiting for something delicious.</div>';return;}
 cart.forEach((x,i)=>{const row=document.createElement("div");row.className="cart-row";row.innerHTML=`<div><b>${x.name}</b><small>${x.variant} · ${money(x.price)} each</small></div><div class="qty"><button data-act="minus">−</button><span>${x.qty}</span><button data-act="plus">+</button></div>`;row.querySelector('[data-act="minus"]').onclick=()=>{x.qty--;if(x.qty<=0)cart.splice(i,1);updateCart()};row.querySelector('[data-act="plus"]').onclick=()=>{x.qty++;updateCart()};box.appendChild(row);});
}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function openOverlay(id){document.getElementById(id).classList.add("show");document.body.style.overflow="hidden"}
function closeOverlay(id){document.getElementById(id).classList.remove("show");document.body.style.overflow=""}
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>closeOverlay(b.dataset.close));
document.querySelectorAll(".overlay").forEach(o=>o.addEventListener("click",e=>{if(e.target===o)closeOverlay(o.id)}));
["navReserve","heroReserve","featureReserve"].forEach(id=>document.getElementById(id).onclick=()=>openOverlay("reserveOverlay"));
document.getElementById("cartOpen").onclick=()=>openOverlay("cartOverlay");
document.getElementById("menuSearch").addEventListener("input",renderMenu);
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeCategory=b.dataset.category;renderMenu()});
document.getElementById("clearCart").onclick=()=>{cart=[];updateCart()};
document.getElementById("checkoutBtn").onclick=()=>{
 if(!cart.length){toast("Add an item before ordering.");return;}
 const lines=cart.map(x=>`• ${x.name} (${x.variant}) x${x.qty} — ₹${x.price*x.qty}`).join("\n");
 const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
 const msg=`Hello Khan Biryani Centre! I would like to place an order:\n\n${lines}\n\nSubtotal: ₹${total}\nPlease confirm availability, delivery charges and delivery time.`;
 window.open("https://wa.me/918750962292?text="+encodeURIComponent(msg),"_blank");
};
const dateInput=document.getElementById("reserveDate");const today=new Date();const minDate=new Date(today);minDate.setDate(today.getDate()+1);const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;dateInput.min=iso(minDate);dateInput.value=iso(minDate);
const times=["6:00 PM","6:15 PM","6:30 PM","6:45 PM","7:00 PM","7:15 PM","7:30 PM","7:45 PM","8:00 PM"];
function renderTimes(){const grid=document.getElementById("timeGrid");grid.innerHTML="";times.forEach(t=>{const b=document.createElement("button");b.type="button";b.className="time-slot"+(t==="7:00 PM"?" selected":"");b.textContent=t;b.onclick=()=>{grid.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");document.getElementById("selectedTime").value=t};grid.appendChild(b)})}
renderTimes();
document.getElementById("reserveForm").onsubmit=e=>{
 e.preventDefault();const name=document.getElementById("guestName").value.trim(),phone=document.getElementById("guestPhone").value.trim();
 if(!/^[0-9]{10}$/.test(phone)){toast("Enter a valid 10-digit mobile number.");return;}
 const date=new Date(dateInput.value+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});
 const msg=`Hello Khan Biryani Centre! I would like to request a table reservation.\n\nName: ${name}\nMobile: ${phone}\nGuests: ${document.getElementById("partySize").value}\nDate: ${date}\nPreferred time: ${document.getElementById("selectedTime").value}\nSpecial request: ${document.getElementById("guestNote").value||"None"}\n\nPlease confirm my reservation.`;
 window.open("https://wa.me/918750962292?text="+encodeURIComponent(msg),"_blank");closeOverlay("reserveOverlay");
};
document.getElementById("menuToggle").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));
document.getElementById("year").textContent=new Date().getFullYear();
renderMenu();updateCart();
