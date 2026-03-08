const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="banner">
      <h1>Customer Support Dashboard</h1>

      <p>In Progress: {inProgress}</p>
      <p>Resolved: {resolved}</p>
    </div>
  );
};

export default Banner;