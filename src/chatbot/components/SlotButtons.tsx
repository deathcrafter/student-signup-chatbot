const SlotButtons = ({
  payload: slots,
  actionProvider,
}: {
  payload: {
    time: string;
    date: string;
  }[];
  actionProvider: {
    [key: string]: (str: string) => void;
  };
}) => {
  return (
    <div className="flex flex-wrap pl-[45px] gap-1">
      {slots.map(({ date, time }, index) => (
        <button
          key={index}
          type="button"
          title="Click to pick this slot"
          className="border-2 border-blue-500 rounded-md py-1.5 px-2.5 m-2 w-20 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
          onClick={() => actionProvider.handleSlot(`${date}, ${time}`)}
        >
          <div className="flex flex-col items-center justify-center gap-0.5">
            <span className="font-semibold text-xs">{date}</span>
            <span className="font-medium text-xs">{time}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

// const SlotButtons = (props: any) => {
//   console.log(props);
//   return <></>;
// };

export default SlotButtons;
