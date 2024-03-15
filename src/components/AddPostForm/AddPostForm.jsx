

import { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function AddPostForm({handleAddPost}) {
  const [state, setState] = useState({
    caption: "",
  });
  const [selectedFile, setSelectedFile] = useState("");

  function handleFileInput(e) {
    console.log(e.target.files, " < - this is e.target.files!");
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
     ...state,
     [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("caption", state.caption);
    handleAddPost(formData);
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="caption"
          value={state.caption}
          placeholder="What's on your pups mind?"
          onChange={handleChange}
          required
        />
        <Form.Field>
          <Form.Input
            type="file"
            name="photo"
            placeholder="upload image"
            onChange={handleFileInput}
          />
        </Form.Field>
        <Button type="submit" className="btn">
          ADD PUPPY
        </Button>
      </Form>
    </Segment>
  );
}






