/* eslint-disable no-unused-vars */
import React from "react";
import { Alert as StrapiAlert } from "@strapi/design-system/Alert";

export const Alert = ({ variant, onAlertClose }) => (
  <StrapiAlert
    closeLabel="Close alert"
    variant={variant}
    onClose={onAlertClose}
  >
    {variant === "success"
      ? "Cache cleared successfully!"
      : "Sorry, something went wrong!"}
  </StrapiAlert>
);
