import React, { useState } from "react";

const RECORDS = {
  data: [
    { id: 1, name: "Cement", uom: "Bags", qty: "", price: 200, total: 0 },
    { id: 2, name: "Steel", uom: "Kgs", qty: "", price: 400, total: 0 },
    { id: 3, name: "Glass", uom: "Nos", qty: "", price: 120, total: 0 },
    { id: 4, name: "Pipe", uom: "Mtrs", qty: "", price: 300, total: 0 },
    { id: 5, name: "Wooden door", uom: "Nos", qty: "", price: 2000, total: 0 },
  ],
};

const Home = () => {
  const [res, setRes] = useState(RECORDS);

  const onChangeQty = (name, i, e) => {
    const items = { ...res };
    items[name][i].qty = e.target.value;
    items[name][i].total = e.target.value * items[name][i].price;

    setRes(items);
  };

  const grandTotal = res.data?.map((data) => data.total);

  return (
    <div className="flex justify-start lg:justify-center mt-10 w-full overflow-x-scroll h-full lg:overflow-x-hidden">
      <table>
        <tr>
          <th>S.NO</th>
          <th>NAME OF MATERIAL</th>
          <th>PRICE</th>
          <th>UOM</th>
          <th>QTY</th>
          <th>Total</th>
        </tr>

        {Object.keys(res).map((name, i) => (
          <tbody key={name}>
            {res[name].map((data, i) => (
              <tr>
                <td>{data["id"]}</td>
                <td>{data["name"]}</td>
                <td>{data["price"]}</td>
                <td>{data["uom"]}</td>
                <td>
                  <input
                    type="number"
                    value={data["qty"]}
                    min="0"
                    placeholder="Enter Quantity"
                    onChange={(e) => onChangeQty(name, i, e)}
                  />
                </td>
                <td>{data["total"]}</td>
              </tr>
            ))}
          </tbody>
        ))}

        <tr className="bg-light">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="font-bold text-lg p-2">Grand Total</td>
          <td className="font-bold text-lg ">
            {grandTotal[0] +
              grandTotal[1] +
              grandTotal[2] +
              grandTotal[3] +
              grandTotal[4]}
            &nbsp;/-
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
