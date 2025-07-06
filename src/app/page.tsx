import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Box, Cpu, Package, Sparkles, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Banner } from "./components/banner/banner";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <main className="flex-1">
        <section className="relative overflow-hidden py-6 md:py-32">
          <div className="animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 
          rotate-25 overflow-hidden blur-3xl md:w-full bg-gradient-to-r from-[#00b8eb30]">
          </div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <div className="flex flex-row items-center rounded-lg bg-[#00b7eb2a] border-cyan-500 border-1 px-3 py-1 text-sm text-caption">
                  <Sparkles className="size-4 mr-2 fill-cyan-500 stroke-0"/>
                  <span className="shrink-0 font-medium pr-1">New</span>
                  <div className="button-sep border-cyan-500 border-1"></div>
                  <span className="pl-1">Learning reimagined with AI</span>
                </div>
                <div className="bg-linear-145 from-cyan-500 to-white to-50% bg-clip-text pt-2 text-transparent animate-fade-in">
                  <h1 className="font-aeonik-pro text-5xl tracking-tighter sm:text-5xl md:text-6xl/none">
                    Custom learning solutions <span className="text-primary">designed by AI</span>
                    <span className="text-bold text-cyan-500">_</span>
                  </h1>
                </div>
                <p className="text-description md:text-xl">
                  Upload your brand, customize your dashboard, and let our AI create stunning designs that make your
                  products stand out.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:gap-4 min-[400px]:flex-row">
                  <Link href="/signup" className="w-full! min-[400px]:w:fit!">
                    <Button size="lg" className="w-full! min-[400px]:w:fit! bg-cyan-500 text-white text-md hover:bg-cyan-500">
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works" className="w-full! min-[400px]:w:fit!">
                    <Button size="lg" className="w-full! min-[400px]:w:fit! text-white border-0 inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a]">
                      How it works
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#00b8eb53] to-primary/50 opacity-75 blur-xl"></div>
                <div className="relative rounded-xl border bg-background p-4">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="AI-designed learning preview"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-aeonik-pro text-center text-cyan-500">Our Products</h2>
                <p className=" text-description dark:text-white mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our range of customizable learning solutions
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Custom Learning Solutions",
                  description: "Tailored learning experiences designed to meet individual needs and goals.",
                  icon: Package,
                  href: "/products/custom-learning",
                },
                {
                  title: "Mathematical Learning Kits",
                  description: "Comprehensive kits designed to enhance math learning and engagement.",
                  icon: Upload,
                  href: "/products/mathematics",
                },
                {
                  title: "Science Learning Kits",
                  description: "Comprehensive kits designed to enhance science learning and engagement.",
                  icon: Sparkles,
                  href: "/products/science",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a] text-primary">
                      <product.icon className="h-6 w-6 stroke-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold min-h-[56px]">{product.title}</h3>
                    <p className="text-description min-h-[75px]">{product.description}</p>
                    <Link href={product.href}>
                      <Button variant="link" className="p-0 h-auto">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/products">
                <Button size="lg" className="bg-cyan-500 text-white text-md hover:bg-cyan-500">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl font-aeonik-pro text-center text-cyan-500">How It Works</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Create a custom learning experience in just a few simple steps
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Upload Your Brand",
                  description: "Upload your logo, brand colors, and any design elements you want to include",
                  icon: Upload,
                },
                {
                  step: "02",
                  title: "Customize Your Learning Solution",
                  description: "Choose your learning materials and customize your features",
                  icon: Box,
                },
                {
                  step: "03",
                  title: "AI Design Magic",
                  description: "Our AI will generate design options that perfectly align with your brand identity",
                  icon: Cpu,
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col gap-4 rounded-lg border bg-background p-6">
                  <div className="absolute right-4 top-4 text-3xl font-bold text-muted-foreground/20">{step.step}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a] text-primary">
                    <step.icon className="h-6 w-6 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold font-aeonik-pro tracking-tighter sm:text-4xl md:text-5xl text-cyan-500">
                  Ready to transform your learning plan?
                </h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Join thousands of brands using Creation Foundation to create stunning, custom learning experiences that delight customers.
                </p>
                <div>
                  <Link href="/signup">
                    <Button size="lg" className="group bg-cyan-500 text-white text-md hover:bg-cyan-500">
                      Get started today
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-primary-foreground/20 opacity-75 blur-xl"></div>
                <div className="relative rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-4">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Custom learning examples"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
