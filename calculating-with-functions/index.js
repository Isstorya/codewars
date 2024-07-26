function zero(arg = 0) {
  if (arg instanceof Function) {
    return arg.call(this, 0);
  } else return () => 0;
}
function one(arg = 1) {
  if (arg instanceof Function) {
    return arg.call(this, 1);
  } else return () => 1;
}
function two(arg = 2) {
  if (arg instanceof Function) {
    return arg.call(this, 2);
  } else return () => 2;
}
function three(arg = 3) {
  if (arg instanceof Function) {
    return arg.call(this, 3);
  } else return () => 3;
}
function four(arg = 4) {
  if (arg instanceof Function) {
    return arg.call(this, 4);
  } else return () => 4;
}
function five(arg = 5) {
  if (arg instanceof Function) {
    return arg.call(this, 5);
  } else return () => 5;
}
function six(arg = 6) {
  if (arg instanceof Function) {
    return arg.call(this, 6);
  } else return () => 6;
}
function seven(arg = 7) {
  if (arg instanceof Function) {
    return arg.call(this, 7);
  } else return () => 7;
}
function eight(arg = 8) {
  if (arg instanceof Function) {
    return arg.call(this, 8);
  } else return () => 8;
}
function nine(arg = 9) {
  if (arg instanceof Function) {
    return arg.call(this, 9);
  } else return () => 9;
}

function plus(b) {
  return (a) => a + b();
}
function minus(b) {
  return (a) => a - b();
}
function dividedBy(b) {
  return (a) => Math.floor(a / b());
}
function times(b) {
  return (a) => a * b();
}
