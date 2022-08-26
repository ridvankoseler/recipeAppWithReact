import {
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Button,
  Select,
} from "./Header.styled";

const Header = ({ setQuery , setSelectedMeal, mealType ,getData}) => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    getData()
  }
  return (
    <HeaderContainer>
      <MainHeader>RECİPE APP</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type='text'
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type='submit'>SEARCH</Button>
        <Select
          name='mealType'
          id='mealType'
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {
            mealType.map((meal,index)=>{
              return (
                <option key={index} value=''>
                  {meal.toLowerCase()}
                </option>
              );
              
            })
          }
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
