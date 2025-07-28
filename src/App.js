import React from "react";
import Counter from "./usestate/Counter";
import Text from "./usestate/Text";
import MultipleStates from "./usestate/MultipleStates";
import Toggle from "./usestate/Toggle";
import Checkbox from "./usestate/Checkbox";
  function button(){
    return(

      <div className="h-full w-full bg-red-600">
        <Counter/>
        <Text/>
        <Toggle/>
        <MultipleStates/>
        <Checkbox/>
      </div>
    )
  }
  export default button