
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(value){
    if (value !== Boolean){
      return value;
    }
  });
}

bouncer([7, "ate", "", false, 9]);
