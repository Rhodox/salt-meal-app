import Meal from './Meal';
import fetchdb from '../fetchdb';

const List = () => {

  fetchdb('http://localhost:8080/recipes')
    .then(data => printFoodList(data));

  const printFoodList = (foodList) => {

    console.log('data being recieved by printFoodList ', foodList);
    
    return foodList.forEach(meal => {
      <Meal title={meal.title} />
    });
  }

  return (
    <div className="List">
    {console.log('this is being run')}
      {printFoodList()}
    </div>
  );
}

export default List;
