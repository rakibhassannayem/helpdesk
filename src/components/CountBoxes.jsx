import Container from "./Container";

const CountBoxes = ({ data }) => {
  const pendingData = data.filter((element) => element.status === "Pending");
  const submittedData = data.filter(
    (element) => element.status === "Submitted"
  );
  const reviewedData = data.filter((element) => element.status === "Reviewed");

  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-5 my-12">
          <div className="rounded-md text-white h-[200px] bg-gray-500 flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">Pending</h1>
            <p className="font-bold text-2xl">{pendingData.length}</p>
          </div>
          <div className="rounded-md text-white h-[200px] bg-purple-500 flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">Submitted</h1>
            <p className="font-bold text-2xl">{submittedData.length}</p>
          </div>
          <div className="rounded-md text-white h-[200px] bg-teal-500 flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">Reviewed</h1>
            <p className="font-bold text-2xl">{reviewedData.length}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBoxes;
