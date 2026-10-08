import { ProductCategoriesDataType } from "@/TypeScript/Type"

interface NavCategoriesDataProps{
    data: ProductCategoriesDataType
}

export default function NavCategories({data}: NavCategoriesDataProps){


    return (
        <div className="flex gap-2 cursor-pointer">
            
            <p>{data.nameBn}</p>
            <p>{data.icon}</p>
        </div>
    )
}