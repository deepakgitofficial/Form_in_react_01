import React from 'react'

export const SelectField = ({ id, name, label, value, onChangeFun, error, errClass }) => {
    const categroyOption = ['grocery', 'clothes', 'bills', 'education', 'medicine']
    // console.log(value)
    return (
        <>
            <div className="input-container">
                <label htmlFor={id}>{label}</label>
                <select id={id} name={name} onChange={onChangeFun} value={value}>
                    <option value="" hidden>
                        Select Category
                    </option>
                    {categroyOption.map((el, i) => {
                        return (
                            <option key={i} value={el}>{el}</option>
                        )
                    })}
                </select>
                <p className={errClass}>{error}</p>
            </div>
        </>
    )
}
