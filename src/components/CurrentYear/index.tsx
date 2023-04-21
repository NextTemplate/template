import React from "react";

export default function GetCurrentYear() {
  const currentYear = new Date().getFullYear();

  return <>{currentYear}</>;
}
