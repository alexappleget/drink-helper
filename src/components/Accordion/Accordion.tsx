import {
  AccordionBody,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./AccordionCode";

export const Accordion = ({
  name,
  directions,
}: {
  name: string;
  directions: string | JSX.Element;
}) => {
  return (
    <AccordionBody type="single" collapsible className="w-3/4">
      <AccordionItem value="item-1">
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent>{directions}</AccordionContent>
      </AccordionItem>
    </AccordionBody>
  );
};
