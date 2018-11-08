import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    heroUnit: {
        paddingTop: 40,
        paddingBottom: 100,
    },
    heroContent: {
        maxWidth: 800,
        paddingTop: 100,
        paddingBottom: 100,
        margin: '0 auto',
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
})

function Hero(props) {
    const { classes } = props;

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Discover Indie GIGS
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        They said to never judge a band’s music until you see them live, and we live by that statement. We personally have experienced a bunch of great band gigs and stage play, surprisingly from our local Indonesian indie musicians! At GIGS, when we say it’s good music, then we can assure you that it is effin’ awesome. Then what are you waiting for? Start browsing now and breathe in the indie music that you know and love!
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    GIGS Schedule
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero)