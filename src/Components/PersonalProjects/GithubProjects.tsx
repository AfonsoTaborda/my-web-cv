import { Grid, IconButton, Theme, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import GitHubIcon from '@material-ui/icons/GitHub';

interface GitHubProject {
  id: number;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
}

interface GitHubProjectsProps {
  username: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  sectionHeading: {
    marginTop: theme.spacing(3),
    fontWeight: 700,
    fontFamily: 'Roboto Mono',
  },

  sectionHeadingTitle: {
    color: "white",
  },

  loading: {
    marginTop: theme.spacing(3),
    fontWeight: 700,
    fontFamily: 'Roboto Mono',
    alignContent: "center",
  },

  item: {
      marginTop: theme.spacing(2),
      '@media (min-width:960px)': {
        marginLeft: theme.spacing(24),
        marginRight: theme.spacing(24),
        maxWidth: "50%",
      },
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      border: "medium solid black",
  },

  iconButton: {
    color: "black",
    border: "medium solid black",
    backgroundColor: "white",
    borderRadius: 0,
    borderTop: 0,
    '@media (max-width:960px)': {
      width: "85%",
    },
    '&:hover': {
      color: "white",
    },
  },

  icon: {
    marginRight: theme.spacing(2),
  },

  description: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

const GitHubProjects: React.FC<GitHubProjectsProps> = ({ username }) => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
        );
        const data = await response.json();
        const filteredProjects = data.filter((project: GitHubProject) => !project.fork); // Ignore forked repos
        setProjects(filteredProjects);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [username]);

  return (
    <Grid container justifyContent="center">
      <Typography variant="h4" align='center' className={loading ? classes.loading : classes.sectionHeading}>
      🔎<b className={classes.sectionHeadingTitle}>{loading ? "Loading..." : `Projects by ${username}`}</b>
      </Typography>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} className={classes.item}>
            <IconButton href={project.html_url} target="_blank" rel="noreferrer" aria-label="GitHub" className={classes.iconButton}>
              <GitHubIcon className={classes.icon} />
              <strong>{project.name}</strong>
            </IconButton>
              <p className={classes.description}>{project.description}</p>
          </Grid>
        ))}
    </Grid>
  );
};

export default GitHubProjects;
