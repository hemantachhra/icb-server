<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-title" content="ICB Staff"/>
<title>ICB Staff</title>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet"/>
<style>
.install-bar{background:#fff;border:2px solid var(--green);border-radius:14px;padding:14px;margin-bottom:14px;display:flex;align-items:center;gap:12px;}
.install-bar .ib-icon{font-size:32px;}
.install-bar .ib-text{flex:1;}
.install-bar .ib-text div{font-weight:800;font-size:14px;}
.install-bar .ib-text span{font-size:12px;color:var(--text-light);}
.install-bar .ib-btn{background:var(--green);color:#fff;border:none;padding:8px 14px;border-radius:10px;font-weight:800;font-size:13px;cursor:pointer;font-family:'Nunito',sans-serif;white-space:nowrap;}
:root{
  --blue:#1565C0;--blue-dark:#0D47A1;--blue-light:#1E88E5;--blue-pale:#E3F2FD;
  --green:#2E7D32;--red:#C62828;--accent:#FF6F00;
  --text:#1A1A2E;--text-light:#546E7A;--bg:#F0F4FF;--white:#fff;
  --border:#CFD8DC;--shadow:0 2px 12px rgba(21,101,192,0.10);
  --radius:14px;--nav-h:64px;--bottom-h:70px;--safe-top:env(safe-area-inset-top,24px);
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
body{font-family:'Nunito',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;overflow-x:hidden;}
.top-nav{position:fixed;top:0;left:0;right:0;background:var(--green);display:flex;align-items:flex-end;padding:0 16px 10px;padding-top:max(var(--safe-top),24px);min-height:calc(var(--nav-h) + max(var(--safe-top),24px) - 44px);z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.18);}
.top-nav .logo{font-size:18px;font-weight:900;color:#fff;letter-spacing:0.5px;flex:1;}
.top-nav .logo span{color:#FFD54F;}
.top-nav .back-btn{background:rgba(255,255,255,0.22);border:none;color:#fff;height:36px;padding:0 14px;border-radius:20px;font-size:15px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;margin-left:auto;font-family:'Nunito',sans-serif;}
.top-nav .page-title{font-size:16px;font-weight:700;color:#fff;flex:1;}
.bottom-nav{position:fixed;bottom:0;left:0;right:0;height:var(--bottom-h);background:#fff;border-top:1.5px solid var(--border);display:flex;align-items:center;z-index:100;}
.nav-item{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer;padding:8px 4px;border:none;background:none;font-family:'Nunito',sans-serif;}
.nav-item .nav-icon{font-size:22px;}
.nav-item .nav-label{font-size:10px;font-weight:700;color:var(--text-light);}
.nav-item.active .nav-label{color:var(--green);}
.page{display:none;padding-top:calc(var(--nav-h) + max(var(--safe-top),24px) - 20px);padding-bottom:calc(var(--bottom-h)+16px);min-height:100vh;}
.page.active{display:block;}
.page-content{padding:0 14px;}
.card{background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);padding:16px;margin-bottom:14px;}
.card-title{font-size:14px;font-weight:800;color:var(--green);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;}
.form-group{margin-bottom:12px;}
.form-label{font-size:12px;font-weight:700;color:var(--text-light);margin-bottom:5px;display:block;text-transform:uppercase;letter-spacing:0.4px;}
.form-input{width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:15px;font-family:'Nunito',sans-serif;color:var(--text);background:#fff;outline:none;}
.form-input:focus{border-color:var(--green);}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.challan-header{background:var(--green);border-radius:10px 10px 0 0;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;}
.challan-header .ch-left{font-size:11px;font-weight:800;color:#fff;}
.challan-header .ch-right{display:grid;grid-template-columns:60px 68px 68px 32px;gap:4px;}
.challan-header .ch-right span{font-size:11px;font-weight:800;color:#fff;text-align:center;}
.challan-row{background:#fff;border:1px solid var(--border);border-top:none;padding:8px 12px;}
.challan-row:last-child{border-radius:0 0 10px 10px;}
.challan-row .row-line1{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
.challan-row .row-line1 .sl-num{font-size:12px;font-weight:800;color:var(--green);min-width:20px;}
.challan-row .row-line1 textarea.part-input{flex:1;border:1.5px solid var(--border);border-radius:8px;padding:8px 10px;font-size:14px;font-family:'Nunito',sans-serif;outline:none;resize:none;min-height:40px;line-height:1.4;color:var(--text);}
.challan-row .row-line1 textarea.part-input:focus{border-color:var(--green);}
.challan-row .row-line2{display:grid;grid-template-columns:60px 68px 68px 32px;gap:4px;margin-left:28px;}
.challan-row .row-line2 input{border:1.5px solid var(--border);border-radius:8px;padding:7px 4px;font-size:13px;font-family:'Nunito',sans-serif;width:100%;outline:none;text-align:center;color:var(--text);}
.challan-row .row-line2 input:focus{border-color:var(--green);}
.challan-row .row-line2 input[readonly]{background:#E8F5E9;color:var(--green);font-weight:800;}
.challan-row .del-row{background:none;border:none;color:var(--red);font-size:20px;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;}
.add-row-btn{width:100%;padding:10px;background:var(--blue-pale);border:1.5px dashed var(--green);border-radius:0 0 10px 10px;color:var(--green);font-weight:700;font-size:14px;cursor:pointer;font-family:'Nunito',sans-serif;margin-top:-1px;}
.total-row{background:#E8F5E9;border-radius:10px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;margin-top:10px;}
.total-row .total-label{font-size:14px;font-weight:800;color:var(--green);}
.total-row .total-val{font-size:20px;font-weight:900;color:var(--green);}
.btn{padding:13px 20px;border-radius:12px;font-size:15px;font-weight:800;font-family:'Nunito',sans-serif;cursor:pointer;border:none;width:100%;margin-bottom:8px;}
.btn-primary{background:var(--green);color:#fff;}
.btn-accent{background:var(--accent);color:#fff;}
.btn-outline{background:#fff;color:var(--green);border:2px solid var(--green);}
.btn-red{background:var(--red);color:#fff;}
.btn-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.btn-row .btn{margin-bottom:0;}
.list-item{background:#fff;border-radius:12px;padding:14px;margin-bottom:10px;box-shadow:var(--shadow);cursor:pointer;border-left:4px solid var(--green);}
.li-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;}
.li-no{font-size:13px;font-weight:800;color:var(--green);}
.li-amt{font-size:16px;font-weight:900;color:var(--blue-dark);}
.li-client{font-size:15px;font-weight:700;}
.li-date{font-size:12px;color:var(--text-light);}
.status-badge{font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;background:#E8F5E9;color:var(--green);}
.status-badge.sending{background:#FFF3E0;color:var(--accent);}
.toast{position:fixed;bottom:calc(var(--bottom-h)+16px);left:50%;transform:translateX(-50%);background:#2E7D32;color:#fff;padding:10px 22px;border-radius:30px;font-size:14px;font-weight:700;z-index:999;opacity:0;transition:opacity 0.3s;pointer-events:none;white-space:nowrap;}
.toast.show{opacity:1;}
.section-title{font-size:18px;font-weight:900;color:var(--text);margin:16px 0 10px;}
.empty{text-align:center;padding:40px 20px;color:var(--text-light);}
.empty .e-icon{font-size:48px;margin-bottom:10px;}
.coming-card{background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);padding:16px;margin-bottom:14px;opacity:0.6;}
.challan-print-area{background:#fff;border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:14px;}
.cp-header{text-align:center;border-bottom:2px solid var(--green);padding-bottom:10px;margin-bottom:10px;}
.cp-title{font-size:20px;font-weight:900;color:var(--green);}
.cp-subtitle{font-size:12px;color:var(--text-light);}
.dialog-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:300;align-items:center;justify-content:center;padding:20px;}
.dialog-overlay.open{display:flex;}
.dialog-box{background:#fff;border-radius:20px;padding:24px;width:100%;max-width:340px;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.2);}
.dialog-icon{font-size:48px;margin-bottom:12px;}
.dialog-title{font-size:18px;font-weight:900;color:var(--text);margin-bottom:8px;}
.dialog-msg{font-size:14px;color:var(--text-light);margin-bottom:20px;line-height:1.5;}
.dialog-btns{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.dialog-btns .btn{margin-bottom:0;}
.bottom-nav{position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1.5px solid var(--border);display:flex;align-items:center;z-index:100;padding-bottom:env(safe-area-inset-bottom,8px);height:calc(var(--bottom-h) + env(safe-area-inset-bottom,8px));}
</style>
</head>
<body>

<div class="top-nav" id="topNav">
  <div class="logo">ICB <span>Staff</span></div>
</div>
<div class="dialog-overlay" id="dialog-overlay">
  <div class="dialog-box">
    <div class="dialog-icon" id="dialog-icon">⚠️</div>
    <div class="dialog-title" id="dialog-title">Confirm</div>
    <div class="dialog-msg" id="dialog-msg"></div>
    <div class="dialog-btns" id="dialog-btns"></div>
  </div>
</div>
<div class="toast" id="toast"></div>

<!-- HOME -->
<div class="page active" id="page-home">
  <div class="page-content">
    <div id="install-prompt" style="display:none;" class="install-bar">
      <div class="ib-icon">📲</div>
      <div class="ib-text"><div>Install ICB Staff</div><span>Add to Home Screen</span></div>
      <button class="ib-btn" onclick="triggerInstall()">Install</button>
    </div>
    <div id="ios-prompt" style="display:none;" class="install-bar">
      <div class="ib-icon">📲</div>
      <div class="ib-text"><div>Install ICB Staff</div><span>Tap Share → Add to Home Screen</span></div>
    </div>
    <div class="section-title">Welcome 👋</div>
    <div class="card" style="background:var(--green);color:#fff;">
      <div style="font-size:28px;font-weight:900;" id="home-count">0</div>
      <div style="font-size:13px;opacity:0.85;">Challans Sent Today</div>
    </div>
    <button class="btn btn-primary" style="font-size:17px;padding:16px;" onclick="goPage('new-challan')">＋ Create New Challan</button>
    <button class="btn btn-outline" onclick="goPage('my-challans')">📋 My Sent Challans</button>
    <div id="home-last-challan"></div>
  </div>
</div>

<!-- NEW CHALLAN -->
<div class="page" id="page-new-challan">
  <div class="page-content">
    <div class="card">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Challan No.</label>
          <input class="form-input" id="cf-no" type="text" placeholder="ICB 001"/>
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input class="form-input" id="cf-date" type="date"/>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Client Name</label>
        <input class="form-input" id="cf-client" type="text" placeholder="Enter client name"/>
      </div>
    </div>
    <div class="card" style="padding:0;overflow:hidden;">
      <div class="challan-header">
        <div class="ch-left"># &nbsp; Particulars</div>
        <div class="ch-right"><span>Qty</span><span>Rate</span><span>Amt</span><span></span></div>
      </div>
      <div id="challan-rows"></div>
      <button class="add-row-btn" onclick="addRow()">＋ Add Item</button>
    </div>
    <div class="total-row">
      <span class="total-label">TOTAL</span>
      <span class="total-val" id="cf-total">₹0.00</span>
    </div>
    <div class="card">
      <div class="form-group">
        <label class="form-label">Comments / Notes</label>
        <textarea class="form-input" id="cf-comment" rows="3" placeholder="Optional remarks..."></textarea>
      </div>
    </div>
    <button class="btn btn-primary" onclick="sendChallan()">📤 Send to Admin</button>
    <button class="btn btn-accent" onclick="shareWA()">📲 Send via WhatsApp</button>
    <button class="btn btn-outline" onclick="goBack()">← Back</button>
  </div>
</div>

<!-- MY CHALLANS -->
<div class="page" id="page-my-challans">
  <div class="page-content">
    <div id="my-challan-list"></div>
  </div>
</div>

<!-- CHALLAN VIEW -->
<div class="page" id="page-view">
  <div class="page-content">
    <div class="challan-print-area" id="view-area"></div>
    <button class="btn btn-accent" onclick="shareViewWA()">📲 Share WhatsApp</button>
    <button class="btn btn-outline" onclick="goBack()">← Back</button>
  </div>
</div>

<!-- COMING SOON PAGES -->
<div class="page" id="page-attendance">
  <div class="page-content">
    <div style="text-align:center;padding:60px 20px;">
      <div style="font-size:64px;margin-bottom:16px;">🕐</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:8px;">Attendance / Roster</div>
      <div style="color:var(--text-light);font-size:15px;">Coming Soon</div>
    </div>
  </div>
</div>

<!-- BOTTOM NAV -->
<div class="bottom-nav">
  <button class="nav-item active" onclick="goPage('home')" id="nav-home">
    <span class="nav-icon">🏠</span><span class="nav-label">Home</span>
  </button>
  <button class="nav-item" onclick="goPage('new-challan')" id="nav-new">
    <span class="nav-icon">➕</span><span class="nav-label">New</span>
  </button>
  <button class="nav-item" onclick="goPage('my-challans')" id="nav-mine">
    <span class="nav-icon">📋</span><span class="nav-label">My Challans</span>
  </button>
  <button class="nav-item" onclick="goPage('attendance')" id="nav-att">
    <span class="nav-icon">🕐</span><span class="nav-label">Attendance</span>
  </button>
</div>

<script>
const ADMIN_WA = '919871810055';
const STAFF_WA = '918447493729';
let db = { challans: [] };
let currentId = null;
let pageHistory = [];
let currentPage = 'home';
const navMap = {home:'nav-home','new-challan':'nav-new','my-challans':'nav-mine',attendance:'nav-att'};
const mainPages = ['home','my-challans','attendance'];

function saveDB(){localStorage.setItem('icb_staff_db',JSON.stringify(db));}
function loadDB(){
  const d=localStorage.getItem('icb_staff_db');
  if(d) db=JSON.parse(d);
  // Remove duplicates by challan number — keep only first occurrence
  const seen=new Set();
  db.challans=db.challans.filter(c=>{
    if(seen.has(c.no)) return false;
    seen.add(c.no); return true;
  });
  saveDB();
}

loadDB();

window.addEventListener('load',()=>{
  document.getElementById('cf-date').value=today();
  document.getElementById('cf-no').value=nextNo();
  addRow();addRow();
  refreshHome();
  renderMy();
});

function today(){return new Date().toISOString().split('T')[0];}

function goPage(name,push=true){
  if(push&&currentPage!==name)pageHistory.push(currentPage);
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  currentPage=name;
  Object.values(navMap).forEach(id=>document.getElementById(id).classList.remove('active'));
  if(navMap[name])document.getElementById(navMap[name]).classList.add('active');
  const titles={'new-challan':'New Challan','my-challans':'My Challans',attendance:'Attendance',view:'Challan',home:''};
  const topNav=document.getElementById('topNav');
  const isMain=mainPages.includes(name)||name==='home';
  topNav.innerHTML=isMain
    ?`<div class="logo">ICB <span>Staff</span></div>`
    :`<div class="page-title">${titles[name]||''}</div><button class="back-btn" onclick="goBack()">← Back</button>`;
  if(name==='new-challan') resetForm();
  if(name==='my-challans') renderMy();
  if(name==='home')refreshHome();
}

function goBack(){const p=pageHistory.pop()||'home';goPage(p,false);}

function addRow(){
  const rows=document.getElementById('challan-rows');
  const idx=rows.children.length+1;
  const row=document.createElement('div');
  row.className='challan-row';
  row.innerHTML=`
    <div class="row-line1">
      <div class="sl-num">${idx}</div>
      <textarea class="part-input" placeholder="Particulars / Item description" rows="1" oninput="autoResize(this)"></textarea>
    </div>
    <div class="row-line2">
      <input type="number" placeholder="Qty" class="qty-input" oninput="calcRow(this)" min="0"/>
      <input type="number" placeholder="Rate ₹" class="rate-input" oninput="calcRow(this)" min="0"/>
      <input type="number" placeholder="Amt" class="amt-input" readonly/>
      <button class="del-row" onclick="delRow(this)">✕</button>
    </div>`;
  rows.appendChild(row);
}

function autoResize(el){el.style.height='auto';el.style.height=el.scrollHeight+'px';}

function calcRow(el){
  const row=el.closest('.challan-row');
  const qty=parseFloat(row.querySelector('.qty-input').value)||0;
  const rate=parseFloat(row.querySelector('.rate-input').value)||0;
  row.querySelector('.amt-input').value=(qty*rate).toFixed(2);
  updateTotal();
}

function delRow(btn){
  const rows=document.getElementById('challan-rows');
  if(rows.children.length<=1){showToast('Need at least 1 row');return;}
  btn.closest('.challan-row').remove();
  renumber();updateTotal();
}

function renumber(){document.querySelectorAll('#challan-rows .challan-row').forEach((r,i)=>r.querySelector('.sl-num').textContent=i+1);}

function updateTotal(){
  let t=0;
  document.querySelectorAll('.amt-input').forEach(a=>t+=parseFloat(a.value)||0);
  document.getElementById('cf-total').textContent='₹'+t.toFixed(2);
  return t;
}

const SERVER = 'https://icb-server.onrender.com';

async function sendToServer(data) {
  try {
    await fetch(SERVER + '/send', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    showToast('✅ Sent to Admin!');
  } catch(e) { showToast('⚠️ Offline - saved locally'); }
}

function nextNo(){
  // Check admin's last known number from shared storage
  const adminLast = parseInt(localStorage.getItem('icb_admin_last_no')||'0');
  const staffLast = db.challans.length ? Math.max(...db.challans.map(c=>extractNum(c.no))) : 0;
  const next = Math.max(adminLast, staffLast) + 1;
  return 'ICB ' + String(next).padStart(3,'0');
}

function getFormData(){
  const rows=[];
  document.querySelectorAll('#challan-rows .challan-row').forEach((r,i)=>{
    const part=r.querySelector('.part-input').value.trim();
    if(part)rows.push({sl:i+1,particulars:part,qty:parseFloat(r.querySelector('.qty-input').value)||0,rate:parseFloat(r.querySelector('.rate-input').value)||0,amount:parseFloat(r.querySelector('.amt-input').value)||0});
  });
  return{
    no:document.getElementById('cf-no').value.trim(),
    date:document.getElementById('cf-date').value,
    client:document.getElementById('cf-client').value.trim(),
    comment:document.getElementById('cf-comment').value.trim(),
    rows,total:rows.reduce((s,r)=>s+r.amount,0),
    source:'staff',createdAt:new Date().toISOString()
  };
}

function showDialog(icon,title,msg,buttons){
  document.getElementById('dialog-icon').textContent=icon;
  document.getElementById('dialog-title').textContent=title;
  document.getElementById('dialog-msg').textContent=msg;
  const btns=document.getElementById('dialog-btns');
  btns.innerHTML=buttons.map(b=>`<button class="btn ${b.cls||'btn-outline'}" onclick="closeDialog();${b.action||''}">${b.label}</button>`).join('');
  document.getElementById('dialog-overlay').classList.add('open');
}
function closeDialog(){document.getElementById('dialog-overlay').classList.remove('open');}

async function sendChallan(){
  const data=getFormData();
  if(!data.client){showToast('⚠️ Enter client name');return;}
  if(!data.rows.length){showToast('⚠️ Add at least 1 item');return;}

  // Check if already saved and sent
  const existing=db.challans.find(c=>c.no===data.no);
  if(existing && existing.sent===true){
    showDialog('ℹ️','Already Sent',
      `Challan ${data.no} was already sent to Admin successfully.`,
      [{label:'OK',cls:'btn-primary'}]
    );
    return;
  }

  // Save new challan (not resend)
  if(!existing){
    data.id=Date.now();
    data.sent=false;
    db.challans.unshift(data);
    saveDB();
    localStorage.setItem('icb_admin_last_no',extractNum(data.no));
  }

  const sentData=existing||data;

  // Show sending dialog
  showDialog('📤','Sending to Admin...','Connecting... first send may take up to 30 seconds.',[]);

  try{
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),35000);
    const res=await fetch(SERVER+'/send',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(sentData),
      signal:controller.signal
    });
    clearTimeout(timeout);
    if(res.ok){
      const result=await res.json();
      // Mark as sent in local db
      const idx=db.challans.findIndex(c=>c.no===sentData.no);
      if(idx>-1){db.challans[idx].sent=true;saveDB();}
      if(result.status==='new'){
        showDialog('✅','Sent Successfully!',
          `Challan ${sentData.no} for ${sentData.client} — ₹${sentData.total.toFixed(2)} sent to Admin!`,
          [
            {label:'New Challan',cls:'btn-primary',action:"closeDialog();goPage('new-challan');resetForm();"},
            {label:'My Challans',cls:'btn-outline',action:"goPage('my-challans')"}
          ]
        );
      } else {
        showDialog('ℹ️','Already With Admin',
          `Challan ${sentData.no} is already present with Admin. No duplicate sent.`,
          [{label:'OK',cls:'btn-primary'}]
        );
      }
    } else {
      showDialog('⚠️','Server Error',
        'Challan saved locally. Share via WhatsApp to notify Admin.',
        [{label:'📲 WA',cls:'btn-accent',action:`closeDialog();openWA(db.challans.find(x=>x.no==='${sentData.no}'))`},{label:'OK',cls:'btn-outline'}]
      );
    }
  }catch(e){
    showDialog('📵','No Internet',
      'Challan saved on device. Share via WhatsApp when ready.',
      [{label:'📲 WA',cls:'btn-accent',action:`closeDialog();openWA(db.challans.find(x=>x.no==='${sentData.no}'))`},{label:'OK',cls:'btn-outline'}]
    );
  }
  refreshHome();
  renderMy();
}

function resetForm(){
  document.getElementById('cf-client').value='';
  document.getElementById('cf-comment').value='';
  document.getElementById('challan-rows').innerHTML='';
  document.getElementById('cf-no').value=nextNo();
  document.getElementById('cf-date').value=today();
  addRow();addRow();updateTotal();
}

function deleteChallan(id){
  showDialog('🗑️','Delete Challan',
    'Are you sure you want to delete this challan? This cannot be undone.',
    [
      {label:'Delete',cls:'btn-red',action:`confirmDeleteChallan(${id})`},
      {label:'Cancel',cls:'btn-outline'}
    ]
  );
}
function confirmDeleteChallan(id){
  db.challans=db.challans.filter(c=>c.id!==id);
  saveDB();
  renderMy();
  refreshHome();
  showToast('🗑️ Challan deleted');
}

function renderMy(){
  const list=document.getElementById('my-challan-list');
  if(!db.challans.length){list.innerHTML=`<div class="empty"><div class="e-icon">📋</div><p>No challans sent yet</p></div>`;return;}
  list.innerHTML=db.challans.map(c=>`
    <div class="list-item">
      <div onclick="viewChallan(${c.id})">
        <div class="li-top">
          <div><div class="li-no">${c.no}</div><div class="li-client">${c.client}</div></div>
          <div style="text-align:right;"><div class="li-amt">₹${(c.total||0).toFixed(2)}</div><span class="status-badge ${c.sent?'':'sending'}">${c.sent?'Sent ✓':'Saved'}</span></div>
        </div>
        <div class="li-date">📅 ${fmtDate(c.date)}</div>
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;">
        <button class="btn btn-primary" style="margin:0;padding:8px;font-size:13px;flex:1;" onclick="resendToAdmin(${c.id})">📤 Resend</button>
        <button class="btn btn-accent" style="margin:0;padding:8px;font-size:13px;" onclick="openWA(db.challans.find(x=>x.id===${c.id}))">📲 WA</button>
        <button class="btn btn-red" style="margin:0;padding:8px;font-size:13px;" onclick="deleteChallan(${c.id})">🗑️</button>
      </div>
    </div>
  `).join('');
}

function viewChallan(id){
  const c=db.challans.find(x=>x.id===id);
  if(!c)return;
  currentId=id;
  document.getElementById('view-area').innerHTML=buildHTML(c);
  goPage('view');
}

function buildHTML(c){
  const rows=(c.rows||[]).map((r,i)=>`<tr style="border-bottom:1px solid #eee;"><td style="padding:6px 4px;text-align:center;">${r.sl||i+1}</td><td style="padding:6px 4px;">${r.particulars}</td><td style="padding:6px 4px;text-align:center;">${r.qty}</td><td style="padding:6px 4px;text-align:right;">₹${r.rate}</td><td style="padding:6px 4px;text-align:right;">₹${r.amount.toFixed(2)}</td></tr>`).join('');
  return`<div class="cp-header"><div class="cp-title">ICB Staff</div><div class="cp-subtitle">Challan / Delivery Note</div></div>
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:13px;">
      <div><strong>Challan:</strong> ${c.no}<br/><strong>Client:</strong> ${c.client}<br/>${c.staff?`<strong>Staff:</strong> ${c.staff}`:''}
      </div><div style="text-align:right;"><strong>Date:</strong> ${fmtDate(c.date)}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:13px;"><thead><tr style="background:var(--green);color:#fff;"><th style="padding:7px 4px;width:30px;">#</th><th style="padding:7px 4px;text-align:left;">Particulars</th><th style="padding:7px 4px;width:50px;">Qty</th><th style="padding:7px 4px;width:60px;text-align:right;">Rate</th><th style="padding:7px 4px;width:70px;text-align:right;">Amount</th></tr></thead><tbody>${rows}</tbody></table>
    <div style="text-align:right;padding:10px 0;border-top:2px solid var(--green);"><strong>Total: ₹${(c.total||0).toFixed(2)}</strong></div>
    ${c.comment?`<div style="font-size:12px;color:var(--text-light);">Note: ${c.comment}</div>`:''}`;
}

function shareWA(){
  const data=getFormData();
  openWA(data);
}

function shareViewWA(){
  const c=db.challans.find(x=>x.id===currentId);
  if(c)openWA(c);
}

function openWA(c){
  const rows=(c.rows||[]).map(r=>`${r.sl}. ${r.particulars} | Qty:${r.qty} | Rate:₹${r.rate} | Amt:₹${r.amount.toFixed(2)}`).join('\n');
  const msg=`*ICB STAFF CHALLAN*\nChallan No: ${c.no}\nDate: ${fmtDate(c.date)}\nClient: ${c.client}\n\n${rows}\n\n*TOTAL: ₹${(c.total||0).toFixed(2)}*${c.comment?'\nNote: '+c.comment:''}`;
  window.location.href=`whatsapp://send?phone=919871810055&text=${encodeURIComponent(msg)}`;
}

function refreshHome(){
  const todayStr=today();
  const todayCount=db.challans.filter(c=>c.date===todayStr).length;
  document.getElementById('home-count').textContent=todayCount;
  const last=db.challans[0];
  const el=document.getElementById('home-last-challan');
  if(last){
    el.innerHTML=`
      <div class="card" style="margin-top:4px;">
        <div style="font-size:12px;font-weight:700;color:var(--text-light);margin-bottom:6px;">LAST CHALLAN</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div><div style="font-weight:800;font-size:15px;">${last.no} — ${last.client}</div>
          <div style="font-size:12px;color:var(--text-light);">${fmtDate(last.date)} · ₹${(last.total||0).toFixed(2)}</div></div>
        </div>
        <button class="btn btn-primary" style="margin-bottom:8px;" onclick="sendLastToAdmin()">📤 Send to Admin</button>
        <button class="btn btn-accent" style="margin-bottom:0;" onclick="shareLastWA()">📲 Send via WhatsApp</button>
      </div>`;
  } else {
    el.innerHTML='';
  }
}

async function sendLastToAdmin(){
  const c=db.challans[0];
  if(!c){showToast('No challan to send');return;}
  showDialog('📤','Sending to Admin...','Connecting to server... please wait...',[]);
  try{
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),35000);
    const res=await fetch(SERVER+'/send',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify(c),signal:controller.signal
    });
    clearTimeout(timeout);
    if(res.ok){
      const result=await res.json();
      const idx=db.challans.findIndex(x=>x.no===c.no);
      if(idx>-1){db.challans[idx].sent=true;saveDB();}
      if(result.status==='new'){
        showDialog('✅','Sent Successfully!',
          `Challan ${c.no} for ${c.client} ₹${c.total.toFixed(2)} sent to Admin!`,
          [{label:'OK',cls:'btn-primary'}]
        );
      } else {
        showDialog('ℹ️','Already With Admin',
          `Challan ${c.no} is already present with Admin.`,
          [{label:'OK',cls:'btn-primary'}]
        );
      }
      refreshHome();
    } else {
      showDialog('⚠️','Server Error','Use WhatsApp to notify Admin.',
        [{label:'📲 WA',cls:'btn-accent',action:`openWA(db.challans[0])`},{label:'OK',cls:'btn-outline'}]);
    }
  }catch(e){
    showDialog('📵','No Internet','Share via WhatsApp instead.',
      [{label:'📲 WA',cls:'btn-accent',action:`openWA(db.challans[0])`},{label:'OK',cls:'btn-outline'}]);
  }
}

async function resendToAdmin(id){
  const c=db.challans.find(x=>x.id===id);
  if(!c)return;
  showDialog('📤','Resending...','Sending challan to Admin again...',[]);
  try{
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),35000);
    const res=await fetch(SERVER+'/send',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify(c),signal:controller.signal
    });
    clearTimeout(timeout);
    if(res.ok){
      const result=await res.json();
      const idx=db.challans.findIndex(x=>x.id===id);
      if(idx>-1){db.challans[idx].sent=true;saveDB();renderMy();}
      if(result.status==='new'){
        showDialog('✅','Sent Successfully!',
          `Challan ${c.no} for ${c.client} ₹${c.total.toFixed(2)} sent to Admin!`,
          [{label:'OK',cls:'btn-primary'}]
        );
      } else {
        showDialog('ℹ️','Already With Admin',
          `Challan ${c.no} is already present with Admin. No duplicate sent.`,
          [{label:'OK',cls:'btn-primary'}]
        );
      }
    } else {
      showDialog('⚠️','Server Error','Use WhatsApp to notify Admin.',
        [{label:'📲 WA',cls:'btn-accent',action:`openWA(db.challans.find(x=>x.id===${id}))`},{label:'OK',cls:'btn-outline'}]);
    }
  }catch(e){
    showDialog('📵','No Internet','Share via WhatsApp instead.',
      [{label:'📲 WA',cls:'btn-accent',action:`openWA(db.challans.find(x=>x.id===${id}))`},{label:'OK',cls:'btn-outline'}]);
  }
}

function shareLastWA(){
  const c=db.challans[0];
  if(c) openWA(c);
}

// ========== PWA INSTALL ==========
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-prompt').style.display = 'flex';
});
window.addEventListener('appinstalled', () => {
  document.getElementById('install-prompt').style.display = 'none';
});
function triggerInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      document.getElementById('install-prompt').style.display = 'none';
    });
  }
}
// Show iOS prompt on Safari
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone;
if (isIOS) document.getElementById('ios-prompt').style.display = 'flex';

function fmtDate(d){
  if(!d)return'';
  const [y,m,day]=d.split('-');
  return`${day} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(m)-1]} ${y}`;
}

function showToast(msg,duration=3000){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),duration);
}
</script>
</body>
</html>
