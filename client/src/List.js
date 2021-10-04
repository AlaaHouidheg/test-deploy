import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditContact } from "./EditContact";
import { deleteContacts, getContacts } from "./JS/Contact/ContactSlice";
export const List = ({ ping, setPing }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.contact.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [ping]);
  const handledelete = (el) => {
    dispatch(deleteContacts(el._id));
    setPing(!ping);
  };
  return (
    <div>
      {list ? (
        list.map((el) => (
          <div>
            <h1>{el.title}</h1>
            <button onClick={() => handledelete(el)}>delete</button>
            <EditContact setPing={setPing} ping={ping} _id={el._id} />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
