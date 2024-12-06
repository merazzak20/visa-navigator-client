import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import MyVisa from "../components/MyVisa";
import { AuthContext } from "../provider/AuthProvider";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);

  const visas = useLoaderData();
  // console.log(user.email);
  const userVisa = visas.filter((visa) => visa.email === user?.email);

  return (
    <div>
      <Helmet>
        <title>My Added Visa - VisaNavigator</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">My Added Visa</h1>
        {/* <p>Number of Visas: {visas.length}</p> */}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
        {userVisa.map((visa) => (
          <MyVisa key={visa._id} visa={visa}></MyVisa>
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisa;
