import { use, useState } from "react";
import TogglesBtns from "./TogglesBtns";
import CountBoxes from "./CountBoxes";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData)
  return (
    <div>
      <CountBoxes data={data}></CountBoxes>

      <TogglesBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></TogglesBtns>

      <div className="container mx-auto grid grid-cols-3 gap-3 mb-12">
        {data.map((issue) => {
          return <Card key={issue.ticketId} issue={issue}></Card>;
        })}
      </div>
    </div>
  );
};

export default IssuesManagement;
