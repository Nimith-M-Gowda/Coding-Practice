//NOTE : array with positive integers ONLY

const leastdiff = (num) => {
let givenarr = num.sort((a,b) => a-b );
let minval = givenarr[givenarr.length - 1]
if(givenarr.length>1){
  for(let i=givenarr.length-1;i>0;i--){
    minval = (minval < givenarr[i]-givenarr[i-1] ? minval : givenarr[i]-givenarr[i-1])
  }
  return minval;
}
return givenarr.toString()

}


console.log(leastdiff([1, 19, -4, 31, 38, 25, 100]));
