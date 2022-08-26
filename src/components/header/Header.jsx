import {
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Button,
  Select,
} from "./Header.styled";

const Header = ({ setQuery , setSelectedMeal}) => {
  return (
    <HeaderContainer>
      <MainHeader>RECİPE APP</MainHeader>
      <FormContainer>
        <FoodInput
          type='text'
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type='submit'></Button>
        <Select
          name='mealType'
          id='mealType'
          onChange={(e) => setSelectedMeal(e.target.value)}
        ></Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
