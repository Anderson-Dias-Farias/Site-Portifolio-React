import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Centro, H1, Box, Wraper, Wrapers } from "./styles";
import "./styles.css";

function CircularProgressWithLabel(props) {
  return (
    <Wraper>
      <Wrapers>
        <Box>
          <CircularProgress
            size={150}
            color="secondary"
            variant="determinate"
            {...props}
            classes={{ svg: "CircularSvg" }}
          />

          <Centro>
            <H1>{`${Math.round(props.value)}%`}</H1>
          </Centro>
        </Box>
        <H1>{`${props.name}`}</H1>
      </Wrapers>
    </Wraper>
  );
}

export default function CircularStatic({ value, name }) {
  // const [progress, setProgress] = React.useState(value);

  return <CircularProgressWithLabel name={name} value={value} />;
}
