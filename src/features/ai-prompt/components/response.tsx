interface ResponseProps {
  response: string;
  loading: boolean;
}

const Response: React.FC<ResponseProps> = ({ response, loading }) => {
  return (
    <div className="absolute top-14 z-50 flex max-h-52 w-full px-4 sm:w-[42rem]">
      <div className="w-full flex-col items-center justify-center overflow-y-auto rounded-3xl border border-light-gray bg-gray-100 px-4 py-3 dark:border-neutral-gray dark:bg-medium-gray">
        <p className="text-sm">{loading ? "I'm thinking ..." : response}</p>
      </div>
    </div>
  );
};

export default Response;
