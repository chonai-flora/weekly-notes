"use strict";(self.webpackChunkweekly_notes=self.webpackChunkweekly_notes||[]).push([[989],{8678:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{let{location:t,title:a,children:r}=e;const i="/"===t.pathname;let o;return o=i?l.createElement("h2",{className:"main-heading"},l.createElement(n.Link,{to:"/"},a,l.createElement("span",{style:{fontSize:"smaller",fontWeight:"lighter"}}," - chonai-flora"))):l.createElement(n.Link,{className:"header-link-home",to:"/"},a),l.createElement("div",{className:"global-wrapper","data-is-root-path":i},l.createElement("header",{className:"global-header"},o),l.createElement("main",null,r),l.createElement("hr",null),l.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Build with Gatsby "))}},9357:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{var t,a,r;let{title:i,slug:o,children:c}=e;const{site:m}=(0,n.useStaticQuery)("1324386404"),s=null===(t=m.siteMetadata)||void 0===t?void 0:t.siteUrl,d=""+s+o,p=s+"/"+(o?"images"+o.slice(0,-1)+".png":"ogp.png"),u=o?i+" | "+(null===(a=m.siteMetadata)||void 0===a?void 0:a.title):null===(r=m.siteMetadata)||void 0===r?void 0:r.title;return l.createElement(l.Fragment,null,l.createElement("head",{prefix:"og: https://ogp.me/ns#"}),l.createElement("title",null,u),l.createElement("link",{rel:"icon",href:s+"/favicon.ico"}),l.createElement("meta",{name:"description",content:m.siteMetadata.description}),l.createElement("meta",{property:"og:title",content:u}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image",content:p}),l.createElement("meta",{property:"og:url",content:d}),l.createElement("meta",{property:"og:description",content:m.siteMetadata.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:image",content:p}),c)}},4982:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var l=a(7294),n=a(1883),r=a(8678),i=a(9357);const o=e=>{let{data:{markdownRemark:t}}=e;return l.createElement(i.Z,{title:t.frontmatter.title,slug:t.fields.slug})};t.default=e=>{var t;let{data:{previous:a,next:i,site:o,markdownRemark:c},location:m}=e;const s=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return l.createElement(r.Z,{location:m,title:s},l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",{itemProp:"headline"},c.frontmatter.title),l.createElement("p",null,c.frontmatter.date)),l.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"})),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,a&&l.createElement(n.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),l.createElement("li",null,i&&l.createElement(n.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c15d6a18340ab7857770.js.map