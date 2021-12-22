import {
    Container,
    Box,
    Typography,
    Paper,
    InputBase,
    IconButton,
    Grid,
    }from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../../src/templates/Default'
import Card from '../../../src/components/Card'


const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding:theme.spacing(0 ,2),
        marginTop:20,
    },

    box: {
        backgroundColor:theme.palette.background.white,  
        padding:theme.spacing(3), 
        marginBottom:theme.spacing(3), 
        
      },
     
    
    
  }))

const List = () => {
    const classes = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                    <Grid item  xs={12} sm={12} md={12}>
                        <Paper component="form" className={classes.searchBox}>
                            <InputBase
                               
                                placeholder="EX.: Iphone XS Max com garantia"
                                fullWidth
                            />
                            <IconButton type="submit"  aria-label="search" >
                                <SearchIcon />
                            </IconButton>     
                        </Paper>
                    </Grid>
               </Grid>  
               <br />   
               <Grid item  xs={12} sm={12} md={12}>  
                    <Box className={classes.box}>
                        <Typography component="h6" align="left" variant="h6" color="textPrimary">
                            Anúncios
                            </Typography>
                        <Typography component="span" align="left" variant="subtitle2" gutterBottom={true} >
                            ENCONTRAMOS 200 ANÚNCIOS
                            </Typography>
                        <Grid container spacing={4}>
                            
                            <Grid item  xs={12} sm={6} md={4}>      
                            
                            
                                    <Card
                                    image={'https://source.unsplash.com/random'}
                                    title="Produto 1"
                                    subtitle="R$ 60,00"                 
                                    >
                                    </Card>
                                
                            </Grid> 
                            <Grid item  xs={12} sm={6} md={4}>
                            
                                    <Card
                                    image={'https://source.unsplash.com/random'}
                                    title="Produto 2"
                                    subtitle="R$ 60,00"                 
                                    >
                                    </Card>
                                
                            </Grid> 
                            <Grid item  xs={12} sm={6} md={4}>
                                
                                    <Card
                                    image={'https://source.unsplash.com/random'}
                                    title="Produto 3"
                                    subtitle="R$ 60,00"                 
                                    >
                                    </Card>
                                
                            </Grid>      
                        </Grid>  
                    </Box>    
                </Grid>     
            </Container>       
                 
        </TemplateDefault>

    )

}

export default List 






