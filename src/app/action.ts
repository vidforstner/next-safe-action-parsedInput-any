"use server";

import { actionClient } from "@/lib/safe-action";
import { z } from "zod";

export const requestAccessAction = actionClient
  .schema(
    z.object({
      input: z.string(),
    }),
  )
  .action(async ({ parsedInput: { input } }) => {
    return {
      success: input,
    };
  });
