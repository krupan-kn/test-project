import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import MetricCard from "../components/ui/MetricCard";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const formatCurrency = (n: number) =>
  n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function Dashboard() {
  const [metrics, setMetrics] = useState({ users: 1240, revenue: 51230, orders: 320 });
  const [revenueHistory, setRevenueHistory] = useState<number[]>(() =>
    Array.from({ length: 12 }, (_, i) => 40000 + i * 1000)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setMetrics((m) => {
        const users = m.users + Math.round((Math.random() - 0.45) * 20);
        const orders = Math.max(0, m.orders + Math.round((Math.random() - 0.5) * 10));
        const revenueDelta = Math.round((Math.random() - 0.4) * 2000);
        const revenue = Math.max(0, m.revenue + revenueDelta);
        setRevenueHistory((h) => {
          const next = [...h.slice(-11), revenue];
          return next;
        });
        return { users, revenue, orders };
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const maxRev = Math.max(...revenueHistory, 1);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Sample Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MetricCard
            title="Users"
            value={metrics.users}
            subtitle="Active users"
            icon={<PeopleIcon fontSize="small" color="primary" />}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <MetricCard
            title="Revenue"
            value={formatCurrency(metrics.revenue)}
            subtitle="Monthly revenue (simulated)"
            icon={<AttachMoneyIcon fontSize="small" color="success" />}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <MetricCard
            title="Orders"
            value={metrics.orders}
            subtitle="Orders processed"
            icon={<ShoppingCartIcon fontSize="small" color="secondary" />}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Revenue Trend</Typography>
            <Box mt={2} display="flex" justifyContent="center">
              <svg width="100%" height="120" viewBox={`0 0 120 ${120}`} preserveAspectRatio="none">
                {revenueHistory.map((v, i) => {
                  const x = (i / (revenueHistory.length - 1)) * 120;
                  const y = 120 - (v / maxRev) * 100 - 10;
                  return <circle key={i} cx={x} cy={y} r={3} fill="#1976d2" />;
                })}
                <polyline
                  fill="none"
                  stroke="#1976d2"
                  strokeWidth={2}
                  points={revenueHistory
                    .map((v, i) => {
                      const x = (i / (revenueHistory.length - 1)) * 120;
                      const y = 120 - (v / maxRev) * 100 - 10;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                />
              </svg>
            </Box>
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button size="small" variant="outlined" onClick={() => setRevenueHistory(Array.from({ length: 12 }, (_, i) => 40000 + i * 1000))}>
                Reset
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Top Items</Typography>
            <Box mt={1}>
              <Typography>Project Alpha — 42%</Typography>
              <Typography>Project Beta — 28%</Typography>
              <Typography>Project Gamma — 15%</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
