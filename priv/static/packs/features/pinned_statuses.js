(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{727:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return S});var s,o,a,i=n(0),r=n.n(i),c=n(6),u=n.n(c),l=n(3),d=n.n(l),p=n(7),h=n.n(p),f=n(1),b=n.n(f),g=n(12),m=n(2),M=n.n(m),w=n(17),y=n.n(w),I=n(236),R=n(193),j=n(197),k=n(200),q=n(4),v=n(18),O=Object(q.f)({heading:{id:"column.pins",defaultMessage:"Pinned toot"}}),S=Object(g.connect)(function(t){return{statusIds:t.getIn(["status_lists","pins","items"]),hasMore:!!t.getIn(["status_lists","pins","next"])}})(s=Object(q.g)((a=o=function(t){function e(){var n,s,o;u()(this,e);for(var a=arguments.length,i=Array(a),r=0;r<a;r++)i[r]=arguments[r];return n=s=d()(this,t.call.apply(t,[this].concat(i))),s.handleHeaderClick=function(){s.column.scrollTop()},s.setRef=function(t){s.column=t},o=n,d()(s,o)}return h()(e,t),e.prototype.componentWillMount=function(){this.props.dispatch(Object(I.b)())},e.prototype.render=function(){var t=this.props,e=t.intl,n=t.shouldUpdateScroll,s=t.statusIds,o=t.hasMore;return b.a.createElement(R.a,{icon:"thumb-tack",heading:e.formatMessage(O.heading),ref:this.setRef},r()(j.a,{}),r()(k.a,{statusIds:s,scrollKey:"pinned_statuses",hasMore:o,shouldUpdateScroll:n}))},e}(v.a),o.propTypes={dispatch:M.a.func.isRequired,shouldUpdateScroll:M.a.func,statusIds:y.a.list.isRequired,intl:M.a.object.isRequired,hasMore:M.a.bool.isRequired},s=a))||s)||s}}]);
//# sourceMappingURL=pinned_statuses.js.map