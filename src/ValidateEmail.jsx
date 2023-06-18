import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function ValidateEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [data, setData] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (token) {
      axios
        .post("localhost:8000/api/v1/users/email-validate", {
          token,
        })
        .then((resp) => setData(true))
        .catch((err) => {
          setErr(true);
        });
    }
  }, [token]);
  return (
    <>
      {!err && !data && (
        <p>
          We are validating your email. Thank you for your patience.
          <img src="../public/gorillaTpose.png" alt="gorilla" />
        </p>
      )}
      {err && (
        <h1>
          Something went wrong during the validation of your email. Please try
          again.
          <img src="../public/gorillaTpose.png" alt="gorilla" />
        </h1>
      )}
      {data && (
        <h1>
          Email successfully verified. You can now close this window.
          <img src="../public/gorillaTpose.png" alt="gorilla" />
        </h1>
      )}
    </>
  );
}

export default ValidateEmail;
