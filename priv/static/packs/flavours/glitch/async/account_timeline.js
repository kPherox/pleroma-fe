(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{668:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return v});var s,i,c,o=a(1),n=a(7),p=a(0),r=a(2),d=(a(3),a(20)),u=a(26),h=a.n(u),l=a(5),b=a.n(l),m=a(14),j=a(32),I=a(647),O=a(290),w=a(641),f=a(910),R=a(897),g=a(4),L=a(24),M=a(6),v=Object(d.connect)(function(t,e){var a=e.params.accountId,s=e.withReplies,i=void 0!==s&&s,c=i?a+":with_replies":a;return{statusIds:t.getIn(["timelines","account:"+c,"items"],Object(g.List)()),featuredStatusIds:i?Object(g.List)():t.getIn(["timelines","account:"+a+":pinned","items"],Object(g.List)()),isLoading:t.getIn(["timelines","account:"+c,"isLoading"]),hasMore:t.getIn(["timelines","account:"+c,"hasMore"])}})((c=i=function(i){function t(){for(var e,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=i.call.apply(i,[this].concat(a))||this,Object(r.a)(Object(p.a)(Object(p.a)(e)),"handleLoadMore",function(t){e.props.dispatch(Object(j.n)(e.props.params.accountId,{maxId:t,withReplies:e.props.withReplies}))}),e}Object(n.a)(t,i);var e=t.prototype;return e.componentWillMount=function(){var t=this.props,e=t.params.accountId,a=t.withReplies;this.props.dispatch(Object(m.G)(e)),a||this.props.dispatch(Object(j.l)(e)),this.props.dispatch(Object(j.n)(e,{withReplies:a}))},e.componentWillReceiveProps=function(t){(t.params.accountId!==this.props.params.accountId&&t.params.accountId||t.withReplies!==this.props.withReplies)&&(this.props.dispatch(Object(m.G)(t.params.accountId)),t.withReplies||this.props.dispatch(Object(j.l)(t.params.accountId)),this.props.dispatch(Object(j.n)(t.params.accountId,{withReplies:t.params.withReplies})))},e.render=function(){var t=this.props,e=t.statusIds,a=t.featuredStatusIds,s=t.isLoading,i=t.hasMore;return!e&&s?Object(o.a)(w.a,{},void 0,Object(o.a)(O.a,{})):Object(o.a)(w.a,{name:"account"},void 0,Object(o.a)(R.a,{}),Object(o.a)(I.a,{prepend:Object(o.a)(f.a,{accountId:this.props.params.accountId}),alwaysPrepend:!0,scrollKey:"account_timeline",statusIds:e,featuredStatusIds:a,isLoading:s,hasMore:i,onLoadMore:this.handleLoadMore,emptyMessage:Object(o.a)(M.b,{id:"empty_column.account_timeline",defaultMessage:"No toots here!"})}))},t}(L.a),Object(r.a)(i,"propTypes",{params:b.a.object.isRequired,dispatch:b.a.func.isRequired,statusIds:h.a.list,featuredStatusIds:h.a.list,isLoading:b.a.bool,hasMore:b.a.bool,withReplies:b.a.bool}),s=c))||s}}]);
//# sourceMappingURL=account_timeline.js.map