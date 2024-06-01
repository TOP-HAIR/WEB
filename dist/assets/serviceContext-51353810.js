var l=Object.defineProperty;var v=(t,r,e)=>r in t?l(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var o=(t,r,e)=>(v(t,typeof r!="symbol"?r+"":r,e),e);import{A as p,s as a}from"./index-b4deece9.js";class S extends p{constructor(){super();o(this,"serviceUrl");this.serviceUrl="/servicos"}async getListaService(){return await a("GET",this.serviceUrl+`/empresa/${this.idEmpresa}`)}async getVincularService(e){return console.log(e),console.log(this.idEmpresa),await a("PUT",this.serviceUrl+`/vincular-empresa/${e}/${this.idEmpresa}`)}async getEmpresaEstadoFiltro(e="",s=""){return await a("GET",this.serviceUrl+`/filtrados/${s}/${e}`)}async getListaClientService(e){return await a("GET",this.serviceUrl+`/empresa/${e}`)}async getExportarServicoService(){return await a("GET",this.serviceUrl+"/exportar-csv")}async postImportService(e){return await a("POST",this.authUrl+"/importacao",e)}async getListaServiceById(e){return await a("GET",this.serviceUrl+`/${e}`)}async deleteService(e){const s=this.serviceUrl+`/${e}`;return await a("DELETE",s)}async postService(e){const s=this.serviceUrl;return await a("POST",s,e)}async putService(e,s){console.log(e);const n=this.serviceUrl;return await a("PUT",n+`/${s}`,e)}}const i=new S,c=sessionStorage.getItem("dataEmpresa");console.log(c);if(c!==null){const r=JSON.parse(c).idEmpresa;i.idEmpresa=r}const g=async()=>await i.getListaService(),w=async t=>{const r=await i.postService(t);return await i.getVincularService(r.idServico),await i.getListaService()},m=async(t,r)=>{const e=await i.putService(t,r);return await i.getVincularService(e.data.idServico),await i.getListaService()},E=async()=>{const t=await i.getExportarServicoService();if(console.log(t),t.data){const r=new Blob([t.data],{type:t.headers["content-type"]}),e=window.URL.createObjectURL(r),s=document.createElement("a");s.href=e,s.download="Servicos.csv",document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(e),console.log(t)}else console.error("A resposta não contém dados")},h=async t=>{const r=parseInt(t);return await i.getListaServiceById(r)};export{S as A,E as a,h as b,m as c,g,w as p};