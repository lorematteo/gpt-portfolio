interface ResponseProps {
  response: string;
  loading: boolean;
}

const Response: React.FC<ResponseProps> = ({ response, loading }) => {
  return (
    <div className="absolute top-6 z-50 flex max-h-52 w-[42rem] rounded-3xl border border-light-gray bg-gray-100 py-3 dark:border-neutral-gray dark:bg-medium-gray">
      <div className="flex-col items-center justify-center overflow-y-auto px-4">
        <p className="text-sm">{loading ? "I'm thinking ..." : response}</p>
      </div>
    </div>
  );
};

export default Response;
