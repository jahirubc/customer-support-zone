const Banner = ({ inProgress, resolved }) => {

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          Customer Support Dashboard
        </h1>
        <div className="flex justify-center gap-10">
          <div>
            <p className="text-xl font-bold">
              In Progress: {inProgress}
            </p>
          </div>
          <div>
            <p className="text-xl font-bold">
              Resolved: {resolved}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;