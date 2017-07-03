import React from 'react';

import EditFormFields from './EditFormFields';

function EditCard(props) {
  const { open, close, card } = props;

  return (
    <div className="edit">
      <div className="edit__container">
        <h3 className="edit__h3">Edit Card</h3>
        <EditFormFields card={card} close={close} open={open} />
      </div>
    </div>
  )
}

export default EditCard;
