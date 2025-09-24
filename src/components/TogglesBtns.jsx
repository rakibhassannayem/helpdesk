import Container from "./Container";

const TogglesBtns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <div>
      <Container>
        <div className="text-right mb-12">
          {btns.map((btn, index) => {
            return (
              <button
                key={index}
                onClick={() => setToggleStatus(btn)}
                className={`toggle-btn border-x-1 ${index == 0 && "rounded-l-md border-l-0"} ${
                  index == btns.length-1 && "rounded-r-md border-r-0"
                } ${toggleStatus === btn && "!bg-purple-500 !text-white"}`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default TogglesBtns;
