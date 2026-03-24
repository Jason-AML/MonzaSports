import { useEffect, useState } from "react";
import { fetchDealers } from "../service/mapService";

export const useDealers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    const getDealers = async () => {
      setLoading(true);
      try {
        const data = await fetchDealers();
        setDealers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getDealers();
  }, []);

  return { dealers, loading, error };
};
