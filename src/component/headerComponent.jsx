import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
export const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 300px;
  background-color: white;
  box-shadow: 0 3px 10px 0 #aaa;
`;
export const IngredientsText = styled.span`
  font-size: 18px;
  font-weight: bold 1px #eb3300;
  color: black;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
`;
export const SearchInput = styled.input`
  color: black;
  font-size: 14px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
export const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;
export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 60%;
`;
