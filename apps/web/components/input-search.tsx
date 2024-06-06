import * as React from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Input } from "tao-react";
import { RAW_HEX_CODES } from "~/data/settings";

interface InputSearchProps {
  // Define the props here
}

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>((props, ref) => (
  <div>
    Search component
    <Input
      id="site-search"
      placeholder="Search"
      LeadIcon={<RxMagnifyingGlass size={24} style={{ strokeWidth: 1, color: RAW_HEX_CODES["neutral-cool-gray"] }} />}
      ref={ref}
      {...props}
    />
  </div>
));

InputSearch.displayName = "InputSearch";

export default InputSearch;
