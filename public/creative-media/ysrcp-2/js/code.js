
  // vars
  var w = 300;
  var h = 600;
  var totHits = 2;
  var curHits = 0;

  var completedNumb = 0;
  var inactiveDisabled = false;
  var ftDrag = true;
  var myDraggable = [];
  var startX, startY;
  var canvas, ctx;
  var stopToggle = false;
  var dragFt = false;

  var o = {};

  var oNames = {
    id: 'adArea p1 p2 p3 p4 picCont t2 pluses darker clickArea pic1Anim pic2Anim pic3Anim pic4Anim',
  }

  function init(){
    initAnim();
  }

  function initAnim(){

    o.clickArea.addEventListener("click", ctaFunction);

    activatePluses();
    // setTimeout()

    // }});
  }

  var cX = 0;
  var cY = 0;
  var dY = 0;
  var endLoop = false;

  // function animLoop(){
  //   if(!endLoop){
  //     requestAnimFrame(animLoop);
  //   }
  // }

var plusesList;
var pPos;
var cPos = [233, 17];
var pActive = {};
var pFix = {};
var pTl;
var activeId;

function activatePlusesStrokes(){
  pTl = new TimelineMax({repeat: -1});
  pTl.set('.plus_stroke', {scale: 0.8, opacity: 1})
    .to('.plus_stroke', 0.2, {scale: 1.25, opacity: 0})
}

function activatePluses(){
  console.log("activatePluses")

  activatePlusesStrokes();

  plusesList = ['p1', 'p2', 'p3', 'p4'];
  pPos = [ [35, 310], [140, 310], [35, 400], [140, 400], [222, 99], [175, 68] ];
  var scale = 0.5;
  var ady = 0;
  pFix = { x: -20, y: -20 };
  var ll = plusesList.length;
  for(var i=0; i<ll; i++){

    var el = o[ plusesList[i] ];
    TweenMax.set(el, {scale: 0, x: pPos[i][0]+pFix.x, y: pPos[i][1]+pFix.y + ady, opacity: 0 });
    TweenMax.to(el, 0.5, {delay: 0.1 + i*0.2, scale: scale, y: pPos[i][1]+pFix.y, opacity: 1, ease: Back.easeOut, onComplete: function(){
      pulsePlus( this.target.id );
    }});

    el.addEventListener("click", plusClicked);
  }
  TweenMax.set(o.pluses, {opacity: 1});
}

function closePic(){
  plusClicked();
}

var pulseTl = {};
function pulsePlus(id){
  console.log("pulsePlus", id);
  // pulseTl[id].kill();
  pulseTl[id] = null;
  TweenMax.set(o[id], {scale: 0.5})
  pulseTl[id] = new TimelineMax({repeat: -1, yoyo: true});

  pulseTl[id].fromTo(o[id], 0.5, {delay: 0.2, scale: 0.5}, {delay: 0.5, scale: 0.35, ease: Power1.easeInOut});
}

function startPulse( mode ){
  var count = 0;
  for(key in pulseTl){
    console.log(key );
    if( !mode ){
      pulseTl[ key ].kill();
    } else {

      setTimeout((function(key) {
        return function() {
          pulsePlus( key );

        };
      })(key), 500);

    }
    count++;
  }
}

function plusClicked(  ){
  console.log("plusClicked", this.id)

  if(!dragFt){
    _dsptr("started");
    dragFt = true;
  }


  var id = (this.id != null) ? this.id : activeId;
  var numb = id[1];

  pActive[id] = (pActive[id] != true) ? true : false;

  startPulse( !pActive[id] );

  activeId = (pActive[id]) ? id : null;

  TweenMax.to(o[id], 0.3, {scale: 0.8, opacity: 0, ease: Back.easeIn, onComplete: function(){
    // if(pActive[id]){
    //   TweenMax.to(o[id], 0.35, {x: cPos[0]+pFix.x/2, y: cPos[1]+pFix.y/2, scale: 0.5, rotation: 135, ease: Power2.easeInOut});
    // } else {
    //   TweenMax.to(o[id], 0.35, {x: pPos[ Number(numb)-1 ][0]+pFix.x, y: pPos[ Number(numb)-1 ][1]+pFix.y, scale: 0.5, rotation: 0, ease: Power2.easeInOut});
    // }
  }});

  showPic( pActive[id], numb );
  hideOtherPlus(id, pActive[id]);
  openBox(pActive[id], numb);
  // showCta(pActive[id]);
  // showDarker(pActive[id]);
  showText(pActive[id], numb);
  // showStrokes(pActive[id]);

  changeElements( pActive[id] );

  if( pActive[id] ){
    TweenMax.to(o.cta_arrow, 0.4, {delay: 2, x: 9, yoyo: true, repeat: 3, ease: Power2.easeInOut})
  }
}

