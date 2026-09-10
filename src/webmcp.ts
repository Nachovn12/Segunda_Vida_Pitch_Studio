type Context={registerTool:(tool:{name:string;title:string;description:string;inputSchema:object;annotations:object;execute:(input:unknown)=>unknown},options:{signal:AbortSignal})=>void|Promise<void>};
export function registerStudyReader(read:()=>unknown){
 const context=(document as Document&{modelContext?:Context}).modelContext;
 if(!context?.registerTool)return()=>{};
 const lifecycle=new AbortController();
 try{void Promise.resolve(context.registerTool({name:'read_pitch_study_progress',title:'Consultar progreso de estudio',description:'Consulta la autoevaluación local de las nueve diapositivas y el número de ensayos terminados. No modifica datos.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).length)throw new Error('Se espera un objeto vacío.');return read();}},{signal:lifecycle.signal})).catch(()=>{});}catch{/* Los navegadores sin compatibilidad conservan toda la interfaz. */}
 return()=>lifecycle.abort();
}
