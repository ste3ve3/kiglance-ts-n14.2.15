import ReusableStepper from "@/components/Stepper";
import Community from "@/components/stepsComponents/Community";
import CompanySize from "@/components/stepsComponents/CompanySize";
import ProductInterests from "@/components/stepsComponents/ProductInterests";
import Products from "@/components/stepsComponents/Products";
import ProfilePhoto from "@/components/stepsComponents/ProfilePhoto";
import Responsibilties from "@/components/stepsComponents/Responsibilties";
import TargetAudience from "@/components/stepsComponents/TargetAudience";

const Steps = () => {
  return (
    <ReusableStepper
      steps={[
        <Responsibilties />,
        <CompanySize />,
        <TargetAudience />,
        <ProductInterests />,
        <Products />,
        <ProfilePhoto />,
        <Community />,
      ]}
    />
  );
};

export default Steps;
