import { Theme, Typography, makeStyles, Grid } from "@material-ui/core"
import { IconType } from "react-icons/lib";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
      paddingRight: "20%",
      paddingLeft: "20%",
      textAlign: "center",
    },

    sectionHeading: {
      '&:hover': {
        backgroundColor: 'grey',
        color: 'white',
      },
      backgroundColor: 'initial',
      marginBottom: theme.spacing(4),
      fontWeight: 700,
      fontFamily: 'Roboto Mono',
      textAlign: 'center',
      cursor: 'pointer',
    },
  
    skill: {
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
  
    skillName: {
      textAlign: 'center',
      marginLeft: theme.spacing(1),
    },
  
    skillIcon: {
      overflow: 'hidden',
      transition: 'all .3s ease-in',
      alignContent: "center",
      marginTop: theme.spacing(4),
      color: "lightgrey",
      '&:hover': {
        cursor: "default",
        transform: "scale(1.1)",
        transition: "all 0.09s ease-in",
        color: theme.palette.primary.main,
      }
    },
  
    icons: {
      width: "20%",
      marginLeft: theme.spacing(1),
      height:"auto",
    },
}));

interface IconTextProps {
    name: string;
    icon?: IconType;
    imageLink?: string;
    certificateLink?: string;
}

type Props = {
    iconProps: IconTextProps[];
    headingTitle: string;
}

export default function IconTextSkill(props: Props) {
    const classes = useStyles();

    return(
        <>
            <Grid container alignContent="center" justifyContent="center" className={classes.container}>
            {props.iconProps.map((skill, index) => {
                const IconComponent = skill.icon;

                if(skill.imageLink) {
                  return (
                      <Grid xs={8} key={index} item className={`${classes.skillIcon}`}>
                        <img className={classes.icons} src={skill.imageLink} alt='Skills Icon'></img>
                        <Typography key={skill.name} variant="body1" className={classes.skillName}>
                            {skill.name}
                        </Typography>
                      </Grid>
                  );
                }

                if(IconComponent) {
                  return (
                      <Grid xs={6} sm={2} key={index} item className={`${classes.skillIcon}`}>
                        <IconComponent className={classes.icons}></IconComponent>
                        <Typography variant="body1" className={classes.skillName}>
                          {skill.name}
                        </Typography>
                      </Grid>
                  );
                }
              })}
              </Grid>
        </>
    );
}