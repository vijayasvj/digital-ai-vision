import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Train,
    Bot,
    Receipt,
} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Define product categories with their icons and descriptions
export const products = [
    {
        title: "RBMS",
        icon: Train,
        href: "/products/rbms",
        description: "Rolling Block Management System for Southern Railways",
    },
    {
        title: "ArivuBot",
        icon: Bot,
        href: "/products/arivubot",
        description: "AI-powered chatbot building platform for companies and e-commerce",
    },
    {
        title: "Billzapp",
        icon: Receipt,
        href: "/products/billzapp",
        description: "Billing and inventory management for FMCG suppliers",
    },
];

export function ProductsDropdown() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Check scroll state
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={`text-base font-normal bg-transparent transition-colors ${isScrolled
                            ? 'text-[#135bfb] hover:text-blue-700 data-[state=open]:text-blue-700'
                            : 'text-white hover:text-white/80 data-[state=open]:text-white'
                            }`}
                    >
                        Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white w-[900px] p-6 shadow-lg border border-gray-200 rounded-lg">
                        <div className="grid grid-cols-3 gap-6">
                            {products.map((product) => (
                                <Link
                                    key={product.href}
                                    to={product.href}
                                    className="group block"
                                >
                                    <div className="bg-gradient-to-br from-[#135bfb] to-[#2786ff] rounded-lg p-8 mb-4 flex items-center justify-center h-40 transition-transform group-hover:scale-[1.02] shadow-md">
                                        <product.icon className="h-16 w-16 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-[#135bfb] transition-colors text-lg mb-2">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default ProductsDropdown; 