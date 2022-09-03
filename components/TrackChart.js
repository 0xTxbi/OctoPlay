import { Container } from "@chakra-ui/react";
import { XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";

function TrackChart({ trackFeaturesData }) {
  return (
    <Container centerContent mt={10}>
      <AreaChart
        width={500}
        height={400}
        data={trackFeaturesData}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis hide="true" />
        <Tooltip />
        <Area dataKey="value" stroke="#38a169" fill="#38a169" />
      </AreaChart>
    </Container>
  );
}

export default TrackChart;
