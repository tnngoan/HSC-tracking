import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { searchByContainerNumber, searchByHblNumber } from '../store'
// import { Spinner } from "../components/layout";
import ContainerDetails from "../components/details/ContainerDetails";
import axios from "axios";

const Details = () => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
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
          const result = res.data.data[0];
          type === 'container' ? searchByContainerNumber.setDetails(result) : searchByHblNumber.setDetails(result)
        }
        setChecking(false);
      }
    };
    checkDetails();
  }, [router]);
  return (
    <>
      {router.query.type === 'container' ? <ContainerDetails /> : null}
    </>
  );
};

export default Details;
