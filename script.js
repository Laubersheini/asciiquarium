const lineCount=60;
const colCount = 200; //fine for 16/9, needs to be determind on resize ?

let depth = {


  shark		: 2,
	fish_start	: 3,
	fish_end	: 20,
	seaweed		: 21,
	castle		: 22,

	// waterline
	water_line3	: 2,
	water_gap3	: 3,
	water_line2	: 4,
	water_gap2	: 5,
	water_line1	: 6,
	water_gap1	: 7,
	water_line0	: 8,
	water_gap0	: 9


}

var renderer = new Renderer({terminal:document.getElementById("terminal"),rows:lineCount,colCount: 360});

function initialize(){
  add_environment();
  add_castle();
  add_all_seaweed();


  Renderer.update(renderer)
}
initialize()



function add_environment(){
  let water_line_segment = [
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "^^^^ ^^^  ^^^   ^^^    ^^^^      ",
    "^^^^      ^^^^     ^^^    ^^     ",
    "^^      ^^^^      ^^^    ^^^^^^  "
  ]

  let segment_size = water_line_segment[0].length;
  let segmentRepeat = Math.ceil(colCount/segment_size)
  let repeatedWaterLineSegment = [];
  for (var i = 0; i < water_line_segment.length; i++) {
    repeatedWaterLineSegment[i] = water_line_segment[i].repeat(segmentRepeat)
  }

  renderer.addEntity(new Entity({sprite:repeatedWaterLineSegment,x:0,y:0}))
}


function add_castle(){


// TODO: add masks=> only if i want coloring

  renderer.addEntity(new Entity({sprite:Entity.spriteToArray`
               T~~
               |
              /^\
             /   \
 _   _   _  /     \  _   _   _
[ ]_[ ]_[ ]/ _   _ \[ ]_[ ]_[ ]
|_=__-_ =_|_[ ]_[ ]_|_=-___-__|
 | _- =  | =_ = _    |= _=   |
 |= -[]  |- = _ =    |_-=_[] |
 | =_    |= - ___    | =_ =  |
 |=  []- |-  /| |\   |=_ =[] |
 |- =_   | =| | | |  |- = -  |
 |_______|__|_|_|_|__|_______|`,
x:colCount-32,y:lineCount-13

}))

}

/*
function add_all_seaweed(){
  let seaweed_count = Math.floor(colCount/15);

  for (var i = 0; i <seaweed_count; i++) {
    add_seaweed()
  }

}

function add_seaweed(){
    let height = Math.floor(Math.random()*4)+3;
    let seaweed
    for (var i = 0; i <height ; i++) {

    }

}
*/


//helper funcions
function setCharAt(str,index,chr) {//maby put into the renderer class ?

    return str.substring(0,index) + chr + str.substring(index+1);
}


function resize(){
document.getElementById('terminal').style.fontSize = document.getElementById('terminal').offsetHeight/60 +"px";
}
resize()//call at beginig so everything looks good
window.addEventListener("resize",resize)
