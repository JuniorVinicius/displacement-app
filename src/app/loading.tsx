"use client";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <>
      <Skeleton
        variant="rounded"
        width="100%"
        height={40}
        sx={{ marginBottom: 5 }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        sx={{ marginBottom: 3 }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        sx={{ marginBottom: 3 }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        sx={{ marginBottom: 3 }}
      />
    </>
  );
}
