import { useRef } from 'react';

const ComponentA = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            Component A
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quibusdam tenetur quisquam? Nam possimus accusamus porro amet cumque, ex laborum iusto consequuntur quos in, dolor itaque officia quia saepe excepturi, facilis perferendis eaque est odit quas ab nesciunt. Velit dolores mollitia aliquid dolore doloribus possimus rerum magni quia, reiciendis blanditiis!
            <input type='text' placeholder='enter name' ref={inputRef} />
            <button onClick={handleClick}>Submit</button>

        </div>
    )
}

export default ComponentA