import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Banner } from "../components/banner/banner";
import Footer from "../components/footer/footer";

import { GetProducts } from "../api/v1/public/products/getProducts"
import { Product } from "../api/types";

const categories = ["All", "Custom", "Mathematics", "Science", "Engineering", "Technology", "Ethics"]

export default function ProductsPage() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
      GetProducts().then(async (data) => {
          const products = await data.json();
          setProductData(products['products']);
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Banner />

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Custom Learning Experiences
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our range of customizable learning solutions designed to make your students stand out
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {productData.map((product) => (
                  <Card key={product.id} className="group overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <Badge variant="secondary">{product.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-1 min-h-[56px]">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs max-h-[26px]">
                            {feature}
                          </Badge>
                        ))}
                        {product.features.length > 3 && (
                          <Badge variant="outline" className="text-xs max-h-[26px]">
                            +{product.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex bottom-2 items-center justify-between">
                      <div className="text-lg font-bold">{product.price}</div>
                      <Link href={`/products/${product.id}`}>
                        <Button size="sm" className="group/btn">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
