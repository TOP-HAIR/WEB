import{y as g,z as x,D as C,af as z,E as r,_ as t,a5 as u,r as B,G as R,H as y,j as $,V as I,W as h,am as E,ar as M,X as T}from"./index-3a6a6754.js";import{c as k}from"./createBox-9172f4d4.js";function N(o){return x("MuiIconButton",o)}const _=g("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),j=_,O=["edge","children","className","color","disabled","disableFocusRipple","size"],U=o=>{const{classes:e,disabled:a,color:s,edge:n,size:l}=o,i={root:["root",a&&"disabled",s!=="default"&&`color${r(s)}`,n&&`edge${r(n)}`,`size${r(l)}`]};return h(i,N,e)},L=C(z,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.color!=="default"&&e[`color${r(a.color)}`],a.edge&&e[`edge${r(a.edge)}`],e[`size${r(a.size)}`]]}})(({theme:o,ownerState:e})=>t({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:o,ownerState:e})=>{var a;const s=(a=(o.vars||o).palette)==null?void 0:a[e.color];return t({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&t({color:s==null?void 0:s.main},!e.disableRipple&&{"&:hover":t({},s&&{backgroundColor:o.vars?`rgba(${s.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(s.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${j.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),P=B.forwardRef(function(e,a){const s=R({props:e,name:"MuiIconButton"}),{edge:n=!1,children:l,className:i,color:v="default",disabled:c=!1,disableFocusRipple:d=!1,size:b="medium"}=s,f=y(s,O),p=t({},s,{edge:n,color:v,disabled:c,disableFocusRipple:d,size:b}),m=U(p);return $.jsx(L,t({className:I(m.root,i),centerRipple:!0,focusRipple:!d,disabled:c,ref:a,ownerState:p},f,{children:l}))}),V=P,W=g("MuiBox",["root"]),D=W,F=E(),G=k({themeId:M,defaultTheme:F,defaultClassName:D.root,generateClassName:T.generate}),X=G;export{X as B,V as I};
