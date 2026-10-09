import { converUnitName } from "@/app/components/ProductCard/ProductCard";
import ProductDetailsCard from "@/app/components/productDetailsCard/ProductDetailsCard";
import { ProductCommonDataType } from "@/TypeScript/Type"
import Link from "next/link";

const productFilterDataType = async (producId: string): Promise<ProductCommonDataType> => {
    const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${producId}`);
    const data = await response.json();

    return data;
}

export default async function ProductDetails({ params, }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    const productDetails = await productFilterDataType(productId);

    return (
        <section className="container mx-auto">

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <Link href="/" className="transition-colors hover:text-[#05893E]">হোম</Link>
                <span>/</span>
                <Link href={`/categories/${productDetails.category}`} className="transition-colors hover:text-[#05893E]">{productDetails.categoryNameBn}</Link>
                <span>/</span>
                <span className="font-medium text-gray-800">{productDetails.nameBn}</span>
            </div>

            <div className="rounded-2xl mt-5 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-5">
                        <p className="shrink-0 text-3xl sm:text-4xl">{productDetails.image}</p>

                        <div className="min-w-0 flex-1">
                            <h1 className="text-lg font-bold leading-snug text-gray-900 sm:text-2xl">{productDetails.nameBn}</h1>
                            <p className="mt-2 wrap-words text-sm leading-6 text-gray-700"> প্রতি {converUnitName(productDetails.unit)} ·{" "} {productDetails.nameBn}</p>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {productDetails.change.dir === "up" ? (
                                    <>
                                        
                                        গতকালের তুলনায় আজ দাম বেড়েছে{" "}
                                        <span className="font-semibold">
                                            {(productDetails.today - productDetails.yesterday).toLocaleString("bn-BD")} টাকা
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-1 font-semibold text-green-600">▼</span>
                                        গতকালের তুলনায় আজ দাম কমেছে{" "}
                                        <span className="font-semibold text-green-600">
                                            {productDetails.yesterday - productDetails.today} টাকা
                                        </span>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Today's Price */}
                    <div className="w-full shrink-0 rounded-xl bg-gray-50 px-4 py-3 sm:w-44 sm:px-5 sm:py-4">
                        <p className="text-sm text-gray-600">আজকের দাম</p>
                        <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl"> {productDetails.today} <span className="ml-1 text-sm font-medium text-gray-600">টাকা</span></h2>
                        <p className="mt-1 text-xs text-gray-500">/ {converUnitName(productDetails.unit)}</p>

                        <p className={`mt-2 text-sm font-semibold ${productDetails.change.dir === "up"
                                    ? "text-red-600"
                                    
                                    : productDetails.change.dir === "down"
                                        ? "text-green-600"
                                        : "text-gray-500"
                                }`}
                        >
                            {productDetails.change.dir === "up" ? "▲" : productDetails.change.dir === "down" ? "▼" : ""}
                            {" "}{productDetails.change.pct}%
                        </p>
                    </div>

                </div>
            </div>

        <ProductDetailsCard productDetails={productDetails}></ProductDetailsCard>
        
        </section>
    )
}