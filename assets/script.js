const dishes = [
 {category:"Rice",name:"Diet Biryani",img:"https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=700&q=80",prices:{Half:180,Full:350}},
 {category:"Rice",name:"Veg Biryani",img:"https://images.unsplash.com/photo-1684409642850-b48e5ab8e67c?auto=format&fit=crop&w=700&q=80",prices:{Quarter:50,Half:90,Full:160}},
 {category:"Rice",name:"Chicken Biryani",img:"https://images.unsplash.com/photo-1782541370275-6761522e39d1?auto=format&fit=crop&w=700&q=80",prices:{Quarter:60,Half:120,Full:240}},
 {category:"Rice",name:"Mutton Biryani",img:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80",prices:{Quarter:150,Half:280,Full:510}},
 {category:"Main Course",name:"Chicken Korma",img:"https://images.unsplash.com/photo-1764304733301-3a9f335f0c67?auto=format&fit=crop&w=700&q=80",prices:{Quarter:120,Half:240,Full:450}},
 {category:"Main Course",name:"Chicken Changezi",img:"https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?auto=format&fit=crop&w=700&q=80",prices:{Quarter:150,Half:290,Full:580}},
 {category:"Main Course",name:"Mutton Korma",img:"https://images.unsplash.com/photo-1769681375998-1b231dcbe363?auto=format&fit=crop&w=700&q=80",prices:{Quarter:210,Half:420,Full:800}},
 {category:"Main Course",name:"Chicken Nihari",img:"https://images.unsplash.com/photo-1708782340380-536df8cf6784?auto=format&fit=crop&w=700&q=80",prices:{Quarter:140,Half:260,Full:500}},
 {category:"Main Course",name:"Mutton Nihari",img:"https://images.unsplash.com/photo-1764314108477-f026172e32a9?auto=format&fit=crop&w=700&q=80",prices:{Quarter:220,Half:410,Full:820}},
 {category:"Main Course",name:"Egg Curry (2 pcs)",img:"https://images.unsplash.com/photo-1681546897975-592f87121960?auto=format&fit=crop&w=700&q=80",prices:{Quarter:120}},
 {category:"Main Course",name:"Mutton Stew",img:"https://images.unsplash.com/photo-1642821372719-46b426afd8b1?auto=format&fit=crop&w=700&q=80",prices:{Quarter:240,Half:460,Full:910}},
 {category:"Main Course",name:"Kaju Keema",img:"https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=700&q=80",prices:{Quarter:180,Half:340,Full:650}},
 {category:"Starters",name:"Chicken Tandoori",img:"https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=700&q=80",prices:{Quarter:140,Half:260,Full:500}},
 {category:"Starters",name:"Chicken Lollipop",img:"https://images.unsplash.com/photo-1766589220977-143f5cba3f22?auto=format&fit=crop&w=700&q=80",prices:{"4 pcs":140,"8 pcs":270,"15 pcs":500}},
 {category:"Starters",name:"Chicken Popcorn",img:"https://images.unsplash.com/photo-1767469576675-0c02a8d66f4c?auto=format&fit=crop&w=700&q=80",prices:{Quarter:120,Half:220,Full:460}},
 {category:"Starters",name:"Chicken Fry",img:"https://images.unsplash.com/photo-1566918214014-a3b3e0132267?auto=format&fit=crop&w=700&q=80",prices:{Quarter:110,Half:220,Full:430}},
 {category:"Starters",name:"Chicken Kebab",img:"https://images.unsplash.com/photo-1705359573325-f2006d5e459f?auto=format&fit=crop&w=700&q=80",prices:{"2 pcs":130,"4 pcs":250,"8 pcs":480}},
 {category:"Starters",name:"Mutton Kebab",img:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=700&q=80",prices:{"2 pcs":180,"4 pcs":350,"7 pcs":680}},
 {category:"Starters",name:"Chicken Tikka Spicy",img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",prices:{Quarter:160,Half:300,Full:580}},
 {category:"Starters",name:"Chicken Malai Tikka",img:"https://images.unsplash.com/photo-1781332151269-adfdc2a1c3c2?auto=format&fit=crop&w=700&q=80",prices:{Quarter:200,Half:380,Full:750}},
 {category:"Starters",name:"Fish Fry",img:"https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?auto=format&fit=crop&w=700&q=80",prices:{Quarter:150,Half:330,Full:650}},
 {category:"Breads",name:"Roomali Roti",img:"https://images.unsplash.com/photo-1718874560784-d4164371eb38?auto=format&fit=crop&w=700&q=80",prices:{Piece:10}},
 {category:"Breads",name:"Khameeri Roti",img:"https://images.unsplash.com/photo-1600935926387-12d9b03066f0?auto=format&fit=crop&w=700&q=80",prices:{Piece:15}},
 {category:"Sweet & Beverages",name:"Thandi Kheer",img:"https://images.unsplash.com/photo-1777613112969-d7511ddfbe15?auto=format&fit=crop&w=700&q=80",prices:{Bowl:50}},
 {category:"Sweet & Beverages",name:"Coke / Sprite / Limca / Fanta / Thums Up (250 ml)",img:"https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?auto=format&fit=crop&w=700&q=80",prices:{Bottle:20}},
 {category:"Sweet & Beverages",name:"Coke / Sprite / Limca / Fanta / Thums Up (750 ml)",img:"https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?auto=format&fit=crop&w=700&q=80",prices:{Bottle:40}},
 {category:"Sweet & Beverages",name:"Minute Maid (250 ml)",img:"https://images.unsplash.com/photo-1640213505284-21352ee0d76b?auto=format&fit=crop&w=700&q=80",prices:{Bottle:20}},
 {category:"Sweet & Beverages",name:"Maaza Refresh (135 ml)",img:"https://images.unsplash.com/photo-1579630942078-100a2f8e9052?auto=format&fit=crop&w=700&q=80",prices:{Bottle:10}},
 {category:"Sweet & Beverages",name:"Kinley Water (1 L)",img:"https://images.unsplash.com/photo-1561041695-d2fadf9f318c?auto=format&fit=crop&w=700&q=80",prices:{Bottle:20}}
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
   card.innerHTML=`<img class="dish-img" src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/hero-poster.jpg'"><div class="dish-info"><h4>${d.name}</h4><p>${Object.keys(d.prices).join(" · ")}</p></div><div class="dish-foot"><div class="dish-price">From ${money(first[1])}<small>${first[0]}</small></div><button class="add-btn" aria-label="Add ${d.name}">+</button></div>`;
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
