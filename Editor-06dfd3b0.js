import{u as t,c as e,b as i,i as s,a as r,F as l,t as o,d as a}from"./index-d78937f5.js";import{L as n}from"./ListErrors-a2e5ae7a.js";const d=o('<div class="editor-page"><div class="container page"><div class="row"><div class="col-md-10 offset-md-1 col-xs-12"><form><fieldset><fieldset class="form-group"><input type="text" class="form-control form-control-lg" placeholder="Article Title"></fieldset><fieldset class="form-group"><input type="text" class="form-control" placeholder="What\'s this article about?"></fieldset><fieldset class="form-group"><textarea class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea></fieldset><fieldset class="form-group"><input type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div></fieldset><button class="btn btn-lg pull-xs-right btn-primary" type="button">Publish Article</button></fieldset></form></div></div></div></div>',29),c=o('<span class="tag-default tag-pill"><i class="ion-close-round"></i></span>',4),v=["errors"],u=["each"];a(["keyup","click"]);export default({slug:o})=>{const[a,{createArticle:f,updateArticle:g}]=t(),[p,_]=e({tagInput:"",tagList:[]}),h=t=>e=>_(t,e.target.value),$=()=>{p.tagInput&&_(t=>{t.tagList.push(t.tagInput.trim()),t.tagInput=""})},b=t=>{!p.inProgress&&_("tagList",e=>e.filter(e=>e!==t))},m=t=>{switch(t.keyCode){case 13:case 9:case 188:9!==t.keyCode&&t.preventDefault(),$()}},x=t=>{t.preventDefault(),_({inProgress:!0});const{inProgress:e,tagsInput:i,...s}=p;(o?g:f)(s).then(t=>location.hash=`/article/${t.slug}`).catch(t=>_({errors:t})).finally(()=>_({inProgress:!1}))};return i(()=>{let t;o&&(t=a.articles[o])&&_(t)}),function(){const t=d.cloneNode(!0),e=t.firstChild.firstChild.firstChild,o=e.firstChild,a=o.firstChild.firstChild,f=a.firstChild,g=a.nextSibling,_=g.firstChild,y=g.nextSibling,C=y.firstChild,P=y.nextSibling,k=P.firstChild,I=k.nextSibling,L=P.nextSibling;return s(e,r(n,{errors:()=>p.errors},v),o),f.onchange=h("title"),_.onchange=h("description"),C.onchange=h("body"),k.__keyup=m,k.onblur=$,k.onchange=h("tagInput"),s(I,r(l,{each:()=>p.tagList,children:t=>function(){const e=c.cloneNode(!0),i=e.firstChild;return i.__click=b,i.__clickData=t,s(e,t,null),e}()},u)),L.__click=x,i(t=>{const e=p.title,i=p.inProgress,s=p.description,r=p.inProgress,l=p.body,o=p.inProgress,a=p.tagInput,n=p.inProgress,d=p.inProgress;return e!==t._v$&&(f.value=t._v$=e),i!==t._v$2&&(f.disabled=t._v$2=i),s!==t._v$3&&(_.value=t._v$3=s),r!==t._v$4&&(_.disabled=t._v$4=r),l!==t._v$5&&(C.value=t._v$5=l),o!==t._v$6&&(C.disabled=t._v$6=o),a!==t._v$7&&(k.value=t._v$7=a),n!==t._v$8&&(k.disabled=t._v$8=n),d!==t._v$9&&(L.disabled=t._v$9=d),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t}()};