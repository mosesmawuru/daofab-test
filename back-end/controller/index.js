const parent = require("../data/Parent.json").data;
const child = require("../data/Child.json").data;

const getAllData = async (req, res) => {
  const resData = parent.map((item) => {
    let paidAmount = child
      .filter((cItem) => cItem.parentId === item.id)
      .reduce(function (pv, cv) {
        return pv + cv.paidAmount;
      }, 0);
    return {
      ...item,
      paidAmount,
    };
  });
  res.json(resData);
};

const getChildrenData = async (req, res) => {
  const resData = child
    .filter((item) => {
      return Number(item.parentId) === Number(req.params.id);
    })
    .map((item, key) => ({
      id: key + 1,
      sender: parent.filter((f) => Number(f.id) === Number(item.parentId))[0]
        .sender,
      receiver: parent.filter((f) => Number(f.id) === Number(item.parentId))[0]
        .receiver,
      totalAmount: parent.filter(
        (f) => Number(f.id) === Number(item.parentId)
      )[0].totalAmount,
      paidAmount: item.paidAmount,
    }));
  res.json(resData);
};

module.exports = { getAllData, getChildrenData };
