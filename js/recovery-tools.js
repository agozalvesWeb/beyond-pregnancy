
document.addEventListener('DOMContentLoaded',()=>{
 const checks=[...document.querySelectorAll('[data-readiness]')],count=document.querySelector('#check-count'),bar=document.querySelector('#check-progress');
 function update(){const n=checks.filter(c=>c.checked).length;if(count)count.textContent=`${n} of ${checks.length} considerations reviewed`;if(bar)bar.style.width=`${n/checks.length*100}%`;}
 checks.forEach(c=>c.addEventListener('change',update));update();
 const journal=document.querySelector('#journal-form');
 if(journal)journal.addEventListener('submit',e=>{
  e.preventDefault();const data=new FormData(journal);
  const text=`MY RECOVERY JOURNAL\nDate: ${data.get('date')||'Not entered'}\nEnergy: ${data.get('energy')}/5\nSleep: ${data.get('sleep')}\nActivity: ${data.get('activity')}\nSymptoms: ${data.getAll('symptoms').join(', ')||'Not specified'}\nNotes: ${data.get('notes')||'None'}`;
  const out=document.querySelector('#journal-output');out.textContent=text;out.hidden=false;
  const copy=document.querySelector('#copy-journal');copy.hidden=false;
  copy.onclick=()=>navigator.clipboard?.writeText(text).then(()=>copy.textContent='Copied').catch(()=>{});
 });
 const roadmap=document.querySelector('#roadmap-tabs');
 if(roadmap)roadmap.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
  roadmap.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
  document.querySelectorAll('[data-roadmap-panel]').forEach(p=>p.hidden=p.dataset.roadmapPanel!==b.dataset.phase);
 }));
});
