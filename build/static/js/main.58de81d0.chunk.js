/*! For license information please see main.58de81d0.chunk.js.LICENSE.txt */
(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{3:function(e,t,s){e.exports=s(8)},8:function(e,t,s){"use strict";s.r(t);var a=s(0);class n{constructor(e,t,s,n){this.dataTable=void 0,this.indexTable=void 0,this.columnsTable=void 0,this.styler=void 0,this.getCell=(e,t)=>{const s=e<this.headerRows&&t<this.headerColumns,a=e>=this.headerRows&&t<this.headerColumns,n=e<this.headerRows&&t>=this.headerColumns;if(s){const s=["blank"];return t>0&&s.push("level"+e),{type:"blank",classNames:s.join(" "),content:""}}if(n){const s=t-this.headerColumns;return{type:"columns",classNames:["col_heading","level"+e,"col"+s].join(" "),content:this.getContent(this.columnsTable,s,e)}}if(a){const s=e-this.headerRows,a=["row_heading","level"+t,"row"+s];return{type:"index",id:"T_".concat(this.uuid,"level").concat(t,"_row").concat(s),classNames:a.join(" "),content:this.getContent(this.indexTable,s,t)}}{const s=e-this.headerRows,a=t-this.headerColumns,n=["data","row"+s,"col"+a],o=this.styler?this.getContent(this.styler.displayValuesTable,s,a):this.getContent(this.dataTable,s,a);return{type:"data",id:"T_".concat(this.uuid,"row").concat(s,"_col").concat(a),classNames:n.join(" "),content:o}}},this.getContent=(e,t,s)=>{const n=e.getColumnAt(s);if(null===n)return"";switch(this.getColumnTypeId(e,s)){case a.b.Timestamp:return this.nanosToDate(n.get(t));default:return n.get(t)}},this.dataTable=a.a.from(e),this.indexTable=a.a.from(t),this.columnsTable=a.a.from(s),this.styler=n?{caption:n.get("caption"),displayValuesTable:a.a.from(n.get("displayValues")),styles:n.get("styles"),uuid:n.get("uuid")}:void 0}get rows(){return this.indexTable.length+this.columnsTable.numCols}get columns(){return this.indexTable.numCols+this.columnsTable.length}get headerRows(){return this.rows-this.dataRows}get headerColumns(){return this.columns-this.dataColumns}get dataRows(){return this.dataTable.length}get dataColumns(){return this.dataTable.numCols}get uuid(){return this.styler&&this.styler.uuid}get caption(){return this.styler&&this.styler.caption}get styles(){return this.styler&&this.styler.styles}get table(){return this.dataTable}get index(){return this.indexTable}get columnTable(){return this.columnsTable}getColumnTypeId(e,t){return e.schema.fields[t].type.typeId}nanosToDate(e){return new Date(e/1e6)}}var o,i=s(2),r=function(e){return e.COMPONENT_READY="streamlit:componentReady",e.SET_COMPONENT_VALUE="streamlit:setComponentValue",e.SET_FRAME_HEIGHT="streamlit:setFrameHeight",e}(r||{});class l{}o=l,l.API_VERSION=1,l.RENDER_EVENT="streamlit:render",l.events=new i.a,l.registeredMessageListener=!1,l.lastFrameHeight=void 0,l.setComponentReady=()=>{o.registeredMessageListener||(window.addEventListener("message",o.onMessageEvent),o.registeredMessageListener=!0),o.sendBackMsg(r.COMPONENT_READY,{apiVersion:o.API_VERSION})},l.setFrameHeight=e=>{void 0===e&&(e=document.body.scrollHeight),e!==o.lastFrameHeight&&(o.lastFrameHeight=e,o.sendBackMsg(r.SET_FRAME_HEIGHT,{height:e}))},l.setComponentValue=e=>{o.sendBackMsg(r.SET_COMPONENT_VALUE,{value:e})},l.onMessageEvent=e=>{switch(e.data.type){case o.RENDER_EVENT:o.onRenderMessage(e.data)}},l.onRenderMessage=e=>{let t=e.args;null==t&&(console.error("Got null args in onRenderMessage. This should never happen"),t={});const s=e.dfs&&e.dfs.length>0?o.argsDataframeToObject(e.dfs):{};t={...t,...s};const a={disabled:Boolean(e.disabled),args:t},n=new CustomEvent(o.RENDER_EVENT,{detail:a});o.events.dispatchEvent(n)},l.argsDataframeToObject=e=>{const t=e.map(e=>{let{key:t,value:s}=e;return[t,o.toArrowTable(s)]});return Object.fromEntries(t)},l.toArrowTable=e=>{const{data:t,index:s,columns:a}=e.data;return new n(t,s,a)},l.sendBackMsg=(e,t)=>{window.parent.postMessage({isStreamlitMessage:!0,type:e,...t},"*")};var d=s(1);s(4),s(5),s(6),s(7);const c=document.createElement("div");c.style.height="500px",c.setAttribute("id","mapid"),document.body.appendChild(c);const u=d.map("mapid").setView([37.8,-96],4);let h=[];d.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:"\xa9 Access AI",maxZoom:18,id:"mapbox/outdoors-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoidGpkMjAyNCIsImEiOiJjbHIyNmU2Z2oweTRmMnFuMWN1dmN1N3V4In0.9dU2pjRURk4qs31aBAV4lg"}).addTo(u);let m=new d.FeatureGroup;u.addLayer(m);const g=new d.Control.Draw({edit:{featureGroup:m},draw:{polyline:!1,polygon:!1,rectangle:!1,marker:!1,circle:{metric:!1,feet:!1,nautic:!1,shapeOptions:{color:"blue",weight:3,fill:!0,fillColor:"lightblue",fillOpacity:.5}}}});u.addControl(g),u.on("draw:created",(function(e){var t=e.layer;m.addLayer(t)})),u.on("draw:created",(function(e){const t=e.layer;u.addLayer(t);const s=t.getLatLng(),a=t.getRadius();h.push({center:s,radius:a}),l.setComponentValue(h),l.setFrameHeight()})),u.on("click",(function(e){l.setComponentValue(e.latlng),l.setFrameHeight()})),u.on("draw:deleted",(function(e){h=[]}));l.events.addEventListener(l.RENDER_EVENT,(function(e){l.setFrameHeight()})),l.setComponentReady(),l.setFrameHeight()}},[[3,1,2]]]);
//# sourceMappingURL=main.58de81d0.chunk.js.map