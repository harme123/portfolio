import React, { useState } from "react";
import { Button } from "./MovingBorder";

export default function CVPopup() {
  const [showCV, setShowCV] = useState(false);

  return (
    <div>
      {/* Button to show the modal */}
      <Button
        onClick={() => setShowCV(true)}
        containerClassName="mt-4 -ml-1"
        borderClassName="bg-[radial-gradient(circle,_#ff6ec4_40%,_transparent_60%)]"
        duration={4000}
      >
        View My CV
      </Button>

      {/* Modal Overlay and Content */}
      {showCV && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-4 relative">
            {/* Close button */}
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-2 right-2 text-black text-xl font-bold"
            >
              &times;
            </button>

            {/* Embedded PDF */}
            <iframe
              src="/CV1.pdf"
              className="w-full h-[600px] rounded"
              title="My CV"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

