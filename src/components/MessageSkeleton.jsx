const MessageSkeleton = () => {
  return (
    <div className="flex text-gray-400  justify-center items-center h-full">
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default MessageSkeleton;
