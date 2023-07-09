import { makeStyles, Grid, Theme } from "@material-ui/core";
import GitHubProjects from "./GithubProjects";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(1),
    },
}));

function PersonalProjectsComponent() {
    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <GitHubProjects username="AfonsoTaborda"></GitHubProjects>
        </Grid>
    );
}

export default PersonalProjectsComponent;