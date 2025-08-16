import React from "react";
import { useParams } from "react-router-dom";

function SuccessDetail() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Success Story</h1>
      <p>
        You are viewing details for:{" "}
        <span className="font-semibold text-blue-600">{slug}</span>
      </p>
    </div>
  );
}

export default SuccessDetail;
