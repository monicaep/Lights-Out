(this["webpackJsonplights-out-game"]=this["webpackJsonplights-out-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(15),n(2)),s=n(3),i=n(5),u=n(4),h=n(6),p=n(9),d=n(1),m=(n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.flipBoxesAroundMe()}},{key:"render",value:function(){var e="Box"+(this.props.isLit?" Box-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),f=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n.createBoard=n.createBoard.bind(Object(d.a)(n)),n.flipBoxesAround=n.flipBoxesAround.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nRows;t++){for(var n=[],a=0;a<this.props.nCols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipBoxesAround",value:function(e){var t=this.props,n=t.nCols,a=t.nRows,r=this.state.board,o=e.split("-").map(Number),c=Object(p.a)(o,2),l=c[0],s=c[1];function i(e,t){e>=0&&e<a&&t>=0&&t<n&&(r[e][t]=!r[e][t])}i(l,s),i(l+1,s),i(l,s+1),i(l-1,s),i(l,s-1);var u=r.every((function(e){return e.every((function(e){return!e}))}));this.setState({board:r,hasWon:u})}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.props.nRows;n++){for(var a=[],o=function(t){var o="".concat(n,"-").concat(t);a.push(r.a.createElement(m,{key:o,isLit:e.state.board[n][t],flipBoxesAroundMe:function(){return e.flipBoxesAround(o)}}))},c=0;c<this.props.nCols;c++)o(c);t.push(r.a.createElement("tr",null,a))}return r.a.createElement("div",{className:"Board"},this.state.hasWon?r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"Board-winner"},r.a.createElement("b",null,"W",r.a.createElement("span",null,"I"),r.a.createElement("span",null,"NN"),"E",r.a.createElement("span",null,"R"),"!"))):r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("b",null,"L",r.a.createElement("span",null,"I"),r.a.createElement("span",null,"GH"),"T",r.a.createElement("span",null,"S O"),"UT")),r.a.createElement("table",{className:"Board-table"},r.a.createElement("tbody",null,t))))}}]),t}(a.Component));f.defaultProps={nRows:5,nCols:5,chanceLightStartsOn:.25};var b=f,v=(n(18),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.5f462534.chunk.js.map