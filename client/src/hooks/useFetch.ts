import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface CourseType {
  id: number;
  name: string;
  professor: string;
  description: string;
}

export interface CourseDetailType {
  name: string;
  professor: string;
  description: string;
  happy: number;
  sad: number;
  angry: number;
  everdayStudy: number;
  midtermStudy: number;
  finalStudy: number;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<CourseType[] | CourseDetailType>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      return response;
    };

    const data: any = fetchData();
    setData(data);
  }, [url]);

  return data;
};
