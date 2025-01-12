import { useState, useEffect } from 'react';

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
        <div>
            <select onChange={handleChange}>
                <option value="">انتخاب کنید</option>
                <option value="option1">گزینه 1</option>
                <option value="option2">گزینه 2</option>
            </select>

            {/* نمایش کامپونت بر اساس selectedValue */}
            {selectedValue === 'option1' && <ComponentA />}
            {selectedValue === 'option2' && <ComponentB />}
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