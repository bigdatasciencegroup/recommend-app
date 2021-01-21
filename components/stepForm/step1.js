export default function Step1() {
  const { currentStep, email, handleChange } = props
  return currentStep !== 1 ? null : (
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={email} // Prop: The email input data
        onChange={handleChange} // Prop: Puts data into state
      />
    </div>
  )
}
