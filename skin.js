// Garden Gnome Software - Skin
// Pano2VR 6.1.14/18105
// Filename: SerdceSibiri.ggsk
// Generated 2024-04-03T08:31:51

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #000000;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='bottom : -78px;';
		hs+='cursor : default;';
		hs+='height : 151px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1999px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 104px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
				me._thumbnail_menu__content.onpointerup = null;
				me._thumbnail_menu__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
		}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
				me._thumbnail_menu.ggDragInertiaX = -diffX;
				me._thumbnail_menu.ggDragInertiaY = -diffY;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 2503px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2503px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._thumbnail_menu__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 96px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_menu__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 96px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_menu.ggScrollPosY = 0;
		me._thumbnail_menu.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragInertiaY = diffY;
				me._thumbnail_menu.ggDragLastY = e.clientY;
				me._thumbnail_menu.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragInertiaY = diffY;
				me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_menu.ggScrollHeight;
			if (e.offsetY < me._thumbnail_menu.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_menu.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_menu.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_menu.ggScrollByYSmooth(30 * me._thumbnail_menu.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Thumbnail Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 500.6%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if ((me._thumbnail_menu.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._thumbnail_menu.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_menu__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggVertScrollVisible = true;
					if (!me._thumbnail_menu.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._thumbnail_menu__vertScrollBg.getBoundingClientRect().width)) {
						me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
						me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
						me._thumbnail_menu.ggHorScrollVisible = true;
					}
				} else {
					me._thumbnail_menu__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggVertScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
					me._thumbnail_menu__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._thumbnail_menu.ggVertScrollVisible) {
					me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
					if (me._thumbnail_menu.ggHorScrollVisible) {
						me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 15;
						me._thumbnail_menu.ggAvailableHeightWithScale = me._thumbnail_menu.getBoundingClientRect().height - me._thumbnail_menu__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_menu__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
						me._thumbnail_menu.ggAvailableHeightWithScale = me._thumbnail_menu.getBoundingClientRect().height;
						me._thumbnail_menu__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_menu__vertScrollBg.style.height = me._thumbnail_menu.ggAvailableHeight + 'px';
					me._thumbnail_menu.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_menu.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_menu.ggVPercentVisible > 1.0) me._thumbnail_menu.ggVPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollHeight =  Math.round(me._thumbnail_menu__vertScrollBg.offsetHeight * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu__vertScrollFg.style.height = me._thumbnail_menu.ggScrollHeight + 'px';
					me._thumbnail_menu.ggScrollPosY = me._thumbnail_menu.ggScrollPosYPercent * me._thumbnail_menu.ggAvailableHeight;
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
					if (me._thumbnail_menu.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
						me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
					me._thumbnail_menu.ggScrollPosY = 0;
					me._thumbnail_menu.ggScrollPosYPercent = 0.0;
					me._thumbnail_menu__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_menu__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 98;
		el.ggHeight = 81;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner.ggInstances[i]._text_1 && me._thumbnail_cloner.ggInstances[i]._text_1.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._text_1.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 81px;';
		hs+='left : 3px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -2px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMzEgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGltYWdlIGhlaWdodD0iMzIiIHdpZHRoPSIzMSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFoQ0FZQUFBQzRKcWxSQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUI2MGxFUVZSWWhiVlhTM0xDTUF5MU'+
			'1sazFLVGxSMnoyOWJqbEEyeE1Sb0V2Y1ViQ0RJa3VLSEZyTk1EQ3hMRDA5L1FnTWZSY0RrL2xCTEk1dVora3hRSEVzNjZNdVB3QUk0L2tDalhoSmNFeU5UZFkwNTRncUlaT3RMS1YxNk5STENrQWxpRkFuTXVBUjFiakNIbmVlV2E1aWdEcU5Gb2dWNXloTit0MnFSU0lJajgwQ3dYVW5QWXc2T2I0bUJwcE0yWFdGT2s5QmJkRVZhd0FjL1dVMVFnMm91UWJRS2JLQTN4K0hRM2g1ZlJNdkRIMG5QaitlTCtMejc2L1A4TDdmMzhBS2djR3VlNHI4NEhnNnE1SFVBa0RaOWQwQ1FPNkEwK1VIV211Y0RjKzlyNjFpbklCeHpUR0JrcHpQWGJDd1pidFNuWHYwK0hTOWR3R1I2SzMyekJveFdsUDVWT3hKS0VVbnBH'+
			'eXJjeFJ4RWs2NXQ4UVorVng4Um12WDc0SksyaGVyWFdEMG9XMElGU0RtK0JrSW5RRlBkVmRNeE1KYVNva0lBQWVSTlZpNGthQ0F3RGt3U25iSXZmb1VrTXZZMjlTeEt5VjhJQlVLVHVxRGMybFJjTnc1U3NuQW1sRURvS3NnMlgwekJWSWRiRmxHVmtoTklKV2NQN2hDLzBvMFd6bDlzT3U3eUJFdVNPS1UweFN4TXkwRklnUHB2YUMxTG9wTytmT0tvcFZrdlEyWmMxcEVOVjJnQThnR2MwNE1Sckp6RU5heEptc1E3d3lRdjh5cXNSWEgzdDFBYmR3QkFKUm9IOGl2TnpsMXkrakJ2K3NMaThVeWNyN1RpU0NjeFppMU5yM1cvWXVFRUg0QkMzUzlxYjNsSFp3QUFBQUFTVVZPUks1Q1lJST0iIHRyYW5zZm9ybT'+
			'0iIi8+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMzEgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGltYWdlIGhlaWdodD0iMzIiIHdpZHRoPSIzMSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFoQ0FZQUFBQzRKcWxSQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUI2MGxFUVZSWWhiVlhTM0xDTUF5MU'+
			'1sazFLVGxSMnoyOWJqbEEyeE1Sb0V2Y1ViQ0RJa3VLSEZyTk1EQ3hMRDA5L1FnTWZSY0RrL2xCTEk1dVora3hRSEVzNjZNdVB3QUk0L2tDalhoSmNFeU5UZFkwNTRncUlaT3RMS1YxNk5STENrQWxpRkFuTXVBUjFiakNIbmVlV2E1aWdEcU5Gb2dWNXloTit0MnFSU0lJajgwQ3dYVW5QWXc2T2I0bUJwcE0yWFdGT2s5QmJkRVZhd0FjL1dVMVFnMm91UWJRS2JLQTN4K0hRM2g1ZlJNdkRIMG5QaitlTCtMejc2L1A4TDdmMzhBS2djR3VlNHI4NEhnNnE1SFVBa0RaOWQwQ1FPNkEwK1VIV211Y0RjKzlyNjFpbklCeHpUR0JrcHpQWGJDd1pidFNuWHYwK0hTOWR3R1I2SzMyekJveFdsUDVWT3hKS0VVbnBH'+
			'eXJjeFJ4RWs2NXQ4UVorVng4Um12WDc0SksyaGVyWFdEMG9XMElGU0RtK0JrSW5RRlBkVmRNeE1KYVNva0lBQWVSTlZpNGthQ0F3RGt3U25iSXZmb1VrTXZZMjlTeEt5VjhJQlVLVHVxRGMybFJjTnc1U3NuQW1sRURvS3NnMlgwekJWSWRiRmxHVmtoTklKV2NQN2hDLzBvMFd6bDlzT3U3eUJFdVNPS1UweFN4TXkwRklnUHB2YUMxTG9wTytmT0tvcFZrdlEyWmMxcEVOVjJnQThnR2MwNE1Sckp6RU5heEptc1E3d3lRdjh5cXNSWEgzdDFBYmR3QkFKUm9IOGl2TnpsMXkrakJ2K3NMaThVeWNyN1RpU0NjeFppMU5yM1cvWXVFRUg0QkMzUzlxYjNsSFp3QUFBQUFTVVZPUks1Q1lJST0iIHRyYW5zZm9ybT'+
			'0iIi8+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onclick=function (e) {
			player.exitFullscreen();
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMzEgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGltYWdlIGhlaWdodD0iMzIiIHdpZHRoPSIzMSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFoQ0FZQUFBQzRKcWxSQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUI2MGxFUVZSWWhiVlhTM0xDTUF5MU'+
			'1sazFLVGxSMnoyOWJqbEEyeE1Sb0V2Y1ViQ0RJa3VLSEZyTk1EQ3hMRDA5L1FnTWZSY0RrL2xCTEk1dVora3hRSEVzNjZNdVB3QUk0L2tDalhoSmNFeU5UZFkwNTRncUlaT3RMS1YxNk5STENrQWxpRkFuTXVBUjFiakNIbmVlV2E1aWdEcU5Gb2dWNXloTit0MnFSU0lJajgwQ3dYVW5QWXc2T2I0bUJwcE0yWFdGT2s5QmJkRVZhd0FjL1dVMVFnMm91UWJRS2JLQTN4K0hRM2g1ZlJNdkRIMG5QaitlTCtMejc2L1A4TDdmMzhBS2djR3VlNHI4NEhnNnE1SFVBa0RaOWQwQ1FPNkEwK1VIV211Y0RjKzlyNjFpbklCeHpUR0JrcHpQWGJDd1pidFNuWHYwK0hTOWR3R1I2SzMyekJveFdsUDVWT3hKS0VVbnBH'+
			'eXJjeFJ4RWs2NXQ4UVorVng4Um12WDc0SksyaGVyWFdEMG9XMElGU0RtK0JrSW5RRlBkVmRNeE1KYVNva0lBQWVSTlZpNGthQ0F3RGt3U25iSXZmb1VrTXZZMjlTeEt5VjhJQlVLVHVxRGMybFJjTnc1U3NuQW1sRURvS3NnMlgwekJWSWRiRmxHVmtoTklKV2NQN2hDLzBvMFd6bDlzT3U3eUJFdVNPS1UweFN4TXkwRklnUHB2YUMxTG9wTytmT0tvcFZrdlEyWmMxcEVOVjJnQThnR2MwNE1Sckp6RU5heEptc1E3d3lRdjh5cXNSWEgzdDFBYmR3QkFKUm9IOGl2TnpsMXkrakJ2K3NMaThVeWNyN1RpU0NjeFppMU5yM1cvWXVFRUg0QkMzUzlxYjNsSFp3QUFBQUFTVVZPUks1Q1lJST0iIHRyYW5zZm9ybT'+
			'0iIi8+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMzEgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGltYWdlIGhlaWdodD0iMzIiIHdpZHRoPSIzMSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFoQ0FZQUFBQzRKcWxSQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUI2MGxFUVZSWWhiVlhTM0xDTUF5MU'+
			'1sazFLVGxSMnoyOWJqbEEyeE1Sb0V2Y1ViQ0RJa3VLSEZyTk1EQ3hMRDA5L1FnTWZSY0RrL2xCTEk1dVora3hRSEVzNjZNdVB3QUk0L2tDalhoSmNFeU5UZFkwNTRncUlaT3RMS1YxNk5STENrQWxpRkFuTXVBUjFiakNIbmVlV2E1aWdEcU5Gb2dWNXloTit0MnFSU0lJajgwQ3dYVW5QWXc2T2I0bUJwcE0yWFdGT2s5QmJkRVZhd0FjL1dVMVFnMm91UWJRS2JLQTN4K0hRM2g1ZlJNdkRIMG5QaitlTCtMejc2L1A4TDdmMzhBS2djR3VlNHI4NEhnNnE1SFVBa0RaOWQwQ1FPNkEwK1VIV211Y0RjKzlyNjFpbklCeHpUR0JrcHpQWGJDd1pidFNuWHYwK0hTOWR3R1I2SzMyekJveFdsUDVWT3hKS0VVbnBH'+
			'eXJjeFJ4RWs2NXQ4UVorVng4Um12WDc0SksyaGVyWFdEMG9XMElGU0RtK0JrSW5RRlBkVmRNeE1KYVNva0lBQWVSTlZpNGthQ0F3RGt3U25iSXZmb1VrTXZZMjlTeEt5VjhJQlVLVHVxRGMybFJjTnc1U3NuQW1sRURvS3NnMlgwekJWSWRiRmxHVmtoTklKV2NQN2hDLzBvMFd6bDlzT3U3eUJFdVNPS1UweFN4TXkwRklnUHB2YUMxTG9wTytmT0tvcFZrdlEyWmMxcEVOVjJnQThnR2MwNE1Sckp6RU5heEptc1E3d3lRdjh5cXNSWEgzdDFBYmR3QkFKUm9IOGl2TnpsMXkrakJ2K3NMaThVeWNyN1RpU0NjeFppMU5yM1cvWXVFRUg0QkMzUzlxYjNsSFp3QUFBQUFTVVZPUks1Q1lJST0iIHRyYW5zZm9ybT'+
			'0iIi8+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onclick=function (e) {
			player.enterFullscreen();
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=-2;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_1);
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_2);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_3);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 247px;';
		hs+='position : absolute;';
		hs+='top : 126px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ggActivate=function () {
			player.changeFovLog(-2,true);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.ggNodeChange=function () {
			if (me._ht_node.ggLastIsActive!=me._ht_node.ggIsActive()) {
				me._ht_node.ggLastIsActive=me._ht_node.ggIsActive();
				if (me._ht_node.ggIsActive()) {
					if (me._ht_node.ggActivate) me._ht_node.ggActivate();
				} else {
					if (me._ht_node.ggDeactivate) me._ht_node.ggDeactivate();
				}
			}
		}
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 51px;';
		hs+='left : -222px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 439px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 441px;';
		hs+='height: 53px;';
		hs+='border: 1px solid #c0188d;';
		hs+='border: 1px solid rgba(192,24,141,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(192,24,141,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['tt_ht_node'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.onmouseover=function (e) {
			me.elementMouseOver['tt_ht_node']=true;
			me._tt_ht_node.logicBlock_visible();
		}
		me._tt_ht_node.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._tt_ht_node__text)
					return;
				}
			}
			me.elementMouseOver['tt_ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._tt_ht_node.ontouchend=function (e) {
			me.elementMouseOver['tt_ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_node);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iZXdHNVVyRXluRmoxIiB2aWV3Qm94PSIwIDAgNzMuNDQgNTcuMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KIDxzdHlsZT48IVtDREFUQVsNCiNld0c1VXJFeW5GajJfdHMge2FuaW1hdGlvbjogZXdHNVVyRXluRmoyX3RzX190cyAxMDAwbXMgbGluZWFyIGluZmluaXRlIG5vcm1hbCBmb3J3YXJkc31Aa2V5ZnJhbWVzIGV3RzVVckV5bkZqMl90c19fdH'+
			'MgeyAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMzYuNzJweCwyOC41NnB4KSBzY2FsZSgwLjQ4LDAuNDgpfSA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDM2LjcycHgsMjguNTZweCkgc2NhbGUoMC4zOTcwNTIsMC4zOTcwNTIpfSAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNi43MnB4LDI4LjU2cHgpIHNjYWxlKDAuNDgsMC40OCl9fQ0KXV0+PC9zdHlsZT4KIDxnIGlkPSJld0c1VXJFeW5GajJfdHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2LjcyLDI4LjU2KSBzY2FsZSgwLjQ4LDAuNDgpIj4KICA8aW1hZ2UgaGVpZ2h0PSIxMTkiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlk'+
			'IG1lZXQiIHdpZHRoPSIxNTMiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSmtBQUFCM0NBWUFBQUFRRXVKSUFBQUJOMmxEUTFCQlpHOWlaU0JTUjBJZ0tERTVPVGdwQUFBb2taV1B2MHJEVUJTSHZ4dEZ4YUZXQ09MZ2NDZFJVR3pWd1l4Slc0b2dXS3REa3ExSlE1VmlFbTZ1Zi9vUWptNGRYTng5QWlkSHdVSHhDWHdEeGFtRFE0UU1CWXZmOUozZk9Sek9BYU5pMTUyR1VZYnpXS3QyMDVHdTU4dlpGMmFZQW9CT21LVjJxM1VBRUNkeHhCamY3d2lBMTAyNzdqVEcrMzh5SDZaS0F5Tmd1eHRsSVlnSzBML1NxUVl4Qk15Z24yb1FENENwVHRvMU'+
			'VFOUFxWmY3RzFBS2N2OEFTc3IxZkJCZmdObHpQUitNT2NBTWNsOEJUQjFkYTRCYWtnN1VXZTlVeTZwbFdkTHVKa0VrandlWmpzNHp1UitIaVVvVDFkRlJGOGp2QTJBeEgydzNIYmxXdGF5OTlYLytQUkhYODJWdW4wY0lRQ3c5RjFsQmVLRXVmMVVZTzVQcllzZHdHUTd2WVhwVVpMczNjTGNCQzdkRnRscUY4aFk4RG44QXdNWlAvZk5UUDhnQUFBQUpjRWhaY3dBQUZ4SUFBQmNTQVdlZjBsSUFBQVg1YVZSWWRGaE5URHBqYjIwdVlXUnZZbVV1ZUcxd0FBQUFBQUE4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJY'+
			'QnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pCWkc5aVpTQllUVkFnUTI5eVpTQTFMall0WXpFME1pQTNPUzR4TmpBNU1qUXNJREl3TVRjdk1EY3ZNVE10TURFNk1EWTZNemtnSUNBZ0lDQWdJQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THlJZ2VHMXNibk02WkdNOUltaD'+
			'BkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWxiR1Z0Wlc1MGN5OHhMakV2SWlCNGJXeHVjenB3YUc5MGIzTm9iM0E5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmNHaHZkRzl6YUc5d0x6RXVNQzhpSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWlCNGJXeHVjenB6ZEVWMmREMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFJYWmxiblFqSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTRJQ2hYYVc1a2IzZHpLU0lnZUcxd09rTnla'+
			'V0YwWlVSaGRHVTlJakl3TWpRdE1ETXRNRFZVTVRVNk1UVTZNVE1yTURNNk1EQWlJSGh0Y0RwTmIyUnBabmxFWVhSbFBTSXlNREkwTFRBekxUSTFWREU0T2pNME9qSXlLekF6T2pBd0lpQjRiWEE2VFdWMFlXUmhkR0ZFWVhSbFBTSXlNREkwTFRBekxUSTFWREU0T2pNME9qSXlLekF6T2pBd0lpQmtZenBtYjNKdFlYUTlJbWx0WVdkbEwzQnVaeUlnY0dodmRHOXphRzl3T2tOdmJHOXlUVzlrWlQwaU15SWdjR2h2ZEc5emFHOXdPa2xEUTFCeWIyWnBiR1U5SWtGa2IySmxJRkpIUWlBb01UazVPQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TmpSbFlqbGlZamd0TUdRek1DMDJOal'+
			'EwTFdKa016Y3RObUpqTjJSbE9UazRaRGczSWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKaFpHOWlaVHBrYjJOcFpEcHdhRzkwYjNOb2IzQTZNelF5T0RjNVpHWXRNbVZoWXkwMFpqUTJMVGhsTVdFdE5EYzFOemRoTWpNNFpHTTRJaUI0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNVEl4TjJZNE1EZ3RZbVZrWlMxaU5EUmxMVGxsWXpFdFpUVTROREl6TWpRd09EVTRJajRnUEhodGNFMU5Pa2hwYzNSdmNuaytJRHh5WkdZNlUyVnhQaUE4Y21SbU9teHBJSE4wUlhaME9tRmpkR2x2YmowaVkzSmxZWFJsWkNJZ2MzUkZkblE2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxw'+
			'WkRveE1qRTNaamd3T0MxaVpXUmxMV0kwTkdVdE9XVmpNUzFsTlRnME1qTXlOREE0TlRnaUlITjBSWFowT25kb1pXNDlJakl3TWpRdE1ETXRNRFZVTVRVNk1UVTZNVE1yTURNNk1EQWlJSE4wUlhaME9uTnZablIzWVhKbFFXZGxiblE5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTRJQ2hYYVc1a2IzZHpLU0l2UGlBOGNtUm1PbXhwSUhOMFJYWjBPbUZqZEdsdmJqMGljMkYyWldRaUlITjBSWFowT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5qUmxZamxpWWpndE1HUXpNQzAyTmpRMExXSmtNemN0Tm1Kak4yUmxPVGs0WkRnM0lpQnpkRVYyZERwM2FHVnVQU0l5TURJMExUQXpMVEkxVk'+
			'RFNE9qTTBPakl5S3pBek9qQXdJaUJ6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnUTBNZ01qQXhPQ0FvVjJsdVpHOTNjeWtpSUhOMFJYWjBPbU5vWVc1blpXUTlJaThpTHo0Z1BDOXlaR1k2VTJWeFBpQThMM2h0Y0UxTk9raHBjM1J2Y25rK0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K3FmNlBLUUFBRWlkSlJFRlVlSnp0M2Yxekc5VzVCL0R2MGZDN05kTmI1SmRWWGtsaWh4Y0xTaW0zdDVDRlFpWkFhWnhBRWtxaE9XcGgwa3NMc1EybG9ieUVCQ2lVZ3FV'+
			'azNKUk1VbFpxZ0JKb0V0T1Vra2tnS0M5UWJxQmgxeVV2aERoeEl0bU9tZHNaK1E5ZzkvNmdsUzNia3M3WjFUbGVXZFozaGdtV2o4NnpEaDkyMTZ1enp4TExzbEJPMlRFOUVpTEF0RVZuMmpxOTNwYUprS01OOTZ1QXBWL2MrMUxhNjIwcEZGSk95TFpuZ0NVSVVFTXNoRnQ2Mm1KZWIxTzVwYXYrUVJVd0tZSFZRb2haUTJBQnNFQ0lDY0I4bThEcWJFcHRpbm03bFNOVE5zaTJUNCtFa0FVR2dGZ0FBY0lMcTlBQUFFYmR3MzRDTXdaaUxRUk1FQnZXS0dUMjE2WkJZTkhHMUJiZDI2M09wQ3lRdlRVakV2SlpTQ0FMREVQSWdDbzA2TFdyL0lTWUNRS3pHY1FDQnpJUVdJTUVwam9uOVlydTZjWUQ4SG05QVcvT2'+
			'lQZ0JkQUtvS1RCRTJ6VTFRc2RyZThvdG45VSs0Z2VRQU5EczhLMDFBQkluRlJvU3ZFbU80emt5QURFQVV4bGp0RjFUTzZqOFRTbXZIQWs4Nm9jN1lOblkwSmFIQkcyU3EzaUtiTnZNU0FqQVFzN2gydDhtRWJRamdjZjlLQTFZTmphMHUwTWx6dU02WHUvSnFNUHgyanRUS2gvYWtjQVRmb2dCVmhieEdwbnE0ajNhM3lzWTJqOERxLzBRQzJ3UWdEbzd0VlVYTkovamVJM003VjlrUlVMN05MREdEeW5BNHJxZytWemxnbExlL0ljNVVlb0RzT0tMMXBpWXpYRVU3ZDBwSGJqcFhMc1h0WVhuazhEYUVNa0FLL1JidHRQWXdHSzYwemVlQzk2aUFxYWZ3UElUZk4xRFlPa055ZmZTYmpmRTlYV3lqWE9pbEFDYXZT'+
			'c011NEcyYldiRXlsNFA4OW1ia2VjNm1mMDlhOHpyOXRmaEJjbUpEZTF3NE9rUWdaa2dzR29JaHE5OUFlYlF0YkRNbnlZNHI1TU5FbGlxazR1eFBjRVdsY0NrZ0xXY1lIZ3VncSt6YzhZQjg4bUdaS0xINmMvbjZuRDVQNDFSQ2tETGVVbmJQRHRLWFV5MTMwMzlVZEYyQnlmdW9mUHdoYjhOUWNJZWpCZllhZVgyYVdlQ2l6c0JmQUJnZVpHaHl3SG9mY0ZyUTA0M3lER3lEWTNSRm93RWxvMjJ4VG0waE5QNkJhTHRtWURRL3ZmQzUwS1FBS3dwdFZubkdkeXRMR2tGb0lQL01sSU5nRVIvOEhzaEp4dmxDTm42eG1nSW1ZdW5oYUw5MFJtMFluTTVqYlpIbVRqUVBnNzhMZ1Fwd0RicHJJSGR5aDMrYm1WWkRFRE'+
			'VSZjBhQUluendlK0dlTi9nZEU4V0EzdWpORzBXMzhkQXk3cmJlZ0NzY2JnTlJXdFBCR2dmQjM0ZmdnUmdjMU12NjZ5QnA1UTcvWGJ0WW9kR1ZteG9WNGQ0Qm5Nalc1YzVUUEwrYXMwTmJlbnB0aWNCR0x6YndWTjdieGxEKzBmZ3hSQ2tBTnVvc3daK3Fkd1ZBdEFETVpkSWFnQkVlUVk2MlpOUmh4dWh4VG1oSVhOUlZpaTA5OG9RMmo4Q0hTRklBSFp4NzBzNmE2RDlzWkxJMmdhQUZwNkJUcENwTGpaRSs5TkZiR2hMVHJlbFVlSFE1QUhib0xNRzJoK1FpNnh0QUZCcmt4K25lUVk3UWVaMkE3V3RITkJ1T3lNSDJ2c04za09UQmV5UzN2VTZhNkM5MUVka2JSdllSMm5lTjR6WHgwcmFxeDVDMitjaE5GbkFM'+
			'dTJMNnF5Qlh5Zy9GVjNiQUtEV0pRK2xuYnhwUEQrNzFGN2pnTFpZRXJRUFBJQW1DOWhsZlJHZE5mQ0Vjby9vMmdZQXRUNTVJTzMwalU2UUNiazYvem9IdEVVVkFFMGVzQmQxMXNEanlyMmlheHNBMUlaa0l1M216VTZRZGJvcGtDZmFuMmV5b2JYMFNJSldMeCthTkdEOUwraXNnY2VWRmFKcjI4RDJwZDFPNEFSWkRKa2ZWa1MwTnppZ0xaUUVMU0VSMmtlU2dEWDNQNit6Qmg1VGZpNjZ0ZzNNL1FvTXdBR3lsU2RhMHdDZUxLWFlxR2piUElTMlh3STBXY0JDNTUvVFdRT1BLZmVKcm0wQVVKWGszblNwRXprNjhYL2dSR3NVUUx6VW9qblIzcHpCaG5icjJmS0hKZ3ZZNWVlZjFWa0RqemI4VW5SdEE0QWFUTz'+
			'VPaTVqTThXK1g5NTlvcFJBTTdTMHVhTzFweUlCV1Z6bzBXY0N1R0hoR1p3MDgybkMvNk5vR0FIVks4dDIwb1BuY1hjTDRoUVJvMjZlem9mMmdES0hKQS9hVXpocjRlY01Eb212YndONUpDNW9QUUFuWHllNzd3aHRvdDV5VEErMkFDMmdmU2dPMlZtY04vRmQ5cStqYUJnQjFhbkpYV3RCOFF5bnBZdXgvUzRDMmd3UGF6WktnSFhRQVRSYXdidzJzMFZrRHUrcmJSTmUyZ2YwMUxXaStFY21MN0hkTlVmcjdwcWorUWxQVXo1cGdoUVJvTzcyREZ1VVpKQXZZbFFPcmRkYkFydm9IUmRjMkFLalRrcDFwUWZPTnlaZ2JTWjZidTQ0U3k5SjhBQWhnK0FDMS9YZ3Jjd00yejQ3R0NMQThjMU5JWms0ZmhtLzhHUEdQ'+
			'TmZiZjg5eEl3dFU2YW5ld3d3OGc0UU9hTVdvT2pLb0ZBTWp6dGYyZVFRS28xL1MzNjhYcWZWamJFWUkxL0IrWjVCbVQ3N1hoV0JpNlVjT3lRR0FPZ3BqcVZRT1BGYTBMQUYxMUQ0VkFyQVNRYVJuRmFMaUN6RTBwSmxENE5ZUEFVbWVrL3BKbTFlNE5YdS9QdEt3eVd3ak1lY00zbTVnQXpQMEVaaWRneGk1TTZtUG1Hb0hzMmJucktBRTBZbG13a2NFSEdBUlEyemlnYmJHaENVSUd3dG5SWjNld3crOERFckF5aS9GY0lCc2tnSG90RDdCTW5hRzlTSW5JemhLWUxWZDk5WnVpZFFIQXFIczRSR0FtUUt3YXpxNCtMR1FHWUtvelUyK2xXYlY3Z3plMEFHWXNnOXZNbVdQTW40TUVKdjFtc3FzejkvMURoOHRuNX'+
			'E2anlIK0RTRE9BeExwRzlxSHpucFBpRDUxdlQyTWZPaGNrU3pwMERzSUpNTEdIcVJBUE1MMTJsWXphWE1CU3dSdWpBSFp5MXE0QnNQUC9ncGZRM0JkOUFQRDAzSFVoNUFlV1RUT0F4SG9PYUQrVEFJMm5kZFI4ZDlBR0FhanpHTUFPeVFHbWZ1ZXJWV25Xd005cUg1RlNlMlpxRzdOMk1yZ2dCbUNsaXhyYXY0TVgwK3dYMlQxWmpPT056UUFTR3ppZ2hiOXNveEFPamYyYjMveVVJMmllQXJ0NjROZHAxc0FqZ1VlbDFKNlplb05aKzF6d3BpZFIyczBtMnIrRFRSUUF5SnFtYUlzUDJHbWZmOW5uUXlQT3lZYk9tZXh6R2NNSHFMODR3VDVIaTgrS3hJaVYrV1hBNVRrWk1QUTlDd1FJLytBcysyN3h2VXFIbjln'+
			'OUpRcWNrdzBTUUozWFZ4ell3ZHFPa0QxUHpZanpySnpmbFJ5ZWt4bUFwZjdud0lOcDFzOXdKUEI0Q0RBVDJiNndEdThnTDNpU1B5djFLclAydWVBdEZEQzFVWGVRQXpubll3WE95WEsrbjMzUDEyRWZPRzhHeUVremdNVEdPZXc5Mm5JSmV6U2UxbEUzRnQralpmWmdITUFnWVMvQ0Ird0pLYlY1Z0owTjNrcFIvTlRKYVZRZmdHa3UzdGdNSVBFSERtZy9PU1VlR2s5SG54dnlReHNFb0txZUFXdFBzd2IrTTdCYVN1M1pxYTNNMm1lRFA2UVFDeXoramVSSjZnTXd6K1VFelFBU216aWczVjBlMEFZQnFOZXhnTlY1Qit6VHdCb3B0V2VuNHN6YVBjRVdDdUhBamxPZzlEWCszTkR1a2dEdFhRNW8zKzhkZ2hhNn'+
			'JyZDhnWDBTV0N1bDl1eFVqRm43VEhBeGhYQmdSMm4yQ3g5S1g3dmZEQ0N4ZVRZYjJvOGxRT1BwNkhOOWIzdjZ1dDcybm1KakRuZ0k3SERnYVNtMTU2UmVZZFkrcmR4T0lSallmeVEvcDdrditKQzViYjNVTkFOSWJPR0FkcWRIMElwbHY1ZkF4TGVPTWdDb2pha3R6TnJkeWhJS3djQyttZXlpbzEvMFFWeG5uV1lBaVQ5eVFQdFJ0M2hvYmx0SGVRbE1RdXNvQTREYWxOck1yTjJ0TEtNUURPekNwRTd6ZmNQM3hMR1ZDWWhieWRBTUlLSE5pdmhaQSsrUUFjMWhXNEw5OWQ0Qms5QTZ5Z2EyaVZtN1c3bURRaml3STdUUU43TW4vZ1VIdUFnM3RHVWVRcE1GN0x0Y3dJUzNqaklBcUhOVEx6TnJuMUx1cEJBTUxK'+
			'RDhsQlliNEFPQXg0NnQxQUdFQlJadUJwQ0ljMEJiZWxvNE5HWVNIZ0tUMERyS0JyYVJXZnRMNVM0SzRjQU9VOWFnb1VzWWp4NWJHWU1FYUgrNmlBMXRpVGhvNGZtcDRoODdmZUFwTURtMWVaNTFlVks1bTBJd3NOcmt4NVJuNElqclpJOUlncmFWQTlwdFowcUd4Z2JXVUluQU5qQnJuMVNXVXdnSDloSGxIVHptWXV3cVNkQmVsUXN0UEovUlp0M3VnL0VaS2dqWUpiM3JtYlZQS3BSQ01MQzY1Q0hxNUExNXIvai8rbmhyREJLZ3ZjWUJiYkZ6YU13Ky9uYnJLSkYvMFFZQTliODhCSFpwWDVSWit3dmxweFNDZ2RVbkQxQ25ieXI0c2RLdkpFRjduUVBhSW41b1RHRHZWeUN3eS9vaXpOb25sSHNvQkFOclNDYW'+
			'9temNXL2V6eUlVblEvanlURGEybGh3a3R6SHJramQzT3M4S0F2Y2lzZlZ5NWwwSTRzSDNVN1p1Wkg1QzNTNEwyQmdlMGhZV2hoVy8yQ3RoNUQ0SDF2OENzZlZ4WlFTRWMySHUwbEFtNFZtRzBTWUsyelIwMEpyQzlIZ0tUMExiQUFLQTI5ei9QckgxTStUbUZZR0JLY2k4dGRSSkhEL0JhM3pqODBLNmhaZFAyOTNLV1p6dTU3OUlnRnRTbG1lN1hSYk5yYWtlVUFEcHIrZlVlcFlNU1FNc3VnWFp3MytXWTErelhEUURxOXh3QUkwV0JqYm52RWlERFM1WkhQY0RMSU1SVUx6Ly9MTFAyTWVVK21sMHk3ZUMrUytRdTdjNitibTlmZkVyeVhjcXF5eFBIVDRuYjBCaWxQa0FUaEF6RXl0elh1WVFER2l2MlIwcGFM'+
			'cGdTa1JuRUlUQ012aDlnVExpUkdZQ3BYakh3RExQMjBZWmZVa0pNemNYTnZZV1F4YWNrMzZHc3VyeHgwem9xQmdtSHp1M1QyWWZPWXJGWFlRZy9SRG9GSnJJMkg3RDdLUVFmSWtVQ0E5eTNqb3FoaktEdGxnVHNHaytCUGNXcy9YbkRBeFNDZ1UxTjdxSUM1d05RV3V1b0dDUkEyK0VRbXBmQUpEUmVzWUd0WmRiK1YzMHJoWEJnZjZVQzV4dEtxYTJqWXBBQWJTY25OSHVOZjBVQis5YkFHbWJ0cnZvMkNzSEFwaVU3cWNENVJxVGtoMFdza0FOTlpRMzZ1eXhnL2Q0QnUzSmdOYk4yVi8yREZJS0JUVS91b0FMbkd4TWhUeVFSREMyODZFeGJaN0VCbmdLVGRFL210d2VlWU5idXFudUlRakN3R2FtL1VJSHo1WT'+
			'J3eDk3Y2UxSUl0UERpTThWYlJiMGpDZGkxSGdLN2F1QXhabTJqN21FS3djQm1wdDZpQXVjckdLSFBWcnFuTkdqaDJ4akEvalpWRHJCNVhnTDc2amZNMm5ydEtncmh3TFpSZ2ZNVmpmQUhlUDNNSFRRbXNGMGVBdk80ZFJTRmNHQnZVSUh6TVNQbEtYSGhMOXRpNEljV1huS2FCU3hDSVFOWW4zZkFPRnRIVVFnR2RsSHFkU3B3UHE1SWV4UWhKN1R3VWdZd3U5T2lKOEJrTlY2NWV1Qlh6TnBIQW85VENBWTJLL1VxRlRnZmQ2USs3M0o1Y1dqaFpkM2VBRk05Qk1iWk9vcENNTERacWExVTRIeU9JdjJocWo4NWxSZGErQTRHc0U1SndLN3pGQmhYNnlnSzRjRGlWT0I4ampNdVQrNjlleVMwOEk4WXdPdysvdUtC'+
			'OVhJQTg3WjFGSVZ3WURFcWNENVhjYnpVcDVTOGRsRmsybzlQdGZVVUc3TmplaVN6SHN6SzI4NXpSSnZQN05lQS9YOUxubVU3MmFWRTF6c0JscWVGK29qbE95UFhtNDFKem12Y3dENEpyS1VFbGpacVBkbFF5MDRYN1R6ampha3RsRlYzUERLdXlGalpuZ1dHZ2oxam5TSXppQVgxK3h6QUR0UU45NGZOaDhnRk1tNWdod05QVXpMVW8xVUlzbmhUYWpObDFSMnZqT2VEN290bXU2UkRKQTh3ajF0SFVRZytSSllUTUtCTWtOblB1eFQ1Ri8wMkFOVnU1MWswSHJlT29oQU9iQk1WT0orUVhPRDFCcnc1STlKQ0JQOUYzNWhxcHp3RFBXNGRSVVgvM0hOVEwxT0I4d2xMT2V6SmVwQnBHaXdpOGZrZUErTnNIVVVoSE'+
			'5oR0tuQStvZkVjMmRMVGJUb3k2OGRLaGNZTnpPUFdVUlNDZ1YzYyt4SVZPSi93ZUk0TUFKYVVEaTArUDhrSHpPUFdVUlRDZ1cyZ0F1ZVRrckpBQmdDM25YRU5MYjZBRjVpM3JhTW9CQU83cEhjOUZUaWZ0SlFOTXNBVnRFa0w3TksrS0JVNG45U1VGVElBV013UExYN1RPVDVnK3lRQjQyeThRaUVZMkdWOTdFY3psbFBLRGhrQUxHSkRpOS9NQ2V6OWlnUDJJaFU0Mzdpa0xKRUJRRXRQUVdqY3dONVRLZ3hZL3d0VTRIempsckpGQmdBTHgwS0wzK0kxTUw3V1VSU0NnVFgzUDA4RnpqZXVLYXNQeUF0bDE5UklDTERvcldmYlczbkc3MVZ5SG9aYWVsY2Z3RzY4d3RrNmluRWwzMUZYSHhCaXhpOC8veXhsMVMz'+
			'blRBaGtUckxIQmtic1BkZzR0NDZpeUdsYmxUK09rTVd2R0hpR3N1cVdlOHI2Y09rMGV5UWRJcDBBRTFRWEFDb0NHRkJCeVBZRUt3M1lVMVRnZko2bUlwRHRsZ1NNczNVVWhYQmdhNm5BK1R6UGhEOG55d0x6NWF4b0hiWDgydWs1bVFHTHU3TlAzcFA4RXM3SmpDc0hWb2RZZFNkYUttRlAxZ2tQOW1BZml0K0RHUUM3bTlGRVRDVWdhNEdZOVdoT1drZFJTQURHMHpwcUltYkNJMXVRYk5kUitubzBKNjJqS0NRQTQya2ROVkV6NFpFQkpVTXpBTzdXVVJRU2dQRzBqcHJJcVFoa0FERGZIVFR1emo3U2dIRzBqcHJvcVJoa0FEQS81UWdhTjdCRGtvRHh0STZxaEZRVU1vQWJXZ1lZWCtzb0NnbkFlRnBIVlVvcU'+
			'Roa0EzRmdjR2pld2c5S0FzVnRIVlZJcUVoa0EzSkFmbWdGd3Q0NmlrQUNNcDNWVXBXWENYL0ZuNWYyR29WVVpQUUJuWjU4Y1lDVTJYTW1HKzZiZlNrekZJd09BZlEwZDB3aVE1bXdkUldFTjc4RUVJSnZVd0lCSmdvdzNCK3ZzUFppWXJqNUFGUmlBQ2o0bmM1b0RkYkxPd1NZM01LQ0tEQUN3dndwTWFpWTlzaW93K1puVXlQYlhWNEdOUnlZMU1nQ3RBdWZpYmxzdzJUTFprYW5JNENnMVZXQkZNcW1SMlI4dHFTZ05XaFVZSTVNYUdRRFlxekJVdUlOV0JjYVJTWThNY0EydENvd3pWV1Iycm5VR2pidnhTalZWWkNOeURSKzBLakNIcVNJYkZRYTBLakFYcVNMTEUvdStTeFVqb1hHM2pxcG1aS3FyTUlya1lH'+
			'MkgzMjVCQmQ3V1VkV01UUlVaSTRkcU8vd0F3Tk40cFpyOCtYL2VpR2VXZ0NlNFJnQUFBQUJKUlU1RXJrSmdnZz09IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzYuNTAwMDAxLC01OS41MDAwMDEpIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgNzMuNDQgNTcuMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGltYWdlIGhlaWdodD0iMTE5IiB3aWR0aD0iMTUzIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUprQUFBQjNDQVlBQUFBUUV1SklBQUFCTjJsRFExQkJaRzlpWlNCU1IwSWdLREU1T1RncEFBQW9rWldQdjByRF'+
			'VCU0h2eHRGeGFGV0NPTGdjQ2RSVUd6VndZeEpXNG9nV0t0RGtxMUpRNVZpRW02dWYvb1FqbTRkWE54OUFpZEh3VUh4Q1h3RHhhbURRNFFNQll2ZjlKM2ZPUnpPQWFOaTE1MkdVWWJ6V0t0MjA1R3U1OHZaRjJhWUFvQk9tS1YycTNVQUVDZHh4QmpmN3dpQTEwMjc3alRHKzM4eUg2WktBeU5ndXh0bElZZ0swTC9TcVFZeEJNeWduMm9RRDRDcFR0bzFFRTlBcVpmN0cxQUtjdjhBU3NyMWZCQmZnTmx6UFIrTU9jQU1jbDhCVEIxZGE0QmFrZzdVV2U5VXk2cGxXZEx1SmtFa2p3ZVpqczR6dVIrSGlVb1QxZEZSRjhqdkEyQXhIMnczSGJsV3RheTk5WC8rUFJIWDgyVnVuMGNJUUN3OUYxbEJlS0V1ZjFVWU81'+
			'UHJZc2R3R1E3dllYcFVaTHMzY0xjQkM3ZEZ0bHFGOGhZOERuOEF3TVpQL2ZOVFA4Z0FBQUFKY0VoWmN3QUFGeElBQUJjU0FXZWYwbElBQUFYNWFWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpZdFl6RTBNaUEzT1M0eE5qQTVNalFzSURJd01UY3ZNRGN2TVRNdE1ERTZNRFk2TXprZ0lDQWdJQ0FnSUNJK0lEeH'+
			'laR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklpQjRiV3h1Y3pwd2FHOTBiM05vYjNBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR2h2ZEc5emFHOXdMekV1TUM4aUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZi'+
			'bk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRFVjJkRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxSWFpsYm5RaklpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREU0SUNoWGFXNWtiM2R6S1NJZ2VHMXdPa055WldGMFpVUmhkR1U5SWpJd01qUXRNRE10TURWVU1UVTZNVFU2TVRNck1ETTZNREFpSUhodGNEcE5iMlJwWm5sRVlYUmxQU0l5TURJMExUQXpMVEkxVkRFNE9qTTBPakl5S3pBek9qQXdJaUI0YlhBNlRXVjBZV1JoZEdGRVlYUmxQU0l5TURJMExUQXpMVE'+
			'kxVkRFNE9qTTBPakl5S3pBek9qQXdJaUJrWXpwbWIzSnRZWFE5SW1sdFlXZGxMM0J1WnlJZ2NHaHZkRzl6YUc5d09rTnZiRzl5VFc5a1pUMGlNeUlnY0dodmRHOXphRzl3T2tsRFExQnliMlpwYkdVOUlrRmtiMkpsSUZKSFFpQW9NVGs1T0NraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5qUmxZamxpWWpndE1HUXpNQzAyTmpRMExXSmtNemN0Tm1Kak4yUmxPVGs0WkRnM0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSmhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2TXpReU9EYzVaR1l0TW1WaFl5MDBaalEyTFRobE1XRXRORGMxTnpkaE1qTTRaR000SWlCNGJYQk5UVHBQ'+
			'Y21sbmFXNWhiRVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TVRJeE4yWTRNRGd0WW1Wa1pTMWlORFJsTFRsbFl6RXRaVFU0TkRJek1qUXdPRFU0SWo0Z1BIaHRjRTFOT2tocGMzUnZjbmsrSUR4eVpHWTZVMlZ4UGlBOGNtUm1PbXhwSUhOMFJYWjBPbUZqZEdsdmJqMGlZM0psWVhSbFpDSWdjM1JGZG5RNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3hNakUzWmpnd09DMWlaV1JsTFdJME5HVXRPV1ZqTVMxbE5UZzBNak15TkRBNE5UZ2lJSE4wUlhaME9uZG9aVzQ5SWpJd01qUXRNRE10TURWVU1UVTZNVFU2TVRNck1ETTZNREFpSUhOMFJYWjBPbk52Wm5SM1lYSmxRV2RsYm5ROUlrRmtiMkpsSU'+
			'ZCb2IzUnZjMmh2Y0NCRFF5QXlNREU0SUNoWGFXNWtiM2R6S1NJdlBpQThjbVJtT214cElITjBSWFowT21GamRHbHZiajBpYzJGMlpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOalJsWWpsaVlqZ3RNR1F6TUMwMk5qUTBMV0prTXpjdE5tSmpOMlJsT1RrNFpEZzNJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ESTBMVEF6TFRJMVZERTRPak0wT2pJeUt6QXpPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdNakF4T0NBb1YybHVaRzkzY3lraUlITjBSWFowT21Ob1lXNW5aV1E5SWk4aUx6NGdQQzl5WkdZNlUyVnhQaUE4TDNo'+
			'dGNFMU5Pa2hwYzNSdmNuaytJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtxZjZQS1FBQUVpZEpSRUZVZUp6dDNmMXpHOVc1Qi9EdjBmQzdOZE5iNUpkVlhrbGloeGNMU2ltM3Q1Q0ZRaVpBYVp4QUVrcWhPV3BoMGtzTHNRMmxvYnlFQkNpVWdxVWszSlJNVWxacWdCSm9FdE9Va2trZ0tDOVFicUJoMXlVdmhEaHhJdG1PbWRzWitROWc5LzZnbFMzYmtzN1oxVGxlV2RaM2hnbVdqODZ6RGg5MjE2dXp6eExMc2xCTzJURTlFaUxBdEVWbjJqcTkzcGFKa0tNTjk2dUFwVi9jKzFMYTYyMHBGRkpPeUxabm'+
			'dDVUlVRU1zaEZ0NjJtSmViMU81cGF2K1FSVXdLWUhWUW9oWlEyQUJzRUNJQ2NCOG04RHFiRXB0aW5tN2xTTlROc2kyVDQrRWtBVUdnRmdBQWNJTHE5QUFBRWJkdzM0Q013WmlMUVJNRUJ2V0tHVDIxNlpCWU5IRzFCYmQyNjNPcEN5UXZUVWpFdkpaU0NBTERFUElnQ28wNkxXci9JU1lDUUt6R2NRQ0J6SVFXSU1FcGpvbjlZcnU2Y1lEOEhtOUFXL09pUGdCZEFLb0tUQkUyelUxUXNkcmU4b3RuOVUrNGdlUUFORHM4SzAxQUJJbkZSb1N2RW1PNHpreUFERUFVeGxqdEYxVE82ajhUU212SEFrODZvYzdZTm5ZMEphSEJHMlNxM2lLYk52TVNBakFRczdoMnQ4bUViUWpnY2Y5S0ExWU5qYTB1ME1senVNNlh1'+
			'L0pxTVB4Mmp0VEtoL2FrY0FUZm9nQlZoYnhHcG5xNGozYTN5c1kyajhEcS8wUUMyd1FnRG83dFZVWE5KL2plSTNNN1Y5a1JVTDdOTERHRHluQTRycWcrVnpsZ2xMZS9JYzVVZW9Ec09LTDFwaVl6WEVVN2QwcEhianBYTHNYdFlYbms4RGFFTWtBSy9SYnR0UFl3R0s2MHplZUM5NmlBcWFmd1BJVGZOMURZT2tOeWZmU2JqZkU5WFd5alhPaWxBQ2F2U3NNdTRHMmJXYkV5bDRQODltYmtlYzZtZjA5YTh6cjl0ZmhCY21KRGUxdzRPa1FnWmtnc0dvSWhxOTlBZWJRdGJETW55WTRyNU1ORWxpcWs0dXhQY0VXbGNDa2dMV2NZSGd1Z3EremM4WUI4OG1HWktMSDZjL242bkQ1UDQxUkNrRExlVW5iUER0S1hVeT'+
			'EzMDM5VWRGMkJ5ZnVvZlB3aGI4TlFjSWVqQmZZYWVYMmFXZUNpenNCZkFCZ2VaR2h5d0hvZmNGclEwNDN5REd5RFkzUkZvd0VsbzIyeFRtMGhOUDZCYUx0bVlEUS92ZkM1MEtRQUt3cHRWbm5HZHl0TEdrRm9JUC9NbElOZ0VSLzhIc2hKeHZsQ05uNnhtZ0ltWXVuaGFMOTBSbTBZbk01amJaSG1UalFQZzc4TGdRcHdEYnBySUhkeWgzK2JtVlpERURFUmYwYUFJbnp3ZStHZU4vZ2RFOFdBM3VqTkcwVzM4ZEF5N3JiZWdDc2NiZ05SV3RQQkdnZkIzNGZnZ1JnYzFNdjY2eUJwNVE3L1hidFlvZEdWbXhvVjRkNEJuTWpXNWM1VFBMK2FzME5iZW5wdGljQkdMemJ3Vk43YnhsRCswZmd4UkNrQU51b3N3Witx'+
			'ZHdWQXRBRE1aZElhZ0JFZVFZNjJaTlJoeHVoeFRtaElYTlJWaWkwOThvUTJqOENIU0ZJQUhaeDcwczZhNkQ5c1pMSTJnYUFGcDZCVHBDcExqWkUrOU5GYkdoTFRyZWxVZUhRNUFIYm9MTUcyaCtRaTZ4dEFGQnJreCtuZVFZN1FlWjJBN1d0SE5CdU95TUgydnNOM2tPVEJleVMzdlU2YTZDOTFFZGtiUnZZUjJuZU40elh4MHJhcXg1QzIrY2hORm5BTHUyTDZxeUJYeWcvRlYzYkFLRFdKUStsbmJ4cFBEKzcxRjdqZ0xaWUVyUVBQSUFtQzlobGZSR2ROZkNFY28vbzJnWUF0VDU1SU8zMGpVNlFDYms2L3pvSHRFVVZBRTBlc0JkMTFzRGp5cjJpYXhzQTFJWmtJdTNtelU2UWRib3BrQ2ZhbjJleW9iWDBTSU'+
			'pXTHgrYU5HRDlMK2lzZ2NlVkZhSnIyOEQycGQxTzRBUlpESmtmVmtTME56aWdMWlFFTFNFUjJrZVNnRFgzUDYrekJoNVRmaTY2dGczTS9Rb013QUd5bFNkYTB3Q2VMS1hZcUdqYlBJUzJYd0kwV2NCQzU1L1RXUU9QS2ZlSnJtMEFVSlhrM25TcEV6azY4WC9nUkdzVVFMelVvam5SM3B6QmhuYnIyZktISmd2WTVlZWYxVmtEanpiOFVuUnRBNEFhVE81T2k1ak04VytYOTU5b3BSQU03UzB1YU8xcHlJQldWem8wV2NDdUdIaEdadzA4Mm5DLzZOb0dBSFZLOHQyMG9QbmNYY0w0aFFSbzI2ZXpvZjJnREtISkEvYVV6aHI0ZWNNRG9tdmJ3TjVKQzVvUFFBblh5ZTc3d2h0b3Q1eVRBKzJBQzJnZlNnTzJWbWNO'+
			'L0ZkOXEramFCZ0IxYW5KWFd0QjhReW5wWXV4L1M0QzJnd1BhelpLZ0hYUUFUUmF3YncyczBWa0R1K3JiUk5lMmdmMDFMV2krRWNtTDdIZE5VZnI3cHFqK1FsUFV6NXBnaFFSb083MkRGdVVaSkF2WWxRT3JkZGJBcnZvSFJkYzJBS2pUa3AxcFFmT055WmdiU1o2YnU0NFN5OUo4QUFoZytBQzEvWGdyY3dNMno0N0dDTEE4YzFOSVprNGZobS84R1BHUE5mYmY4OXhJd3RVNmFuZXd3dzhnNFFPYU1Xb09qS29GQU1qenRmMmVRUUtvMS9TMzY4WHFmVmpiRVlJMS9CK1o1Qm1UNzdYaFdCaTZVY095UUdBT2dwanFWUU9QRmEwTEFGMTFENFZBckFTUWFSbkZhTGlDekUwcEpsRDROWVBBVW1lay9wSm0xZTROWH'+
			'UvUHRLd3lXd2pNZWNNM201Z0F6UDBFWmlkZ3hpNU02bVBtR29IczJibnJLQUUwWWxtd2tjRUhHQVJRMnppZ2JiR2hDVUlHd3RuUlozZXd3KzhERXJBeWkvRmNJQnNrZ0hvdEQ3Qk1uYUc5U0luSXpoS1lMVmQ5OVp1aWRRSEFxSHM0UkdBbVFLd2F6cTQrTEdRR1lLb3pVMitsV2JWN2d6ZTBBR1lzZzl2TW1XUE1uNE1FSnYxbXNxc3o5LzFEaDh0bjVxNmp5SCtEU0RPQXhMcEc5cUh6bnBQaUQ1MXZUMk1mT2hja1N6cDBEc0lKTUxHSHFSQVBNTDEybFl6YVhNQlN3UnVqQUhaeTFxNEJzUFAvZ3BmUTNCZDlBUEQwM0hVaDVBZVdUVE9BeEhvT2FEK1RBSTJuZGRSOGQ5QUdBYWp6R01BT3lRR21mdWVyVldu'+
			'V3dNOXFINUZTZTJacUc3TjJNcmdnQm1DbGl4cmF2NE1YMCt3WDJUMVpqT09OelFBU0d6aWdoYjlzb3hBT2pmMmIzL3lVSTJpZUFydDY0TmRwMXNBamdVZWwxSjZaZW9OWisxendwaWRSMnMwbTJyK0RUUlFBeUpxbWFJc1AyR21mZjlublF5UE95WWJPbWV4ekdjTUhxTDg0d1Q1SGk4K0t4SWlWK1dYQTVUa1pNUFE5Q3dRSS8rQXMrMjd4dlVxSG45ZzlKUXFja3cwU1FKM1hWeHpZd2RxT2tEMVB6WWp6ckp6ZmxSeWVreG1BcGY3bndJTnAxczl3SlBCNENEQVQyYjZ3RHU4Z0wzaVNQeXYxS3JQMnVlQXRGREMxVVhlUUF6bm5Zd1hPeVhLK24zM1AxMkVmT0c4R3lFa3pnTVRHT2V3OTJuSUplelNlMWxFM0'+
			'Z0K2paZlpnSE1BZ1lTL0NCK3dKS2JWNWdKME4za3BSL05USmFWUWZnR2t1M3RnTUlQRUhEbWcvT1NVZUdrOUhueHZ5UXhzRW9LcWVBV3RQc3diK003QmFTdTNacWEzTTJtZURQNlFRQ3l6K2plUko2Z013eitVRXpRQVNtemlnM1YwZTBBWUJxTmV4Z05WNUIrelR3Qm9wdFdlbjRzemFQY0VXQ3VIQWpsT2c5RFgrM05EdWtnRHRYUTVvMys4ZGdoYTZycmQ4Z1gwU1dDdWw5dXhVakZuN1RIQXhoWEJnUjJuMkN4OUtYN3ZmRENDeGVUWWIybzhsUU9QcDZITjliM3Y2dXQ3Mm5tSmpEbmdJN0hEZ2FTbTE1NlJlWWRZK3JkeE9JUmpZZnlRL3A3a3YrSkM1YmIzVU5BTkliT0dBZHFkSDBJcGx2NWZBeExlT01n'+
			'Q29qYWt0ek5yZHloSUt3Y0MrbWV5aW8xLzBRVnhubldZQWlUOXlRUHRSdDNob2JsdEhlUWxNUXVzb0E0RGFsTnJNck4ydExLTVFET3pDcEU3emZjUDN4TEdWQ1loYnlkQU1JS0hOaXZoWkErK1FBYzFoVzRMOTlkNEJrOUE2eWdhMmlWbTdXN21EUWppd0k3VFFON01uL2dVSHVBZzN0R1VlUXBNRjdMdGN3SVMzampJQXFITlRMek5ybjFMdXBCQU1MSkQ4bEJZYjRBT0F4NDZ0MUFHRUJSWnVCcENJYzBCYmVsbzROR1lTSGdLVDBEcktCcmFSV2Z0TDVTNEs0Y0FPVTlhZ29Vc1lqeDViR1lNRWFIKzZpQTF0aVRobzRmbXA0aDg3ZmVBcE1EbTFlWjUxZVZLNW0wSXdzTnJreDVSbjRJanJaSTlJZ3JhVkE5cH'+
			'RaMHFHeGdiV1VJbkFOakJybjFTV1V3Z0g5aEhsSFR6bVl1d3FTZEJlbFFzdFBKL1JadDN1Zy9FWktnallKYjNybWJWUEtwUkNNTEM2NUNIcTVBMTVyL2ovK25ockRCS2d2Y1lCYmJGemFNdysvbmJyS0pGLzBRWUE5Yjg4QkhacFg1Ulord3ZscHhTQ2dkVW5EMUNuYnlyNHNkS3ZKRUY3blFQYUluNW9UR0R2VnlDd3kvb2l6Tm9ubEhzb0JBTnJTQ2FvbXpjVy9lenlJVW5RL2p5VERhMmxod2t0ekhya2pkM09zOEtBdmNpc2ZWeTVsMEk0c0gzVTdadVpINUMzUzRMMkJnZTBoWVdoaFcvMkN0aDVENEgxdjhDc2ZWeFpRU0VjMkh1MGxBbTRWbUcwU1lLMnpSMDBKckM5SGdLVDBMYkFBS0EyOXovUHJIMU0r'+
			'VG1GWUdCS2NpOHRkUkpIRC9CYTN6ajgwSzZoWmRQMjkzS1daenU1NzlJZ0Z0U2xtZTdYUmJOcmFrZVVBRHByK2ZVZXBZTVNRTXN1Z1hadzMrV1kxK3pYRFFEcTl4d0FJMFdCamJudkVpRERTNVpIUGNETElNUlVMei8vTExQMk1lVSttbDB5N2VDK1MrUXU3YzYrYm05ZmZFcnlYY3FxeXhQSFQ0bmIwQmlsUGtBVGhBekV5dHpYdVlRREdpdjJSMHBhTHBnU2tSbkVJVENNdmg5Z1RMaVJHWUNwWGpId0RMUDIwWVpmVWtKTXpjWE52WVdReGFjazM2R3N1cnh4MHpvcUJnbUh6dTNUMllmT1lyRlhZUWcvUkRvRkpySTJIN0Q3S1FRZklrVUNBOXkzam9xaGpLRHRsZ1RzR2srQlBjV3MvWG5EQXhTQ2dVMU43cU'+
			'lDNXdOUVd1dW9HQ1JBMitFUW1wZkFKRFJlc1lHdFpkYitWMzByaFhCZ2Y2VUM1eHRLcWEyallwQUFiU2NuTkh1TmYwVUIrOWJBR21idHJ2bzJDc0hBcGlVN3FjRDVScVRraDBXc2tBTk5aUTM2dXl4Zy9kNEJ1M0pnTmJOMlYvMkRGSUtCVFUvdW9BTG5HeE1oVHlRUkRDMjg2RXhiWjdFQm5nS1RkRS9tdHdlZVlOYnVxbnVJUWpDd0dhbS9VSUh6NVkyd3g5N2NlMUlJdFBEaU04VmJSYjBqQ2RpMUhnSzdhdUF4Wm0yajdtRUt3Y0JtcHQ2aUF1Y3JHS0hQVnJxbk5HamgyeGpBL2paVkRyQjVYZ0w3NmpmTTJucnRLZ3Jod0xaUmdmTVZqZkFIZVAzTUhUUW1zRjBlQXZPNGRSU0ZjR0J2VUlIek1TUGxLWEho'+
			'TDl0aTRJY1dYbkthQlN4Q0lRTlluM2ZBT0Z0SFVRZ0dkbEhxZFNwd1BxNUlleFFoSjdUd1VnWXd1OU9pSjhCa05WNjVldUJYek5wSEFvOVRDQVkySy9VcUZUZ2ZkNlErNzNKNWNXamhaZDNlQUZNOUJNYlpPb3BDTUxEWnFhMVU0SHlPSXYyaHFqODVsUmRhK0E0R3NFNUp3Szd6RkJoWDZ5Z0s0Y0RpVk9COGpqTXVUKzY5ZXlTMDhJOFl3T3crL3VLQjlYSUE4N1oxRklWd1lERXFjRDVYY2J6VXA1UzhkbEZrMm85UHRmVVVHN05qZWlTekhzeksyODV6Ukp2UDdOZUEvWDlMbm1VNzJhVkUxenNCbHFlRitvamxPeVBYbTQxSnptdmN3RDRKcktVRWxqWnFQZGxReTA0WDdUempqYWt0bEZWM1BES3V5Rmpabm'+
			'dXR2dqMWpuU0l6aUFYMSt4ekFEdFFOOTRmTmg4Z0ZNbTVnaHdOUFV6TFVvMVVJc25oVGFqTmwxUjJ2ak9lRDdvdG11NlJESkE4d2oxdEhVUWcrUkpZVE1LQk1rTm5QdXhUNUYvMDJBTlZ1NTFrMEhyZU9vaEFPYkJNVk9KK1FYT0QxQnJ3NUk5SkNCUDlGMzVocXB6d0RQVzRkUlVYLzNITlRMMU9COHdsTE9lekplcEJwR2l3aThma2VBK05zSFVVaEhOaEdLbkErb2ZFYzJkTFRiVG95NjhkS2hjWU56T1BXVVJTQ2dWM2MreElWT0ovd2VJNE1BSmFVRGkwK1A4a0h6T1BXVVJUQ2dXMmdBdWVUa3JKQUJnQzNuWEVOTGI2QUY1aTNyYU1vQkFPN3BIYzlGVGlmdEpRTk1zQVZ0RWtMN05LK0tCVTRuOVNVRlRJ'+
			'QVdNd1BMWDdUT1Q1Zyt5UUI0Mnk4UWlFWTJHVjk3RWN6bGxQS0Roa0FMR0pEaTkvTUNlejlpZ1AySWhVNDM3aWtMSkVCUUV0UFFXamN3TjVUS2d4WS93dFU0SHpqbHJKRkJnQUx4MEtMMytJMU1MN1dVUlNDZ1RYM1AwOEZ6amV1S2FzUHlBdGwxOVJJQ0xEb3JXZmJXM25HNzFWeUhvWmFlbGNmd0c2OHd0azZpbkVsMzFGWEh4Qml4aTgvL3l4bDFTM25UQWhrVHJMSEJrYnNQZGc0dDQ2aXlHbGJsVCtPa01XdkdIaUdzdXFXZThyNmNPazBleVFkSXAwQUUxUVhBQ29DR0ZCQnlQWUVLdzNZVTFUZ2ZKNm1JcER0bGdTTXMzVVVoWEJnYTZuQStUelBoRDhueXdMejVheG9IYlg4MnVrNW1RR0x1N05QM3BQOE'+
			'VzN0pqQ3NIVm9kWWRTZGFLbUZQMWdrUDltQWZpdCtER1FDN205RkVUQ1VnYTRHWTlXaE9Xa2RSU0FERzB6cHFJbWJDSTF1UWJOZFIrbm8wSjYyaktDUUE0MmtkTlZFejRaRUJKVU16QU83V1VSUVNnUEcwanBySXFRaGtBRERmSFRUdXpqN1NnSEcwanByb3FSaGtBREEvNVFnYU43QkRrb0R4dEk2cWhGUVVNb0FiV2dZWVgrc29DZ25BZUZwSFZVb3FEaGtBM0ZnY0dqZXdnOUtBc1Z0SFZWSXFFaGtBM0pBZm1nRnd0NDZpa0FDTXAzVlVwV1hDWC9GbjVmMkdvVlVaUFFCblo1OGNZQ1UyWE1tRys2YmZTa3pGSXdPQWZRMGQwd2lRNW13ZFJXRU43OEVFSUp2VXdJQkpnb3czQit2c1BaaVlyajVBRlJpQUNq'+
			'NG5jNW9EZGJMT3dTWTNNS0NLREFDd3Z3cE1haVk5c2lvdytablV5UGJYVjRHTlJ5WTFNZ0N0QXVmaWJsc3cyVExaa2FuSTRDZzFWV0JGTXFtUjJSOHRxU2dOV2hVWUk1TWFHUURZcXpCVXVJTldCY2FSU1k4TWNBMnRDb3d6VldSMnJuVUdqYnZ4U2pWVlpDTnlEUiswS2pDSHFTSWJGUWEwS2pBWHFTTExFL3UrU3hVam9YRzNqcXBtWktxck1JcmtZRzJIMzI1QkJkN1dVZFdNVFJVWkk0ZHFPL3dBd05ONHBacjgrWC9laUdlV2dDZTRSZ0FBQUFCSlJVNUVya0pnZ2c9PSIgdHJhbnNmb3JtPSJzY2FsZSguNDgpIi8+Cjwvc3ZnPgo=';
		me._svg_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._svg_1__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgNzMuNDQgNTcuMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGltYWdlIGhlaWdodD0iMTE5IiB3aWR0aD0iMTUzIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUprQUFBQjNDQVlBQUFBUUV1SklBQUFCTjJsRFExQkJaRzlpWlNCU1IwSWdLREU1T1RncEFBQW9rWldQdjByRF'+
			'VCU0h2eHRGeGFGV0NPTGdjQ2RSVUd6VndZeEpXNG9nV0t0RGtxMUpRNVZpRW02dWYvb1FqbTRkWE54OUFpZEh3VUh4Q1h3RHhhbURRNFFNQll2ZjlKM2ZPUnpPQWFOaTE1MkdVWWJ6V0t0MjA1R3U1OHZaRjJhWUFvQk9tS1YycTNVQUVDZHh4QmpmN3dpQTEwMjc3alRHKzM4eUg2WktBeU5ndXh0bElZZ0swTC9TcVFZeEJNeWduMm9RRDRDcFR0bzFFRTlBcVpmN0cxQUtjdjhBU3NyMWZCQmZnTmx6UFIrTU9jQU1jbDhCVEIxZGE0QmFrZzdVV2U5VXk2cGxXZEx1SmtFa2p3ZVpqczR6dVIrSGlVb1QxZEZSRjhqdkEyQXhIMnczSGJsV3RheTk5WC8rUFJIWDgyVnVuMGNJUUN3OUYxbEJlS0V1ZjFVWU81'+
			'UHJZc2R3R1E3dllYcFVaTHMzY0xjQkM3ZEZ0bHFGOGhZOERuOEF3TVpQL2ZOVFA4Z0FBQUFKY0VoWmN3QUFGeElBQUJjU0FXZWYwbElBQUFYNWFWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpZdFl6RTBNaUEzT1M0eE5qQTVNalFzSURJd01UY3ZNRGN2TVRNdE1ERTZNRFk2TXprZ0lDQWdJQ0FnSUNJK0lEeH'+
			'laR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklpQjRiV3h1Y3pwd2FHOTBiM05vYjNBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR2h2ZEc5emFHOXdMekV1TUM4aUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZi'+
			'bk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRFVjJkRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxSWFpsYm5RaklpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREU0SUNoWGFXNWtiM2R6S1NJZ2VHMXdPa055WldGMFpVUmhkR1U5SWpJd01qUXRNRE10TURWVU1UVTZNVFU2TVRNck1ETTZNREFpSUhodGNEcE5iMlJwWm5sRVlYUmxQU0l5TURJMExUQXpMVEkxVkRFNE9qTTBPakl5S3pBek9qQXdJaUI0YlhBNlRXVjBZV1JoZEdGRVlYUmxQU0l5TURJMExUQXpMVE'+
			'kxVkRFNE9qTTBPakl5S3pBek9qQXdJaUJrWXpwbWIzSnRZWFE5SW1sdFlXZGxMM0J1WnlJZ2NHaHZkRzl6YUc5d09rTnZiRzl5VFc5a1pUMGlNeUlnY0dodmRHOXphRzl3T2tsRFExQnliMlpwYkdVOUlrRmtiMkpsSUZKSFFpQW9NVGs1T0NraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5qUmxZamxpWWpndE1HUXpNQzAyTmpRMExXSmtNemN0Tm1Kak4yUmxPVGs0WkRnM0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSmhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2TXpReU9EYzVaR1l0TW1WaFl5MDBaalEyTFRobE1XRXRORGMxTnpkaE1qTTRaR000SWlCNGJYQk5UVHBQ'+
			'Y21sbmFXNWhiRVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TVRJeE4yWTRNRGd0WW1Wa1pTMWlORFJsTFRsbFl6RXRaVFU0TkRJek1qUXdPRFU0SWo0Z1BIaHRjRTFOT2tocGMzUnZjbmsrSUR4eVpHWTZVMlZ4UGlBOGNtUm1PbXhwSUhOMFJYWjBPbUZqZEdsdmJqMGlZM0psWVhSbFpDSWdjM1JGZG5RNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3hNakUzWmpnd09DMWlaV1JsTFdJME5HVXRPV1ZqTVMxbE5UZzBNak15TkRBNE5UZ2lJSE4wUlhaME9uZG9aVzQ5SWpJd01qUXRNRE10TURWVU1UVTZNVFU2TVRNck1ETTZNREFpSUhOMFJYWjBPbk52Wm5SM1lYSmxRV2RsYm5ROUlrRmtiMkpsSU'+
			'ZCb2IzUnZjMmh2Y0NCRFF5QXlNREU0SUNoWGFXNWtiM2R6S1NJdlBpQThjbVJtT214cElITjBSWFowT21GamRHbHZiajBpYzJGMlpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOalJsWWpsaVlqZ3RNR1F6TUMwMk5qUTBMV0prTXpjdE5tSmpOMlJsT1RrNFpEZzNJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ESTBMVEF6TFRJMVZERTRPak0wT2pJeUt6QXpPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdNakF4T0NBb1YybHVaRzkzY3lraUlITjBSWFowT21Ob1lXNW5aV1E5SWk4aUx6NGdQQzl5WkdZNlUyVnhQaUE4TDNo'+
			'dGNFMU5Pa2hwYzNSdmNuaytJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtxZjZQS1FBQUVpZEpSRUZVZUp6dDNmMXpHOVc1Qi9EdjBmQzdOZE5iNUpkVlhrbGloeGNMU2ltM3Q1Q0ZRaVpBYVp4QUVrcWhPV3BoMGtzTHNRMmxvYnlFQkNpVWdxVWszSlJNVWxacWdCSm9FdE9Va2trZ0tDOVFicUJoMXlVdmhEaHhJdG1PbWRzWitROWc5LzZnbFMzYmtzN1oxVGxlV2RaM2hnbVdqODZ6RGg5MjE2dXp6eExMc2xCTzJURTlFaUxBdEVWbjJqcTkzcGFKa0tNTjk2dUFwVi9jKzFMYTYyMHBGRkpPeUxabm'+
			'dDVUlVRU1zaEZ0NjJtSmViMU81cGF2K1FSVXdLWUhWUW9oWlEyQUJzRUNJQ2NCOG04RHFiRXB0aW5tN2xTTlROc2kyVDQrRWtBVUdnRmdBQWNJTHE5QUFBRWJkdzM0Q013WmlMUVJNRUJ2V0tHVDIxNlpCWU5IRzFCYmQyNjNPcEN5UXZUVWpFdkpaU0NBTERFUElnQ28wNkxXci9JU1lDUUt6R2NRQ0J6SVFXSU1FcGpvbjlZcnU2Y1lEOEhtOUFXL09pUGdCZEFLb0tUQkUyelUxUXNkcmU4b3RuOVUrNGdlUUFORHM4SzAxQUJJbkZSb1N2RW1PNHpreUFERUFVeGxqdEYxVE82ajhUU212SEFrODZvYzdZTm5ZMEphSEJHMlNxM2lLYk52TVNBakFRczdoMnQ4bUViUWpnY2Y5S0ExWU5qYTB1ME1senVNNlh1'+
			'L0pxTVB4Mmp0VEtoL2FrY0FUZm9nQlZoYnhHcG5xNGozYTN5c1kyajhEcS8wUUMyd1FnRG83dFZVWE5KL2plSTNNN1Y5a1JVTDdOTERHRHluQTRycWcrVnpsZ2xMZS9JYzVVZW9Ec09LTDFwaVl6WEVVN2QwcEhianBYTHNYdFlYbms4RGFFTWtBSy9SYnR0UFl3R0s2MHplZUM5NmlBcWFmd1BJVGZOMURZT2tOeWZmU2JqZkU5WFd5alhPaWxBQ2F2U3NNdTRHMmJXYkV5bDRQODltYmtlYzZtZjA5YTh6cjl0ZmhCY21KRGUxdzRPa1FnWmtnc0dvSWhxOTlBZWJRdGJETW55WTRyNU1ORWxpcWs0dXhQY0VXbGNDa2dMV2NZSGd1Z3EremM4WUI4OG1HWktMSDZjL242bkQ1UDQxUkNrRExlVW5iUER0S1hVeT'+
			'EzMDM5VWRGMkJ5ZnVvZlB3aGI4TlFjSWVqQmZZYWVYMmFXZUNpenNCZkFCZ2VaR2h5d0hvZmNGclEwNDN5REd5RFkzUkZvd0VsbzIyeFRtMGhOUDZCYUx0bVlEUS92ZkM1MEtRQUt3cHRWbm5HZHl0TEdrRm9JUC9NbElOZ0VSLzhIc2hKeHZsQ05uNnhtZ0ltWXVuaGFMOTBSbTBZbk01amJaSG1UalFQZzc4TGdRcHdEYnBySUhkeWgzK2JtVlpERURFUmYwYUFJbnp3ZStHZU4vZ2RFOFdBM3VqTkcwVzM4ZEF5N3JiZWdDc2NiZ05SV3RQQkdnZkIzNGZnZ1JnYzFNdjY2eUJwNVE3L1hidFlvZEdWbXhvVjRkNEJuTWpXNWM1VFBMK2FzME5iZW5wdGljQkdMemJ3Vk43YnhsRCswZmd4UkNrQU51b3N3Witx'+
			'ZHdWQXRBRE1aZElhZ0JFZVFZNjJaTlJoeHVoeFRtaElYTlJWaWkwOThvUTJqOENIU0ZJQUhaeDcwczZhNkQ5c1pMSTJnYUFGcDZCVHBDcExqWkUrOU5GYkdoTFRyZWxVZUhRNUFIYm9MTUcyaCtRaTZ4dEFGQnJreCtuZVFZN1FlWjJBN1d0SE5CdU95TUgydnNOM2tPVEJleVMzdlU2YTZDOTFFZGtiUnZZUjJuZU40elh4MHJhcXg1QzIrY2hORm5BTHUyTDZxeUJYeWcvRlYzYkFLRFdKUStsbmJ4cFBEKzcxRjdqZ0xaWUVyUVBQSUFtQzlobGZSR2ROZkNFY28vbzJnWUF0VDU1SU8zMGpVNlFDYms2L3pvSHRFVVZBRTBlc0JkMTFzRGp5cjJpYXhzQTFJWmtJdTNtelU2UWRib3BrQ2ZhbjJleW9iWDBTSU'+
			'pXTHgrYU5HRDlMK2lzZ2NlVkZhSnIyOEQycGQxTzRBUlpESmtmVmtTME56aWdMWlFFTFNFUjJrZVNnRFgzUDYrekJoNVRmaTY2dGczTS9Rb013QUd5bFNkYTB3Q2VMS1hZcUdqYlBJUzJYd0kwV2NCQzU1L1RXUU9QS2ZlSnJtMEFVSlhrM25TcEV6azY4WC9nUkdzVVFMelVvam5SM3B6QmhuYnIyZktISmd2WTVlZWYxVmtEanpiOFVuUnRBNEFhVE81T2k1ak04VytYOTU5b3BSQU03UzB1YU8xcHlJQldWem8wV2NDdUdIaEdadzA4Mm5DLzZOb0dBSFZLOHQyMG9QbmNYY0w0aFFSbzI2ZXpvZjJnREtISkEvYVV6aHI0ZWNNRG9tdmJ3TjVKQzVvUFFBblh5ZTc3d2h0b3Q1eVRBKzJBQzJnZlNnTzJWbWNO'+
			'L0ZkOXEramFCZ0IxYW5KWFd0QjhReW5wWXV4L1M0QzJnd1BhelpLZ0hYUUFUUmF3YncyczBWa0R1K3JiUk5lMmdmMDFMV2krRWNtTDdIZE5VZnI3cHFqK1FsUFV6NXBnaFFSb083MkRGdVVaSkF2WWxRT3JkZGJBcnZvSFJkYzJBS2pUa3AxcFFmT055WmdiU1o2YnU0NFN5OUo4QUFoZytBQzEvWGdyY3dNMno0N0dDTEE4YzFOSVprNGZobS84R1BHUE5mYmY4OXhJd3RVNmFuZXd3dzhnNFFPYU1Xb09qS29GQU1qenRmMmVRUUtvMS9TMzY4WHFmVmpiRVlJMS9CK1o1Qm1UNzdYaFdCaTZVY095UUdBT2dwanFWUU9QRmEwTEFGMTFENFZBckFTUWFSbkZhTGlDekUwcEpsRDROWVBBVW1lay9wSm0xZTROWH'+
			'UvUHRLd3lXd2pNZWNNM201Z0F6UDBFWmlkZ3hpNU02bVBtR29IczJibnJLQUUwWWxtd2tjRUhHQVJRMnppZ2JiR2hDVUlHd3RuUlozZXd3KzhERXJBeWkvRmNJQnNrZ0hvdEQ3Qk1uYUc5U0luSXpoS1lMVmQ5OVp1aWRRSEFxSHM0UkdBbVFLd2F6cTQrTEdRR1lLb3pVMitsV2JWN2d6ZTBBR1lzZzl2TW1XUE1uNE1FSnYxbXNxc3o5LzFEaDh0bjVxNmp5SCtEU0RPQXhMcEc5cUh6bnBQaUQ1MXZUMk1mT2hja1N6cDBEc0lKTUxHSHFSQVBNTDEybFl6YVhNQlN3UnVqQUhaeTFxNEJzUFAvZ3BmUTNCZDlBUEQwM0hVaDVBZVdUVE9BeEhvT2FEK1RBSTJuZGRSOGQ5QUdBYWp6R01BT3lRR21mdWVyVldu'+
			'V3dNOXFINUZTZTJacUc3TjJNcmdnQm1DbGl4cmF2NE1YMCt3WDJUMVpqT09OelFBU0d6aWdoYjlzb3hBT2pmMmIzL3lVSTJpZUFydDY0TmRwMXNBamdVZWwxSjZaZW9OWisxendwaWRSMnMwbTJyK0RUUlFBeUpxbWFJc1AyR21mZjlublF5UE95WWJPbWV4ekdjTUhxTDg0d1Q1SGk4K0t4SWlWK1dYQTVUa1pNUFE5Q3dRSS8rQXMrMjd4dlVxSG45ZzlKUXFja3cwU1FKM1hWeHpZd2RxT2tEMVB6WWp6ckp6ZmxSeWVreG1BcGY3bndJTnAxczl3SlBCNENEQVQyYjZ3RHU4Z0wzaVNQeXYxS3JQMnVlQXRGREMxVVhlUUF6bm5Zd1hPeVhLK24zM1AxMkVmT0c4R3lFa3pnTVRHT2V3OTJuSUplelNlMWxFM0'+
			'Z0K2paZlpnSE1BZ1lTL0NCK3dKS2JWNWdKME4za3BSL05USmFWUWZnR2t1M3RnTUlQRUhEbWcvT1NVZUdrOUhueHZ5UXhzRW9LcWVBV3RQc3diK003QmFTdTNacWEzTTJtZURQNlFRQ3l6K2plUko2Z013eitVRXpRQVNtemlnM1YwZTBBWUJxTmV4Z05WNUIrelR3Qm9wdFdlbjRzemFQY0VXQ3VIQWpsT2c5RFgrM05EdWtnRHRYUTVvMys4ZGdoYTZycmQ4Z1gwU1dDdWw5dXhVakZuN1RIQXhoWEJnUjJuMkN4OUtYN3ZmRENDeGVUWWIybzhsUU9QcDZITjliM3Y2dXQ3Mm5tSmpEbmdJN0hEZ2FTbTE1NlJlWWRZK3JkeE9JUmpZZnlRL3A3a3YrSkM1YmIzVU5BTkliT0dBZHFkSDBJcGx2NWZBeExlT01n'+
			'Q29qYWt0ek5yZHloSUt3Y0MrbWV5aW8xLzBRVnhubldZQWlUOXlRUHRSdDNob2JsdEhlUWxNUXVzb0E0RGFsTnJNck4ydExLTVFET3pDcEU3emZjUDN4TEdWQ1loYnlkQU1JS0hOaXZoWkErK1FBYzFoVzRMOTlkNEJrOUE2eWdhMmlWbTdXN21EUWppd0k3VFFON01uL2dVSHVBZzN0R1VlUXBNRjdMdGN3SVMzampJQXFITlRMek5ybjFMdXBCQU1MSkQ4bEJZYjRBT0F4NDZ0MUFHRUJSWnVCcENJYzBCYmVsbzROR1lTSGdLVDBEcktCcmFSV2Z0TDVTNEs0Y0FPVTlhZ29Vc1lqeDViR1lNRWFIKzZpQTF0aVRobzRmbXA0aDg3ZmVBcE1EbTFlWjUxZVZLNW0wSXdzTnJreDVSbjRJanJaSTlJZ3JhVkE5cH'+
			'RaMHFHeGdiV1VJbkFOakJybjFTV1V3Z0g5aEhsSFR6bVl1d3FTZEJlbFFzdFBKL1JadDN1Zy9FWktnallKYjNybWJWUEtwUkNNTEM2NUNIcTVBMTVyL2ovK25ockRCS2d2Y1lCYmJGemFNdysvbmJyS0pGLzBRWUE5Yjg4QkhacFg1Ulord3ZscHhTQ2dkVW5EMUNuYnlyNHNkS3ZKRUY3blFQYUluNW9UR0R2VnlDd3kvb2l6Tm9ubEhzb0JBTnJTQ2FvbXpjVy9lenlJVW5RL2p5VERhMmxod2t0ekhya2pkM09zOEtBdmNpc2ZWeTVsMEk0c0gzVTdadVpINUMzUzRMMkJnZTBoWVdoaFcvMkN0aDVENEgxdjhDc2ZWeFpRU0VjMkh1MGxBbTRWbUcwU1lLMnpSMDBKckM5SGdLVDBMYkFBS0EyOXovUHJIMU0r'+
			'VG1GWUdCS2NpOHRkUkpIRC9CYTN6ajgwSzZoWmRQMjkzS1daenU1NzlJZ0Z0U2xtZTdYUmJOcmFrZVVBRHByK2ZVZXBZTVNRTXN1Z1hadzMrV1kxK3pYRFFEcTl4d0FJMFdCamJudkVpRERTNVpIUGNETElNUlVMei8vTExQMk1lVSttbDB5N2VDK1MrUXU3YzYrYm05ZmZFcnlYY3FxeXhQSFQ0bmIwQmlsUGtBVGhBekV5dHpYdVlRREdpdjJSMHBhTHBnU2tSbkVJVENNdmg5Z1RMaVJHWUNwWGpId0RMUDIwWVpmVWtKTXpjWE52WVdReGFjazM2R3N1cnh4MHpvcUJnbUh6dTNUMllmT1lyRlhZUWcvUkRvRkpySTJIN0Q3S1FRZklrVUNBOXkzam9xaGpLRHRsZ1RzR2srQlBjV3MvWG5EQXhTQ2dVMU43cU'+
			'lDNXdOUVd1dW9HQ1JBMitFUW1wZkFKRFJlc1lHdFpkYitWMzByaFhCZ2Y2VUM1eHRLcWEyallwQUFiU2NuTkh1TmYwVUIrOWJBR21idHJ2bzJDc0hBcGlVN3FjRDVScVRraDBXc2tBTk5aUTM2dXl4Zy9kNEJ1M0pnTmJOMlYvMkRGSUtCVFUvdW9BTG5HeE1oVHlRUkRDMjg2RXhiWjdFQm5nS1RkRS9tdHdlZVlOYnVxbnVJUWpDd0dhbS9VSUh6NVkyd3g5N2NlMUlJdFBEaU04VmJSYjBqQ2RpMUhnSzdhdUF4Wm0yajdtRUt3Y0JtcHQ2aUF1Y3JHS0hQVnJxbk5HamgyeGpBL2paVkRyQjVYZ0w3NmpmTTJucnRLZ3Jod0xaUmdmTVZqZkFIZVAzTUhUUW1zRjBlQXZPNGRSU0ZjR0J2VUlIek1TUGxLWEho'+
			'TDl0aTRJY1dYbkthQlN4Q0lRTlluM2ZBT0Z0SFVRZ0dkbEhxZFNwd1BxNUlleFFoSjdUd1VnWXd1OU9pSjhCa05WNjVldUJYek5wSEFvOVRDQVkySy9VcUZUZ2ZkNlErNzNKNWNXamhaZDNlQUZNOUJNYlpPb3BDTUxEWnFhMVU0SHlPSXYyaHFqODVsUmRhK0E0R3NFNUp3Szd6RkJoWDZ5Z0s0Y0RpVk9COGpqTXVUKzY5ZXlTMDhJOFl3T3crL3VLQjlYSUE4N1oxRklWd1lERXFjRDVYY2J6VXA1UzhkbEZrMm85UHRmVVVHN05qZWlTekhzeksyODV6Ukp2UDdOZUEvWDlMbm1VNzJhVkUxenNCbHFlRitvamxPeVBYbTQxSnptdmN3RDRKcktVRWxqWnFQZGxReTA0WDdUempqYWt0bEZWM1BES3V5Rmpabm'+
			'dXR2dqMWpuU0l6aUFYMSt4ekFEdFFOOTRmTmg4Z0ZNbTVnaHdOUFV6TFVvMVVJc25oVGFqTmwxUjJ2ak9lRDdvdG11NlJESkE4d2oxdEhVUWcrUkpZVE1LQk1rTm5QdXhUNUYvMDJBTlZ1NTFrMEhyZU9vaEFPYkJNVk9KK1FYT0QxQnJ3NUk5SkNCUDlGMzVocXB6d0RQVzRkUlVYLzNITlRMMU9COHdsTE9lekplcEJwR2l3aThma2VBK05zSFVVaEhOaEdLbkErb2ZFYzJkTFRiVG95NjhkS2hjWU56T1BXVVJTQ2dWM2MreElWT0ovd2VJNE1BSmFVRGkwK1A4a0h6T1BXVVJUQ2dXMmdBdWVUa3JKQUJnQzNuWEVOTGI2QUY1aTNyYU1vQkFPN3BIYzlGVGlmdEpRTk1zQVZ0RWtMN05LK0tCVTRuOVNVRlRJ'+
			'QVdNd1BMWDdUT1Q1Zyt5UUI0Mnk4UWlFWTJHVjk3RWN6bGxQS0Roa0FMR0pEaTkvTUNlejlpZ1AySWhVNDM3aWtMSkVCUUV0UFFXamN3TjVUS2d4WS93dFU0SHpqbHJKRkJnQUx4MEtMMytJMU1MN1dVUlNDZ1RYM1AwOEZ6amV1S2FzUHlBdGwxOVJJQ0xEb3JXZmJXM25HNzFWeUhvWmFlbGNmd0c2OHd0azZpbkVsMzFGWEh4Qml4aTgvL3l4bDFTM25UQWhrVHJMSEJrYnNQZGc0dDQ2aXlHbGJsVCtPa01XdkdIaUdzdXFXZThyNmNPazBleVFkSXAwQUUxUVhBQ29DR0ZCQnlQWUVLdzNZVTFUZ2ZKNm1JcER0bGdTTXMzVVVoWEJnYTZuQStUelBoRDhueXdMejVheG9IYlg4MnVrNW1RR0x1N05QM3BQOE'+
			'VzN0pqQ3NIVm9kWWRTZGFLbUZQMWdrUDltQWZpdCtER1FDN205RkVUQ1VnYTRHWTlXaE9Xa2RSU0FERzB6cHFJbWJDSTF1UWJOZFIrbm8wSjYyaktDUUE0MmtkTlZFejRaRUJKVU16QU83V1VSUVNnUEcwanBySXFRaGtBRERmSFRUdXpqN1NnSEcwanByb3FSaGtBREEvNVFnYU43QkRrb0R4dEk2cWhGUVVNb0FiV2dZWVgrc29DZ25BZUZwSFZVb3FEaGtBM0ZnY0dqZXdnOUtBc1Z0SFZWSXFFaGtBM0pBZm1nRnd0NDZpa0FDTXAzVlVwV1hDWC9GbjVmMkdvVlVaUFFCblo1OGNZQ1UyWE1tRys2YmZTa3pGSXdPQWZRMGQwd2lRNW13ZFJXRU43OEVFSUp2VXdJQkpnb3czQit2c1BaaVlyajVBRlJpQUNq'+
			'NG5jNW9EZGJMT3dTWTNNS0NLREFDd3Z3cE1haVk5c2lvdytablV5UGJYVjRHTlJ5WTFNZ0N0QXVmaWJsc3cyVExaa2FuSTRDZzFWV0JGTXFtUjJSOHRxU2dOV2hVWUk1TWFHUURZcXpCVXVJTldCY2FSU1k4TWNBMnRDb3d6VldSMnJuVUdqYnZ4U2pWVlpDTnlEUiswS2pDSHFTSWJGUWEwS2pBWHFTTExFL3UrU3hVam9YRzNqcXBtWktxck1JcmtZRzJIMzI1QkJkN1dVZFdNVFJVWkk0ZHFPL3dBd05ONHBacjgrWC9laUdlV2dDZTRSZ0FBQUFCSlJVNUVya0pnZ2c9PSIgdHJhbnNmb3JtPSJzY2FsZSguNDgpIi8+Cjwvc3ZnPgo=';
		me._svg_1__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.onmouseover=function (e) {
			me._svg_1__img.style.visibility='hidden';
			me._svg_1__imgo.style.visibility='inherit';
		}
		me._svg_1.onmouseout=function (e) {
			me._svg_1__img.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
			me._svg_1__imga.style.visibility='hidden';
		}
		me._svg_1.onmousedown=function (e) {
			me._svg_1__imga.style.visibility='inherit';
			me._svg_1__imgo.style.visibility='hidden';
		}
		me._svg_1.onmouseup=function (e) {
			me._svg_1__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_1__img.style.visibility='inherit';
			} else {
				me._svg_1__imgo.style.visibility='inherit';
			}
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._svg_1);
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 98px; height: 81px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
		}
		me._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		me._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="Thumbnail Active";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 54px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 91px;';
		hs+='height: 21px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['text_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
			}
		}
		me._text_1.onmouseover=function (e) {
			me.elementMouseOver['text_1']=true;
			me._text_1.logicBlock_visible();
		}
		me._text_1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_1__text)
					return;
				}
			}
			me.elementMouseOver['text_1']=false;
			me._text_1.logicBlock_visible();
		}
		me._text_1.ontouchend=function (e) {
			me.elementMouseOver['text_1']=false;
			me._text_1.logicBlock_visible();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._text_1);
		me._thumbnail_nodeimage.appendChild(me._thumbnail_active);
		me.__div.appendChild(me._thumbnail_nodeimage);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};