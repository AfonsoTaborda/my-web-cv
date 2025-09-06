import { Grid, ThemeProvider, Typography, createTheme } from '@material-ui/core';

import { useStyles } from './AppStyles';

import Header from './Components/Header/Header';
import AttainmentsList from './Components/Awards/AwardsComponent';
import ExperienceComponent from './Components/Experience/ExperienceComponent';
import SwitchableComponents from './Components/SwitchableComponent/SwitchableComponent';
import PersonalProjectsComponent from './Components/PersonalProjects/PersonalProjectsComponent';

import { experience } from './Components/Experience/experience';
import { attainments } from './Components/Awards/awards';
import IconTextSkill from './Components/Skills/IconTextSkill';
import { skillset, commandLine, cloudProviders, databaseSkills, bigDataSkills } from './Components/Skills/skills';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Condensed'
  },
  palette: {
    primary: {
      main: '#003566',
    },
    secondary: {
      main: '#E21B32',
    },
  },
});

function App() {
  const classes = useStyles();
  const components = [IconTextSkill, IconTextSkill, IconTextSkill, IconTextSkill, IconTextSkill];
  const componentProps = [
    { name: "Programming Languages", headingTitle: "Programming Languages", iconProps: skillset },
    { name: "Database Systems", headingTitle: "Database Systems", iconProps: databaseSkills },
    { name: "Command Line", headingTitle: "Command Line", iconProps: commandLine },
    { name: "Cloud Providers", headingTitle: "Cloud Providers", iconProps: cloudProviders },
    { name: "Big Data", headingTitle: "Big Data", iconProps: bigDataSkills },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Header />
        <Grid item xs={12} className={classes.component}>
          <ExperienceComponent experiences={experience}></ExperienceComponent>
        </Grid>
        <Grid item xs={12} className={classes.component}>
          <Typography variant="h4" align='center' className={classes.sectionHeading}>
            👷 <b className={classes.sectionHeadingText}>Software Engineering Skills</b>
          </Typography>
          <SwitchableComponents componentTypes={components} componentProps={componentProps} />
        </Grid>
        <Grid item xs={12} className={classes.component}>
          <AttainmentsList attainments={attainments}></AttainmentsList>
        </Grid>
        <Grid item xs={12} className={classes.component}>
          <PersonalProjectsComponent></PersonalProjectsComponent>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
