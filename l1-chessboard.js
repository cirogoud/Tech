function chessBoard(size){

  const line = ' #'.repeat( size ),
        even = line.substring(0,size),
        odd = line.substring(1,size+1);
  let   out = '';

  while(size--){
    out = out + ((size % 2) ? odd: even ) + '\n';
  }

 return out;
}

console.log(chessBoard(8));
