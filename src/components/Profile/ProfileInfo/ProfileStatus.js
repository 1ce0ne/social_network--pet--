import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{status || '--'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
