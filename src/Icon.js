import React from 'react'
import * as FontAwesome from "react-icons/fa";

const Icon = (props) => {
    const { iconName, size, color } = props;
    const icon = React.createElement(FontAwesome[iconName]);

  return (
      <div style={{ fontSize: size, color: color }}>{icon}</div>
  )
}

export default Icon