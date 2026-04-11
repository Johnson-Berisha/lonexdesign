export default function Input() {
    return <div>
        <label htmlFor="input" style={{ display: 'block', marginBottom: '0.5rem' }}>Input Label</label>
        <input id="input" type="text" placeholder="Enter text..." style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }} />
    </div>
}