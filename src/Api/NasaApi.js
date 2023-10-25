import React, { useState } from "react";
import axios from "axios";

async function Api(arg) {
  const res = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=PrN0lDmsmo9WqOWpNA6F3qalAgYdGUrX5QyA9lxR"
  );

  return res.data;
}

export default Api;
