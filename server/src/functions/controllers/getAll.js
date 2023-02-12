const getAll = async (req, res, service) => {
  let json = { error: "", result: {} };

  let data = await service.getAll();

  if (data) {
    json.result = data;
  }

  res.json(json);
};

module.exports = getAll;
