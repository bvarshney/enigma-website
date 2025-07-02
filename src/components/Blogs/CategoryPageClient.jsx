'use client';
import { fadeUp, TitleAnim } from "@/lib/gsapAnimations";
import CategoryList from "./CategoryList";

export default function CategoryPageClient({ categories, title }) {

    fadeUp();
    TitleAnim();

    return (
        <>
            <h2 className="mt-[8vw] mb-[3vw] font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] title-anim">
                {title} Blogs
            </h2>

            <CategoryList
                categories={categories}
                activeCategory={title}
            />
        </>
    )
}