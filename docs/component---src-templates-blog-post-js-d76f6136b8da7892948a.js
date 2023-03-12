(self.webpackChunkweekly_notes=self.webpackChunkweekly_notes||[]).push([[989],{5928:function(e){e.exports={pathPrefix:"/weekly-notes",siteMetadata:{title:"週記",author:{name:"chonai-flora"},description:"Weekly notes by chonai-flora",siteUrl:"https://chonai-flora.github.io/weekly-notes",social:{twitter:""}},plugins:["gatsby-plugin-image",{resolve:"gatsby-source-filesystem",options:{path:"//notes",name:"note"}},{resolve:"gatsby-source-filesystem",options:{name:"images",path:"//src/images"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:630}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",feeds:[{serialize:e=>{let{query:{site:t,allMarkdownRemark:a}}=e;return a.nodes.map((e=>Object.assign({},e.frontmatter,{description:e.excerpt,date:e.frontmatter.date,url:t.siteMetadata.siteUrl+e.fields.slug,guid:t.siteMetadata.siteUrl+e.fields.slug,custom_elements:[{"content:encoded":e.html}]})))},query:"{\n              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {\n                nodes {\n                  excerpt\n                  html\n                  fields {\n                    slug\n                  }\n                  frontmatter {\n                    title\n                    date\n                  }\n                }\n              }\n            }",output:"/rss.xml",title:"Gatsby Starter Blog RSS Feed"}]}},{resolve:"gatsby-plugin-manifest",options:{name:"Gatsby Starter Blog",short_name:"Gatsby",start_url:"/",background_color:"#ffffff",display:"minimal-ui",icon:"src/images/gatsby-icon.png"}}]}},8678:function(e,t,a){"use strict";var n=a(1883),r=a(7294),l=a(5928);t.Z=e=>{let{location:t,title:a,children:i}=e;const s="/"===t.pathname;let o;return o=s?r.createElement(r.Fragment,null,r.createElement("h2",{className:"main-heading"},r.createElement(n.Link,{to:l.pathPrefix},a,r.createElement("span",{style:{fontSize:"smaller",fontWeight:"lighter"}}," - chonai-flora"))),r.createElement("br",null),r.createElement("p",null,"週記です。",r.createElement("a",{href:"archives/"},"こちら"),"も。")):r.createElement(n.Link,{className:"header-link-home",to:l.pathPrefix},a),r.createElement("div",{className:"global-wrapper","data-is-root-path":s},r.createElement("header",{className:"global-header"},o),r.createElement("main",null,i),r.createElement("hr",null),r.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Build with Gatsby "))}},9357:function(e,t,a){"use strict";var n=a(7294),r=a(1883);t.Z=e=>{var t,a,l;let{title:i,slug:s,children:o}=e;const{site:m}=(0,r.useStaticQuery)("1324386404"),c=null===(t=m.siteMetadata)||void 0===t?void 0:t.siteUrl,p=""+c+s,u=c+"/"+(s?"images"+s.slice(0,-1)+".png":"ogp.png"),d=s?i+" | "+(null===(a=m.siteMetadata)||void 0===a?void 0:a.title):null===(l=m.siteMetadata)||void 0===l?void 0:l.title;return n.createElement(n.Fragment,null,n.createElement("head",{prefix:"og: https://ogp.me/ns#"}),n.createElement("title",null,d),n.createElement("link",{rel:"icon",href:c+"/favicon.ico"}),n.createElement("meta",{name:"description",content:m.siteMetadata.description}),n.createElement("meta",{property:"og:title",content:d}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image",content:u}),n.createElement("meta",{property:"og:url",content:p}),n.createElement("meta",{property:"og:description",content:m.siteMetadata.description}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:image",content:u}),o)}},4982:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return o}});var n=a(7294),r=a(1883),l=a(9357),i=a(8678),s=a(5928);const o=e=>{let{data:{markdownRemark:t}}=e;return n.createElement(l.Z,{title:t.frontmatter.title,slug:t.fields.slug})};t.default=e=>{var t;let{data:{previous:a,next:l,site:o,markdownRemark:m},location:c}=e;const p=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return n.createElement(i.Z,{location:c,title:p},n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h3",{itemProp:"headline"},m.frontmatter.title),n.createElement("smaller",null,m.frontmatter.date),n.createElement("hr",null),n.createElement("br",null)),n.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"})),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,a&&n.createElement(r.Link,{to:""+s.pathPrefix+a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),n.createElement("li",null,l&&n.createElement(r.Link,{to:""+s.pathPrefix+l.fields.slug,rel:"next"},l.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d76f6136b8da7892948a.js.map