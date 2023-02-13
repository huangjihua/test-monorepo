import React from "react";

// export default React.forwardRef((props, ref) => <input {...props} ref={ref} />);
export default props => {
  // console.log("input", props);
  return <input {...props} />;
};
