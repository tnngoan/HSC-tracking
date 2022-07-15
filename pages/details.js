import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { Spinner } from "../components/layout";
import DetailsView from "../components/details/DetailsView";
import axios from "axios";

const Details = () => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [result, setResult] = useState({});
  useEffect(() => {
    const { type, value } = { ...router.query };
    const checkDetails = async () => {
      if (!type || !value) {
        return
      }
      if (type && value) {
        setChecking(true);
        const params = {
          [type]: value
        }
        const res = await axios.get(`/api/details?${new URLSearchParams(params).toString()}`);
        if (res.status !== 200) {
          router.push({ pathname: "/error" });
        } else {
          setResult(res.data.data[0])
        }
        setChecking(false);
      }
    };
    checkDetails();
  }, [router]);
  return (
      <DetailsView data={result} />
  );
};

export default Details;
