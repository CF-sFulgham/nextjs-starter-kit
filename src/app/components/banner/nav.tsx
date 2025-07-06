import Link from "next/link";
import { GetProducts } from '../../api/v1/public/products/getProducts';
import { Product } from "../../api/types";
import { SignInButton, SignUpButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { useState, useEffect } from "react";
import { 
    ChevronUp, 
    ChevronDown,
    Fingerprint,
    Database,
    Server,
 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export const Nav = ({ showNav }: { showNav: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [productData, setProductData] = useState<Product[]>([]);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        GetProducts().then(async (data) => {
            const products = await data.json();
            setProductData(products['products']);
        });
    }, []);
   
    return (
        <nav className={ showNav ? "web-mobile-end border-b md:hidden" : "hidden" }>
            <div className="flex items-center gap-4 p-4">
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button className="flex-1 text-white border-0 inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a]" >
                            <span>Sign In</span>
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button className="flex-1 bg-cyan-500 text-white text-md hover:bg-cyan-500">
                            <span>Sign Up</span>
                        </Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <SignOutButton>
                        <Button className="flex-1 bg-cyan-500 text-white text-md hover:bg-cyan-500">
                            <span>Sign Out</span>
                        </Button>
                    </SignOutButton>
                </SignedIn>
            </div>
            <ul>
                <li>
                    <Collapsible
                        open={isOpen}
                        onOpenChange={toggleMenu}
                        className="flex flex-col gap-2"
                        >
                        <div className={ isOpen ? 
                            "flex items-center justify-between gap-4 px-4 bg-[#9397993a] rounded-md" : 
                            "flex items-center justify-between gap-4 px-4" }>
                            <Link href="/products">
                                <h4 className="antialiased font-bold text-cyan-500">
                                    Products
                                </h4>
                            </Link>
                            <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8">
                                {isOpen ? <ChevronUp /> : <ChevronDown />}
                                <span className="sr-only">Toggle</span>
                            </Button>
                            </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="flex flex-col gap-2">
                            {productData.map((product, idx) => {
                                if (idx < 3) {
                                    return (
                                        <div key={product.id} className="group flex items-center gap-4 p-4">
                                            <Button 
                                                className="text-white border-0 inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a] size-15"
                                                onClick={toggleMenu}
                                                variant="secondary"
                                            >
                                                {(() => {
                                                    switch (product.icon.toLowerCase()) {
                                                        case "fingerprint":
                                                            return <Fingerprint className="stroke-2 text-cyan-500" />;
                                                        case "database":
                                                            return <Database className="stroke-2 text-cyan-500" />;
                                                        case "server":
                                                            return <Server className="stroke-2 text-cyan-500" />;
                                                    }
                                                })()}
                                            </Button>
                                            <div className="text-sm">
                                                <span className="text-sub-body text-primary font-bold"> {product.name} </span>
                                                <p className="text-caption text-pretty text-gray-300">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </CollapsibleContent>
                    </Collapsible>
                </li>
                <li className="px-4 pb-2 pt-1">
                    <h4 className="antialiased font-bold text-cyan-500">
                        How It Works
                    </h4>
                </li>
                <li className="px-4 pb-2">
                    <h4 className="antialiased font-bold text-cyan-500">
                        Pricing
                    </h4>
                </li>
                <li className="px-4 pb-4">
                    <h4 className="antialiased font-bold text-cyan-500">
                        Contact
                    </h4>
                </li>
            </ul>
            
        </nav>
    );
}