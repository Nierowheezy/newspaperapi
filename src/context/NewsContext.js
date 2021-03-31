import axios from "axios";
import React, { createContext, useEffect, useState, useCallback } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const url = process.env.REACT_APP_API_URL;
  const api_key = process.env.REACT_APP_API_KEY;

  const [data, setData] = useState();

  const fetchDataCallBack = useCallback(async () => {
    try {
      const res = await axios.get(`${url}${api_key}`);
      setData(res.data);
      console.log();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    fetchDataCallBack();
    // eslint-disable-next-line
  }, [fetchDataCallBack]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
