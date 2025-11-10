const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const fetchAllPromises = urls.map(async (url) => {
    const response = await httpGet(url);
    const result = JSON.parse(response.body);
    if (response.status === 200) return { "Arnie Quote": result.message };
    return { FAILURE: result.message };
  });

  const results = await Promise.allSettled(fetchAllPromises);
  return results.map((result) => result.value);
};

module.exports = {
  getArnieQuotes,
};
