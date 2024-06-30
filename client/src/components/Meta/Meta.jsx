import React from 'react';
import { Helmet } from "react-helmet-async";

const Meta = ({ 
  title = "Ryan Micthell MP", 
  description = "Ryan Micthell", 
  keywords =  "Ryan Micthell, Ryan, Micthell, MP3"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};


export default Meta;
