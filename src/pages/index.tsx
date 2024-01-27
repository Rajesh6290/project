import Category from "@/components/home/Category";
import HeroSection from "@/components/home/HeroSection";
import MostPopular from "@/components/home/MostPoular";
import SubCategory from "@/components/home/SubCategory";
import { useTheme } from "@/context/ThemeProvide";
import { PublicLayout } from "@/layouts";

function YourComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <PublicLayout>
      <HeroSection />
      <MostPopular />
      <SubCategory />
      <Category />
    </PublicLayout>
  );
}

export default YourComponent;
