import React, { useState } from "react";
import App from "./App";
import ClassicApp from "./ClassicApp";
import Index from ".";

// the app mood basically represents whether it's on the main, classic or pro page
type AppMood = "main" | "pro" | "classic";

export default function AppController() {
  const [mood, setMood] = useState<AppMood>("main");

  switch (mood) {
    case "main": {
      return <Index setPage={setMood} />;
    }
    case "classic":
      return <ClassicApp />;
    case "pro":
      return <App />;
  }
}
