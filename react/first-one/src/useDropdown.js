import React , {useState} from "react";

const useDropdown = (label , defaultValue , options) => {
    const [state , setState] = useState(defaultValue);
    const id = `use-dropdown- ${label.replace(" ", "").toLowerCase()}`;

    const dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select id={id} value={state} onChange={e => setState(e.target.value)} onBlur={e => setState(e.target.value)}
            disabled={options.length === 0}>
                <option>All</option>
                {options.map(item => (<option key={item} value={item}>{item}</option>))}
            </select>
        </label>
)

return [state , dropdown , setState];
}

export default useDropdown;