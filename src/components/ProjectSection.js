import React from 'react';

const ProjectSection = (props) => {
  return (
    <div style={{ maxWidth: props.type === 'bg' ? '100%' : 1080, margin: '0 auto', padding: '0 15px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {props.children}
      </div>
    </div>
  );
};

export default ProjectSection;