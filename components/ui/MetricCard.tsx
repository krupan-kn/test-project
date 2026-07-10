import React from "react";
import { Paper, Box, Typography } from "@mui/material";

type Props = {
  title: string;
  value: React.ReactNode;
  subtitle?: string;
  icon?: React.ReactNode;
  color?: string;
};

export default function MetricCard({ title, value, subtitle, icon, color }: Props) {
  return (
    <Paper sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          display: "grid",
          placeItems: "center",
          background: color || "rgba(25,118,210,0.08)",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5">{value}</Typography>
        {subtitle ? (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        ) : null}
      </Box>
    </Paper>
  );
}
