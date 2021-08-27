import React from "react";
import ContentService from "./src/service";
import { Routing } from "./src/components";

export default function App() {
  const MusicService = new ContentService();
  MusicService.getAll()
    .then((response) => console.log(response))
    .then((error) => console.log(error));

  return <Routing />;
}
