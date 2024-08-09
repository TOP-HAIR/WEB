import{a3 as S,r,j as e,C as v,L as y,Z as E,W as z,a4 as B,a5 as m,a6 as C}from"./index-4d8cba6e.js";function D(){const{handleSubmit:x,register:n,setValue:c}=S(),[p,d]=r.useState(!1),[R,g]=r.useState(null),[U,h]=r.useState(null),[f,b]=r.useState(null),[u,j]=r.useState(null),N=t=>{const a=t.target.files&&t.target.files[0];if(g(a),a){const s=new FileReader;s.onload=()=>{b(s.result)},s.readAsDataURL(a)}},w=t=>{const a=t.target.files&&t.target.files[0];if(h(a),a){const s=new FileReader;s.onload=()=>{j(s.result)},s.readAsDataURL(a)}};r.useEffect(()=>{async function t(){var a,s,l;d(!1);try{const o=sessionStorage.getItem("dataEmpresa");if(o!==null){const i=await B(JSON.parse(o).idEmpresa);console.log(i),c("razaoSocial",(a=i.data)==null?void 0:a.razaoSocial),c("img_foto",(s=i.data)==null?void 0:s.arquivo[0].nomeArquivoOriginal),c("img_banner",(l=i.data)==null?void 0:l.arquivo[1].nomeArquivoOriginal),d(!0)}}catch(o){d(!0),console.error("Erro ao buscar serviços:",o)}}t()},[]);const F=async(t,a)=>{a&&a.preventDefault(),console.log(t),m.fire({title:"Tem certeza que deseja atualizar o perfil do estabelecimento?",icon:"warning",showCancelButton:!0,confirmButtonText:"Atualizar!",cancelButtonText:"Cancelar",reverseButtons:!1,width:450}).then(async s=>{if(s.isConfirmed)try{await C(t).then(l=>{m.fire("Success","Sucesso ao atualizar perfil Estabelecimento.","success"),console.log(l)})}catch(l){console.error("Erro ao atualizar o perfil estabelecimento:",l),m.fire("Erro","Erro ao atualizar o perfil estabelecimento.","error")}})};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"w-full",children:e.jsxs(v,{className:"h-full m-5",children:[e.jsx("h2",{className:"m-6 text-2xl font-bold",children:"Perfil do Estabelecimento"}),e.jsx("div",{className:"m-6",children:p?e.jsxs("form",{className:"max-w-screen-lg text-center flex flex-col gap-12",onSubmit:x(F),children:[e.jsx("div",{className:"w-full flex flex-col gap-12",children:e.jsx("div",{className:"flex wrap gap-6 justify-between",children:e.jsxs("div",{className:"flex flex-col w-2/3 gap-12",children:[e.jsx(E,{id:"outlined-basic",label:"Nome estabelecimento",variant:"outlined",placeholder:"Digite o nome do seu estabelecimento",size:"small",...n("razaoSocial")}),e.jsxs("div",{children:[e.jsx("h2",{className:"m-0 flex self-start font-bold mb-2",children:"Foto do perfil"}),e.jsxs("div",{className:"flex-row gap-2",children:[e.jsxs("label",{className:"pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400",children:[e.jsx("span",{className:"drop-title",children:"Drop files here"}),"or",e.jsx("input",{type:"file",accept:"image/*",...n("img_foto"),onChange:w})]}),u&&e.jsx("img",{src:u,alt:"Foto do Perfil",className:"image-preview-foto"})]})]})]})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"m-0 flex self-start font-bold mb-2",children:"Foto do Banner"}),e.jsxs("label",{className:"pointer flex gap-2.5 flex-col justify-center items-center border-dashed border-2 border-gray-400",children:[e.jsx("span",{className:"drop-title",children:"Drop files here"}),"or",e.jsx("input",{type:"file",accept:"image/*",...n("img_banner"),onChange:N})]}),f&&e.jsx("img",{src:f,alt:"Banner",className:"image-preview"})]}),e.jsx("div",{className:"flex justify-between",children:e.jsx(z,{className:"w-48",variant:"contained",type:"submit",children:"Atualizar perfil"})})]}):e.jsx(y,{})})]})})})}export{D as default};