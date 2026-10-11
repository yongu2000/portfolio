const select=document.querySelector('#page-select');
const zoom=document.querySelector('#zoom');
const sheets=[...document.querySelectorAll('.sheet')];
select.addEventListener('change',()=>{const target=document.getElementById(`page-${select.value}`);target.scrollIntoView({block:'start'});history.replaceState(null,'',`#${target.id}`);});
zoom.hidden=false;
zoom.addEventListener('click',()=>{const on=document.body.classList.toggle('zoomed');zoom.setAttribute('aria-pressed',String(on));zoom.textContent=on?'화면에 맞춤':'확대 보기';});
let scheduled=false;
function syncPage(){const line=document.querySelector('.toolbar').getBoundingClientRect().bottom+40;let current=sheets[0];for(const sheet of sheets){if(sheet.getBoundingClientRect().top<=line)current=sheet;else break;}select.value=current.id.replace('page-','');scheduled=false;}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(syncPage);}},{passive:true});
window.addEventListener('load',syncPage);
