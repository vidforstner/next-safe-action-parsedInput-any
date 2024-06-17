"use client";

import { useAction } from "next-safe-action/hooks";
import React from "react";

import { requestAccessAction } from "./action";

export default function Hero() {
  const action = useAction(requestAccessAction);

  const { result, isExecuting, hasErrored, execute } = action;

  console.log({ result, isExecuting });

  return (
    <div>
      {result ? (
        <>
          <input />
          <button
            onClick={() =>
              execute({
                input: "test",
              })
            }
            disabled={isExecuting}
          >
            Submit
            {isExecuting && <>loading...</>}
          </button>
        </>
      ) : (
        <>success</>
      )}

      {hasErrored && <>error</>}
    </div>
  );
}
