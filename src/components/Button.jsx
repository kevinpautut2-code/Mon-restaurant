function Button({ children, className, onClick, type }) {
  const classes = 'btn ' + (className ? className : 'btn-primary')
  return (
    <button type={type ? type : 'button'} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
