import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "625939a94a59bc81dae17b18",
      user: "6257eb5254e5bd78c060bde9",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-04-15T09:23:53.361Z",
      __v: 0,
    },
    {
      _id: "626bc0997ae0e987ec30a72c",
      user: "6257eb5254e5bd78c060bde9",
      title: "hello world",
      description: "Please sleep early",
      tag: "personal",
      date: "2022-04-29T10:40:25.251Z",
      __v: 0,
    },
    {
      _id: "625939a94a59bc81dae17b18",
      user: "6257eb5254e5bd78c060bde9",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-04-15T09:23:53.361Z",
      __v: 0,
    },
    {
      _id: "626bc0997ae0e987ec30a72c",
      user: "6257eb5254e5bd78c060bde9",
      title: "hello world",
      description: "Please sleep early",
      tag: "personal",
      date: "2022-04-29T10:40:25.251Z",
      __v: 0,
    },
    {
      _id: "625939a94a59bc81dae17b18",
      user: "6257eb5254e5bd78c060bde9",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-04-15T09:23:53.361Z",
      __v: 0,
    },
    {
      _id: "626bc0997ae0e987ec30a72c",
      user: "6257eb5254e5bd78c060bde9",
      title: "hello world",
      description: "Please sleep early",
      tag: "personal",
      date: "2022-04-29T10:40:25.251Z",
      __v: 0,
    },
    {
      _id: "625939a94a59bc81dae17b18",
      user: "6257eb5254e5bd78c060bde9",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-04-15T09:23:53.361Z",
      __v: 0,
    },
    {
      _id: "626bc0997ae0e987ec30a72c",
      user: "6257eb5254e5bd78c060bde9",
      title: "hello world",
      description: "Please sleep early",
      tag: "personal",
      date: "2022-04-29T10:40:25.251Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // add a note
  const addNote = (title, description, tag) => {
    console.log("Adding a new node");
    const note = {
      _id: "626bc0997ae0e987ec30a72c",
      user: "6257eb5254e5bd78c060bde9",
      title: title,
      description: description,
      tag: tag,
      date: "2022-04-29T10:40:25.251Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // delete a note
  const deleteNote = () => {};

  // edit a node
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