function changeElements( mode ){
  var val = mode ? 1 : 0;
  var val2 = mode ? 0 : 1;
  TweenMax.set( o[ "cta" ], {opacity: val2} );
  TweenMax.to( o[ "cta" ], 0.3, {delay: 0.3, opacity: val} );
  TweenMax.set( o[ "cta_arrow" ], {opacity: val2} );
  TweenMax.to( o[ "cta_arrow" ], 0.3, {delay: 0.3, opacity: val} );
  TweenMax.set( o[ "logo_white" ], {opacity: val2} );
  TweenMax.to( o[ "logo_white" ], 0.3, {delay: 0.3, opacity: val} );
  TweenMax.set( o[ "close_btn" ], {opacity: val2} );
  TweenMax.to( o[ "close_btn" ], 0.3, {delay: 0.3, opacity: val} );
}

function hideOtherPlus(id, mode){
  var ease = mode ? Power1.easeIn : Power1.easeOut;
  var delayAdd = mode ? 0 : 0.5;
  for(var i=0; i<plusesList.length; i++){
    if( (plusesList[i] != id) || (!mode) ){
      var el = o[ plusesList[i] ];
      var val = (!mode) ? 1 : 0;
      TweenMax.to( el, 0.3, {delay: delayAdd + 0.05 * i, opacity: val, scale: val*0.5, ease: ease} );
    }
  }
}

function showPic( mode, numb ){
  var id = "pic"+numb;
  var val = (mode) ? 1 : 0;

  // o["picCont"].style.display = (mode) ? "block" : "none";

  if( mode ) {
    TweenMax.from(o[ "pic"+numb+"Anim" ], 0.6, {delay: 0.3 * val, rotation: 10 * (0.5-Math.random()), scale: 0.5, opacity: 0, ease: Power3.easeOut})
      TweenMax.set(o["picCont"], {scale: 1, opacity: 1});
      o["picCont"].style.display = "block";
      TweenMax.set(o[ id ], {delay: 0.3 * val, opacity: val})
  } else {
    TweenMax.to(o["picCont"], 0.3, {scale: 0.5, opacity: 0, ease: Power2.easeIn, onComplete: function(){
      o["picCont"].style.display = "none";
      TweenMax.set(o[ "pic"+numb+"Anim" ], {scale: 1, rotation: 0})
      TweenMax.set(o[ id ], {delay: 0.3 * val, opacity: val})
    }});
  }

  // TweenMax.set(o[ id ], {delay: 0.3 * val, opacity: val})

}

function openBox(mode, numb){
  var val = (mode) ? 1 : 0;
  var id = 'pic'+numb;
  var nval = 1-val;

  var ease = (mode) ? Power2.easeOut : Power1.easeIn;

  // TweenMax.set(o.picCont, {opacity: nval, scale: 0.5 + nval * 0.5})
  // TweenMax.to(o.picCont, 0.5, {opacity: val, scale: val, ease: ease})

  // if(mode){
  //   TweenMax.set(o[ id ], {opacity: nval, scale: 1 + val})
  // }
  // TweenMax.to(o[ id ], 0.5, {opacity: val, scale: 1.1+nval, ease: ease, onComplete: function(){
  //   if(mode){
  //     TweenMax.to(o[ id ], 2, {scale: 1+nval, ease: Linear.easeNone});
  //   }
  // }})
}

function showText(mode, numb){
  var val = (mode) ? 1 : 0;
  var id1 = 't' + numb + "1";
  var id2 = 't' + numb + "2";

  TweenMax.set(o[ id1 ], {delay: 0.3 * val, x: 60, opacity: 0})
  TweenMax.set(o[ id2 ], {delay: 0.3 * val, y: 25, opacity: 0})

  TweenMax.to(o[ id1 ], 0.65, {delay: 0.4 * val, opacity: val, x: 0, ease: Back.easeOut})
  TweenMax.to(o[ id2 ], 0.65, {delay: 0.7 * val, opacity: val, y: 0, ease: Power3.easeOut})
}

// function showCta(mode){
//   var val = (mode) ? 1 : 0;
//   var ease = (mode) ? Back.easeOut : Linear.easeNone;
//   TweenMax.set(o.cta, {scale: 1-val})
//   TweenMax.to(o.cta, 0.55-(1-val)*0.3, {delay: 0.2 * (val), opacity: val, scale: 1, ease: ease, transformOrigin: "50% 90%"})
// }

// function showDarker(mode){
//   var val = (mode) ? 0.5 : 0;
//   TweenMax.to(o.darker, 0.7, {opacity: val})
// }

