const getPoetry = () => {
  const url = "https://v1.jinrishici.com/all.json";
  const promise = fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      const {
        origin: originText,
        author: authorText,
        content: contentText,
      } = obj;
      return [originText, authorText, contentText];
    })
    .catch((error) => {
      console.log(error.message);
    });
  return promise;
};

const getPoetryAsync = async () => {
  const url = "https://v1.jinrishici.com/all.json";
  let ret = null;
  try {
    ret = await fetch(url, { method: "GET" }).then(response => response.json());
  } catch (e) {
    console.log(e.message);
  }

  return [ret.origin, ret.author, ret.content];
};

export { getPoetry, getPoetryAsync };
