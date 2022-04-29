import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { searchByContainerNumber } from '../store'
import { Spinner } from "../components/layout";
import Details from "../components/details/Details";
import axios from "axios";

const details = () => {
  const router = useRouter();
  const [details, setDetails] = useState([])
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const { type, value } = { ...router.query };
    const checkDetails = async () => {
      if (!type || !value) {
        return;
      }
      if (type && value) {
        setChecking(true);
        const configHeaders = {
          "Content-Type": "application/json",
        };
        const res = await axios.get("/api/details", configHeaders);
        if (res.status !== 200) {
          router.push({ pathname: "/error" });
        } else {
          searchByContainerNumber.setDetails(res.data)
        }
        setChecking(false);
      }
    };
    checkDetails();
  }, [router]);
  return (
    <>
      {checking ? (<Spinner />) : null}
      {router.query.type === 'container' ? <Details /> : null}
    </>
  );
};

export default details;
