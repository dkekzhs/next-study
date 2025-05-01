'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"

function invalidText(text) {
    return !text || text.trim() === '';
}

export async function formMeal( prevState, form ) {
    const meal = {
      title: form.get('title'),
      summary: form.get('summary'),
      instructions: form.get('instructions'),
      image: form.get('image'),
      creator: form.get('name'),
      creator_email: form.get('email'),
    }

    if (invalidText(meal.title) ||
        invalidText(meal.summary) ||
        invalidText(meal.instructions) ||
        invalidText(meal.creator) ||
        invalidText(meal.creator_email) ||
        !meal.creator_email.includes("@")
    ) {
        return { "message": "invaild Input" };
    }

    await saveMeal(meal);
    redirect("/meals");
  }