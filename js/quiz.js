
const questions=[
 {q:"Which statement best describes postpartum return to sport?",a:["Everyone can run at six weeks.","It should be based on individual healing, symptoms and functional readiness.","Only body weight determines readiness."],correct:1,why:"There is no universal timeline. Recovery and readiness vary and may require assessment."},
 {q:"What should an athlete do if running causes pelvic heaviness or urinary leakage?",a:["Ignore it and continue.","Increase speed to improve strength.","Pause or modify impact and seek pelvic health assessment."],correct:2,why:"These symptoms deserve assessment; they are not a required part of returning to sport."},
 {q:"Is moderate exercise generally compatible with breastfeeding?",a:["Yes, for most healthy people.","No, all exercise reduces milk quality.","Only after weaning."],correct:0,why:"Moderate physical activity is generally compatible with breastfeeding. Individual medical advice may be needed."},
 {q:"What is a useful early recovery priority?",a:["Immediate high-intensity intervals.","Healing, rest, symptom awareness and gentle movement when appropriate.","Rapid weight loss."],correct:1,why:"Early recovery is not a race. Healing and individualized guidance come first."}
];
let index=0,score=0,answered=false;
const q=document.querySelector('#quiz-question'),opts=document.querySelector('#quiz-options'),feedback=document.querySelector('#quiz-feedback'),next=document.querySelector('#quiz-next'),progress=document.querySelector('#quiz-progress');
function render(){
 if(!q)return;
 answered=false;next.hidden=true;feedback.textContent='';
 if(index>=questions.length){q.textContent=`You completed the quiz! Your score: ${score}/${questions.length}`;opts.innerHTML='<p>Keep exploring the guides and references to learn more.</p>';progress.textContent='Quiz complete';next.textContent='Start again';next.hidden=false;return;}
 const item=questions[index];q.textContent=item.q;progress.textContent=`Question ${index+1} of ${questions.length}`;
 opts.innerHTML='';item.a.forEach((a,i)=>{const b=document.createElement('button');b.className='quiz-option';b.textContent=a;b.addEventListener('click',()=>choose(i,b));opts.appendChild(b);});
}
function choose(i,button){if(answered)return;answered=true;const item=questions[index];const all=[...opts.querySelectorAll('button')];all.forEach((b,n)=>{b.disabled=true;if(n===item.correct)b.classList.add('correct')});if(i!==item.correct)button.classList.add('incorrect');else score++;feedback.textContent=(i===item.correct?'Correct. ':'Not quite. ')+item.why;next.hidden=false;next.textContent=index===questions.length-1?'See results':'Next question';}
if(next)next.addEventListener('click',()=>{if(index>=questions.length){index=0;score=0;}else index++;render();});
render();
