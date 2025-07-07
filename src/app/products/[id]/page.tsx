import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Package, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Banner } from "../../components/banner/banner";
import Footer from "../../components/footer/footer";

const products: { [key: string]: Product } = {
  "custom-learning": {
    id: "custom-learning",
    name: "Custom Learning Plan",
    description: "Tailored learning experiences designed to meet individual needs and goals.",
    longDescription:
      "Our custom learning plans are crafted from high-quality educational materials, providing excellent support for your learning journey. With our AI-powered design system, you can create stunning custom graphics that perfectly represent your brand. These plans are perfect for students, professionals, and anyone looking to achieve specific educational goals with a personalized approach.",
    price: "Starting at $49",
    priceRange: "$49 - $299",
    images: [
      "/placeholder.svg?height=500&width=600&text=Learning+Plan+Overview",
      "/placeholder.svg?height=500&width=600&text=Personalized+Modules",
      "/placeholder.svg?height=500&width=600&text=Progress+Tracking",
      "/placeholder.svg?height=500&width=600&text=AI+Recommendations",
    ],
    category: "Learning",
    rating: 4.9,
    reviews: 212,
    features: [
      "Personalized curriculum",
      "AI-driven recommendations",
      "Progress tracking dashboard",
      "Expert support",
      "Flexible scheduling",
      "Goal-oriented milestones",
    ],
    specifications: {
      "Delivery Format": "Online, PDF, or mobile app",
      "Support": "1:1 coaching available",
      "Customization": "Fully tailored to user goals",
      "Duration": "Flexible (1 week to 12 months)",
      "Assessment": "Regular progress checks",
      "Integration": "Works with Google Calendar & Notion",
      "Languages": "English, Spanish, French",
      "Accessibility": "WCAG 2.1 compliant",
    },
    plans: [
      { name: "Starter", duration: "1 week plan", price: "$49" },
      { name: "Standard", duration: "1 month plan", price: "$129" },
      { name: "Advanced", duration: "3 month plan", price: "$199" },
      { name: "Premium", duration: "12 month plan", price: "$299" },
    ],
    useCases: [
      "Exam preparation",
      "Career advancement",
      "Skill development",
      "Onboarding new employees",
      "Personal growth",
      "Homeschooling",
    ],
  },
  "mathematics": {
    id: "mathematics",
    name: "Mathematics",
    description: "Comprehensive math tutoring and resources for all levels.",
    longDescription:
      "Our mathematics program offers personalized tutoring, interactive resources, and a wealth of practice materials to help students excel in math. Whether you're struggling with basic concepts or advanced topics, our expert instructors are here to guide you every step of the way.",
    price: "Starting at $0.85",
    priceRange: "$0.85 - $2.45",
    images: [
      "/placeholder.svg?height=500&width=600&text=Mathematics+Tutoring",
      "/placeholder.svg?height=500&width=600&text=Interactive+Lessons",
      "/placeholder.svg?height=500&width=600&text=Practice+Problems",
      "/placeholder.svg?height=500&width=600&text=Expert+Support",
    ],
    category: "Tutoring",
    rating: 4.9,
    reviews: 89,
    features: [
      "Personalized lesson plans",
      "Interactive problem solving",
      "Progress tracking dashboard",
      "Expert math tutors",
      "Flexible scheduling",
      "Support for all levels",
      "Exam preparation",
      "Homework help",
    ],
    specifications: {
      "Delivery Format": "Online, PDF, or mobile app",
      "Support": "1:1 tutoring available",
      "Customization": "Tailored to student needs",
      "Duration": "Flexible (single session to full semester)",
      "Assessment": "Regular progress checks",
      "Integration": "Works with Google Classroom & Notion",
      "Languages": "English, Spanish, French",
      "Accessibility": "WCAG 2.1 compliant",
    },
    plans: [
      { name: "Single Session", duration: "1 hour", price: "$0.85" },
      { name: "Weekly Plan", duration: "5 sessions", price: "$1.25" },
      { name: "Monthly Plan", duration: "20 sessions", price: "$1.85" },
      { name: "Semester Plan", duration: "60 sessions", price: "$2.45" },
    ],
    useCases: [
      "Homework help",
      "Exam preparation",
      "Skill development",
      "Remedial learning",
      "Advanced studies",
      "Competition training",
    ],
  },
  "science": {
    id: "science",
    name: "Science",
    description: "Engaging science tutoring and resources for all levels.",
    longDescription:
      "Our science program offers personalized tutoring, interactive resources, and a wealth of practice materials to help students excel in science. Whether you're struggling with basic concepts or advanced topics, our expert instructors are here to guide you every step of the way.",
    price: "Starting at $4.25",
    priceRange: "$4.25 - $12.95",
    images: [
      "/placeholder.svg?height=500&width=600&text=Science+Tutoring",
      "/placeholder.svg?height=500&width=600&text=Lab+Experiments",
      "/placeholder.svg?height=500&width=600&text=Interactive+Resources",
      "/placeholder.svg?height=500&width=600&text=Expert+Support",
    ],
    category: "Tutoring",
    rating: 4.7,
    reviews: 67,
    features: [
      "Personalized lesson plans",
      "Hands-on experiments",
      "Progress tracking dashboard",
      "Expert science tutors",
      "Flexible scheduling",
      "Support for all levels",
      "Exam preparation",
      "Homework help",
    ],
    specifications: {
      "Delivery Format": "Online, PDF, or mobile app",
      "Support": "1:1 tutoring available",
      "Customization": "Tailored to student needs",
      "Duration": "Flexible (single session to full semester)",
      "Assessment": "Regular progress checks",
      "Integration": "Works with Google Classroom & Notion",
      "Languages": "English, Spanish, French",
      "Accessibility": "WCAG 2.1 compliant",
    },
    plans: [
      { name: "Single Session", duration: "1 hour", price: "$4.25" },
      { name: "Weekly Plan", duration: "5 sessions", price: "$7.50" },
      { name: "Monthly Plan", duration: "20 sessions", price: "$10.25" },
      { name: "Semester Plan", duration: "60 sessions", price: "$12.95" },
    ],
    useCases: [
      "Homework help",
      "Exam preparation",
      "Skill development",
      "Remedial learning",
      "Advanced studies",
      "Lab experiment guidance",
    ],
  },
}

