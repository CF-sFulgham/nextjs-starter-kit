"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateDesignPage() {
  const [selectedPackage, setSelectedPackage] = useState("box")
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [logoPosition, setLogoPosition] = useState(50)
  const [logoSize, setLogoSize] = useState(50)

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedLogo(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create New Learning Plans</h1>
        <p className="text-muted-foreground">Design your custom learning experience in a few simple steps</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Step 1: Choose Your Plan Type</h2>
                    <p className="text-sm text-muted-foreground">Select the type of learning experience you want to customize</p>
                  </div>

                  <RadioGroup
                    value={selectedPackage}
                    onValueChange={setSelectedPackage}
                    className="grid gap-4 md:grid-cols-3"
                  >
                    {[
                      {
                        value: "parents",
                        title: "Parents",
                        description: "Parents can create custom learning plans for their children",
                      },
                      {
                        value: "teachers",
                        title: "Teachers",
                        description: "Teachers can create custom learning plans for their students",
                      },
                      {
                        value: "school-districts",
                        title: "School Districts",
                        description: "School districts can create custom learning plans for their students",
                      },
                    ].map((option) => (
                      <Label key={option.value} htmlFor={option.value} className="cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={option.value} />
                          <div className="grid gap-1">
                            <div className="font-medium">{option.title}</div>
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          </div>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="size">Learning Package</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="material">Material</Label>
                      <Select defaultValue="mathematics">
                        <SelectTrigger id="material">
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Number of Students</Label>
                      <Select defaultValue="100">
                        <SelectTrigger id="quantity">
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50">50</SelectItem>
                          <SelectItem value="100">100</SelectItem>
                          <SelectItem value="250">250</SelectItem>
                          <SelectItem value="500">500</SelectItem>
                          <SelectItem value="1000">1,000</SelectItem>
                          <SelectItem value="custom">Custom Quantity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleNextStep}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Step 2: Upload Your Branding</h2>
                    <p className="text-sm text-muted-foreground">Upload your logo and select brand colors</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="logo-upload">Logo Upload</Label>
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed ${
                            uploadedLogo ? "border-primary" : "border-muted-foreground/25"
                          }`}
                          onClick={() => document.getElementById("logo-upload")?.click()}
                        >
                          {uploadedLogo ? (
                            <Image
                              src={uploadedLogo || "/placeholder.svg"}
                              alt="Uploaded logo"
                              width={100}
                              height={100}
                              className="max-h-28 max-w-28 object-contain"
                            />
                          ) : (
                            <div className="flex flex-col items-center gap-2 text-center">
                              <Upload className="h-8 w-8 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Click to upload</span>
                            </div>
                          )}
                        </div>
                        <Input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleLogoUpload}
                        />
                        <div className="text-sm">
                          {uploadedLogo ? (
                            <div className="flex items-center gap-2 text-green-600">
                              <Check className="h-4 w-4" />
                              Logo uploaded successfully
                            </div>
                          ) : (
                            <div>
                              <p>Upload your logo in PNG or SVG format</p>
                              <p className="text-muted-foreground">For best results, use a transparent background</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Brand Color</Label>
                      <div className="flex gap-4">
                        <Input
                          id="primary-color"
                          type="color"
                          defaultValue="#000000"
                          className="h-10 w-20 cursor-pointer"
                        />
                        <Input type="text" defaultValue="#000000" className="w-32" placeholder="Hex code" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="secondary-color">Secondary Brand Color (Optional)</Label>
                      <div className="flex gap-4">
                        <Input
                          id="secondary-color"
                          type="color"
                          defaultValue="#ffffff"
                          className="h-10 w-20 cursor-pointer"
                        />
                        <Input type="text" defaultValue="#ffffff" className="w-32" placeholder="Hex code" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Back
                    </Button>
                    <Button onClick={handleNextStep}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Step 3: Customize Design</h2>
                    <p className="text-sm text-muted-foreground">Position your logo and customize learning materials</p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Logo Position</Label>
                        <Slider
                          value={[logoPosition]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => setLogoPosition(value[0])}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Left</span>
                          <span>Center</span>
                          <span>Right</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Logo Size</Label>
                        <Slider
                          value={[logoSize]}
                          min={10}
                          max={100}
                          step={1}
                          onValueChange={(value) => setLogoSize(value[0])}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Small</span>
                          <span>Medium</span>
                          <span>Large</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="design-style">Design Style</Label>
                        <Select defaultValue="minimal">
                          <SelectTrigger id="design-style">
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minimal">Minimal</SelectItem>
                            <SelectItem value="bold">Bold & Vibrant</SelectItem>
                            <SelectItem value="elegant">Elegant</SelectItem>
                            <SelectItem value="playful">Playful</SelectItem>
                            <SelectItem value="tech">Tech-inspired</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-text">Additional Text (Optional)</Label>
                        <Input id="additional-text" placeholder="e.g., Thank you for your order!" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-lg border bg-muted/50 p-4">
                      <div className="relative h-64 w-64 bg-background">
                        {uploadedLogo && (
                          <div
                            className="absolute flex items-center justify-center"
                            style={{
                              left: `${logoPosition}%`,
                              top: "50%",
                              transform: `translate(-50%, -50%) scale(${logoSize / 50})`,
                            }}
                          >
                            <Image
                              src={uploadedLogo || "/placeholder.svg"}
                              alt="Positioned logo"
                              width={100}
                              height={100}
                              className="max-h-28 max-w-28 object-contain"
                            />
                          </div>
                        )}
                      </div>
                      <p className="mt-4 text-center text-sm text-muted-foreground">
                        Preview
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Back
                    </Button>
                    <Button onClick={handleNextStep}>
                      Generate AI Documents
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Step 4: AI-Generated Documents</h2>
                    <p className="text-sm text-muted-foreground">
                      Choose AI-generated document options based on your preferences
                    </p>
                  </div>

                  <Tabs defaultValue="design-1" className="space-y-4">
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="design-1">Design 1</TabsTrigger>
                      <TabsTrigger value="design-2">Design 2</TabsTrigger>
                      <TabsTrigger value="design-3">Design 3</TabsTrigger>
                    </TabsList>
                    {["design-1", "design-2", "design-3"].map((design, index) => (
                      <TabsContent key={design} value={design} className="space-y-4">
                        <div className="aspect-video overflow-hidden rounded-lg border">
                          <Image
                            src={`/placeholder.svg?height=400&width=800&text=AI-Generated+Design+${index + 1}`}
                            alt={`AI-generated design ${index + 1}`}
                            width={800}
                            height={400}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="rounded-lg border p-4">
                            <h3 className="font-medium">Front View</h3>
                            <div className="mt-2 aspect-square rounded bg-muted"></div>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h3 className="font-medium">Side View</h3>
                            <div className="mt-2 aspect-square rounded bg-muted"></div>
                          </div>
                          <div className="rounded-lg border p-4">
                            <h3 className="font-medium">Top View</h3>
                            <div className="mt-2 aspect-square rounded bg-muted"></div>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePreviousStep}>
                      Back
                    </Button>
                    <Button>
                      Finalize Design
                      <Check className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Design Summary</h3>
                  <Separator />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Package Type</span>
                    <span className="font-medium">
                      {selectedPackage === "box"
                        ? "Shipping Box"
                        : selectedPackage === "mailer"
                          ? "Poly Mailer"
                          : "Gift Box"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size</span>
                    <span className="font-medium">Medium (10" x 8" x 4")</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium">Standard Corrugated</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity</span>
                    <span className="font-medium">100 units</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Logo</span>
                    <span className="font-medium">{uploadedLogo ? "Uploaded" : "Not uploaded"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Design Style</span>
                    <span className="font-medium">Minimal</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Price</span>
                    <span className="font-medium">$450.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Delivery</span>
                    <span className="font-medium">2-3 weeks</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Step {step} of 4</span>
                      <span>{Math.round((step / 4) * 100)}% Complete</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${(step / 4) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
