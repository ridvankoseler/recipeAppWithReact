import React from 'react'
import { Card, Header, Image, MainContainer ,Button } from './Cards.styled'
import defaultImage from '../../assets/default-image.jpg'
import { useNavigate } from 'react-router-dom'
const Cards = ({recipes}) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap='wrap'>
      {
        recipes.map(({recipe},index)=>{
          const {label} = recipe
          return (
            <Card >
              <Header>{label}</Header>
              <Image src={recipe.image || defaultImage} />
              <Button onClick={()=>navigate('detail', {state:recipe ,replace:false})}>View More</Button>
              {/* //replace history siler */}
             </Card>
          )
        })
      }
      

      
    </MainContainer>
  )
}

export default Cards