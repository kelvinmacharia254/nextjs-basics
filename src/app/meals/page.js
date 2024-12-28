import Link from "next/link";
import { Suspense } from "react";
import {dummyMeals} from "@/lib/dummyMeals";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";

export const metadata = {
    title: "Meals",
    description: "Explore meals from all over the world.",
}
export default function MealsPage(){
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals from all over the world, created
                    <span className={classes.highlight}> by you</span>
                </h1>
                <p>
                    Choose your favourite recipe and cok it yourself. It is easy and fun!
                </p>
                <p  className={classes.cta}>
                    <Link href="/meals/share">Share Your Favourite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealGrid meals={dummyMeals} />
            </main>
        </>
    )
}