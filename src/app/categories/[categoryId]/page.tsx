import SortCard from "@/app/components/Sorting/SortingCard";
import { ProductCommonDataType } from "@/TypeScript/Type";


const categoriesByProductAPIResponse = async (categoryId: string): Promise<ProductCommonDataType[]> => {
    const response = await fetch(`${process.env.CATEGORY_BY_FILTER_PRODUCT_API}=${categoryId}`);
    const data = await response.json();

    return data
}



export default async function CategoryByProduct({ params, }: { params: Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const getProductByCategories = await categoriesByProductAPIResponse(categoryId);


    return (
        <section className="container mx-auto mt-6 px-4 sm:mt-10 sm:px-6">
            <div>
                <div className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:gap-6 sm:px-8 sm:py-5">
                    <p className="my-2 shrink-0 text-3xl sm:my-4 sm:text-4xl">{getProductByCategories[0].image}</p>
                    <div className="min-w-0">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">{getProductByCategories[0].categoryNameBn}</h1>
                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">মোট{" "}{getProductByCategories.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
                    </div>
                </div>

                <SortCard getProductData={getProductByCategories}></SortCard>

            </div>
        </section>
    )

}