// function showStrokes(mode){
//   var val = (!mode) ? 1 : 0;
//   TweenMax.set('.plus_stroke', {opacity: val})

//   console.log(mode);
//   if(mode){
//     pTl.kill();
//   } else {
//     activatePlusesStrokes();
//   }
// }




////////////////// F U N C T I O N S //////////////////////
///////////////////////////

  function activateButtons(){
    o.adArea.addEventListener("click", ctaFunction);
  }

  function removeButtons(){
    o.adArea.removeEventListener("click", ctaFunction);
  }

/////////////////////////////


  function getCssProperty(elmId, property){
     var elem = document.getElementById(elmId);
     return parseInt( window.getComputedStyle(elem,null).getPropertyValue(property) );
  }

  function getTransformValue(element, property){       
      var values = element.style.transform.split(")");
      for (var key in values){
          var val = values[key];              
          var prop = val.split("(");          
          if (prop[0].trim() == property)
              return prop[1];
      }                   
      return false;           
  }

  function pitagor(a, b){ return Math.pow( ( Math.pow( a , 2) + Math.pow( b , 2 ) ) , 0.5) }
  function easeInCubic(t) { return t*t*t }

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
          };
})();


var assetsCur = 0;
var assetsTotal = 0;
var allLoaded = false;
var kaspinasImg;
var swipe_allowed = false;

//

function initLoad(){
  prepareElements();
  loadAsset(assets.init);
}

function prepareElements(){
  // id
  var names = oNames.id.split(' ');
  for(var i=0; i<names.length; i++){
    var name = names[i];
    o[name] = document.getElementById(name);
  };
}


function loadOther(){
    assetsTotal =  Object.size(assets);
    for (var prop in assets) {
    	if(prop != "init"){
    		loadAsset(assets[prop]);
    	}
    }
}

function loadMid(){
    loadAsset(assets.mid);
}

function loadEnd(){
    loadAsset(assets.end);
}

function loadAsset(a){
    a.cur_asset_pack = 0;
    a.asset_packs = a.length;

  for(var k=0; k<a.asset_packs; k++){
      var names = a[k].names.split(" ");
      a[k].curLoad = 0;

      for (var i=0; i<names.length; i++){
          var img = new Image();
          img.myCustomData = {total: names.length, a:a, name:names[i], numb: k};
          img.onload = function() {
            o[this.myCustomData.name] = document.getElementById(this.myCustomData.name);
            
            var type = this.myCustomData.a[this.myCustomData.numb].type;
            var elAmm = 1;
            if (type == "class"){
              o[this.myCustomData.name] = document.getElementsByClassName(this.myCustomData.name);
              elAmm = o[this.myCustomData.name].length;
            }

            for(var j=0;j<elAmm;j++){
              // console.log(this.myCustomData.name);
              var el;
              if (type == "class"){
                el = o[this.myCustomData.name][j];
                el.style.backgroundImage = "url(" + this.src + ")";
              } else if (type == "id") {
                el = o[this.myCustomData.name];
                el.style.backgroundImage = "url(" + this.src + ")";
              } else if (type == "src") {
                console.log( this.src );
                el = o[this.myCustomData.name];
                o[this.myCustomData.name].src = this.src;
              }

              el.style.position = "absolute";
              el.style.width = this.width + "px";
              el.style.height = this.height + "px";

              if(this.myCustomData.a[this.myCustomData.numb].scale != 1){
                var scale = 2/this.myCustomData.a[this.myCustomData.numb].scale;
                TweenMax.set(el, {scale: scale, transformOrigin: '0% 0%'});
              }
            }

            countAsset( this.myCustomData.a, this.myCustomData.numb, this.myCustomData.total );
          };
          img.src = assets_url + names[i] + "." + a[k].format;
      }
  }
}

function countAsset(asset, o, total){
	asset[o].curLoad++;
	if(asset[o].curLoad == total) {
		asset.cur_asset_pack++;
		if(asset.cur_asset_pack == asset.asset_packs){
			assetSetLoaded();
		}
	}
}

function assetSetLoaded(){
    // console.log("assetSetLoaded");
    assetsCur++;
    if(assetsCur == 1){
    	// adArea.style.opacity = 1;
      init();
    	TweenMax.to(adArea, 0.3, {delay: 0.05, opacity: 1});
      // loadMid();
    	loadOther();
    // } else if(assetsCur == 2) {
      // loadEnd();

      // initDrag();
      // swipe_allowed = true;
    } else if(assetsCur == assetsTotal){
      allLoaded = true;
    }
}

//

Object.size = function(obj) { // get objects ammount in var
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


if (window.addEventListener) {
    window.addEventListener('load', initLoad(), false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initLoad());
}
