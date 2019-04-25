kim = {name:'Kim'};
lee = {name:'Lee'};
function hi(){
    console.log('hi, ' + this.name);
}
// hi.call(kim);
// hi.call(lee);
var KimsHi = hi.bind(kim);
KimsHi();