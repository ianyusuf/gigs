import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Section from './Section'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchArtist } from '../actions/artist'

const styles = {
    avatarStyle: {
        backgroundColor: 'blue'
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}

class ArtistList extends Component {
    componentDidMount() {
        console.log('panggil fetchArtist di componentDidMount')
        this.props.fetchArtist()
    }
  
    render() {
        const { artist } = this.props
        return (
            <Section title="ARTIST">
                {artist.length <= 0 ?
                    <CircularProgress />
                    :
                    <Grid container spacing={16}>
                            {artist.map((artist, index) =>(
                                <Grid item xs={6} md={3}>
                                    <Card>
                                        <CardMedia
                                            className={artist.media}
                                            image="img/logo.png"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography variant="title" align="center" gutterBottom>
                                                {artist.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={artist.view} align="center">
                                            <Grid container spacing={16} justify="center">
                                                <Grid item>
                                                    <Link key={artist.name} to={`/artist/${index + 1}`}>
                                                        <Button variant="contained" color="primary">
                                                            VIEW
                                                        </Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                }
            </Section>
        )
    }
}

const mapStateToProps = state => ({
    artist: state.artist.artistData
})

const mapDispatchToProps = dispatch => ({
    fetchArtist: () => dispatch(fetchArtist())
})

ArtistList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)