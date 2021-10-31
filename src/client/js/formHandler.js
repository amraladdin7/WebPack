// const getKey = async () => {
//   const response = await fetch("http://localhost:8081/key");
//   try {
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.log("error: " + e);
//   }
// };

// const getFormData = async (requestOptions) => {
//   fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//     .then((response) => {
//       console.log(response);
//       return {
//         status: response.status,
//         body: response.json(),
//       };
//     })
//     .then(({ status, body }) => {
//       console.log(body);
//     })
//     .catch((error) => console.log("error", error));
// };

const postData = async (url, text) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    }),
  });
  try {
    const resData = await res.json();
    console.log(resData);
    return resData;
  } catch (e) {
    console.error("error: " + e);
  }
};

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const valid = Client.textCheck(formText);

  if (valid) {
    postData("http://localhost:8081/analysis", formText).then((resData) => {
      console.log(resData);
      document.getElementById("agreement").innerHTML = resData.agreement;
      document.getElementById("confidence").innerHTML = resData.confidence;
      document.getElementById("irony").innerHTML = resData.irony;
      document.getElementById("score_tag").innerHTML = resData.score_tag;
      document.getElementById("subjectivity").innerHTML = resData.subjectivity;
      document.getElementById("sentence-list").innerHTML =
        resData.sentence_list;
    });
  }
  // const key = getKey();
  // console.log(key);
  // const formdata = new FormData();
  // formdata.append("key", `${key}`);
  // formdata.append("txt", formText);
  // formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  // const requestOptions = {
  //   method: "POST",
  //   body: formdata,
  //   redirect: "follow",
  // };

  // const res = getFormData(requestOptions).then((data) => {
  //   console.log(data);
  // });

  // console.log(res);

  console.log("::: Form Submitted :::");
}

export { handleSubmit };
