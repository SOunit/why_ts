{
  const showUser = (user) => {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    console.log("name", user.name);
    //
    //
    //
    //
    //
    //
    //
    //
    console.log("age", user.age);
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    console.log("hobbies", user.hobbies);
  };

  // 引数について、何の情報も出してくれない
  // イラッとする
  // 調べさせんな！！！！
  showUser({});
}

{
  // 2. return type
  // 何が帰ってくるか、調査が必要、500行とかあるかも
  // 間違うこともある、不安！！！！

  const showUser = (user) => {
    console.log("name", user.name);
    console.log("age", user.age);
    console.log("hobbies", user.hobbies);
    console.log("job", user.job);

    const condition = false;
    if (condition) {
      return null;
    }

    return user;
  };

  // runtime errorに気づかないJS
  const result = showUser();
}
