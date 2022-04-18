import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const infoEchange = () => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const { type, value } = { ...router.query };
    const numberCheckingType = type;
    const checkDetails = async () => {
      if (!type || !value) {
        return;
      }
      if (type && value) {
        setChecking(true);
        const configHeaders = {
          "Content-Type": "application/json",
        };
        const response = await axios.get("/api/details", configHeaders);
        if (response.status !== 200) {
          router.push({ pathname: "/error" });
        } else {
          numberCheckingType === "container"
            ? console.log("searching for container")
            : console.log("searching for hbl");
        }
        setChecking(false);
      }
    };
    checkDetails();
  }, [router]);
  return (
    <>
      <h1>Result</h1>
    </>
  );
};

export default infoEchange;
