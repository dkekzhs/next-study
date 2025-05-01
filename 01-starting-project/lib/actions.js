'use server'

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals"

export async function formMeal( form ) {
    const meal = {
      title: form.get('title'),
      summary: form.get('summary'),
      instructions: form.get('instructions'),
      image: form.get('image'),
      creator: form.get('name'),
      creator_email: form.get('email'),
    }
    await saveMeal(meal);
    redirect("/meals");
  }