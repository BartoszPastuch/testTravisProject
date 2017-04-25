function Dog(type) {
  this.type = type || "any";
}

Dog.prototype.bark = function(says){
  return `The ${this.type} dog says ${says || "HauHau"}`
};

module.exports = Dog;