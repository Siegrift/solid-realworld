import{u as z,g as B,i,m as w,a as o,N as d,d as x,s as G,t as u,e as H}from"./index.d61504ba.js";import{A as I}from"./ArticleList.cbd4960e.js";const J=u('<div class="profile-page"><div class="user-info"><div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><img class="user-img" alt=""><h4> </h4><p></p></div></div></div></div><div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><div class="articles-toggle"><ul class="nav nav-pills outline-active"><li class="nav-item"></li><li class="nav-item"></li></ul></div></div></div></div></div>'),K=u('<i class="ion-gear-a"></i>'),Q=u('<button class="btn btn-sm action-btn"><i class="ion-plus-round"></i> <!> </button>');var W=r=>{const[e,{setPage:p,loadArticles:k,unfollow:P,follow:A}]=z(),{location:v}=B(),N=s=>{s.preventDefault(),e.profile.following?P():A()},y=s=>{p(s),k()},f=()=>e.currentUser&&r.username===e.currentUser.username;return(()=>{const s=J.cloneNode(!0),g=s.firstChild,L=g.firstChild,U=L.firstChild,c=U.firstChild,$=c.firstChild,_=$.nextSibling,E=_.firstChild,F=_.nextSibling,R=g.nextSibling,j=R.firstChild,m=j.firstChild,D=m.firstChild,M=D.firstChild,b=M.firstChild,O=b.nextSibling;return i(F,()=>e.profile?.bio),i(c,(()=>{const t=w(()=>!!f(),!0);return()=>t()&&o(d,{route:"settings",class:"btn btn-sm btn-outline-secondary action-btn",get children(){return[K.cloneNode(!0)," Edit Profile Settings"]}})})(),null),i(c,(()=>{const t=w(()=>!!(e.token&&!f()),!0);return()=>t()&&(()=>{const l=Q.cloneNode(!0),a=l.firstChild,q=a.nextSibling,h=q.nextSibling;return h.nextSibling,l.$$click=N,i(l,()=>e.profile?.following?"Unfollow":"Follow",h),i(l,()=>e.profile?.username,null),x(n=>{const C=e.profile?.following,S=!e.profile?.following;return C!==n._v$3&&l.classList.toggle("btn-secondary",n._v$3=C),S!==n._v$4&&l.classList.toggle("btn-outline-secondary",n._v$4=S),n},{_v$3:void 0,_v$4:void 0}),l})()})(),null),i(b,o(d,{class:"nav-link",get active(){return v().includes("/favorites")?0:1},get href(){return`@${r.username}`},children:"My Articles"})),i(O,o(d,{class:"nav-link",get active(){return v().includes("/favorites")},get href(){return`@${r.username}/favorites`},children:"Favorited Articles"})),i(m,o(I,{get articles(){return Object.values(e.articles)},get totalPagesCount(){return e.totalPagesCount},onSetPage:y}),null),x(t=>{const l=e.profile?.image,a=r.username;return l!==t._v$&&G($,"src",t._v$=l),a!==t._v$2&&(E.data=t._v$2=a),t},{_v$:void 0,_v$2:void 0}),s})()};H(["click"]);export{W as default};