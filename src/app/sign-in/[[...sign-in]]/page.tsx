import { SignIn } from "@clerk/nextjs";
import { Banner } from "../../components/banner/banner";
import Footer from "../../components/footer/footer";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col">
        <Banner />
        <main className="flex-1">
          <div className="animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 
          rotate-25 overflow-hidden blur-3xl md:w-full bg-gradient-to-r from-[#00b8eb30]">
          </div>
          <div className="flex justify-center items-center py-20">
            <SignIn />
          </div>
        </main>
        <Footer />
    </div>
  );
}