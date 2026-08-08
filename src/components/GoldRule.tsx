interface GoldRuleProps {
  centered?: boolean;
}

const GoldRule = ({ centered = false }: GoldRuleProps) => (
  <div aria-hidden="true" className={`gold-rule${centered ? " gold-rule--center" : ""}`} />
);

export default GoldRule;
