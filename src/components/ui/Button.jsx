/* eslint-disable react/prop-types */
import classes from './Button.module.scss'

export default function Button(props) {
  return <button onClick={props.onClick} className={classes.button}>{props.children}</button>;
}
