import {getMeal} from "@/lib/queries";
import classes from "./page.module.css";

import Image from "next/image";
import {notFound} from "next/navigation";
import {metadata as meal} from "@/app/layout";

export async function generateMetadata(context) {
    const params = await context.params
    const meal = await getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
    };
}
export default async function MailDetailsPage(context){
    const params = await context.params
    const meal = await getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    const formattedInstructions = meal.instructions.replace(/\n/g, "<br />");
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill sizes="true"/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: formattedInstructions,
                    }}
                ></p>
            </main>
        </>
    )
}