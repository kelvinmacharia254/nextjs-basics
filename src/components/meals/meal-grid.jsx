import MealItem from "./meal-item";
import classes from "./meal-grid.module.css";

export default function MealGrid({ meals }) {
    console.log("meals: ", meals);
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}