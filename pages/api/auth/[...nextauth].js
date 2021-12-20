import axios from 'axios'
import NextAuth from 'next-auth'

import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    Credentials({
        name: 'Credentials', 
        async authorize(credentials) {
            const res = axios.post('http://localhost:3000/api/auth/signin', credentials)
                
    
            const user = res.data   
            
            if(user) {
                return user
            } else {
                throw '/auth/signin?i=1'
            }
        }    
    })
    
  ],

  session: {
      jwt: true,
  },
  
  jwt: {
    secret:process.env.JWT_TOKEN,
  },

  database:process.env.MONGODB_URI,
})