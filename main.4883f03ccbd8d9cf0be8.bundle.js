webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},cDNt:function(t,e,n){"use strict";function i(t){return h._17(0,[h._14(402653184,1,{canvasRef:0}),(t()(),h._3(1,0,[[1,0],["vpCanvas",1]],null,1,"canvas",[["height","800"],["style","cursor: none;"],["width","1280"]],null,null,null,null,null)),(t()(),h._16(-1,null,["\n"]))],null,null)}function r(t){return h._17(0,[(t()(),h._3(0,0,null,null,1,"app-viewport",[],null,null,null,i,N)),h._1(1,114688,null,0,D,[h.z,m.c],null,null)],function(t,e){t(e,1,0)},null)}function o(t){return h._17(0,[(t()(),h._3(0,0,null,null,1,"app-viewport",[],null,null,null,i,N)),h._1(1,114688,null,0,D,[h.z,m.c],null,null)],function(t,e){t(e,1,0)},null)}function s(t){return h._17(0,[(t()(),h._3(0,0,null,null,1,"app-root",[],null,null,null,o,U)),h._1(1,49152,null,0,l,[],null,null)],null,null)}Object.defineProperty(e,"__esModule",{value:!0});var a,h=n("/oeL"),u={production:!0},c=function(){function t(){}return t}(),l=function(){function t(){this.title="app"}return t}(),f=[""],p=[""],m=n("XKz0"),d="\n\nattribute vec3 a_position;\nattribute vec2 a_texcoord;\nattribute float a_texindex;\n\nvarying vec2 v_texcoord;\nvarying float v_texindex;\n\nvoid main() {\n    gl_Position = vec4(a_position, 1.0);\n    v_texcoord = a_texcoord;\n    v_texindex = a_texindex;\n}\n\n",x="\n\nprecision mediump float;\n\nvarying vec2 v_texcoord;\nvarying float v_texindex;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n  vec4 color = texture2D(u_texture, v_texcoord);\n  if (color.a == 0.0) {\n    discard;\n  }\n  gl_FragColor = color;\n}\n\n",v=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t}(),_=function(){function t(t,e,n,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=0),this.x=t,this.y=e,this.w=n,this.h=i}return t}(),g=function(){function t(t){this.gl=t,this.offset=new v(0,0)}return t.prototype.createTexture=function(t,e,n){var i=this.gl;this.tex=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.tex),t?(i.texImage2D(i.TEXTURE_2D,0,i.RGBA,e,n,0,i.RGBA,i.UNSIGNED_BYTE,t),this.width=e,this.height=n):(i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,this.img),this.width=this.img.width,this.height=this.img.height,this.img=void 0),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR)},t.prototype.fromImage=function(t){var e=this;return this.img=new Image,new Promise(function(n,i){e.img.src=t,e.img.addEventListener("load",function(){e.createTexture(),n()})})},t.prototype.vertices=function(t,e,n,i,r){i.x+=this.offset.x-t.x,i.y+=this.offset.y-t.y;var o=(e+1)/100,s=2*i.x/t.w-1,a=2*(i.x+i.w)/t.w-1,h=2*i.y/t.h-1,u=2*(i.y+i.h)/t.h-1,c=n.x/this.width,l=(n.x+n.w)/this.width,f=n.y/this.height,p=(n.y+n.h)/this.height;if(r){var m=c;c=l,l=m}return[s,-h,o,c,f,a,-h,o,l,f,s,-u,o,c,p,a,-h,o,l,f,s,-u,o,c,p,a,-u,o,l,p]},t.prototype.bind=function(){this.gl.bindTexture(this.gl.TEXTURE_2D,this.tex)},t.prototype.fromText=function(t,e,n){var i=t.getTextRect(e),r=i.x,o=i.y,s=i.width,a=i.height,h=new Uint8Array(4*s*a);h.fill(0),t.render(e,h,s,-r,-o,n),this.createTexture(h,s,a),this.offset.x=r,this.offset.y=o},t}(),y=function(){function t(t){this.gl=t,this.pos=new v(0,0),this.tex=new g(t)}return t.prototype.setText=function(t,e,n){this.text===t&&e.name===this.font.name||(this.tex.fromText(e,t,n),this.text=t,this.font=e)},t.prototype.vertices=function(t){return this.tex.vertices(t,98,new _(0,0,this.tex.width,this.tex.height),new _(this.pos.x,this.pos.y,this.tex.width,this.tex.height))},t}(),w=function(){function t(t){this.gl=t,this.VERTEX_ELEMENTS=5,t.clearColor(0,0,0,1),t.clearDepth(0),t.enable(t.DEPTH_TEST),t.depthFunc(t.GREATER),this.program=this.initShaderProgram(t,d,x),this.positionLocation=t.getAttribLocation(this.program,"a_position"),this.texcoordLocation=t.getAttribLocation(this.program,"a_texcoord"),this.texindexLocation=t.getAttribLocation(this.program,"a_texindex"),this.positionBuffer=t.createBuffer()}return Object.defineProperty(t.prototype,"viewport",{set:function(t){this.gl.viewport(t.x,t.y,t.w,t.h)},enumerable:!0,configurable:!0}),t.prototype.newTexture=function(){return new g(this.gl)},t.prototype.newText=function(){return new y(this.gl)},t.prototype.render=function(t,e){var n=this.gl,i=this.VERTEX_ELEMENTS*Float32Array.BYTES_PER_ELEMENT,r=e.vertices(t);if(0!=r.length){e.tex.bind(),n.bindBuffer(n.ARRAY_BUFFER,this.positionBuffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array(r),n.STATIC_DRAW),n.vertexAttribPointer(this.positionLocation,3,n.FLOAT,!1,i,0*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(this.positionLocation),n.vertexAttribPointer(this.texcoordLocation,2,n.FLOAT,!1,i,3*Float32Array.BYTES_PER_ELEMENT),n.enableVertexAttribArray(this.texcoordLocation);var o=r.length/this.VERTEX_ELEMENTS;n.drawArrays(n.TRIANGLES,0,o)}},t.prototype.clear=function(){this.gl.useProgram(this.program),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)},t.prototype.loadShader=function(t,e,n){var i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.error("An error occurred compiling the shaders: "+t.getShaderInfoLog(i)),t.deleteShader(i),null)},t.prototype.initShaderProgram=function(t,e,n){var i=this.loadShader(t,t.VERTEX_SHADER,e),r=this.loadShader(t,t.FRAGMENT_SHADER,n),o=t.createProgram();return t.attachShader(o,i),t.attachShader(o,r),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?o:(alert("Unable to initialize the shader program: "+t.getProgramInfoLog(o)),null)},t}();!function(t){t[t.Stop=121]="Stop",t[t.Start=122]="Start"}(a||(a={}));var E=function(){function t(t,e,n){this.move=new v(t[0],t[1]),this.clip=new _(e[0],e[1],e[2],e[3]),this.rel=new v(n[0],n[1])}return t}(),T=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=!1),this.frames=t,this.noLoop=e}return t}(),A=function(){function t(t){this.name=t,this.rect=new _(0,0,0,0),this.frames={},this.animations={},this.currentAnimation={},this.currentFrames=[],this.pos=new v(0,0),this.stopped=0}return t.prototype.loadFrames=function(t){for(var e in t){var n={};this.frames[e]=n;var i=t[e];for(var r in i){var o=i[r],s=o.move,a=o.texture,h=o.rel;n[r]=new E(s,a,h)}}},t.prototype.loadAnimations=function(t){for(var e in t){var n={};this.animations[e]=n;var i=t[e][0];for(var r in i){var o=i[r],s=o.frames,a=o.noLoop,h=new T(s,a);n[r]=h}}},t.prototype.update=function(t,e,n,i){this.scale=n,this.light=i,this.pos=t,this.z=e;var r=new v(Number.MAX_VALUE,Number.MAX_VALUE),o=new v(0,0);this.currentFrames=[];for(var s=16;s>0;--s){var a=s-1;if(!(this.stopped&1<<a)){var h=this.currentAnimation[a];if(void 0!==h){var u=Math.floor(this.numFrames/6)%h.frames.length,c=h.frames[u],l=this.frames[a],f=l[c];if(void 0!==f){this.currentFrames.push(f);var p=new _,m=Object.assign({},f.rel);this.flip&&(m.x=-(m.x+f.clip.w)),p.x=Math.floor(m.x*this.scale),p.y=Math.floor(m.y*this.scale),p.w=Math.ceil(f.clip.w*n),p.h=Math.ceil(f.clip.h*n),p.x<r.x&&(r.x=p.x),p.y<r.y&&(r.y=p.y),p.x+p.w>o.x&&(o.x=p.x+p.w),p.y+p.h>o.y&&(o.y=p.y+p.h)}}}}this.rect.x=this.pos.x+r.x,this.rect.y=this.pos.y+r.y,this.rect.w=o.x-r.x,this.rect.h=o.y-r.y,++this.numFrames},t.prototype.load=function(t,e){var n=this;return this.tex=e.newTexture(),Promise.all([this.tex.fromImage("assets/images/"+this.name+".png"),t.get("assets/jsons/"+this.name+".json").toPromise().then(function(t){var e=t.frames,i=t.animations;n.loadFrames(e),n.loadAnimations(i)})])},t.prototype.setAnimation=function(t,e){this.numFrames=0,this.flip=e;var n=this.animations[t];console.log("********* Set animation "+t);for(var i in n){var r=n[i];switch(r.frames[0]){case a.Stop:console.log(i+": STOP"),this.stopped|=1<<Number(i);break;case a.Start:console.log(i+": START"),this.stopped&=~(1<<Number(i));break;default:console.log(i+": frame "),this.currentAnimation[i]=r}}},t.prototype.reset=function(){this.stopped=0,this.currentAnimation=[]},t.prototype.vertices=function(t){for(var e=(new v(this.pos.x-t.x,this.pos.y-t.y),[]),n=0,i=this.currentFrames;n<i.length;n++){var r=i[n],o=Object.assign({},r.clip),s=Object.assign({},r.rel);this.flip&&(s.x=-(s.x+o.w));var a=new _(this.pos.x+Math.floor(s.x*this.scale),this.pos.y+Math.floor(s.y*this.scale));a.x<t.w&&a.x+o.w>t.w&&(o.w-=a.x+o.w-t.w),a.y<t.h&&a.y+o.h>t.h&&(o.h-=a.y+o.h-t.h),a.w=o.w*this.scale,a.h=o.h*this.scale,e.push.apply(e,this.tex.vertices(t,this.z,o,a,this.flip))}return e},t}(),b=function(){function t(t,e,n,i){this.tex=t,this.name=e,this.images=n,this.rect=i,this.state=0}return t.prototype.vertices=function(t){var e=this,n=this.state<1?[]:this.images[this.state-1];if(!n)return[];var i=[];return Object.keys(n).forEach(function(r){var o=n[r],s=e.tex.vertices(t,Number(r),new _(o[0],o[1],o[2],o[3]),new _(e.rect[0],e.rect[1],e.rect[2],e.rect[3]));i.push.apply(i,s)}),i},t}(),R=function(){function t(t){this.name=t,this.objs=[],this.costumes={}}return t.prototype.load=function(t,e){var n=this;return this.tex=e.newTexture(),t.get("assets/jsons/"+this.name+".json").toPromise().then(function(i){for(var r in i.objects){var o=i.objects[r],s=o.name,a=o.images,h=o.rect;n.objs.push(new b(n.tex,s,a,h))}var u=i.background,c=u.name,l=u.images,f=u.rect,p=new b(n.tex,c,l,f);return p.state=1,n.objs.push(p),i.costumes.forEach(function(t){return n.costumes[t]=new A(t)}),Promise.all([n.tex.fromImage("assets/images/"+n.name+".png")].concat(Object.keys(n.costumes).map(function(i){return n.costumes[i].load(t,e)})))})},t.prototype.vertices=function(t){return this.objs.reduce(function(e,n){return e.concat(n.vertices(t))},[])},t}(),P=Math.floor(10),S=function(){function t(t){this.tex=t,this.enabled=!0,this.pos=new v(0,0),this.frame=0}return t.prototype.update=function(t){var e=this.tex.width/3;this.pos.x=t.x-Math.floor(e/2),this.pos.y=t.y-Math.floor(e/2)},t.prototype.vertices=function(t){if(!this.enabled)return[];var e=this.tex.width/3,n=Math.floor(this.frame/P);n=n>2?n-2:0;var i=e*n;return this.frame=(this.frame+1)%(5*P),this.tex.vertices(t,99,new _(i,0,e,e),new _(this.pos.x,this.pos.y,e,e))},t}(),F=function(){function t(t){var e=t.char,n=t.offset,i=t.size;this.char=e,this.x=n[0],this.y=n[1],this.width=i[0],this.height=i[1]}return t.prototype.render=function(t,e,n,i,r,o){for(var s=4*i+4*this.x,a=this,h=0;h<this.height;++h)!function(i){var h=r+a.y+i,u=4*h*n+s;a.char[i].forEach(function(n,i){var r=o&&1==n?o:t[n];r&&r.forEach(function(t,n){e[u+r.length*i+n]=t})})}(h)},t}(),L=function(){function t(t){this.name=t}return t.prototype.createCharset=function(t){var e=t.height,n=t.colors,i=t.chars;this.height=e,this.colors=[null].concat(n.map(function(t){return[t[0],t[1],t[2],255]})),this.chars={};for(var r in i)this.chars[r]=new F(i[r])},t.prototype.load=function(t){var e=this;return this.chars?Promise.resolve():t.get("assets/fonts/"+this.name+".json").toPromise().then(function(t){return e.createCharset(t)})},t.prototype.getTextRect=function(t){for(var e=0,n=0,i=0,r=!0,o=0;o<t.length;++o){var s=this.chars[t.charCodeAt(o)];if(s){s.y<0&&s.y,r&&s.x<e&&(r=!1,e=s.x);var a=s.x+s.width,h=s.y+s.height;n+=a,h>i&&(i=h)}}return{x:e,y:0,width:n-e,height:i-0}},t.prototype.render=function(t,e,n,i,r,o){for(var s=0;s<t.length;++s){var a=this.chars[t.charCodeAt(s)];a.render(this.colors,e,n,i,r,o),i+=a.x+a.width}},t}(),M=function(){function t(t,e,n){this.renderer=t,this.http=e,this.frames=0,this.lastTimestamp=Date.now(),this.mouse=new v(0,0),this.fonts={},this.costumePos=new v(80,80),this.fixedCamera=new _(0,0,n.x,n.y),this.camera=new _(0,0,n.x,n.y)}return t.prototype.createRoom=function(t){return this.room=new R(t),this.room.load(this.http,this.renderer)},t.prototype.createCursor=function(){var t=this.renderer.newTexture();return this.cursor=new S(t),t.fromImage("assets/images/cursor.png")},t.prototype.createFont=function(t){var e=this.fonts[t];return e||(e=new L(t),this.fonts[t]=e),e.load(this.http)},t.prototype.init=function(){var t=this;return this.texts=[this.renderer.newText(),this.renderer.newText()],Promise.all([this.createRoom("Atlantis_09"),this.createCursor(),this.createFont("Atlantis_65_Charset00"),this.createFont("Atlantis_65_Charset01")]).then(function(){t.texts[0].setText("Hello world!!!",t.fonts.Atlantis_65_Charset00),t.texts[0].pos.x=100,t.texts[0].pos.y=100,t.texts[1].setText("Hello again$$%%",t.fonts.Atlantis_65_Charset01),t.texts[1].pos.x=150,t.texts[1].pos.y=50,t.costume=t.room.costumes.Atlantis_00_Cost03,t.costume.setAnimation(4,!1),t.costume.setAnimation(8,!1)})},t.prototype.mouseMove=function(t,e){this.mouse=t,this.cursor.update(t),e&&(this.costumePos.x=t.x+this.camera.x,this.costumePos.y=t.y+this.camera.y)},t.prototype.tick=function(){this.update(),this.render()},t.prototype.render=function(){var t=this;this.renderer.clear(),this.renderer.render(this.camera,this.room),this.texts.forEach(function(e){return t.renderer.render(t.fixedCamera,e)}),this.renderer.render(this.fixedCamera,this.cursor),this.renderer.render(this.camera,this.costume)},t.prototype.update=function(){this.mouse.x>.8*this.fixedCamera.w&&this.camera.x<300&&this.camera.x++,this.mouse.x<.2*this.fixedCamera.w&&this.camera.x>0&&this.camera.x--,this.costume.update(this.costumePos,2,1,255)},t}(),D=function(){function t(t,e){this.ngZone=t,this.http=e,this.frames=0,this.lastTimestamp=Date.now(),this.resolution=new v(320,200)}return t.prototype.ngOnInit=function(){var t=this,e=this.canvasRef.nativeElement.getContext("webgl");this.canvasRef.nativeElement.addEventListener("mousemove",function(e){return t.mouseMove(e,!1)}),this.canvasRef.nativeElement.addEventListener("mousedown",function(e){return t.mouseMove(e,!0)}),this.canvasRef.nativeElement.addEventListener("contextmenu",function(t){return t.preventDefault()}),this.renderer=new w(e),this.renderer.viewport=new _(0,0,e.canvas.width,e.canvas.height),this.engine=new M(this.renderer,this.http,this.resolution),this.engine.init().then(function(){t.running=!0,t.ngZone.runOutsideAngular(function(){return requestAnimationFrame(function(){return t.tick()})})})},t.prototype.mouseMove=function(t,e){var n=t.target.getBoundingClientRect(),i=Math.floor((t.clientX-n.left-1)*this.resolution.x/n.width),r=Math.floor((t.clientY-n.top-1)*this.resolution.y/n.height);this.engine.mouseMove(new v(i,r),e)},t.prototype.tick=function(){var t=this;if(this.running){if(this.engine.tick(),++this.frames%500==0){var e=Date.now();console.log("Frame rate: "+5e5/(e-this.lastTimestamp)+" fps"),this.lastTimestamp=e}this.ngZone.runOutsideAngular(function(){return requestAnimationFrame(function(){return t.tick()})})}},t.ctorParameters=function(){return[{type:h.z},{type:m.c}]},t}(),C=[p],N=h._0({encapsulation:0,styles:C,data:{}}),I=(h.Y("app-viewport",D,r,{},{},[]),[f]),U=h._0({encapsulation:0,styles:I,data:{}}),X=h.Y("app-root",l,s,{},{},[]),j=n("qbdv"),O=n("fc+i"),B=h.Z(c,[l],function(t){return h._12([h._13(512,h.i,h.W,[[8,[X]],[3,h.i],h.x]),h._13(5120,h.v,h._11,[[3,h.v]]),h._13(4608,j.d,j.c,[h.v]),h._13(4608,h.h,h.h,[]),h._13(5120,h.a,h._4,[]),h._13(5120,h.t,h._9,[]),h._13(5120,h.u,h._10,[]),h._13(4608,O.b,O.s,[j.b]),h._13(6144,h.H,null,[O.b]),h._13(4608,O.e,O.f,[]),h._13(5120,O.c,function(t,e,n,i){return[new O.k(t),new O.o(e),new O.n(n,i)]},[j.b,j.b,j.b,O.e]),h._13(4608,O.d,O.d,[O.c,h.z]),h._13(135680,O.m,O.m,[j.b]),h._13(4608,O.l,O.l,[O.d,O.m]),h._13(6144,h.F,null,[O.l]),h._13(6144,O.p,null,[O.m]),h._13(4608,h.L,h.L,[h.z]),h._13(4608,O.g,O.g,[j.b]),h._13(4608,O.i,O.i,[j.b]),h._13(4608,m.h,m.m,[j.b,h.B,m.k]),h._13(4608,m.n,m.n,[m.h,m.l]),h._13(5120,m.a,function(t){return[t]},[m.n]),h._13(4608,m.j,m.j,[]),h._13(6144,m.i,null,[m.j]),h._13(4608,m.g,m.g,[m.i]),h._13(6144,m.b,null,[m.g]),h._13(5120,m.f,m.o,[m.b,[2,m.a]]),h._13(4608,m.c,m.c,[m.f]),h._13(512,j.a,j.a,[]),h._13(1024,h.l,O.q,[]),h._13(1024,h.b,function(t,e){return[O.r(t,e)]},[[2,O.h],[2,h.y]]),h._13(512,h.c,h.c,[[2,h.b]]),h._13(131584,h._2,h._2,[h.z,h.X,h.r,h.l,h.i,h.c]),h._13(2048,h.e,null,[h._2]),h._13(512,h.d,h.d,[h.e]),h._13(512,O.a,O.a,[[3,O.a]]),h._13(512,m.e,m.e,[]),h._13(512,m.d,m.d,[]),h._13(512,c,c,[]),h._13(256,m.k,"XSRF-TOKEN",[]),h._13(256,m.l,"X-XSRF-TOKEN",[])])});u.production&&Object(h.R)(),Object(O.j)().bootstrapModuleFactory(B).catch(function(t){return console.log(t)})},gFIY:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="gFIY"}},[0]);