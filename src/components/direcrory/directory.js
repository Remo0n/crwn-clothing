import React, { useState } from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item";

import "./directory.style.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem
          title={section.title}
          imgUrl={section.imageUrl}
          key={section.id}
          size={section.size}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  sections: state.directory.sections
});

export default connect(mapStateToProps)(Directory);
