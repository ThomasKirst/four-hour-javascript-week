const coach = {
  name: "Miriam Haenle",
  age: 30,
  company: "neue fische GmbH",
  print() {
    return `${this.name} is ${this.age} years old and works for ${this.company}`;
  }
};
export { coach };
