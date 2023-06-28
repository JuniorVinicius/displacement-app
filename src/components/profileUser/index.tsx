"use client";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ErrorLabel } from "../utils";
import CardLabel from "../cardLabel";

type ProfileUserProps = {
  error: any;
  message: string;
  data: ItemsProps[];
};

export default function ProfileUser({
  error,
  message,
  data,
}: ProfileUserProps) {
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      {!error ? (
        <Card sx={{ width: "100%" }}>
          <Grid container columnSpacing={6} justifyContent="center">
            {data?.map(({ label, info }, index) => {
              return (
                <Grid key={index} item minWidth={300}>
                  <CardContent>
                    <Typography fontSize={12}>{label}</Typography>
                    {label !== "Status" ? (
                      <Typography fontWeight="semi-bold">{info ? info : "-"}</Typography>
                    ) : (
                      <CardLabel status={info as "valid" | "invalid"} />
                    )}
                  </CardContent>
                </Grid>
              );
            })}
          </Grid>
        </Card>
      ) : (
        <ErrorLabel error={error} message={message} />
      )}
    </div>
  );
}
