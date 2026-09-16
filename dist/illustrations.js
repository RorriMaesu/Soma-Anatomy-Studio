/* Textbook coordinates are kept in original image pixels, not viewport percentages.
   The original files remain untouched. Printed pointers are preserved and used to route interactive callouts. */
export const illustrations = {
 integumentary:{size:[201,526],strokes:[[0,26,87,26],[0,117,55,117],[0,356,35,308],[0,434,67,511]],clear:[],targets:[{points:[[64,124]],side:'left'},{points:[[87,24]],side:'right'},{points:[[35,306],[67,511]],side:'left',detail:[7,266,60,66]}]},
 skeletal:{size:[240,526],strokes:[[0,47,118,47],[0,205,51,175],[0,205,85,270],[0,404,86,360],[0,404,85,473]],clear:[[0,29,30,28],[213,0,27,96]],targets:[{points:[[85,270],[51,175]],side:'left'},{points:[[119,46]],side:'right',detail:[78,19,77,70]},{points:[[86,362],[85,473]],side:'left',detail:[64,333,57,64]}]},
 muscular:{size:[228,526],strokes:[[1,226,81,270],[1,406,79,443]],clear:[[200,0,28,135],[0,385,8,24]],targets:[{points:[[82,267]],side:'left'},{points:[[77,444]],side:'right',detail:[54,392,61,88]}]},
 nervous:{size:[241,526],strokes:[[0,31,115,31],[0,160,120,143],[9,317,87,414],[9,317,25,287]],clear:[[213,0,28,135],[0,303,7,22]],targets:[{points:[[121,31]],side:'right'},{points:[[119,144]],side:'left'},{points:[[88,415]],side:'left',detail:[67,352,54,101]}]},
 endocrine:{size:[231,522],strokes:[[0,40,111,40],[0,92,114,92],[6,189,111,189],[0,253,95,216],[0,253,130,208],[40,352,111,277],[40,352,116,282],[96,215,130,207]],clear:[[193,0,38,144],[0,337,39,29],[180,340,51,182],[0,182,7,14]],targets:[{points:[[111,40]],side:'left',detail:[70,8,82,85]},{points:[[114,93]],side:'right',detail:[72,69,85,64]},{points:[[117,186]],side:'left',detail:[67,157,94,83]},{points:[[96,214],[130,207]],side:'right',detail:[66,174,99,72]},{points:[[109,281],[116,278]],side:'left',detail:[79,251,71,63]}]},
 cardiovascular:{size:[238,522],strokes:[[0,140,128,140],[0,346,25,346],[25,346,82,222],[25,346,82,306]],clear:[[211,0,27,139]],targets:[{points:[[128,143]],side:'right',detail:[80,89,92,103]},{points:[[80,305],[82,224]],side:'left'}]},
 lymphatic:{size:[303,704],strokes:[[8,63,152,150],[0,151,67,171],[0,151,75,200],[0,241,185,241],[33,518,33,398],[33,518,125,457]],clear:[[0,51,8,25],[0,502,29,41]],targets:[{points:[[151,146]],side:'left',detail:[114,106,77,94]},{points:[[83,186]],side:'right',detail:[54,142,75,89]},{points:[[186,246]],side:'right',detail:[140,210,82,77]},{points:[[125,457],[34,400]],side:'left'}]},
 respiratory:{size:[252,704],strokes:[[63,79,124,79],[0,167,127,130],[0,239,98,184],[0,246,160,184]],clear:[[0,64,59,30],[235,0,17,36]],targets:[{points:[[126,77]],side:'left',detail:[84,35,83,87]},{points:[[127,143]],side:'right',detail:[98,112,61,79]},{points:[[96,193],[159,195]],side:'left'}]},
 digestive:{size:[307,701],strokes:[[0,125,178,237],[0,231,119,231],[0,283,129,244],[0,401,134,272],[0,513,159,317]],clear:[[278,0,29,45]],targets:[{points:[[174,238]],side:'right',detail:[92,192,113,96]},{points:[[115,224]],side:'left'},{points:[[127,243]],side:'left',detail:[98,214,66,66]},{points:[[152,317]],side:'left',detail:[96,255,116,102]},{points:[[184,289]],side:'right',detail:[94,250,119,110]}]},
 urinary:{size:[252,701],strokes:[[0,221,103,275],[0,221,147,271],[0,375,124,339]],clear:[[237,0,15,38]],targets:[{points:[[102,282],[147,280]],side:'left',detail:[70,251,105,105]},{points:[[126,338]],side:'right',detail:[87,294,78,78]}]},
 'reproductive-male':{size:[308,696],strokes:[[23,295,144,362],[35,475,146,373],[35,475,160,370]],clear:[[280,0,28,83],[0,280,24,27],[0,453,33,33]],targets:[{points:[[147,374],[160,371]],side:'right',detail:[119,330,70,73]},{points:[[142,363]],side:'left',detail:[119,330,70,73]}]},
 'reproductive-female':{size:[252,696],strokes:[[11,131,82,198],[11,131,163,198],[0,296,107,337],[0,296,146,333],[0,439,124,350]],clear:[[230,0,22,77],[0,115,7,25]],targets:[null,null,{points:[[106,339],[146,335]],side:'left',detail:[79,310,94,83]},{points:[[125,346]],side:'right',detail:[79,310,94,83]},{points:[[86,207],[169,207]],side:'left'}]}
};

// Explicit printed leader ownership, indexed by the structure list.
const leaderGroups={
 integumentary:[[1],[0],[2,3]],skeletal:[[1,2],[0],[3,4]],muscular:[[0],[1]],
 nervous:[[0],[1],[2,3]],endocrine:[[0],[1],[2],[3,4],[5,6]],
 cardiovascular:[[0],[1]],lymphatic:[[0],[1,2],[3],[4,5]],
 respiratory:[[0],[1],[2,3]],digestive:[[0],[1],[2],[4],[3]],urinary:[[0,1],[2]],
 'reproductive-male':[[1,2],[0]],'reproductive-female':[[],[],[2,3],[4],[0,1]]
};
for(const [file,groups] of Object.entries(leaderGroups))groups.forEach((indices,i)=>{if(illustrations[file].targets[i])illustrations[file].targets[i].leaders=indices;});

// Load the original textbook asset directly. Never erase or synthesize pixels.
const cache=new Map();
export function loadAnatomy(file){
 if(cache.has(file))return cache.get(file);
 const promise=new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im.src);im.onerror=()=>{cache.delete(file);reject(Error('Illustration could not load.'));};im.src=`assets/${file}.png`;});
 cache.set(file,promise);return promise;
}
export function figureGeometry(file,organ,detail){const cfg=illustrations[file],t=cfg.targets[organ],box=detail&&t?.detail?t.detail:[0,0,...cfg.size];const [x,y,w,h]=box;const scale=Math.min(260/w,550/h);const ox=250-w*scale/2,oy=300-h*scale/2;return {box,scale,ox,oy,point:([px,py])=>[ox+(px-x)*scale,oy+(py-y)*scale],inside:([px,py])=>px>=x&&px<=x+w&&py>=y&&py<=y+h};}
