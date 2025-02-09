"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const languages = [
  { name: "English", code: "en" },
  { name: "हिंदी", code: "hi" },
  { name: "Español", code: "es" },
  { name: "français", code: "fr" },
  { name: "Deutsche", code: "de" },
  { name: "中文", code: "zh" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (languageCode: string) => {
    // Remove the current locale from the pathname if it exists
    const newPathname = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
    
    // Construct the new path with the selected language
    const newPath = `/${languageCode}${newPathname}`;
    
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 