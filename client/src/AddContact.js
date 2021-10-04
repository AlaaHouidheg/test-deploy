import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "./JS/Contact/ContactSlice";

export const AddContact = ({ ping, setPing }) => {
  const [contact, setcontact] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type='text'
        placeholder='enter title'
        onChange={(e) => setcontact({ ...contact, title: e.target.value })}
      />
      <input
        type='text'
        placeholder='enter descriptin'
        onChange={(e) =>
          setcontact({ ...contact, description: e.target.value })
        }
      />
      <button
        onClick={() => {
          dispatch(addContacts(contact));
          setPing(!ping);
        }}
      >
        add contact
      </button>
    </div>
  );
};
