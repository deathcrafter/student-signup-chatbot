const GotIt = ({
  actionProvider,
}: {
  actionProvider: {
    [key: string]: (str?: string) => void;
  };
}) => {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        title="Click to get started"
        className="border-2 border-blue-500 rounded-md p-2 m-2 w-20 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
        onClick={() => actionProvider.handleGotIt()}
      >
        Got it!
      </button>
    </div>
  );
};

export default GotIt;
