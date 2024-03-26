let user = {
    name: "Василий Иванович",
    age: 35
  };

  const jsonStringify = JSON.stringify(user);
  console.log(jsonStringify);

  const jsonParse = JSON.parse(jsonStringify);
  console.log(jsonParse);