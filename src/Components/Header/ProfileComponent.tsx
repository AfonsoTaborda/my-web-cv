import { Typography, IconButton, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    profileRoot: {
        textAlign: 'center',
        width: "100%",
    },

    contactsContainer: {
        paddingTop: "2em",
    },

    sectionHeading: {
      marginTop: theme.spacing(3),
    },
  
    avatar: {
        '@media (min-width:960px)': {
            textAlign: 'left',
        },
        transition: 'transform 0.1s ease-out',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    
    avatarContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    name: {
        fontWeight: 'bold',
        margin: theme.spacing(2),
        marginLeft: 0,
        marginRight: 0,
    },

    iconsContainer: {
        width: "100%",
        marginTop: "3em",
    },

    iconButton: {
        transition: 'transform 0.2s ease-out',
        '&:hover && @media (min-width:960px)': {
            transform: 'scale(1.05)',
            marginLeft: ".8em",
            marginRight: ".8em",
        },
        '@media (max-width:960px)': {
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
        marginLeft: 0,
        marginBottom: "1em",
        padding: 0,
    },
  
    icon: {
        color: theme.palette.primary.contrastText,
    },

    link: {
        '@media (max-width:960px)': {
            display: 'none',
        },
        '@media (min-width:960px)': {
            fontSize: ".7em",
        },
        '&:hover': {
            backgroundColor: "#f1faee",
            color: "black",
        },
        color: "white",
        marginLeft: ".3em",
    },

    linkContainer: {
        '@media (max-width:960px)': {
            alignItems: "center",
            display: "flex",
            width: "100%",
        },
        marginBottom: ".5em",
    },
}));

export default function ProfileComponent() {
    const classes = useStyles();

    return(
        <Grid container>
            <Grid item sm={12} lg={12} className={classes.profileRoot}>
                <div className={classes.avatarContainer}>
                    <Avatar
                    src='https://media.licdn.com/dms/image/C4D03AQGgvzc5N5AoPw/profile-displayphoto-shrink_800_800/0/1625938735793?e=2147483647&v=beta&t=FCK6T9RvED5HVR7zY9eWPuXVYC9RkQJzz5IJKn3MwkY'
                    alt="Your Name"
                    className={classes.avatar} />
                </div>
                <Typography variant="h4" className={classes.name}>
                    Afonso Tomás Taborda
                </Typography>
                <Typography variant="body1">
                    Hi👋
                    I am a Software Engineer passionate about creating digital solutions empowered by data
                </Typography>
            </Grid>
            <Grid item sm={12} md={6} className={classes.iconsContainer}>
                <Grid className={classes.linkContainer}>
                    <IconButton href="https://github.com/AfonsoTaborda" target="_blank" rel="noreferrer" aria-label="GitHub" className={classes.iconButton}>
                        <GitHubIcon className={classes.icon} />
                        <Typography className={`${classes.link}`}>https://github.com/AfonsoTaborda</Typography>
                    </IconButton>
                </Grid>
                <Grid className={classes.linkContainer}>
                    <IconButton href="https://www.linkedin.com/in/afonso-taborda" target="_blank" rel="noreferrer" className={classes.iconButton}>
                        <LinkedInIcon className={classes.icon}></LinkedInIcon>
                        <Typography className={`${classes.link}`}>https://www.linkedin.com/in/afonso-taborda</Typography>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}