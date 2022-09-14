import React from 'react'
import { Card, Header, Image, MainContainer ,Button } from './Cards.styled'
import defaultImage from '../../assets/default-image.jpg'
import { useNavigate } from 'react-router-dom'
const Cards = ({recipes}) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap='wrap'>
      {
        //Bir sürü kartımız var recipes içindeki bilgileri karta yazdırmak için içinde dolaşıyoruz o yüzden recipesi mapledik
        recipes.map(({ recipe }, index) => {
          // {recipe} bunu yaparak recipes içindeki recipeleri açtık yolda desctranting yaptık.
          const { label } = recipe;
          // recipe de destctranting yaptık içindeki labeli aldık.
          return (
            <Card key={index}>
              <Header>{label}</Header>
              <Image src={recipe.image || defaultImage} />
              <Button
                onClick={() =>
                  navigate("detail", { state: recipe, replace: false })
                  //navigate tek paremetre verirsek gideceği url alır ikinci paremetre yazarsak göndereceğimiz state'i alır. 
                  //history siler replace tek başına da kullanılabilr.veya replace:true de olur o zaman history silinir.
                }
              >
                View More
              </Button>
              {/* //replace history siler */}
            </Card>
          );
        })
      }
    </MainContainer>
  );
}

export default Cards