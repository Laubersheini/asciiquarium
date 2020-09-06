var lineCount=60;
var colCount = 200; //fine for 16/9, needs to be determind on resize ?

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
  renderer.clearAllEntities();
  
  add_castle();
  add_all_seaweed();
  add_environment();
  add_special_thing();
  initialize_fish();





  Renderer.update(renderer)
}
initialize()

function add_special_thing(){
  const objectCount =3
  let randomId = Math.floor(Math.random()*objectCount);


  switch (randomId) {
    case 0:
      add_big_fish();
    break;
    case 1:
      add_ship();
    break;
    case 2:
      add_swan();
    break;
    default:

  }


}


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

  renderer.addEntity(new Entity({sprite:repeatedWaterLineSegment,x:0,y:9}))
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

function add_all_seaweed(){
  let seaweed_count = Math.floor(colCount/15);

  for (var i = 0; i <seaweed_count; i++) {
    add_seaweed()
  }

}

function add_seaweed(){
    let height = Math.floor(Math.random()*4)+3;
    let seaweedSprite = []
    seaweedSprite[0] = [];
    seaweedSprite[1] = [];
    for (var i = 0; i <height ; i++) {
      if(i%2==1){
      seaweedSprite[0].push("(");
      seaweedSprite[1].push(" )");
    }else{
      seaweedSprite[0].push(" )");
      seaweedSprite[1].push("(");
    }
    }

    let x = Math.ceil(Math.random()*(colCount-2));
    let y = lineCount-height;
    let animationSpeed = Math.floor(Math.random()*20)+10
    renderer.addEntity(new Entity({
      sprite:seaweedSprite,
      x:x,
      y:y,
      animationSpeed: animationSpeed

    }))

}

  function initialize_fish(){
    let screenSize = (colCount-9) * lineCount;
    let fish_count = Math.floor(screenSize/350);
    for (var i = 0; i < fish_count; i++) {
      add_fish();
    }


  }

  function add_fish(){// TODO: fish need bubble
    let fish_sprites = [
      Entity.spriteToArray`
             \
           ...\..,
      \  /'       \
       >=     (  ' >
      /  \      / /
          ´"'"'/''
      `,
      Entity.spriteToArray`
             2
           1112111
      6  11       1
       66     7  4 5
      6  1      3 1
          11111311
      `,
      Entity.spriteToArray`
            /
        ,../...
       /       '\  /
      < '  )     =<
       \ \      /  \
        ´'\'"'"'
      `,
      Entity.spriteToArray`
            2
        1112111
       1       11  6
      5 4  7     66
       1 3      1  6
        11311111
      `,
      Entity.spriteToArray`
          \
      \ /--\
      >=  (o>
      / \__/
          /
      `,
      Entity.spriteToArray`
          2
      6 1111
      66  745
      6 1111
          3
      `,
      Entity.spriteToArray`
        /
       /--\ /
      <o)  =<
       \__/ \
        \
      `,
      Entity.spriteToArray`
        2
       1111 6
      547  66
       1111 6
        3
      `,
      Entity.spriteToArray`
             \:.
      \;,   ,;\\\\\,,
        \\\\\;;:::::::o
        ///;;::::::::<
       /;´ ´´/////´´
      `,
      Entity.spriteToArray`
             222
      666   1122211
        6661111111114
        66611111111115
       666 113333311
      `,
      Entity.spriteToArray`
            .:/
         ,,///;,   ,;/
       o:::::::;;///
      >::::::::;;\\\\\
        ''\\\\\\\\\'' ';\
      `,
      Entity.spriteToArray`
            222
         1122211   666
       4111111111666
      51111111111666
        113333311 666
      `,
      Entity.spriteToArray`
        __
      ><_'>
         '
      `,
      Entity.spriteToArray`
        11
      61145
         3
      `,
      Entity.spriteToArray`
       __
      <'_><
       ´
      `,
      Entity.spriteToArray`
       11
      54116
       3
      `,
      Entity.spriteToArray`
         ..\,
      >='   ('>
        '''/''
      `,
      Entity.spriteToArray`
         1121
      661   745
        111311
      `,
      Entity.spriteToArray`
        ,/..
      <')   ´=<
       ´´\´´´
      `,
      Entity.spriteToArray`
        1211
      547   166
       113111
      `,
      Entity.spriteToArray`
         \
        / \
      >=_('>
        \_/
         /
      `,
      Entity.spriteToArray`
         2
        1 1
      661745
        111
         3
      `,
      Entity.spriteToArray`
        /
       / \
      <')_=<
       \_/
        \
      `,
      Entity.spriteToArray`
        2
       1 1
      547166
       111
        3
      `,
      Entity.spriteToArray`
        ,\
      >=('>
        '/
      `,
      Entity.spriteToArray`
        12
      66745
        13
      `,
      Entity.spriteToArray`
       /,
      <')=<
       \´
      `,
      Entity.spriteToArray`
       21
      54766
       31
      `,
      Entity.spriteToArray`
        __
      \/ o\
      /\__/
      `,
      Entity.spriteToArray`
        11
      61 41
      61111
      `,
      Entity.spriteToArray`
       __
      /o \/
      \__/\
      `,
      Entity.spriteToArray`
       11
      14 16
      11116
      `
    ]

    let fish_num = Math.floor(Math.random()*fish_sprites.length/2);
    // fish_num = 0;
    let fish_index = fish_num *2;
    let speed = Math.floor(Math.random()*3000)+600 //lower numbers means faster fish
    let fish_object = new Entity({
      sprite: fish_sprites[fish_index],
      dieOnOutOfBounds: true,
      deathCallback:add_fish


    })

    let minHeight =9;
    let maxHeight = lineCount - fish_sprites[fish_index].length;

  fish_object.setY(Math.floor(Math.random()*(maxHeight-minHeight))+minHeight);
    if(fish_num%2 == 0){//fish is looking to the right
      fish_object.setX(-10);
      fish_object.moveTo({x:colCount+50,y:fish_object.y,duration:speed})

    }else{//leftwards fish
        fish_object.setX(colCount);
        fish_object.moveTo({x:-50,y:fish_object.y,duration:speed})
    }
    renderer.addEntity(fish_object)
  }

