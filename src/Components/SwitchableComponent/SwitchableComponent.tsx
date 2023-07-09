import { Grid, Theme, makeStyles, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";

interface SwitchableComponentsProps {
  componentTypes: React.ComponentType<any>[];
  componentProps?: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: "lightgrey",
    color: "black",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },

  buttonText: {
    '@media (max-width:960px)': {
      fontSize: "70%",
    },
  },
}));

const SwitchableComponents: React.FC<SwitchableComponentsProps> = ({
  componentTypes,
  componentProps = [],
}) => {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const [activeIndex, setActiveKey] = useState<number>(0);
  const classes = useStyles();

  const handleComponentChange = (newIndex: number) => {
    setActiveKey(newIndex);
    setActiveComponentIndex(newIndex);
  };

  return (
    <Grid container alignContent="center" justifyContent="center">
      <Grid item xs={12} style={{display: "flex", justifyContent: 'center'}}>
        {componentTypes.map((componentType, index) => {
          let isActive = activeIndex === index;
          return (
              <Button style={ isActive ? {backgroundColor: "black", color: "white"} : {backgroundColor: "lightgrey", color: "black"} } className={classes.button} key={index} onClick={() => handleComponentChange(index)}>
                <Typography align='center' className={classes.buttonText}>
                  {componentProps[index].name || componentType.name}
                </Typography>
              </Button>
          )
      })}
      </Grid>
      <Grid item xs={12}>
        {React.createElement(componentTypes[activeComponentIndex], {
          ...(componentProps[activeComponentIndex] || {}),
        })}
      </Grid>
    </Grid>
  );
};

export default SwitchableComponents;
