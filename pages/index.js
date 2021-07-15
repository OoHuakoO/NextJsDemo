import React from "react";
import Image from "next/image";
export default function index() {
  return (
    <div>
      <h1>komsark</h1>

      <Image width={500} height={200} src="/images/photo.jpeg" alt="" />
    </div>
  );
}
