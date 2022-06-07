import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { searchByContainerNumber, searchByHblNumber } from '../store'
import { Spinner } from "../components/layout";
import DetailsPage from "../components/details/DetailsPage";
import jwt from 'jsonwebtoken';
import axios from "axios";

const Details = () => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [details, setDetails] = useState({})
  useEffect(() => {
    const { type, value } = { ...router.query };
    const checkDetails = async () => {
      if (!type || !value) {
        return
      }
      if (type && value) {
        setChecking(true);
        const params = {
          containerNumber: value
        }
        console.log(new URLSearchParams(params).toString())
        const res = await axios.get(`/api/details?${new URLSearchParams(params).toString()}`);
        if (res.status !== 200) {
          router.push({ pathname: "/error" });
        } else {
          console.log(res)
          const result = res;
          setDetails(result)
          type === 'container' ? searchByContainerNumber.setDetails(result) : searchByHblNumber.setDetails(result)
        }
        setChecking(false);
      }
    };
    checkDetails();
  }, [router]);
  return (
    <>
      {checking ? <Spinner /> : <DetailsPage details={details} />}
    </>
  );
};

export default Details;
