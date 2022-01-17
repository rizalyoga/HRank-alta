let params = {
  page: "1",
};

params.page = parseInt(params.page);

console.log((params.page += 1));
