import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // get all note
  const getNotes = async () => {
    // api call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1N2ViNTI1NGU1YmQ3OGMwNjBiZGU5In0sImlhdCI6MTY1MDAxMjE5M30.kmwHAfIRBYb1gxil9ubzY2cwvnu5B9n2rcI38Egmtrc",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  // add a note
  const addNote = async (title, description, tag) => {
    // api call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1N2ViNTI1NGU1YmQ3OGMwNjBiZGU5In0sImlhdCI6MTY1MDAxMjE5M30.kmwHAfIRBYb1gxil9ubzY2cwvnu5B9n2rcI38Egmtrc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // client side logic
    console.log("Adding a new node");
    const note = {
      _id: "626bc0997ae08e987ec30a72c",
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
  const deleteNote = async (id) => {
    // api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1N2ViNTI1NGU1YmQ3OGMwNjBiZGU5In0sImlhdCI6MTY1MDAxMjE5M30.kmwHAfIRBYb1gxil9ubzY2cwvnu5B9n2rcI38Egmtrc",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting the node with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    // api call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1N2ViNTI1NGU1YmQ3OGMwNjBiZGU5In0sImlhdCI6MTY1MDAxMjE5M30.kmwHAfIRBYb1gxil9ubzY2cwvnu5B9n2rcI38Egmtrc",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();

    // edit a node on client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
