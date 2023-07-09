import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core';

import {IoIosRibbon} from 'react-icons/io'

interface Attainment {
    name: string;
    logo?: string;
    date: string;
    location?: string;
    link: string;
    description: string;
}

type Props = {
  attainments: Attainment[]
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    color: "lightgrey",
  },

  sectionHeading: {
    marginTop: theme.spacing(3),
    fontWeight: 700,
    fontFamily: 'Roboto Mono',
  },

  sectionHeadingText: {
    color: "white",
  },

  name: {
    fontWeight: 700,
  },

  Attainment: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },

  AttainmentIcon: {
    maxWidth: "100%",
    width: "2em",
    height: "auto",
    paddingLeft: theme.spacing(1),
  },

  description: {
    marginLeft: theme.spacing(1),
  },

  location: {
    textAlign: 'center',
  },

  links: {
    textAlign: 'center',
    fontWeight: 500,
    color: "grey",
  }
}));

export default function AttainmentsList(props: Props) {
    const classes = useStyles();

    return(
        <Box className={classes.container}>
          <Typography variant="h4" align='center' className={classes.sectionHeading}>
            🏅<b className={classes.sectionHeadingText}>Awards</b>
          </Typography>
          {props.attainments.map((Attainment) => (
            <Grid container direction='column' key={Attainment.name} className={classes.Attainment}>
              <IoIosRibbon className={classes.AttainmentIcon} />
              <Typography variant="body1" className={classes.name}>{Attainment.name}</Typography>
              <Grid item>
                <Typography variant="body1">{Attainment.date}</Typography>
              </Grid>
              {Attainment.location && (
                <Grid item>
                  <Typography variant="body1" className={classes.location}>{Attainment.location}</Typography>
                </Grid>
              )}
              <Grid item>
                <Typography variant="body1"><a className={classes.links} target="_blank" rel="noreferrer" href={Attainment.link}>{Attainment.link}</a></Typography>
              </Grid>
              <Grid item className={classes.description}>
                <Typography variant="body1">{Attainment.description}</Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
    );
};