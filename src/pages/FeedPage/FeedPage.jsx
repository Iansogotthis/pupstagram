import React, { useState } from "react";

import PageHeader from "../../components/Header/Header";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import PostFeed from "../../components/PostFeed/PostFeed";

import { Grid } from "semantic-ui-react";

import tokenService from "../../utils/tokenService";

export default function FeedPage() {
  const [posts, setPosts] = useState([]); // 
  const [loading, setLoading] = useState(true);

  async function handleAddPost(postToSendToServer) {
    console.log(postToSendToServer, " formData from addPost form");

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: postToSendToServer, 
        headers: {
          Authorization: "Bearer " + tokenService.getToken(),
        },
      });

      const data = await response.json();
      console.log(data, " response from post request! This from express");
      setPosts([data.post, ...posts]);
    } catch (err) {
      console.log(err.message);
      console.log("CHECK YOUR SERVER TERMINAL!!!!");
    }
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddPostForm handleAddPost={handleAddPost} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
        {/* <PostGallery /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