type Product = {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    price: string;
    priceRange: string;
    images: string[];
    category: string;
    rating: number;
    reviews: number;
    features: string[];
    specifications: {
        [key: string]: string;
    };
    plans: {
        name: string;
        duration: string;
        price: string;
    }[];
    useCases: string[];
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const parms = await params;
  const id = parms.id;
  const product = products[id] as Product | undefined;

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 2}`}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary">{product.category}</Badge>
                <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-bold">{product.price}</div>
                <p className="text-sm text-muted-foreground">Price range: {product.priceRange}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Key Features</h3>
                <div className="grid gap-2">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/dashboard/create" className="flex-1">
                  <Button size="lg" className="w-full">
                    Customize This Product
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Get Quote
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 rounded-lg border p-4">
                <div className="text-center">
                  <Package className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-2 text-sm font-medium">Fast Turnaround</div>
                  <div className="text-xs text-muted-foreground">5-7 days</div>
                </div>
                <div className="text-center">
                  <Truck className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-2 text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">Orders $500+</div>
                </div>
                <div className="text-center">
                  <Star className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-2 text-sm font-medium">Quality Guarantee</div>
                  <div className="text-xs text-muted-foreground">100% satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="details" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="plans">Plans & Pricing</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{product.longDescription}</p>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-semibold">All Features</h4>
                      <div className="grid gap-2 md:grid-cols-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="plans" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Plans & Pricing</CardTitle>
                    <CardDescription>Choose the perfect plan for your needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {product.plans.map((plan, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">{plan.name}</h4>
                              <p className="text-sm text-muted-foreground">{plan.duration}</p>
                            </div>
                            <div className="text-lg font-bold">{plan.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg bg-muted p-4">
                      <p className="text-sm">
                        <strong>Note:</strong> Prices shown are per lesson for two hours. Volume discounts
                        available for larger groups of students. Custom plans available upon request.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="flex justify-between border-b pb-2">
                          <span className="font-medium">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="use-cases" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Perfect For</CardTitle>
                    <CardDescription>Common use cases and applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {product.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-center gap-2 rounded-lg border p-3">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
