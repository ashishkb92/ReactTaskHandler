
function *gen(){
  var i = 0;
  while(true){
    yield ++i;
  }
}

let it = gen();

export default it ;
