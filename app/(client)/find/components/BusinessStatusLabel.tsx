import { Badge } from "@/components/ui/badge";

type BusinessStatusBadgeProps = {
  isOpen?: boolean;
  className?: string;
};

export function BusinessStatusBadge(props: BusinessStatusBadgeProps) {
  const { isOpen, className } = props;

  if (isOpen === true) {
    return <Badge className={className}>Open</Badge>;
  } else if (isOpen === false) {
    return <Badge className={className}>Closed</Badge>;
  }
  // It's possible that the business status is unknown, in which case we don't want to display anything.
  else {
    return null;
  }
}
