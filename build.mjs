import fs from 'node:fs';import path from 'node:path';
const root='dist';fs.mkdirSync(root,{recursive:true});fs.mkdirSync(root+'/assets',{recursive:true});
for(const p of fs.readdirSync('.')){if(/\.(webp|png|ttf)$/.test(p))fs.copyFileSync(p,root+'/assets/'+p);else if(['index.html','404.html','style.css','app.js','favicon.svg'].includes(p))fs.copyFileSync(p,root+'/'+p);else if(p.endsWith('.html')){const dir=root+'/'+p.slice(0,-5);fs.mkdirSync(dir,{recursive:true});fs.copyFileSync(p,dir+'/index.html')}}
console.log('Static website built in dist');
