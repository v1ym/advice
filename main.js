var count = 1;

$(document).ready(function() {

});

function increase() {
  count += 1;
  document.getElementById('counter').innerHTML = count;
};

function decrease() {
  if (count >= 1) {
    count -= 1;
  };
  document.getElementById('counter').innerHTML = count;
};
