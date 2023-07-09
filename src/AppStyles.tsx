import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
      padding: theme.spacing(1),
      backgroundColor: "rgb(18 24 27)",
      opacity: 0.95,
    },
    component: {
      paddingTop: theme.spacing(3),
      marginBottom: theme.spacing(10),
    },

    sectionHeading: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      fontWeight: 700,
      fontFamily: 'Roboto Mono',
    },

    sectionHeadingText: {
        color: "white",
    },
}));