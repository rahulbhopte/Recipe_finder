import "./styles.css";

import {
  Header,
  SearchComponent,
  CoverImage,
  RecipeName,
  RecipeListContainer,
  RecipeContainer,
  IngredientsText,
  SearchInput,
  Container,
  RecipeImage,
  AppName,
  SearchIcon,
  SeeMoreText,
  Placeholder
} from "./component/headerComponent";
import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Axios from "axios";
const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

const RecipeComponent = (props) => {
  const [show, setShow] = React.useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Incredients</DialogTitle>
        <DialogContent>
          {" "}
          the Recipe
          <table>
            <thead>
              <th>Incredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <SeeMoreText
            onClick={() => {
              setShow("");
            }}
          >
            Close
          </SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

export default function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updaterecipeList] = useState([]);
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updaterecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <RecipeImage src="https://images.indulgexpress.com/uploads/user/imagelibrary/2021/2/17/original/1mae-mu-I7A_pHLcQK8-unsplash_revised.jpg?w=400&dpr=2.6" />
          Recipe Finder
        </AppName>
        <SearchComponent>
          <SearchIcon src="https://img.icons8.com/color/2x/search--v3.gif" />
          <SearchInput
            type="text"
            placeholder="Search for meal by Keyword"
            onChange={onTextChange}
          />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList?.length ? (
          recipeList.map((recipeObj, index) => (
            <RecipeComponent key={index} recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src="https://images.indulgexpress.com/uploads/user/imagelibrary/2021/2/17/original/1mae-mu-I7A_pHLcQK8-unsplash_revised.jpg?w=400&dpr=2.6" />
        )}
      </RecipeListContainer>
    </Container>
  );
}
