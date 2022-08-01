import { useState, useEffect } from "react";
import axios from "axios";

const useDiscounts = (id) => {
  const route =
    "https://seimos-kortele.lt/wp-json/wp/v2/nuolaidos_lengvatos?per_page=100";

  console.log(id);

  // State
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${
            id
              ? "https://seimos-kortele.lt/wp-json/wp/v2/nuolaidos_lengvatos" +
                "/" +
                id
              : route
          }`
        );

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, [id]);

  return { data, isLoading, error };
};

export default useDiscounts;
