import Link from 'next/link'
import slugify from 'slugify'
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

import Card from '../../src/components/Card'
import TemplateDefault from '../../src/templates/Default'
import { formatCurrency } from '../../src/utils/currency'
import ProductsModel from '../../src/models/products'


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

const List = ({ products }) => {
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
                            ENCONTRAMOS {products.length} ANÚNCIOS
                            </Typography>
                        <Grid container spacing={4}>
                        {
                                products.map(product => {
                                    const category = slugify(product.category).toLocaleLowerCase()
                                    const title = slugify(product.title).toLocaleLowerCase()
                                   
                                    return(
                                        <Grid  key={product._id} item  xs={12} sm={6} md={4}>
                                            <Link href={`/${category}/${title}/${product._id}`}>
                                                <a className={classes.productLink}>
                                                    <Card
                                                    
                                                    image={`uploads/${product.files[0].name}`}
                                                    title={product.title}
                                                    subtitle={formatCurrency(product.price)}
                                                    
                                                    />
                                                </a>
                                            </Link>
                                        </Grid>       
                                    )
                                })
                            }                          
                                
                        </Grid>  
                    </Box>    
                </Grid>     
            </Container>       
                 
        </TemplateDefault>

    )

    export async function getServerSideProps ({ query }) {
       const { q } = query
      
        const products = await ProductsModel.find({ 
            $or: [
                {
                    title: {
                        $regex: q,
                        $options: 'i'
                    }
                },
                {
                    description: {
                        $regex: q,
                        $options: 'i'
                    }
                },
            ]
        }) 
      
        return {
          props: {
            products: JSON.parse(JSON.stringify(products)),
          }
        }
      }
      
}

export default List 






