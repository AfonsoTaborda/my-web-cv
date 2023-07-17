import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core';

import DateRangeIcon from '@material-ui/icons/DateRange';
import WorkIcon from '@material-ui/icons/Work';
import PinDropIcon from '@material-ui/icons/PinDrop';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
import GradeIcon from '@material-ui/icons/Grade';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.primary.contrastText,
        paddingTop: "1em",
        fontFamily: 'Roboto Mono',
        fontWeight: 500,
        fontSize: 15,
    },

    addRemoveIcons: {
        verticalAlign: "middle",
    },

    itemHeader: {
        backgroundColor: theme.palette.primary.main,
        cursor: "pointer",
        '&:hover': {
            color: "rgb(18 24 27)",
        },
    },

    item: {
        '@media (min-width:960px)': {
            width: "65%",
        },
        '@media (max-width:960px)': {
            width: "80%",
        },
        padding: theme.spacing(2),
        borderRadius: "1em",
        textAlign: "left",
    },

    sectionHeading: {
        marginTop: theme.spacing(3),
        fontWeight: 700,
        fontFamily: 'Roboto Mono',
    },

    sectionHeadingText: {
        color: "white",
    },

    icon: {
        '@media (min-width:960px)': {
            paddingLeft: "20%",
        },
        paddingRight: ".5em",
        paddingBottom: ".15em",
        verticalAlign: "middle",
    },

    imageIcon: {
        '@media (min-width:960px)': {
            paddingLeft: "20%",
        },
        maxWidth: '10%',
        paddingTop: ".15em",
        paddingRight: ".5em",
        paddingBottom: ".15em",
        verticalAlign: "middle",
    },

    listItem: {
        '@media (min-width:960px)': {
            paddingLeft: "22.5%",
            paddingBottom: "3%",
            marginRight: theme.spacing(19),
        },
        textAlign: "left",
        paddingBottom: "5%",
        marginRight: theme.spacing(5),
    },

    experienceListRoot: {
        overflow: 'hidden',
        transition: 'all 0.5s ease',
        '&.expanded': {
            transition: "all .5s ease-in",
            position: "static",
            maxHeight: "100%",
        },
        '&.collapsed': {
            transition: "all .5s ease-out",
            maxHeight: 0,
            visibility: "hidden",
        },
    },
}));

interface ExperienceProps {
  company: string;
  companyLogoLink?: string;
  companyWebsite?: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  achievements?: string[];
  responsibilities: string[];
  technologies?: string[];
}

type Props = {
    experiences: ExperienceProps[]
}

function ExperienceComponent(props: Props) {
    const [collapsedStates, setCollapsedStates] = useState<boolean[]>(
        Array(props.experiences.length).fill(true)
    );
    const classes = useStyles();

    const handleClick = (index: number) => {
        const newCollapsedStates = [...collapsedStates];
        newCollapsedStates[index] = !newCollapsedStates[index];
        setCollapsedStates(newCollapsedStates);
    };

    return(
             <>
                <Typography variant="h4" align='center' className={classes.sectionHeading}>
                    💼<b className={classes.sectionHeadingText}>Experience</b>
                </Typography>
                {props.experiences.map((experience, index) => {
                    return(
                        <React.Fragment key={experience.startDate}>
                            <Grid container alignContent='center' justifyContent='center' className={classes.root}>
                                <Grid item className={classes.item}>
                                    <Typography className={classes.itemHeader} variant="body1" onClick={() => handleClick(index)} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "lightgrey"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#003566"}>
                                        {collapsedStates[index] && (
                                            <AddIcon className={classes.addRemoveIcons}></AddIcon>
                                        )}
                                        {!collapsedStates[index] && (
                                            <RemoveIcon className={classes.addRemoveIcons}></RemoveIcon>
                                        )}
                                        {experience.companyLogoLink && (
                                            <img src={experience.companyLogoLink} alt="Company logo" className={classes.imageIcon}></img>
                                        )}
                                        {!experience.companyLogoLink && (
                                            <WorkIcon className={classes.icon}></WorkIcon>
                                        )}
                                        <strong>{experience.position}</strong> at {experience.company}
                                    </Typography>
                                    <div className={`${classes.experienceListRoot} ${!collapsedStates[index] ? 'expanded' : 'collapsed'}`}>
                                            {experience.companyWebsite && (
                                                <Typography variant="body1" style={{paddingTop: ".7em"}}>
                                                    <LanguageIcon className={classes.icon}/>
                                                    <strong><a target="_blank" rel="noreferrer" style={{color: "white"}} href={experience.companyWebsite}>{experience.companyWebsite}</a></strong>
                                                </Typography>
                                            )}
                                            <Typography variant="body1" style={{paddingTop: ".7em"}}>
                                            <DateRangeIcon className={classes.icon}></DateRangeIcon>
                                            <b>{experience.startDate}</b> - <b>{experience.endDate || 'Present'}</b>
                                            </Typography>
                                            <Typography variant="body1" style={{paddingTop: ".7em"}}>
                                                <PinDropIcon className={classes.icon}></PinDropIcon>
                                                <strong>{experience.location}</strong>
                                            </Typography>
                                            <Grid item>
                                                <Typography variant="body1" style={{paddingTop: ".7em"}}>
                                                    <WorkIcon className={classes.icon}></WorkIcon>
                                                    <b>Responsibilities</b>
                                                </Typography>
                                                {experience.responsibilities.map((responsibility, index) => (
                                                    <li key={index} className={classes.listItem}>{responsibility}</li>
                                                ))}
                                            </Grid>
                                            {experience.achievements && (
                                                <Grid item>
                                                    <Typography variant="body1" style={{paddingTop: ".7em"}}>
                                                        <GradeIcon className={classes.icon}></GradeIcon>
                                                        <b>Achievements</b>
                                                    </Typography>
                                                    {experience.achievements.map((achievement, index) => (
                                                        <li key={index} className={classes.listItem}>{achievement}</li>
                                                    ))}
                                                </Grid>
                                            )}
                                            <Grid item>
                                                {experience.technologies && (
                                                    <Typography variant="body1" style={{paddingTop: ".7em"}}>
                                                        <SettingsIcon className={classes.icon}></SettingsIcon>
                                                        <b>Technology Stack</b>
                                                    </Typography>
                                                )}
                                                {experience.technologies && experience.technologies.map((technology, index) => (
                                                    <li key={index} className={classes.listItem}>{technology}</li>
                                                ))}
                                            </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    );
                })}
            </>
    );
}

export default ExperienceComponent;
