import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { fade } from '@material-ui/core/styles/colorManipulator'
import amber from '@material-ui/core/colors/amber'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: 'rgba(10,31,60,1)',
    },
    toolbarTitle: {
        flex: 1,
        height: 80,
    },
    logo: {
        marginTop: 10,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    navLink: {
        color: '#fff',
        "&:hover": {
          color: amber[500]
        }
    },
});


function NavBar(props) {
    const { classes } = props;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Link to="/" className={classes.toolbarTitle}>
                        <Typography variant="h6" color="inherit" noWrap>
                            <img className={classes.logo} src="img/logo.png" />
                        </Typography>
                    </Link>
                    <Link to="/">
                        <Button color="primary" className={classes.navLink}>HOME</Button>
                    </Link>
                    <Link to="/gigs">
                        <Button color="primary" className={classes.navLink}>GIGS</Button>
                    </Link>
                    <Link to="/artist">
                        <Button color="primary" className={classes.navLink}>ARTIST</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);