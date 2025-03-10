import { useState, useEffect } from 'react';
import TimeHook from './TimeHook';

const MyComponent = () => {
    const [selectedValue, setSelectedValue] = useState('');

    // تابع برای مدیریت تغییرات select
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // useEffect برای نظارت بر تغییرات selectedValue
    useEffect(() => {
        console.log('Selected value changed:', selectedValue);

        // اینجا می‌توانید کارهایی انجام دهید
    }, [selectedValue]);

    return (
        <div className="bg-green-800 bg-origin-content hover:bg-cyan-600 p-4 border-4 border-dashed  hover:bg-origin-padding">
            <select onChange={handleChange}>
                <option value="">انتخاب کنید</option>
                <option value="option1">گزینه 1</option>
                <option value="option2">گزینه 2</option>
            </select>
            <button className="bg-blue-500 md:bg-green-500 ...">Subscribe</button>
            {/* نمایش کامپونت بر اساس selectedValue */}
            {selectedValue === 'option1' && <ComponentA />}
            {selectedValue === 'option2' && <ComponentB />}
            <TimeHook/>
        </div>
    );
};

const ComponentA = () => {
    return <div>کامپوننت A</div>;
};

const ComponentB = () => {
    return <div>کامپوننت B</div>;
};

export default MyComponent;