

import {
    Paper,
    Container,
    IconButton,
    InputBase,
    Typography, 
    Grid,
    Box,
    
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'

const useStyles = makeStyles((theme) => ({
    
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding:theme.spacing(0 ,2),
        marginTop:20,
    },
    cardGrid: {
        marginTop:50, 
    },
    box: {
        backgroundColor:theme.palette.background.white,  
        padding:theme.spacing(3), 
        marginBottom:theme.spacing(3), 
        
      },
 
  
}))

const Home = () => {
    const classes = useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth="md">
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

            <Container maxWidth="lg" className={classes.cardGrid}>
                <Box className={classes.box}>
                    <Typography component="h2" variant="h4" align="center" color="textPrimary">
                        Destaques
                    </Typography>
                    <br />
                        <Grid container spacing={4}>
                            <Grid item  xs={12} sm={6} md={4}>
                                <Card
                                
                                image="/images/mac.jpg"
                                title="Apple MacBook Air 13"
                                subtitle="499.00"
                                
                                />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                                <Card
                                    
                                    image="/images/Citroën-C-Elysée-1.jpg"
                                    title="Citroen C Elysée"
                                    subtitle="16.900,00"
                                
                                />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                                <Card
                                
                                    image="/images/iphone_12_pro_max_lineup_screen__wwen.png"
                                    title="IPhone 12 Pro Max"
                                    subtitle="1.200,00"
                                
                                />
                            </Grid>
                        </Grid>
                </Box>    
            </Container>    


        </TemplateDefault>
    )
}

export default Home 




