import myStyle from './ComponentB.module.css';
import { useState } from 'react';
const ComponentB = () => {

    const [value, setValue] = useState('');


    const handleChange = (event) => {
        setValue(event.target.value);

        console.log(event.target.value)
    }
    return (
        <div className={myStyle.text}>
            Component B
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quibusdam tenetur quisquam? Nam possimus accusamus porro amet cumque, ex laborum iusto consequuntur quos in, dolor itaque officia quia saepe excepturi, facilis perferendis eaque est odit quas ab nesciunt. Velit dolores mollitia aliquid dolore doloribus possimus rerum magni quia, reiciendis blanditiis!

            <input value={value} onChange={handleChange} placeholder='enter name' />

        </div>
    )
}

export default ComponentB