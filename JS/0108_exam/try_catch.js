const foo = (value) => {
  if (value < 3) throw value;
  else console.log(value);
};

const bar = (value) => {
  try {
    foo(value);
  } catch (catchID) {
    console.log("bar - catch", catchID);
    return catchID;
  } finally {
    console.log("finally");
  }
};

const baz = (value) => {
  try {
    foo(value);
  } catch (catchID) {
    console.log("baz - catch", catchID);
    return catchID;
  } finally {
    console.log("finally");
  }
};

bar(2);
