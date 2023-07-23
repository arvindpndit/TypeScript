let id: string | number;

id = 5;
id = "kdfj234";

let randomArr: (string | number)[] = ["1", 2, 3, "4"];

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let arvind: User | Admin = { name: "arvind", id: 334 };

arvind = { username: "arvindpndit", id: 334 };