function add_big_fish(){

  let fish_sprites = [
    Entity.spriteToArray`
     ______
    '""-.  '''''-----.....__
         '.  .      .       '-.
           :     .     .       '.
     ,     :   .    .          _ :
    : '.   :                  (@) '._
     '. '..'     .     ='-.       .__)
       ;     .        =  ~  :     .-"
     .' .''.   .    .  =.-'  '._ .'
    : .'   :               .   .'
     '   .'  .    .     .   .-'
       .'____....----''.'=.'
       ""             .'.'
                   ''"''
    `,
    Entity.spriteToArray`
                               ______
              __.....-----'''''  .-""'
           .-'       .      .  .'
         .'       .     .     :
        : _          .    .   :     ,
     _.' (@)                  :   .' :
    (__.       .-'=     .     '..' .'
     "-.     :  ~  =        .     ;
       '. _.'  '-.=  .    .   .''. '.
         '.   .               :   '. :
           '-.   .     .    .  '.   '
              '.='.''----....____'.
                '.'.             ""
                  ''"''
    `
  ]
  generateSpecialThing(fish_sprites,9,lineCount - fish_sprites[0].length,3000,600)

}

function add_ship(){

var sprites = [
  Entity.spriteToArray`
       |    |    |
      )_)  )_)  )_)
     )___))___))___)\
    )____)____)_____)\\\
  _____|____|____|____\\\\\__
  \                   /
  `,
  Entity.spriteToArray`
           |    |    |
          (_(  (_(  (_(
        /(___((___((___(
      //(_____(____(____(
  __///____|____|____|_____
      \                   /
  `
]
generateSpecialThing(sprites,2,2,2500,0)// TODO: find out how this was in the original
}
function add_swan(){

var sprites =
  [
Entity.spriteToArray`
       ___
,_    / _,\
| \   \( \|
|  \_  \\\
(_   \_) \
(\_   '   \
 \   -=~  /
`
	,
Entity.spriteToArray`
 ___
/,_ \    _,
|/ )/   / |
  //  _/  |
 / ( /   _)
/   '   _/)
\  ~=-   /
`
	]

generateSpecialThing(sprites,2,2,3000,600)

}

function generateSpecialThing(sprites,minHeight,maxHeight,lowerSpeed,upperSpeed) {

        let index = Math.floor(Math.random()*2);


        let speed = Math.floor(Math.random()*upperSpeed)+lowerSpeed //lower numbers means faster fish
        let fish_object = new Entity({//shouldnt tecnically be called this way anymore but meh..
          sprite: sprites[index],
          dieOnOutOfBounds: true,
          deathCallback:add_special_thing


        })


      fish_object.setY(Math.floor(Math.random()*(maxHeight-minHeight))+minHeight);
        if(index%2 == 0){//fish is looking to the right
          fish_object.setX(-10);
          fish_object.moveTo({x:colCount+50,y:fish_object.y,duration:speed})

        }else{//leftwards fish
            fish_object.setX(colCount);
            fish_object.moveTo({x:-50,y:fish_object.y,duration:speed})
        }
        renderer.addEntity(fish_object)
  }





//helper funcions
function setCharAt(str,index,chr) {//maby put into the renderer class ?

    return str.substring(0,index) + chr + str.substring(index+1);
}


function detectColCount(terminal){
  var height = terminal.style.height;
  var width =terminal.style.width
  terminal.style.height = "";
  terminal.style.width ="";

  let temp = terminal.innerHTML;
  terminal.innerText = "~"
  var single_width =terminal.getBoundingClientRect().width


  terminal.style.height = height;
terminal.style.width =width;
  terminal.innerHTML = temp;




  return Math.ceil(window.innerWidth/single_width);
}


function resize(){
document.getElementById('terminal').style.fontSize = document.getElementById('terminal').offsetHeight/60 +"px";

colCount = detectColCount(document.getElementById('terminal'))

initialize()
}
resize()//call at beginig so everything looks good
window.addEventListener("resize",resize)
