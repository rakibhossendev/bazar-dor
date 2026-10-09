'use client'

import { signIn} from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface SignInDataType{
    email: string;
    password: string;
    callbackURL: string;
}

export default function SignInPage() {
    const route = useRouter();

    const handelSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const getUserFormData = Object.fromEntries(formData.entries()) as unknown as SignInDataType;

        const {error} = await signIn.email({
            email: getUserFormData.email,
            password: getUserFormData.password,
            callbackURL: "/"
        })

        if(error){
            toast.error(error.message);
            return
        }
        route.push("/");
        await toast.success("Login successfully")

    }

    return (
        <section className="container mx-auto flex min-h-[90vh] items-center justify-center px-4 py-10 sm:px-6 sm:py-14">
            <div className="w-full max-w-md">
            
                <div className="mb-6 text-center sm:mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">সাইন ইন</h1>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-200/50 sm:p-8">
                    <form onSubmit={handelSignIn} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">ইমেইল</label>
                            <input id="email" name="email" type="email" placeholder="যেমন: rahim@example.com" autoComplete="email" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15"/>
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                            <input id="password" name="password" type="password" placeholder="আপনার পাসওয়ার্ড লিখুন" autoComplete="current-password" required className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:bg-white focus:ring-2 focus:ring-[#05893E]/15"/>
                        </div>
                        <button type="submit" className="w-full rounded-xl bg-[#05893E] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#05893E]/20 transition duration-200 hover:bg-[#047532] active:scale-[0.98] sm:text-base">সাইন ইন করুন</button>
                    </form>
                </div>
            </div>

        </section>
    )
}