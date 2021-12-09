function pastelStart(){

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function randoInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function addColors(){
    const main_div = document.querySelector('[pastel]');
    const children = main_div.getElementsByTagName("*")
    console.log(children)
    children.forEach( function(index, value){
      const rando1 = randoInt(205,245)
      const rando2 = randoInt(205,245)
      const rando3 = randoInt(205,245)
      const color = rgbToHex(rando1, rando2, rando3)
      index.style.backgroundColor = color
    })
  }

  window.addEventListener("load", addColors);

}

module.exports = {
  pastelStart: pastelStart
}