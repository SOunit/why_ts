interface User {
  name: string;
  age: number;
  hobbies: string[];
}

const user = {
  name: "name",
  age: 30,
  hobbies: ["hobby"],
};

{
  // 1. argumentに便利

  const showUser = (user: User): void => {
    console.log("name", user.name);
    console.log("age", user.age);
    console.log("hobbies", user.hobbies);
  };

  // 必要な項目は機械で管理されていて、楽
  // ctrl + spaceで提案してくれるのが素晴らしい
  showUser({});

  const result = showUser({ name: "name", age: 20, hobbies: ["hobby"] });
}

{
  // 2. return
  //　戻り値が機械的に保証されている、安心！！！
  // 結果が調査せずともわかる、素晴らしい

  const showUser = (user): User | null => {
    // 500行

    console.log("name", user.name);
    console.log("age", user.age);
    console.log("hobbies", user.hobbies);

    const condition = false;
    if (condition) {
      return null;
    }

    return user;
  };

  const result = showUser(user);
}
