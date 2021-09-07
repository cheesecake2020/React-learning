const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontWeight: "600"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
