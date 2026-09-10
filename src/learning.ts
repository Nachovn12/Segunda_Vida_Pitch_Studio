export type Rating = 'again' | 'review' | 'mastered';
export type RecordItem = { rating: Rating; reviewedAt: number; attempts: number };
export type Session = { id: string; total: number; finishedAt: number; completed: number; assignments: string[] };
export type Stored = { version: 1; selectedPerson: string; progress: Record<string, Record<string, RecordItem>>; sessions: Session[] };
export const fresh = ():Stored => ({version:1,selectedPerson:'Ignacio Valeria',progress:{},sessions:[]});
export function formatTime(seconds:number) { const s=Math.max(0,Math.floor(seconds));return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`; }
export function shuffle<T>(items: T[], random = Math.random): T[] { const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }
export function allocate(names: readonly string[], random=Math.random) {return shuffle(Array.from({length:9},(_,i)=>names[i%names.length]),random);}
export function elapsedSeconds(base:number,startedAt:number|null,now:number){return base+(startedAt===null?0:Math.max(0,(now-startedAt)/1000));}
export function readStored(raw: string|null):Stored {
 try {const x=JSON.parse(raw||'null');if(!x||x.version!==1||typeof x.progress!=='object'||!x.progress||Array.isArray(x.progress))return fresh();
 const out=fresh();if(typeof x.selectedPerson==='string')out.selectedPerson=x.selectedPerson;
 for(const [person,entries] of Object.entries(x.progress)){if(!entries||typeof entries!=='object'||Array.isArray(entries))continue;const clean:Record<string,RecordItem>={};for(const [id,item] of Object.entries(entries)){const r=item as RecordItem;if(/^[1-9]$/.test(id)&&r&&['again','review','mastered'].includes(r.rating)&&Number.isFinite(r.reviewedAt)&&Number.isFinite(r.attempts))clean[id]=r;}out.progress[person]=clean;}
 out.sessions=Array.isArray(x.sessions)?x.sessions.filter((s:Session)=>s&&typeof s.id==='string'&&Number.isFinite(s.total)&&s.total>=0&&Number.isFinite(s.finishedAt)&&Number.isFinite(s.completed)&&Array.isArray(s.assignments)).slice(0,30):[];return out;
 }catch{return fresh();}
}
