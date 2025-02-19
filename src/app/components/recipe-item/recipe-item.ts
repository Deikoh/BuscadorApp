export type RecipeItem = {
    id:number;
    name:string;
    ingredients:string[];
    instructions:string[];
    prepTimeMinutes:number;
    cookTimeMinutes:number;
    servings:number;
    difficulty:'Easy'|'Medium';
    cuisine:string;
    caloriesPerServing:number;
    tags:string[];
    userId:number;
    image:string;
    rating:number;
    reviewCount:number;
    mealType:string[];
}