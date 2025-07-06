import Link from "next/link";
import { useState } from "react";
import { 
    ChevronUp, 
    ChevronDown,
    Fingerprint,
    Database,
    Server,
    ChevronsLeftRightEllipsis,
    Rabbit,
    MessagesSquare,
    Globe
 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export const Nav = ({ showNav }: { showNav: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={ showNav ? "web-mobile-end border-b md:hidden" : "hidden" }>
            <div className="flex items-center gap-4 p-4">
                <Button className="flex-1 text-white border-0 inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a]" >
                    <span>Sign In</span>
                </Button>
                <Button className="flex-1 bg-cyan-500 text-white text-md hover:bg-cyan-500">
                    <span>Start Learning</span>
                </Button>
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
                            <div className="group flex items-center gap-4 p-4">
                                <Button 
                                    className="text-white border-0 inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a] size-15"
                                    onClick={toggleMenu}
                                    variant="secondary"
                                    >
                                    <Fingerprint className="stroke-2 text-cyan-500"/>
                                </Button>
                                <div className="text-sm">
                                    <span className="text-sub-body text-primary font-bold"> Auth </span>
                                    <p className="text-caption text-pretty text-gray-300">
                                        Authentication and authorization services for your applications.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-4 p-4">
                                <Button 
                                    className="text-white border-0 inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a] size-15"
                                    onClick={toggleMenu}
                                    variant="secondary"
                                    >
                                    <Database className="stroke-2 text-cyan-500"/>
                                </Button>
                                <div className="text-sm">
                                    <span className="text-sub-body text-primary font-bold"> Database </span>
                                    <p className="text-caption text-pretty text-gray-300">
                                        Scalable and secure database solutions for your data storage needs.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-4 p-4">
                                <Button 
                                    className="text-white border-0 inset-ring-cyan-500 inset-ring-1 text-md bg-[#00b7eb2a] hover:bg-[#00b7eb2a] size-15"
                                    onClick={toggleMenu}
                                    variant="secondary"
                                    >
                                    <Server className="stroke-2 text-cyan-500"/>
                                </Button>
                                <div className="text-sm">
                                    <span className="text-sub-body text-primary font-bold"> Storage </span>
                                    <p className="text-caption text-pretty text-gray-300">
                                        Scalable and secure database solutions for your data storage needs.
                                    </p>
                                </div>
                            </div>
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