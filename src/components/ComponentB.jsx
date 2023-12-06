import React from "react";
export const ComponentB = () => {
    console.log('Component B re-rendered');
    return (
        <div>ComponentB</div>
    )
}


export const MemoizedComponentB = React.memo(ComponentB);