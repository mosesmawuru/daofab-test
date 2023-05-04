import React, { useEffect, useState } from "react";
import Table from "responsive-sortable-react-table";
import "responsive-sortable-react-table/dist/style.css";
import { getAllData } from "../../action";
import type { ParentProps } from "../../type";
import { handleSort } from "../../utils";
import { useNavigate } from "react-router-dom";

const data = {
  headers: {
    id: "ID",
    sender: "Sender",
    receiver: "Receiver",
    totalAmount: "Total Amount",
    paidAmount: "Paid Amount",
  },
};
export const MainPage: React.FC = () => {
  const [tblData, setTblData] = useState<Array<ParentProps>>([]);
  const [sortedData, setSortedData] = useState<Array<ParentProps>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const tblData = await getAllData();

      setTblData(tblData);
      setSortedData(tblData);
    };
    getData();
  }, []);

  useEffect(() => {
    let table: any = document.getElementsByClassName("my-table")[0];
    if (table) {
      for (var i = 0; i < table.rows.length; i++) {
        if (i > 0) {
          table.rows[i].onclick = function () {
            tableText(this);
          };
        }
      }
    }

    const tableText = (tableRow: any) => {
      var id = tableRow.childNodes[0].innerHTML;
      navigate("/children", { state: { id: id } });
    };
  }, [tblData]);

  return (
    <div>
      <h1>
        <span>Please click a row</span>
      </h1>
      <Table
        headers={data.headers}
        content={tblData}
        breakpoint={500}
        pageSize={2}
        onSort={(e: Array<ParentProps>) => {
          handleSort(e, sortedData);
        }}
        sortKey="upper-electives"
        sortDir={-1}
        id="my-table"
        className="my-table"
        paginationClass="my-pagination"
        mobilePageSize={2}
      />
    </div>
  );
};
