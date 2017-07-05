
function *gen(){
  var i = 0;
  while(true){
    debugger;
    yield ++i;
  }
}

let it = gen();

export default it ;
