function lastName(): string {
  return " Pandit";
  // return 7;
}

function firstName(name: string): string {
  return name + lastName();
}

let myName = firstName("Arvind");

console.log(myName);
