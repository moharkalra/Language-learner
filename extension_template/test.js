var doesCallbackAfterDrumpf = function(next) {
  console.log("MAKE A WALL")
  next("China")
}

doesCallbackAfterDrumpf(function(country) {
  console.log("AND MAKE "+country+" PAY FOR IT");
});
