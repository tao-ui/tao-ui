import * as React from "react";
import { RxMagnifyingGlass } from "react-icons/rx"; // Assuming you're using react-icons
import { Input } from "tao-react";

interface InputSearchProps {
  // Define the props here
}

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>((props, ref) => (
  <div>
    Search component
    <Input
      id="site-search"
      placeholder="Search"
      LeadIcon={<RxMagnifyingGlass size={24} style={{ strokeWidth: 1, color: "#7B797F" }} />}
      ref={ref}
      {...props}
    />
  </div>
));

InputSearch.displayName = "InputSearch";

export default InputSearch;
