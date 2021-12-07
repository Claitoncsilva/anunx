

import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Container,
    IconButton,
    InputBase,
    Paper,
    Typography, 
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/search'
import { getDisplayName } from 'next/dist/shared/lib/utils'
import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    searchContainer : {
        padding: theme.spacing(8, 10, 6)
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding:theme.spacing(0 ,2),
        marginTop:20,
    },
 
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', 
      },
}))

const Home = () => {
    const classes = useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth="md" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    O que deseja encontrar ?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder="Ex.: Iphone 12 com garantia"
                        fullWidth
                    />
                    <IconButton >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="md" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align="center" color="textPrimary">
                    Destaques
                </Typography>
                <br />
                    <Grid container spacing={4}>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={'https://source.unsplash.com/random'}
                                    title="Titulo da Imagem"
                                    />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Produto X
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={'https://source.unsplash.com/random'}
                                    title="Titulo da Imagem"
                                    />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Produto X
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item  xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={'https://source.unsplash.com/random'}
                                    title="Titulo da Imagem"
                                    />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Produto X
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Container>    


        </TemplateDefault>
    )
}

export default Home 




