
function destroyer(arr) {
  var args =  Array.prototype.slice.call(arguments),
  args = args.splice(1);
  
  var filtered =  arr.filter(function(value){
    return args.indexOf(value) === -1;
  });
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
