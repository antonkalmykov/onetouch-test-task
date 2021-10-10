import { useState, useCallback } from "react";
import { toast } from "react-toastify";

import { GameList } from "../types";

function useFetch() {
  const [data, setData] = useState<[] | GameList>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback((url: string) => {
    if (!url) return;

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data: GameList) => {
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        console.error(e);
        toast.error("An error has occurred. Try reload the page.");
      });
  }, []);

  return { data, loading, fetchData };
}

export default useFetch;
