import r from"./ContentSlot.766df1d3.js";import{d,b as a,c as _,e as t,g as n,w as i,D as c,X as m,n as u,f as p,a1 as f,l as g}from"./entry.fbd6a82f.js";const h={class:"hero"},v={class:"layout"},y={class:"content"},C={class:"title"},H={class:"description"},w=d({__name:"Hero",props:{image:{type:String,default:null},imageAlt:{type:String,default:"Hero Image"},imagePosition:{type:String,default:"right"}},setup(e){return(s,x)=>{const o=r,l=f;return a(),_("section",h,[t("div",v,[t("div",y,[t("div",C,[n(o,{use:s.$slots.title,unwrap:"p"},{default:i(()=>[c(" Hero title ")]),_:1},8,["use"])]),t("div",H,[n(o,{use:s.$slots.description,unwrap:"p"},{default:i(()=>[c(" Hero description ")]),_:1},8,["use"])])]),e.image?(a(),m(l,{key:0,class:u(e.imagePosition),src:e.image,alt:e.imageAlt,width:16,height:9},null,8,["class","src","alt"])):p("",!0)])])}}});const k=g(w,[["__scopeId","data-v-01e9d2f4"]]);export{k as default};
