import { use, useState } from "react";
import TogglesBtns from "./TogglesBtns";
import CountBoxes from "./CountBoxes";
import Card from "./Card";
import Container from "./Container";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  const filteredData =
    toggleStatus === "All"
      ? data
      : data.filter((element) => element.status === toggleStatus);

  return (
    <div>
      <CountBoxes data={data}></CountBoxes>

      <TogglesBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></TogglesBtns>

      <Container>
        {filteredData.length == 0?<h2 className="text-center text-2xl text-purple-500 font-bold mb-8">No Data Available !</h2>:<div className="grid grid-cols-3 gap-3 mb-12">
          {filteredData.map((issue) => {
            return (
              <Card
                data={data}
                setData={setData}
                key={issue.ticketId}
                issue={issue}
              ></Card>
            );
          })}
        </div>}
      </Container>
    </div>
  );
};

export default IssuesManagement;
