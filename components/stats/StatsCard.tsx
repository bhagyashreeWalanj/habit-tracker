// import type React from "react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// interface StatCardProps {
//   title: string;
//   value: string;
//   icon: React.ReactNode;
//   description: string;
// }

// const StatisticCard = ({ title, value, icon, description }: StatCardProps) => {
//   return (
//     <Card>
//       <CardHeader className="flex flex-row items-start justify-between space-y-0 ">
//         <CardTitle className="text-2xl font-medium">{title}</CardTitle>
//         {icon}
//       </CardHeader>
//       <CardContent className="">
//         <div className="text-2xl font-bold">{value}</div>
//         <p className="text-xs text-muted-foreground">{description}</p>
//       </CardContent>
//     </Card>
//   );
// };
// export default StatisticCard;
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Card } from "../ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon,
}) => {
  return (
    <Card className="p-6 animate-fade-in">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>

      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold">{value}</p>
        {subtitle && (
          <p className="ml-2 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </Card>
  );
};

export default StatsCard;
