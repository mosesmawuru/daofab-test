import React, { useEffect, useState } from "react";
import Table from "responsive-sortable-react-table";
import { getChildrenData } from "../action";
import { useLocation, useNavigate } from "react-router-dom";
import { ParentProps } from "../type";
import { handleSort } from "../utils";

const data = {
  headers: {
    id: "ID",
    sender: "Sender",
    receiver: "Receiver",
    totalAmount: "Total Amount",
    paidAmount: "Paid Amount",
  },
};

const Children: React.FC = () => {
  const location = useLocation();
  const [tblData, setTblData] = useState<Array<ParentProps>>([]);
  const [sortedData, setSortedData] = useState<Array<ParentProps>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getChildrenData(location.state.id);
      setTblData(data);
      setSortedData(data);
    };
    getData();
  }, [location]);

  return (
    <div>
      <h1>
        <span>children {location.state.id} 's Information</span>
        <span onClick={() => navigate("/")}>back</span>
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

export default Children;
