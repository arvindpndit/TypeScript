type userInformation = {
  readonly id: number; //cannot change
  name: string;
  password: string;
  username: string;
  credcardDetails?: number; //optional
};

let userFirst: userInformation = {
  id: 1,
  name: "arvind",
  password: "arvindpandit123",
  username: "arvindpndit",
};

function userInfo(userInfo: userInformation) {
  console.log(userInfo.id + userInfo.name);
}

userInfo(userFirst);
