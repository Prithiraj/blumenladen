document.documentElement.classList.add("enhanced");
const header=document.querySelector("[data-header]");
const menuToggle=document.querySelector("[data-menu-toggle]");
const nav=document.querySelector("[data-nav]");
const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
document.querySelectorAll("[data-year]").forEach((node)=>{node.textContent=new Date().getFullYear();});
const setHeaderState=()=>{header?.classList.toggle("is-scrolled",window.scrollY>16);};
setHeaderState();window.addEventListener("scroll",setHeaderState,{passive:true});
const closeMenu=()=>{if(!menuToggle||!nav)return;menuToggle.setAttribute("aria-expanded","false");nav.classList.remove("is-open");document.body.classList.remove("menu-open");};
menuToggle?.addEventListener("click",()=>{const isOpen=menuToggle.getAttribute("aria-expanded")==="true";menuToggle.setAttribute("aria-expanded",String(!isOpen));nav?.classList.toggle("is-open",!isOpen);document.body.classList.toggle("menu-open",!isOpen);});
nav?.querySelectorAll("a").forEach((link)=>link.addEventListener("click",closeMenu));document.addEventListener("keydown",(event)=>{if(event.key==="Escape")closeMenu();});
const revealNodes=document.querySelectorAll(".reveal");
if(reduceMotion.matches||!("IntersectionObserver" in window)){revealNodes.forEach((node)=>node.classList.add("is-visible"));}else{const observer=new IntersectionObserver((entries,obs)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");obs.unobserve(entry.target);}});},{threshold:.14,rootMargin:"0px 0px -6% 0px"});revealNodes.forEach((node)=>observer.observe(node));}
try{const weekday=new Intl.DateTimeFormat("de-DE",{timeZone:"Europe/Berlin",weekday:"short"}).format(new Date()).slice(0,2);document.querySelector(`[data-day="${weekday}"]`)?.classList.add("is-today");}catch{}
async function initThreeBackdrop(){
 const canvas=document.querySelector("[data-three-canvas]");if(!canvas||reduceMotion.matches)return;
 let THREE;try{THREE=await import("https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js");}catch{return;}
 const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(50,1,.1,100);camera.position.z=6;
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:"low-power"});renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));
 const count=window.innerWidth<700?90:160;const geometry=new THREE.BufferGeometry();const positions=new Float32Array(count*3);
 for(let i=0;i<count;i+=1){const i3=i*3;positions[i3]=(Math.random()-.5)*12;positions[i3+1]=(Math.random()-.5)*8;positions[i3+2]=(Math.random()-.5)*5;}geometry.setAttribute("position",new THREE.BufferAttribute(positions,3));
 const material=new THREE.PointsMaterial({color:0xe7ded1,size:.045,transparent:true,opacity:.25,depthWrite:false});const pollen=new THREE.Points(geometry,material);scene.add(pollen);
 const ringGroup=new THREE.Group();for(let ring=0;ring<5;ring+=1){const curve=new THREE.EllipseCurve(0,0,.62+ring*.12,1.4+ring*.16,0,Math.PI*2,false,ring*.5);const points=curve.getPoints(64).map((point)=>new THREE.Vector3(point.x,point.y,0));const lineGeometry=new THREE.BufferGeometry().setFromPoints(points);const lineMaterial=new THREE.LineBasicMaterial({color:0xd8b8d1,transparent:true,opacity:.045});const line=new THREE.Line(lineGeometry,lineMaterial);line.rotation.z=ring*(Math.PI/5);ringGroup.add(line);}ringGroup.position.set(3.4,.3,-1.2);ringGroup.scale.setScalar(1.6);scene.add(ringGroup);
 const resize=()=>{const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return;renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix();};resize();const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas);
 let frameId;const animate=(time)=>{pollen.rotation.y=time*.000018;pollen.rotation.x=Math.sin(time*.00008)*.035;ringGroup.rotation.z=time*.000012;renderer.render(scene,camera);frameId=requestAnimationFrame(animate);};frameId=requestAnimationFrame(animate);
 const visibilityObserver=new IntersectionObserver(([entry])=>{if(entry.isIntersecting&&!frameId){frameId=requestAnimationFrame(animate);}else if(!entry.isIntersecting&&frameId){cancelAnimationFrame(frameId);frameId=undefined;}});visibilityObserver.observe(canvas);
 reduceMotion.addEventListener("change",(event)=>{if(event.matches){if(frameId)cancelAnimationFrame(frameId);canvas.hidden=true;}});
}
initThreeBackdrop();
